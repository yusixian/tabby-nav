import Carousel3d from '@/components/carousel3d';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

const items = [{ src: '/img/home/img_1.png' }, { src: '/img/home/img_2.png' }, { src: '/img/home/img_3.png' }];
export default function Home() {
  return (
    <div className="overflow-auto">
      <Carousel3d
        items={items}
        className="select-none"
        renderIndicators={({ preEvent, nextEvent }) => (
          <div className="flex justify-center gap-2 text-5xl">
            <AiFillLeftCircle onClick={preEvent} className="h-20 w-20 cursor-pointer hover:opacity-70" />
            <AiFillRightCircle onClick={nextEvent} className="h-20 w-20 cursor-pointer hover:opacity-70" />
          </div>
        )}
      />
    </div>
  );
}
