import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

const variants = {
  enter: ({ direction }: { direction: number }) => {
    return { scale: 0.6, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }: any) => {
    return {
      scale: position() === 'center' ? 1 : 0.9,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    };
  },
  exit: ({ direction }: any) => {
    return { scale: 0.6, x: direction < 1 ? -50 : 50, opacity: 0 };
  },
};

function getZIndex({ position, direction }: any) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  };
  return indexes[position() as 'left' | 'center' | 'right'];
}
type Carousel3dItemProps = {
  src: string;
  imgClass?: string;
  href?: string;
  desc?: string;
};

type Carousel3dProps = {
  className?: string;
  items: Carousel3dItemProps[];
  interval?: number;
  autoplay?: boolean;
  itemClass?: string;
  renderIndicators?: ({ preEvent, nextEvent }: { preEvent: () => void; nextEvent: () => void }) => ReactNode;
};
export default function Carousel3d({
  className,
  items,
  interval = 3000,
  autoplay = true,
  itemClass,
  renderIndicators,
}: Carousel3dProps) {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope = ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(indexInArrayScope, indexInArrayScope + 3);

  const timer = useRef<any>(null);

  const handleClick = (newDirection: any) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setTimer = () =>
    setTimeout(() => {
      handleClick(1);
    }, interval);

  // Timer autoplay
  useEffect(() => {
    if (!autoplay) return;
    timer.current && clearTimeout(timer.current);
    timer.current = setTimer();
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [autoplay, interval, setTimer]);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      {renderIndicators?.({ preEvent: () => handleClick(-1), nextEvent: () => handleClick(1) })}
      <div className={twMerge('grid grid-cols-[1fr_1fr_1fr] place-items-center', className)}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map(({ src, imgClass, href, desc }) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                onClick={() => {
                  href && window.open(href, '_blank');
                }}
                className={twMerge(clsx('group relative w-auto overflow-hidden', { 'cursor-pointer': !!href }), itemClass)}
                key={src}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (src === visibleItems[0].src) {
                      return 'left';
                    } else if (src === visibleItems[1].src) {
                      return 'center';
                    } else {
                      return 'right';
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8 }}
              >
                {desc && (
                  <div className="absolute inset-x-0 bottom-0 z-10 flex scale-0 items-center justify-center bg-black/30 p-4 text-center text-xl text-white opacity-0 backdrop-blur transition duration-75 group-hover:scale-100 group-hover:opacity-100">
                    {desc}
                  </div>
                )}
                <img
                  src={src}
                  loading="lazy"
                  alt={src}
                  className={twMerge('h-full w-full transition group-hover:scale-125', imgClass)}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
