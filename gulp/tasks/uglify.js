import gulp from 'gulp';

import { uglify, rename } from '../plugins';
import { uglify as conf } from '../conf';

gulp.task('uglify', () => {
  return gulp.src(conf.src)
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(conf.dest));
});
