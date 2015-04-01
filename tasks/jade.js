var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var CONFIG = require('../package.json').projectConfig;

var path = {
  html: [
    CONFIG.SRC + '/**/*.jade',
    '!' + CONFIG.SRC + '/**/_**/*.jade',
    '!' + CONFIG.SRC + '/**/_*.jade'
  ]
};

gulp.task('jade', function() {
  return gulp.src(path.html).pipe(plumber({
    errorHandler: notify.onError('<%= error.message %>')
  })).pipe(jade({
    pretty: true
  })).pipe(gulp.dest(CONFIG.DST + CONFIG.PATH, {
    cwd: './'
  }));
});
