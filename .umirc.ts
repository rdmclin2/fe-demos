import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Front End Demos',
  npmClient: 'pnpm',
  define: {
    'process.env': process.env,
  },
  mfsu: false,
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
