import { SerializeCategory, SerializeTag, SerializeWebsite } from '@/api/type';
import Carousel3d from '@/components/carousel3d';
import { CategorySider } from '@/components/home/CategorySider';
import { HomeList } from '@/components/home/HomeList';
import Empty from '@/components/ui/Empty';
import FcIcon from '@/components/ui/FcIcon';
import { shakingAnim } from '@/constants/animate';
import { categoriesAtom, tagsAtom, websitesAtom } from '@/store/main/state';
import { serializeDate } from '@/utils/serialize';
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { useSetRecoilState } from 'recoil';

const items = [
  { src: '/img/home/img_1.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
  { src: '/img/home/img_2.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
  { src: '/img/home/img_3.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
];
type HomeProps = {
  data: {
    categories: SerializeCategory[];
    websites: SerializeWebsite[];
    tags: SerializeTag[];
  };
};
export default function Home({ data }: HomeProps) {
  const { websites, categories, tags } = data;
  const setWebsites = useSetRecoilState(websitesAtom);
  const setCategories = useSetRecoilState(categoriesAtom);
  const setTags = useSetRecoilState(tagsAtom);
  console.log('----------------', { websites, categories, tags });

  useLayoutEffect(() => {
    setWebsites(websites);
    setCategories(categories);
    setTags(tags);
  }, [categories, setCategories, setTags, setWebsites, tags, websites]);

  return (
    <div className="flex justify-between gap-4">
      <CategorySider className="sticky left-0 top-0 h-full" />
      <div className="flex flex-grow flex-col gap-6 p-4">
        <Carousel3d
          items={items}
          className="ml-6 max-w-screen-lg select-none"
          itemClass="-ml-6"
          renderIndicators={({ preEvent, nextEvent }) => (
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2 text-xl font-bold">
                <FcLike className="h-7 w-7" /> 我的收藏
              </div>
              <div className="flex items-center justify-center gap-2 text-3xl">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileTap={{ scale: 1.2 }}
                  className="cursor-pointer"
                  whileHover={shakingAnim()}
                  onClick={preEvent}
                >
                  <AiFillLeftCircle className="h-12 w-12" />
                </motion.div>
                <motion.div
                  initial={{ rotate: 0 }}
                  whileTap={{ scale: 1.2 }}
                  className="cursor-pointer"
                  whileHover={shakingAnim()}
                  onClick={nextEvent}
                >
                  <AiFillRightCircle className="h-12 w-12" />
                </motion.div>
              </div>
            </div>
          )}
        />
        {categories?.length ? (
          categories.map(({ key, name, icon, tags }) => {
            return (
              <HomeList
                key={key ?? name}
                id={key ?? name}
                tags={tags}
                title={
                  <>
                    {icon && <FcIcon src={icon} />}
                    {name}
                  </>
                }
              />
            );
          })
        ) : (
          <Empty msg="暂无数据" />
        )}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  try {
    const prisma = new PrismaClient();
    const categoriesData = await prisma.category.findMany({
      include: { tags: true },
    });

    const websitesData = await prisma.website.findMany({
      include: { tags: true },
    });
    const tagsData = await prisma.tag.findMany({
      include: { websites: true, categories: true },
    });
    const tags = tagsData.map(({ categories, websites, ...rest }) => {
      return { categories: serializeDate(categories), websites: serializeDate(websites), ...rest };
    });
    return {
      props: {
        data: {
          categories: serializeDate(categoriesData),
          websites: serializeDate(websitesData),
          tags,
        },
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { data: {} },
    };
  }
}
