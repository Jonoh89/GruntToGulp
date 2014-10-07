var gulp = require('gulp'),
    del = require('del'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var files = {
    myScripts: ['*.js', '!jquery*'],
    projectScripts: ['*.js', '!*file.js']
};

gulp.task('clean', function (cb) {
    del('dist', cb);
});

gulp.task('lint', function () {
    return gulp.src(files.myScripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('scripts', ['lint', 'clean'], function () {
    return gulp.src(files.projectScripts)
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['lint', 'clean', 'scripts']);