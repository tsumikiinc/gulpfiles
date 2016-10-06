import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
import { reload } from 'browser-sync';

import { D } from './gulp/conf';

requireDir('./gulp/tasks');

// 'default' タスク実行前に処理しておきたいタスク
gulp.task('predefault', cb => {
  runSequence(
    ['pug', 'sass', 'watchify'],
    'serve',
    cb
  );
});

// ファイルの変更監視で対象タスク実行とブラウザのオートリロード
gulp.task('default', ['predefault'], () => {
  gulp.watch(
    [`./${D.SRC}/**/*.pug`],
    ['pug', reload]
  );
  gulp.watch(
    [`./${D.SRC}/**/*.{scss,sass}`],
    ['sass', reload]
  );
  gulp.watch(
    [`./${D.DEST}/**/*.js`],
    reload
  );
});

// ビルド 適宜変更
gulp.task('build', cb => {
  runSequence(
    'clean',
    ['pug', 'sass'],
    ['replace', 'minify-css', 'browserify', 'imagemin'],
    'uglify',
    cb
  );
});
