import Card from '@/components/card';
import { useIsMounted } from '@/hooks/useIsMounted';
import { FaGithub, FaStar } from 'react-icons/fa';

export default function About() {
  const isMounted = useIsMounted();
  if (!isMounted) return null;
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-3 p-4">
      <Card title="About">
        <div className="flex flex-col gap-2">
          <p>
            🐱 TabbyNav是一个基于 Next.js + Typescript + React + Tailwind
            开发的导航网站，旨在帮助用户方便地管理和组织自己的导航链接。 Github 地址为
          </p>
          <div
            className="mx-4 flex cursor-pointer items-center justify-between rounded-xl px-4 py-2 transition hover:bg-bg-200"
            onClick={() => window.open('https://github.com/yusixian/tabby-nav', '_blank')}
          >
            <div className="flex items-center gap-2 text-xl">
              <FaGithub className="h-10 w-10" />
              Tabby Nav
            </div>
            <div>
              <FaStar className="mr-2 h-6 w-6 fill-yellow-500" />
              Star
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}
