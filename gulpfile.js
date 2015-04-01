var gulp = require('gulp');
var browserSync = require('browser-sync');
var sequence = require('gulp-sequence');
var requireDir = require('require-dir');
var CONFIG = require('./package.json').projectConfig;

requireDir('./tasks');

reload = browserSync.reload;

// ローカルサーバ
gulp.task('serve', function() {
  return browserSync({
    notify: false,
    startPath: CONFIG.PATH,
    server: {
      baseDir: './',
      index: CONFIG.DST + CONFIG.PATH + '/',
      routes: (
        var obj = {},
        obj['' + CONFIG.PATH] = '' + CONFIG.DST + CONFIG.PATH + '/',
        obj
      )
    }
  });
});

// 'default' タスク実行前に処理しておきたいタスク
gulp.task('start', sequence([
  'jade',
  'stylus'/* or 'sass' */,
  'browserify'
], 'serve'));

// 作業開始
// ファイルの変更監視で対象タスク実行とブラウザのオートリロード
gulp.task('default', ['start'], function() {
  gulp.watch(['./' + CONFIG.SRC + '/**/*.coffee'], ['browserify', reload]);
  gulp.watch(['./' + CONFIG.SRC + '/**/*.jade'], ['jade', reload]);
  gulp.watch(['./' + CONFIG.SRC + '/**/*.styl'], ['stylus', reload]);
  gulp.watch(['./' + CONFIG.SRC + '/**/*.{scss,sass}'], ['sass', reload]);
});

// ビルド
// 適宜変更
// sequence　で並列処理と直列処理を区別
gulp.task('build', sequence(
  'clean',
  [
    'jade',
    'stylus'
  ],
  'copy',
  [
    'replace-min',
    'minify-css',
    'browserify',
    'imagemin'
  ],
  'uglify'
));
