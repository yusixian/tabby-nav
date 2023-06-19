import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Carousel3d from '@/components/carousel3d';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TabbyNav</title>
        <meta
          name="description"
          content="当你需要快速访问常用网站时，TabbyNav是你的好选择！这是一个基于Next.js + Typescript + React + Tailwind的导航网站，提供了自定义添加和编辑网站、分类和关键字搜索等功能。🚀"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Carousel3d />
      </main>
    </>
  );
}
