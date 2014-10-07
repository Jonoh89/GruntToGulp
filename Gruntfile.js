module.exports = function(grunt) {

    grunt.initConfig({
        files: {
            scripts: '*.js'
        },
        clean: ['dist'],
        jshint: {
            files: ['<%= files.scripts %>', '!jquery*']
        },
        concat: {
            dist: {
                src: ['<%= files.scripts %>', '!*file.js'],
                dest: 'dist/index.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= concat.dist.dest %>.min.js' : ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    grunt.registerTask('default', ['jshint','clean', 'concat', 'uglify']);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
};