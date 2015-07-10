import gulp from 'gulp';

import { rubySass } from '../plugins';
import { sass as conf } from '../conf';

gulp.task('sass', function() {
  return rubySass(conf.src, {style: 'compressed'})
    .pipe(gulp.dest(conf.dest));
});
