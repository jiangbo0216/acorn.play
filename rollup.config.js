import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'


export default {
  input: 'index.js',
  format: 'iife',
  output: {
    file:'./dist/index.js',
    format: 'iife'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs()
  ]
}