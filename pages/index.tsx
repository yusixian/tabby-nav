import Carousel3d from '@/components/carousel3d';
import { HomeList } from '@/components/home/HomeList';
import { shakingAnim } from '@/constants/animate';
import { motion } from 'framer-motion';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { FaMicroblog } from 'react-icons/fa';
import { FcDocument, FcLike, FcSupport } from 'react-icons/fc';

const items = [
  { src: '/img/home/img_1.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
  { src: '/img/home/img_2.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
  { src: '/img/home/img_3.png', href: 'https://github.com/yusixian/tabby-nav', desc: 'Github地址' },
];
const navItems1 = [
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
const navItems2 = [
  {
    name: 'W3C',
    href: 'https://www.w3.org/',
    desc: 'The World Wide Web Consortium (W3C) develops standards and guidelines to help everyone build a web based on the principles of accessibility, internationalization, privacy and security.',
  },
  {
    name: 'React',
    href: 'https://react.dev/',
    desc: 'React 官方文档',
  },
  {
    name: 'DB-Engines',
    href: 'https://db-engines.com/',
    desc: '按流行程度对数据库管理系统进行排名，涵盖 380 多个系统，每月更新一次',
  },
  {
    name: 'MDN',
    href: 'https://developer.mozilla.org/',
    desc: 'MDN Web Docs网站提供有关开放网络的信息，包括HTML、CSS和API，用于网站和渐进式网络应用。',
  },
];
const navItems3 = [
  {
    name: 'cosine',
    href: 'https://ysx.cosine.ren/',
    desc: '开发者的博客喵',
    icon: 'https://ysx.cosine.ren/img/avatar.jpg',
  },
];
export default function Home() {
  return (
    <div className="flex justify-between gap-4">
      <div className="sticky left-0 top-0 flex h-full flex-col whitespace-nowrap bg-header text-center ">
        <a href="#tools" className="px-6 py-2 transition hover:bg-bg-200 hover:opacity-80">
          工具
        </a>
        <a href="#docs" className="px-6 py-2 transition hover:bg-bg-200 hover:opacity-80">
          文档
        </a>
        <a href="#blogs" className="px-6 py-2 transition hover:bg-bg-200 hover:opacity-80">
          独立博客
        </a>
      </div>
      <div className="flex max-w-screen-lg flex-grow flex-col gap-6 p-4">
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
        <HomeList
          navItems={navItems1}
          id="tools"
          title={
            <>
              <FcSupport className="h-7 w-7" />
              工具
            </>
          }
        />
        <HomeList
          navItems={navItems2}
          id="docs"
          title={
            <>
              <FcDocument className="h-7 w-7 " />
              文档
            </>
          }
        />
        <HomeList
          navItems={navItems3}
          id="blogs"
          title={
            <>
              <FaMicroblog className="h-7 w-7 " />
              独立博客
            </>
          }
        />
      </div>
    </div>
  );
}
