import { categoriesAtom } from '@/store/main/state';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import Empty from '../ui/Empty';
import FcIcon from '../ui/FcIcon';
import { useAtomValue } from 'jotai';

type CategorySiderProps = {
  className?: string;
};
export function CategorySider({ className }: CategorySiderProps) {
  const categories = useAtomValue(categoriesAtom);

  return (
    <div className={twMerge('flex flex-col whitespace-nowrap bg-header text-center', clsx(className))}>
      {categories?.length ? (
        categories.map(({ id, key, name, icon }) => (
          <a
            href={`#${key ?? name}`}
            key={id}
            className="flex items-center gap-2 px-6 py-2 transition hover:bg-bg-200 hover:opacity-80"
          >
            {icon && <FcIcon src={icon} />}
            {name}
          </a>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
}
