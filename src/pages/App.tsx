import { ProCard } from '@ant-design/pro-components';
import { ActionIcon } from '@lobehub/ui';
import * as LucideIcon from 'lucide-react';
import { memo } from 'react';

const App = memo(() => {
  return (
    <ProCard collapsible gutter={8} title="浏览器 API">
      <ProCard
        actions={[
          <ActionIcon
            icon={LucideIcon.Laptop}
            key="setting"
            onClick={() => {
              location.href = '/demos/SpeechRecognition';
            }}
            title={'查看 Demo'}
          />,
          <ActionIcon icon={LucideIcon.Github} key="github" title={'查看源码'} />,
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
