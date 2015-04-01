var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var CONFIG = require('../package.json').projectConfig;

var path = {
  img: [
    CONFIG.DST + CONFIG.PATH + '/**/*.{jpg,jpeg,png,gif,svg}'
  ]
};

gulp.task('imagemin', function() {
  return gulp.src(path.img).pipe(imagemin({
    progressive: true,
    svgoPlugins: [
      {
        removeViewBox: false
      }
    ],
    use: [pngquant()]
  })).pipe(gulp.dest(CONFIG.BUILD + CONFIG.PATH + '/img'));
});
