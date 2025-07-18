import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  input: 'src/index.js',
  output: {
    file: 'dist/qastro.min.js',
    format: 'umd',
    name: 'QAstro',
    sourcemap: true,
    exports: 'named'
  },
  plugins: [resolve()],
});
