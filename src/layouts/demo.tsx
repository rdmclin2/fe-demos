import { memo } from 'react';
import { Outlet } from 'umi';

const Layout = memo(() => {
  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
      <Outlet />
    </div>
  );
});

export default Layout;
