import { Header as LobeHeader, ThemeSwitch } from '@lobehub/ui';
import { type ReactNode, memo } from 'react';
import { shallow } from 'zustand/shallow';

import { useAppStore } from '@/store';

interface HeaderProps {
  children?: ReactNode;
}

const Header = memo<HeaderProps>(({ children }) => {
  const [themeMode, onSetThemeMode] = useAppStore(
    (st) => [st.themeMode, st.onSetThemeMode],
    shallow,
  );

  return (
    <LobeHeader
      actions={[<ThemeSwitch key="theme" onThemeSwitch={onSetThemeMode} themeMode={themeMode} />]}
      logo={'FEDemos'}
    >
      {children}
    </LobeHeader>
  );
});

export default Header;
