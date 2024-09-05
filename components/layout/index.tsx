import { useIsMounted } from '@/hooks/useIsMounted';
import { globalConfigAtom } from '@/store/main/state';
import clsx from 'clsx';
import { useAtomValue } from 'jotai';
import { useTheme } from 'next-themes';
import { useCallback, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { poppins } from '../../constants/font';
import FloatingActions from './FloatingActions';
import { Footer } from './footer';
import { Header } from './header';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const { showFooter } = useAtomValue(globalConfigAtom);
  const containerRef = useRef<HTMLElement>(null);
  const isMounted = useIsMounted();
  const onBackToTop = useCallback(() => {
    containerRef.current?.scroll({ top: 0, behavior: 'smooth' });
  }, [containerRef]);
  const { theme } = useTheme();
  if (!isMounted) return null;
  return (
    <div className={clsx('flex h-screen min-h-screen flex-col text-text-100', poppins.variable)}>
      <Header />
      <main ref={containerRef} className="relative flex-grow overflow-auto scroll-smooth pb-12">
        {children}
      </main>
      <FloatingActions onBackToTop={onBackToTop} />
      <ToastContainer theme={theme} autoClose={3000} hideProgressBar />
      {showFooter && <Footer />}
    </div>
  );
}
