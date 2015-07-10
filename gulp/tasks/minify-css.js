import gulp from 'gulp';

import { minifyCss, rename } from '../plugins';
import { minifyCss as conf } from '../conf';

gulp.task('minify-css', () => {
  return gulp.src(conf.src)
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(conf.dest));
});
