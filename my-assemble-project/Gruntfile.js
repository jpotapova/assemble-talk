module.exports = function(grunt) {

  grunt.initConfig({
    assemble: {
      pages: {
        options: {
          flatten: true,
          layout: 'src/layouts/main.hbs',
          partials: 'src/components/*.hbs'
        },
        files: {
          'result/': ['src/pages/index.hbs', 'src/pages/article*.hbs']
        }
      },
      account: {
        options: {
          flatten: true,
          layout: 'src/layouts/account.hbs',
          partials: 'src/components/*.hbs'
        },
        files: {
          'result/': ['src/pages/signin.hbs', 'src/pages/register.hbs']
        }
      }
    }
  });

  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['assemble']);

};
