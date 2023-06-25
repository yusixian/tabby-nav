import { useIsMounted } from '@/hooks/useIsMounted';
import { globalConfigAtom } from '@/store/main/state';
import { PaletteMode } from '@mui/material';
import { ThemeProvider as MaterialThemeProvider, createTheme } from '@mui/material/styles';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { poppins } from '../../constants/font';
import FloatingActions from './FloatingActions';
import { Footer } from './footer';
import { Header } from './header';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const { theme } = useTheme();
  const themeOptions = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme as PaletteMode,
          primary: {
            main: '#e91e63',
          },
          secondary: {
            main: '#E499A4',
          },
        },
      }),
    [theme],
  );
  const { showFooter } = useRecoilValue(globalConfigAtom);
  const isMounted = useIsMounted();

  return (
    <MaterialThemeProvider theme={themeOptions}>
      <div className={clsx('flex h-screen min-h-screen flex-col text-text-100', poppins.variable)}>
        <Header />
        <main className="relative flex-grow overflow-auto pb-12">{children}</main>
        {isMounted && <FloatingActions />}
        {isMounted && showFooter && <Footer />}
      </div>
    </MaterialThemeProvider>
  );
}
