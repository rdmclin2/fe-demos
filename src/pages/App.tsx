import { ProCard } from '@ant-design/pro-components';
import { ActionIcon } from '@lobehub/ui';
import * as LucideIcon from 'lucide-react';
import { memo } from 'react';
import { Link } from 'umi';

import config from './config';

const App = memo(() => {
  return (
    <>
      {config.map((column) => {
        return (
          <ProCard collapsible gutter={8} key={column.title} title={column.title}>
            {column.demos.map((item) => {
              return (
                <ProCard
                  actions={[
                    <Link key="setting" to={item.path}>
                      <ActionIcon icon={LucideIcon.Laptop} title={'查看 Demo'} />
                    </Link>,
                    <a href={item.code} key="github" rel="noreferrer" target="_blank">
                      <ActionIcon icon={LucideIcon.Github} title={'查看源码'} />
                    </a>,
                    <a href={item.article} key="article" rel="noreferrer" target="_blank">
                      <ActionIcon icon={LucideIcon.Archive} title={'查看文档'} />
                    </a>,
                  ]}
                  bordered
                  colSpan={6}
                  key={item.path}
                  title={item.title}
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
