import gulp from 'gulp';

import { plumber, notify, ect, rename } from '../plugins';
import { ect as conf } from '../conf';

gulp.task('ect', function() {
  return gulp.src(conf.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(ect())
    .pipe(rename(path => {
      path.dirname = path.dirname.replace('html', '.');
    }))
    .pipe(gulp.dest(conf.dest));
});
