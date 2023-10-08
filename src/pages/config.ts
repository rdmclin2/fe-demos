interface Demo {
  article?: string;
  code?: string;
  description?: string;
  link: string;
  title: string;
}

interface Config {
  demos: Demo[];
  title: string;
}

const config: Config[] = [
  {
    demos: [
      {
        article: 'https://juejin.cn/post/7252852022683631676',
        code: 'https://github.com/rdmclin2/fe-demos/blob/master/src/pages/demos/SpeechRecognition/index.tsx',
        description: '使用浏览器提供的 SpeechRecognition 实现语音识别功能',
        link: `${window.location.origin}/demos/SpeechRecognition`,
        title: 'Demo: 语音识别',
      },
    ],
    title: '浏览器 API',
  },
  {
    demos: [
      {
        article: 'https://juejin.cn/post/7252852022683631676',
        code: 'https://github.com/rdmclin2/fe-demos/blob/master/src/pages/demos/leva/index.tsx',
        description: 'Leva 是一套 GUI 组件库，可用于快速开发控制面板',
        link: `${window.location.origin}/demos/leva`,
        title: 'Leva GUI 组件库',
      },
      {
        article: '',
        code: 'https://github.com/rdmclin2/fe-demos/blob/master/src/pages/demos/handsontable/index.tsx',
        description: 'Handsontable 是一套交叉表实现，可实现类 Excel 效果',
        path: '/demos/handsontable',
        title: 'Handsontable 表格库',
      },
    ],
    title: '前端组件库',
  },
  {
    demos: [
      {
        article: '',
        code: 'https://github.com/rdmclin2/fe-demos/blob/master/src/pages/demos/three/index.tsx',
        description: 'Three.js 基础 React 示例',
        link: `${window.location.origin}/demos/three`,
        title: 'Three.js 示例',
      },
      {
        article: '',
        code: 'https://github.com/rdmclin2/fe-demos/blob/master/src/pages/demos/three-vrm/index.tsx',
        description: '使用 Three.js 加载 VRM 模型',
        link: `${window.location.origin}/demos/three-vrm`,
        title: 'Three.js VRM 模型',
      },
      {
        article: '',
        code: 'https://github.com/rdmclin2/fe-demos/blob/master/src/pages/demos/react-three-fiber/index.tsx',
        description: 'React Three Fiber 是一套适配 React 的 Three.js 组件库',
        link: `${window.location.origin}/demos/react-three-fiber`,
        title: 'React Three Fiber 示例',
      },
    ],
    title: '3D 相关',
  },
];

export default config;
