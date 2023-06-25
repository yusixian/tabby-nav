import Card from '@/components/card';
import Carousel3d from '@/components/carousel3d';
import Segmented from '@/components/segmented';
import { shakingAnim } from '@/constants/animate';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { FcDocument, FcLike, FcSupport } from 'react-icons/fc';

const items = [
  { src: '/img/home/img_1.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
  { src: '/img/home/img_2.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
  { src: '/img/home/img_3.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
];
const navItems = [
  {
    name: 'Github',
    href: 'https://github.com/',
    desc: 'GitHub是世界上最大的代码托管平台，超7千万开发者正在使用。',
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    name: 'Antd',
    href: 'https://ant.design/',
    desc: '基于 Ant Design 设计体系的 React UI 组件库，用于研发企业级中后台产品。',
  },
  {
    name: '木及简历',
    href: 'https://www.mujicv.com/',
    desc: '以最简单的方式来写好简历，只需专注内容本身而无需关注排版',
  },
];
export default function Home() {
  const [_, setType] = useState<'most' | 'recent'>('most');

  return (
    <div className="mx-auto flex max-w-screen-lg flex-col gap-6 p-4">
      <Carousel3d
        items={items}
        className="ml-6 select-none"
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
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xl font-bold">
          <FcSupport className="h-7 w-7" />
          工具
        </div>
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
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xl font-bold">
          <FcDocument className="h-7 w-7 " />
          文档
        </div>
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
    </div>
  );
}
