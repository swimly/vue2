const functions = require('../src/utils/postcss.function.js')
const pkg = require('../package.json')
module.exports = (isDev) => {
  return {
    plugins: [
      require('postcss-prepend-imports')({
        path: `./src/themes/${pkg.theme}`,
        files: ['variable.css']
      }),
      pkg.entry === 'main' && require('postcss-modules')(),
      require('postcss-import')(),
      require('postcss-nested')(),
      pkg.px2rem && require('postcss-pxtorem')({
        rootValue: 20,
        propList: ['*', '!border'],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
        exclude: /node_modules/i
      }),
      require('postcss-color-mod-function')(),
      require('autoprefixer')({
        overrideBrowserslist: pkg.browserslist
      }),
      require('postcss-functions')({
        functions
      }),
      require('postcss-simple-vars')(),
      !isDev && require('cssnano')
    ]
  }
}