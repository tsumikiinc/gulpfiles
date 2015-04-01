var gulp = require('gulp');
var del = require('del');
var CONFIG = require('../package.json').projectConfig;

gulp.task('clean', function(cb) {
  return del([CONFIG.BUILD + CONFIG.PATH], cb);
});
