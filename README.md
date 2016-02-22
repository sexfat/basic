# basic

Minify javascript files with UglifyJS

>npm install grunt-contrib-uglify --save-dev

<pre><code>

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    uglify: {
    my_target: {
      files: {
        'dest/output.js': ['src/*.js']
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};




</code></pre>
