// todo
import gulp from 'gulp';

import { replace } from '../plugins';
import { replace as conf } from '../conf';

gulp.task('replace', () => {
  return gulp.src(conf.src)
    .pipe(replace(conf.replacements[0][0], conf.replacements[0][1]))
    .pipe(replace(conf.replacements[1][0], conf.replacements[1][1]))
    .pipe(gulp.dest(conf.dest));
});
