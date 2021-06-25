import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
const postcssConfig = require('./postcss.config')
import pkg from './package.json'
import preImport from 'postcss-prepend-imports'
import cssnano from 'cssnano'
import progress from 'rollup-plugin-progress'
import image from '@rollup/plugin-image'

const env = process.env.ENV
const isDev = env === 'development'
if (!isDev) {
  postcssConfig.plugins.push(cssnano())
}

postcssConfig.plugins.forEach((plugin, i) => {
  if (plugin.postcssPlugin === 'postcss-prepend-imports') {
    postcssConfig.plugins[i] = preImport({
      path: `./src/themes/${pkg.theme}`,
      files: ['variable.css']
    })
  }
})

export default {
  input: './index.js',
  output: [{
    exports: "auto",
    file: `dist/${pkg.name}.cjs.js`,
    format: 'cjs'
  }, {
    exports: "auto",
    file: `dist/${pkg.name}.es.js`,
    format: 'es'
  }, {
    file: `dist/${pkg.name}.js`,
    format: 'umd',
    name: `MUI`
  }],
  plugins: [
    json(),
    resolve(),
    vue({
      css: false,
      compileTemplate: true
    }),
    postcss({
      extract: true,
      plugins: postcssConfig.plugins
    }),
    !isDev && terser(),
    progress({
      clearLine: true
    }),
    image()
  ],
  external: [
    'vue'
  ]
}