import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import url from '@rollup/plugin-url';
import typescriptPaths from "rollup-plugin-typescript-paths";

export default {
  // for creating npm package
  // input: "src/toast-lib.ts",
  input: "src/index.tsx",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  // for creating npm package
  // output: [
  //   {
  //     file: "dist/index.js",
  //     format: "cjs",
  //   },
  //   {
  //     file: "dist/index.es.js",
  //     format: "es",
  //     exports: "named",
  //   },
  // ],
  plugins: [
    url(),
    image(),
    postcss({
      extensions: [".css"],
    }),
    external(),
    nodeResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    commonjs(),
    typescript(),
    typescriptPaths(),
    terser(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ],
  // for creating npm package
  // external: [
  //   'react',
  //   'react-dom'
  // ]
};