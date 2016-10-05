import gulp from 'gulp';

import { plumber, notify, pug, rename } from '../plugins';
import { pug as conf } from '../conf';

gulp.task('pug', () => {
  return gulp.src(conf.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(pug(conf.opts))
    .pipe(rename(path => {
      path.dirname = path.dirname.replace('html', '.');
    }))
    .pipe(gulp.dest(conf.dest));
});
