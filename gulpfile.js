const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const DIR = require('./gulp/conf').DIR;

requireDir('./gulp/tasks');

// 'default' タスク実行前に処理しておきたいタスク
gulp.task('predefault', cb => {
  runSequence(
    ['jade', 'stylus', 'sass', 'watchify'],
    'serve',
    cb
  );
});

// ファイルの変更監視で対象タスク実行とブラウザのオートリロード
gulp.task('default', ['predefault'], () => {
  gulp.watch(
    [`./${DIR.SRC}/**/*.jade`],
    ['jade', reload]
  );

  gulp.watch(
    [`./${DIR.SRC}/**/*.styl`],
    ['stylus', reload]
  );
  // または ↓
  // gulp.watch(
  //   [`./${DIR.SRC}/**/*.{scss,sass}`],
  //   ['sass', reload]
  // );

  gulp.watch(
    [`./${DIR.DEST}/**/*.js`],
    reload
  );
});

// ビルド 適宜変更
gulp.task('build', cb => {
  runSequence(
    'clean',
    ['jade', 'stylus', 'sass'],
    'copy',
    ['minify-css', 'browserify', 'imagemin'],
    'uglify',
    cb
  );
});
