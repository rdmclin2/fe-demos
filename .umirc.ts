import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Front End Demos',
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'pnpm',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: [
    [
      'babel-plugin-styled-components',
      {
        minify: true,
        transpileTemplateLiterals: true,
        displayName: process.env.NODE_ENV === 'development',
        pure: true,
      },
    ],
  ],
});
