import { useToggleTheme } from '@/hooks/useToggleTheme';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();
  const toggleTheme = useToggleTheme();

  return (
    <header className="flex h-16 w-full items-center justify-between gap-2 p-2">
      <div className="cursor-pointer" onClick={() => router.push('/')}>
        Logo
      </div>
      <div className="flex-grow cursor-pointer text-center text-3xl" onClick={() => router.push('/')}>
        Hello World
      </div>
      <div className="cursor-pointer" onClick={toggleTheme}>
        切换日夜模式
      </div>
    </header>
  );
}
