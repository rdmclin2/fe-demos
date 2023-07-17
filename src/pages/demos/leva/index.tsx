import { LevaPanel, LevaStoreProvider, useCreateStore } from 'leva';

import Panel from './panel';

export default () => {
  const store = useCreateStore();

  return (
    <>
      <LevaPanel
        fill
        flat
        hideCopyButton
        neverHide
        store={store}
        titleBar={{ drag: false, title: '示例面板' }}
      />
      <LevaStoreProvider store={store}>
        <Panel />
      </LevaStoreProvider>
    </>
  );
};
