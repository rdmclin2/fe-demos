import { ProCard } from '@ant-design/pro-components';
import { ActionIcon } from '@lobehub/ui';
import * as LucideIcon from 'lucide-react';
import { memo } from 'react';

import config from './config';

const App = memo(() => {
  return (
    <>
      {config.map((column) => {
        return (
          <ProCard collapsible gutter={8} key={column.title} title={column.title}>
            {column.demos.map((item) => {
              const actions = [];
              actions.push(
                <a href={item.link} key="setting">
                  <ActionIcon icon={LucideIcon.Laptop} title={'查看 Demo'} />
                </a>,
              );
              if (item.code)
                actions.push(
                  <a href={item.code} key="github" rel="noreferrer" target="_blank">
                    <ActionIcon icon={LucideIcon.Github} title={'查看源码'} />
                  </a>,
                );
              if (item.article)
                actions.push(
                  <a href={item.article} key="article" rel="noreferrer" target="_blank">
                    <ActionIcon icon={LucideIcon.Archive} title={'查看文档'} />
                  </a>,
                );
              return (
                <ProCard
                  actions={actions}
                  bordered
                  colSpan={6}
                  key={item.link}
                  title={
                    <a href={item.link} rel="noreferrer" target="_blank">
                      {item.title}
                    </a>
                  }
                >
                  {item.description}
                </ProCard>
              );
            })}
          </ProCard>
        );
      })}
    </>
  );
});

export default App;
