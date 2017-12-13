module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    autoprefixer: {
      dist: {
        options: {
          map: true
        },
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    },

    watch: {
      scripts: {
          files: ['sass/*.sass', 'css/*.css'],
          tasks: ['sass', 'autoprefixer'],
          options: {
              spawn: false,
          },
      }
    },

    browserSync: {
        bsFiles: {
            src : ['*.html', 'sass/*.sass', 'css/*.css', 'js/*.js']
        },
        options: {
            server: {
                baseDir: ["sass/", "", "css/", "js/"]
            },
            watchTask: true
        }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'build/'
        }]
      }
    },

    jshint: {
      all: ['workspace/js/*.js']
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'browserSync', 'watch', 'autoprefixer', 'imagemin']);
  grunt.registerTask('hint', ['jshint']);
};