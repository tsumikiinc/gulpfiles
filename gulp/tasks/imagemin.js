import gulp from 'gulp';
import pngquant from 'imagemin-pngquant';

import { imagemin, rename } from '../plugins';
import { imagemin as conf } from '../conf';

gulp.task('imagemin', () => {
  return gulp.src(conf.src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(rename(path => {
      path.dirname = path.dirname.replace('img', '.');
    }))
    .pipe(gulp.dest(conf.dest));
});
