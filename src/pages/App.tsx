import { ProCard } from '@ant-design/pro-components';
import { ActionIcon } from '@lobehub/ui';
import * as LucideIcon from 'lucide-react';
import { memo } from 'react';
import { Link } from 'umi';

const App = memo(() => {
  return (
    <ProCard collapsible gutter={8} title="浏览器 API">
      <ProCard
        actions={[
          <Link key="setting" to="/demos/SpeechRecognition">
            <ActionIcon icon={LucideIcon.Laptop} title={'查看 Demo'} />
          </Link>,
          <a
            href="https://github.com/rdmclin2/fe-demos/blob/master/src/pages/demos/SpeechRecognition/index.tsx"
            key="github"
            rel="noreferrer"
            target="_blank"
          >
            <ActionIcon icon={LucideIcon.Github} title={'查看源码'} />
          </a>,
        ]}
        bordered
        colSpan={6}
        title="Demo: 语音识别"
      >
        使用浏览器提供的 SpeechRecognition 实现语音识别功能
      </ProCard>
    </ProCard>
  );
});

export default App;
