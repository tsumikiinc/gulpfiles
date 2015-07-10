import gulp from 'gulp';

import { copy as conf } from '../conf';

gulp.task('copy', () => {
  return gulp.src(conf.src)
    .pipe(gulp.dest(conf.dest));
});
