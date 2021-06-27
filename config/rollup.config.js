import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
const postcssConfig = require('./postcss.config')
import pkg from '../package.json'
import progress from 'rollup-plugin-progress'
import image from '@rollup/plugin-image'
import filesize from 'rollup-plugin-filesize'

export default (name, env) => {
  const isEntry = name === pkg.ui
  const isDev = env === 'dev'
  const root = isEntry ? './src/' : './src/components/'
  const input = isEntry ? `${root}index.js` : `${root}${name}/index.js`
  const outputRoot = isEntry ? './' : `./src/components/${name}/`
  const postcssPlugins = postcssConfig(isDev).plugins
  const formats = ['umd']
  let output = []
  const ext = isDev ? '' : '.min'
  formats.forEach(fmt => {
    const dir = isEntry ? isDev ? `dist/${pkg.name}${ext}.js` : `dist/${fmt}/${pkg.name}${ext}.js` : `dist/${fmt}/${name}${ext}.js`
    output.push({
      file: `${outputRoot}${dir}`,
      format: fmt,
      name
    })
  })
  return {
    input,
    output,
    plugins: [
      json(),
      resolve(),
      vue({
        css: false,
        compileTemplate: true,
        preprocessStyles: (res) => {
          console.log(res)
        }
      }),
      postcss({
        extract: true,
        plugins: postcssPlugins
      }),
      image(),
      !isDev && filesize(),
      !isDev && progress({
        clearLine: false
      }),
      !isDev && terser()
    ],
    external: [
      'vue'
    ]
  }
}