import { ActionIcon, GradientButton, Header as LobeHeader, ThemeSwitch } from '@lobehub/ui';
import { Github } from 'lucide-react';
import { type ReactNode, memo } from 'react';
import { Link } from 'umi';
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
      actions={[
        <a
          href="https://github.com/rdmclin2/fe-demos"
          key="github"
          rel="noreferrer"
          target="_blank"
        >
          <ActionIcon icon={Github} />
        </a>,
        <ThemeSwitch key="theme" onThemeSwitch={onSetThemeMode} themeMode={themeMode} />,
      ]}
      logo={
        <Link to="/">
          <GradientButton>FEDemos</GradientButton>
        </Link>
      }
    >
      {children}
    </LobeHeader>
  );
});

export default Header;
