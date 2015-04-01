var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var CONFIG = require('../package.json').projectConfig;

var path = {
  css: [
    CONFIG.SRC + '/**/*.styl',
    '!' + CONFIG.SRC + '/**/_**/*.styl',
    '!' + CONFIG.SRC + '/**/_*.styl'
  ]
};

gulp.task('stylus', function() {
  return gulp.src(path.css)
          .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>')
          }))
          .pipe(stylus({
            use: nib(),
            compress: true
          }))
          .pipe(gulp.dest(CONFIG.DST + CONFIG.PATH + '/css', {
            cwd: './'
          }));
});
