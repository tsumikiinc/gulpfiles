var gulp = require('gulp');
var ect = require('ect');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var CONFIG = require('../package.json').projectConfig;

var path = [
  CONFIG.SRC + '/**/*.ect',
  '!' + CONFIG.SRC + '/**/_**/*.ect',
  '!' + CONFIG.SRC + '/**/_*.ect'
];

gulp.task('ect', function() {
  return gulp.src(path)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(ect())
    .pipe(gulp.dest(CONFIG.DST + CONFIG.PATH, {
      cwd: './'
    }));
});
