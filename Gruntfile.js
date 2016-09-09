module.exports = function(grunt) {
  grunt.initConfig({
    wiredep: {
      target: {
        src: 'index.html'
      }
    },
    browserSync: {
      dev:{
        bsFiles: {
          src: [
          '**/*.html',
          '**/*.css',
          '**/*.js' 
          ]
        },
        options: {
          server: {
            baseDir: './'
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['wiredep', 'browserSync']);
};