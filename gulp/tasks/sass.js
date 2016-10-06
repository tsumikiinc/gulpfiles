import gulp from 'gulp';

import { sass } from '../plugins';
import { sass as conf } from '../conf';

gulp.task('sass', () => {
  return gulp.src(conf.src)
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(gulp.dest(conf.dest));
});
