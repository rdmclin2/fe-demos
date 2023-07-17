import { LevaStoreProvider, useCreateStore } from 'leva';

import Panel from './panel';

export default () => {
  const store = useCreateStore();

  return (
    <LevaStoreProvider store={store}>
      <Panel />
    </LevaStoreProvider>
  );
};
