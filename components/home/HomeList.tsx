import { nanoid } from 'nanoid';
import { ReactElement, useState } from 'react';
import Card from '../card';
import Segmented from '../segmented';
import Loading from '../ui/Loading';

type NavItemProps = {
  name: string;
  desc?: string;
  icon?: string;
  href: string;
  key?: string;
};
type HomeListProps = {
  navItems: NavItemProps[];
  title?: string | ReactElement;
  id?: string | number;
};
export function HomeList({ navItems, title, id }: HomeListProps) {
  const [type, setType] = useState<'most' | 'recent'>('most');

  return (
    <div className="flex flex-col gap-3" id={`${id ?? nanoid()}`}>
      <div className="flex items-center gap-2 text-xl font-bold">{title}</div>
      <Segmented
        className="p-2"
        onChange={(value) => setType(value as 'most' | 'recent')}
        options={[
          { label: '最常使用', value: 'most' },
          { label: '最近使用', value: 'recent' },
        ]}
      />
      <div className="grid grid-cols-5 gap-2 md:grid-cols-2">
        {type === 'most' ? (
          navItems.map(({ name, desc, icon, href }) => (
            <Card
              title={
                <div className="flex items-center justify-center gap-2">
                  <img src={icon ?? `${href}/favicon.ico`} alt={name} className="aspect-square w-8 rounded-full bg-white" />
                  {name}
                </div>
              }
              key={name}
              clickable
              onClick={() => window.open(href, '_blank')}
            >
              <p className="flex justify-center text-center text-sm text-text-200">
                <span className="line-clamp-3 text-left">{desc}</span>
              </p>
            </Card>
          ))
        ) : (
          <Loading className="col-span-3 w-full" />
        )}
      </div>
    </div>
  );
}
