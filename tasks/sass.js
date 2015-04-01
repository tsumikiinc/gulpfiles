var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var CONFIG = require('../package.json').projectConfig;

var path = [
  CONFIG.SRC + '/**/*.{scss,sass}',
  '!' + CONFIG.SRC + '/**/_**/*.{scss,sass}',
  '!' + CONFIG.SRC + '/**/_*.{scss,sass}'
];

gulp.task('sass', function() {
  return sass(path, {
    style: 'compressed'
  })
    .pipe(gulp.dest(CONFIG.DST + CONFIG.PATH + '/css', {
      cwd: './'
    }));
});
