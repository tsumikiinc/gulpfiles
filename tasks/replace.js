var gulp = require('gulp');
var replace = require('gulp-replace');
var CONFIG = require('../package.json').projectConfig;

gulp.task('replace-min', function() {
  return gulp.src(CONFIG.DST + CONFIG.PATH + '/index.html')
          .pipe(
            replace('main.js', 'main.min.js?v' + (Date.now()))
          )
          .pipe(
            replace('index.css', 'index.min.css?v' + (Date.now()))
          )
          .pipe(gulp.dest(CONFIG.BUILD + CONFIG.PATH));
});
