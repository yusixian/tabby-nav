import { useTagWebsite } from '@/hooks/app';
import { Tag } from '@prisma/client';
import { nanoid } from 'nanoid';
import { ReactElement, useState } from 'react';
import Card from '../card';
import Segmented from '../segmented';
import Empty from '../ui/Empty';

type HomeListProps = {
  title?: string | ReactElement;
  id?: string | number;
  tags: Tag[];
};
export function HomeList({ title, id, tags }: HomeListProps) {
  const [currentTag, setCurrentTag] = useState<string>(tags[0]?.name ?? '');
  const websites = useTagWebsite(currentTag);
  const isNoneTag = currentTag === '未分类';
  console.log({ websites, currentTag, id });
  return (
    <div className="flex flex-col gap-3" id={`${id ?? nanoid()}`}>
      <div className="flex items-center gap-2 text-xl font-bold">{title}</div>
      <Segmented
        className="p-2"
        onChange={(value) => setCurrentTag(value as string)}
        options={tags.map((tag) => (isNoneTag ? null : { label: tag.name, value: tag.name }))}
      />
      <div className="grid grid-cols-5 gap-2 md:grid-cols-2">
        {websites?.length ? (
          websites.map(({ name, desc, icon, url }) => (
            <Card
              title={
                <div className="flex items-center justify-center gap-2">
                  <img src={icon ?? `${url}/favicon.ico`} alt={name} className="aspect-square w-8 rounded-full bg-white" />
                  {name}
                </div>
              }
              key={name}
              clickable
              onClick={() => window.open(url, '_blank')}
            >
              <p className="flex justify-center text-center text-sm text-text-200">
                <span className="line-clamp-3 text-left">{desc}</span>
              </p>
            </Card>
          ))
        ) : (
          <Empty className="-m-5 h-36" msg="暂无数据" />
        )}
      </div>
    </div>
  );
}
