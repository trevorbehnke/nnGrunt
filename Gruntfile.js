module.exports = function(grunt) {
    // Configuration
    grunt.initConfig({
        // pass in options to plugins, references to files etc...
        concat: {
            js: {
                src: 'js/*.js',
                dest: 'build/scripts.js',
            },
            css: {
                src: 'css/*.css',
                dest: 'build/styles.css',
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);
}