import gulp from 'gulp';

import { plumber, notify, jade, rename } from '../plugins';
import { jade as conf } from '../conf';

gulp.task('jade', () => {
  return gulp.src(conf.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(jade(/*{
      pretty: true
    }*/))
    .pipe(rename(path => {
      path.dirname = path.dirname.replace('html', '.');
    }))
    .pipe(gulp.dest(conf.dest));
});
