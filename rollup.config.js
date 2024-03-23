import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.build.json' }), terser()],
    external: ['react', 'react-dom', 'react-jss'],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/components/index.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.build.json' }), terser()],
    external: ['react', 'react-dom', 'react-jss'],
  },
  {
    input: 'src/hooks/index.ts',
    output: [
      {
        file: 'dist/hooks/index.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.build.json' }), terser()],
    external: ['react', 'react-dom', 'react-jss'],
  },
  {
    input: 'src/utils/index.ts',
    output: [
      {
        file: 'dist/utils/index.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.build.json' }), terser()],
    external: ['react', 'react-dom', 'react-jss'],
  },
  {
    input: 'src/icons/index.tsx',
    output: [
      {
        file: 'dist/icons/index.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.build.json' }), terser()],
    external: ['react', 'react-dom', 'react-jss'],
  },
  {
    input: 'src/styles/index.ts',
    output: [
      {
        file: 'dist/styles/index.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.build.json' }), terser()],
    external: ['react', 'react-dom', 'react-jss'],
  },
];
