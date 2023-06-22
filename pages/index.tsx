import Carousel3d from '@/components/carousel3d';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';

const items = [
  { src: '/img/home/img_1.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
  { src: '/img/home/img_2.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
  { src: '/img/home/img_3.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
];
export default function Home() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-3 p-4">
      <Carousel3d
        items={items}
        className="ml-6 select-none"
        itemClass="-ml-6"
        renderIndicators={({ preEvent, nextEvent }) => (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2 text-2xl">
              <FcLike className="h-10 w-10" /> 我的收藏
            </div>
            <div className="flex items-center justify-center gap-2 text-3xl">
              <AiFillLeftCircle onClick={preEvent} className="h-12 w-12 cursor-pointer hover:opacity-70" />
              <AiFillRightCircle onClick={nextEvent} className="h-12 w-12 cursor-pointer hover:opacity-70" />
            </div>
          </div>
        )}
      />
    </div>
  );
}
