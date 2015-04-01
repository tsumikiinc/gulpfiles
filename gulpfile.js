var gulp = require('gulp');
var browserSync = require('browser-sync');
var sequence = require('gulp-sequence');
var requireDir = require('require-dir');
var CONFIG = require('./package.json').projectConfig;

requireDir('./tasks');

reload = browserSync.reload;

gulp.task('serve', function() {
  return browserSync({
    notify: false,
    startPath: CONFIG.PATH,
    server: {
      baseDir: './',
      index: CONFIG.DST + CONFIG.PATH + '/',
      routes: (
        var obj = {},
        obj['' + CONFIG.PATH] = '' + CONFIG.DST + CONFIG.PATH + '/',
        obj
      )
    }
  });
});

gulp.task('start', sequence(['jade', 'stylus'], ['browserify'], 'serve'));

gulp.task('default', ['start'], function() {
  gulp.watch(['./' + CONFIG.SRC + '/**/*.coffee'], ['browserify', reload]);
  gulp.watch(['./' + CONFIG.SRC + '/**/*.jade'], ['jade', reload]);
  gulp.watch(['./' + CONFIG.SRC + '/**/*.styl'], ['stylus', reload]);
});

gulp.task('build', sequence('clean', ['jade', 'stylus'], 'copy', ['replace-min', 'minify-css-jp', 'minify-css', 'browserify', 'imagemin'], 'uglify'));
