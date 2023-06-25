import { FcSupport } from 'react-icons/fc';
import Segmented from '../segmented';
import Card from '../card';
import { ReactElement, useState } from 'react';

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
};
export function HomeList({ navItems, title }: HomeListProps) {
  const [_, setType] = useState<'most' | 'recent'>('most');

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-xl font-bold">{title}</div>
      <Segmented
        className="p-2"
        onChange={(value) => setType(value as 'most' | 'recent')}
        options={[
          { label: '最常使用', value: 'most' },
          { label: '最近使用', value: 'recent' },
        ]}
      />
      <div className="grid grid-cols-4 gap-2 md:grid-cols-2">
        {navItems.map(({ name, desc, icon, href }) => (
          <Card
            title={
              <div className="flex items-center justify-center gap-2">
                <img src={icon ?? `${href}/favicon.ico`} alt={name} className="aspect-square w-8 rounded-full bg-white" />
                {name}
              </div>
            }
            desc={desc}
            key={name}
            clickable
            onClick={() => window.open(href, '_blank')}
          ></Card>
        ))}
      </div>
    </div>
  );
}
