// stylus with nib
const gulp = require('gulp');
const nib = require('nib');

const $ = require('../plugins');
const conf = require('../conf').stylus;

gulp.task('stylus', () => {
  return gulp.src(conf.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe($.stylus({
      use: nib(),
      compress: true
    }))
    .pipe($.rename({
      dirname: './'
    }))
    .pipe(gulp.dest(conf.dest, {
      cwd: './'
    }));
});
