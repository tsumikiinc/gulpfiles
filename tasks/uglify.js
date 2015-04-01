var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var CONFIG = require('../package.json').projectConfig;

gulp.task('uglify', function() {
  return gulp.src('./' + CONFIG.DST + CONFIG.PATH + '/js/main.js')
          .pipe(uglify({
            preserveComments: 'some'
          }))
          .pipe(rename({
            suffix: '.min'
          }))
          .pipe(gulp.dest(CONFIG.BUILD + CONFIG.PATH + '/js'));
});
