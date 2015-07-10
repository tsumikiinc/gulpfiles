// 設定ファイル
// 対象パスやオプションを指定

const D = {
  PATH: '/path/to/root',
  SRC: 'src',
  DEST: 'dst',
  BUILD: 'build'
};

export default {
  D: D,

  serve: {
    notify: false,
    startPath: D.PATH,
    server: {
      baseDir: './',
      index: `${D.DEST}${D.PATH}/`,
      routes: (() => {
        let obj = {};
        obj[D.PATH] = `${D.DEST}${D.PATH}/`;
        return obj;
      })()
    }
  },

  scripts: {
    common: '',
    entryFiles: [
      `./${D.SRC}/js/main.js`//,
      // `./${D.SRC}/js/sub.coffee`
    ],
    browserifyOpts: {
      extensions: ['.coffee'],
      transform: ['babelify', 'coffeeify']
    },
    dest: `${D.DEST}${D.PATH}/js`
  },

  uglify: {
    src: `./${D.DEST}${D.PATH}/js/main.js`,
    dest: `${D.BUILD}${D.PATH}/js`
  },

  jade: {
    src: [
      `${D.SRC}/**/*.jade`,
      `!${D.SRC}/**/_**/*.jade`,
      `!${D.SRC}/**/_*.jade`
    ],
    dest: `${D.DEST}${D.PATH}`
  },

  ect: {
    src: [
      `${D.SRC}/**/*.ect`,
      `!${D.SRC}/**/_**/*.ect`,
      `!${D.SRC}/**/_*.ect`
    ],
    dest: `${D.DEST}${D.PATH}`
  },

  stylus: {
    src: [
      `${D.SRC}/**/*.styl`,
      `!${D.SRC}/**/_**/*.styl`,
      `!${D.SRC}/**/_*.styl`
    ],
    dest: `${D.DEST}${D.PATH}/css`
  },

  sass: {
    src: [
      `${D.SRC}/**/*.{sass,scss}`,
      `!${D.SRC}/**/_**/*.{sass,scss}`,
      `!${D.SRC}/**/_*.{sass,scss}`
    ],
    dest: `${D.DEST}${D.PATH}/css`
  },

  minifyCss: {
    src: `${D.DEST}${D.PATH}/css/main.css`,
    dest: `${D.BUILD}${D.PATH}/css`
  },

  imagemin: {
    src: [
      `${D.DEST}${D.PATH}/**/*.{jpg,jpeg,png,gif,svg}`
    ],
    dest: `${D.BUILD}${D.PATH}/img`
  },

  clean: {
    path: [`${D.BUILD}${D.PATH}`]
  },

  replace: {
    src: `${D.DEST}${D.PATH}/index.html`,
    dest: `${D.BUILD}${D.PATH}`,
    replacements: [
      ['main.js?v', `main.min.js?v${Date.now()}`],
      ['main.css?v', `main.min.css?v${Date.now()}`]
    ]
  },

  copy: {
    src: [
      `${D.DEST}/**`,
      `!${D.DEST}/css/**`,
      `!${D.DEST}/js/**`,
      `!${D.DEST}/img/**`
    ],
    dest: D.BUILD
  }
}