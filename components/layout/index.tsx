import { useIsMounted } from '@/hooks/useIsMounted';
import { globalConfigAtom } from '@/store/main/state';
import clsx from 'clsx';
import { useRecoilValue } from 'recoil';
import { poppins } from '../../constants/font';
import FloatingActions from './FloatingActions';
import { Footer } from './footer';
import { Header } from './header';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const { showFooter } = useRecoilValue(globalConfigAtom);
  const isMounted = useIsMounted();
  if (!isMounted) return null;
  return (
    <div className={clsx('flex h-screen min-h-screen flex-col text-text-100', poppins.variable)}>
      <Header />
      <main className="relative flex-grow overflow-auto pb-12">{children}</main>
      <FloatingActions />
      {showFooter && <Footer />}
    </div>
  );
}
