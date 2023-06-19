import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>TabbyNav</title>
        <meta
          name="description"
          content="当你需要快速访问常用网站时，TabbyNav是你的好选择！这是一个基于Next.js + Typescript + React + Tailwind的导航网站，提供了自定义添加和编辑网站、分类和关键字搜索等功能。🚀"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
