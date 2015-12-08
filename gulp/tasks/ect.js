const gulp = require('gulp');

const $ = require('../plugins');
const conf = require('../conf').ect;

gulp.task('ect', () => {
  return gulp.src(conf.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe($.ect())
    .pipe($.rename(path => {
      path.dirname = path.dirname.replace('html', '.');
    }))
    .pipe(gulp.dest(conf.dest));
});
