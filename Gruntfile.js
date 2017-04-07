module.exports = function(grunt) {

  //Project configuration.
  grunt.initConfig({

  uglify: {
    my_target: {
      files: {
        'dest/output.js': ['src/*.js']
             // dest目的 : src 來源
      }
    }
  }
  });

  //Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  // grunt.registerTask('default', ['uglify']);


};
