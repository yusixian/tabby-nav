import Carousel3d from '@/components/carousel3d';
import Head from 'next/head';

const items = [
  { src: 'https://api.ayaka.icu/img/url.io?bili=3&seed=1', imgClass: 'rounded-xl' },
  { src: 'https://api.ayaka.icu/img/url.io?bili=3&seed=2', imgClass: 'rounded-xl' },
  { src: 'https://api.ayaka.icu/img/url.io?bili=3&seed=3', imgClass: 'rounded-xl' },
  { src: 'https://api.ayaka.icu/img/url.io?bili=3&seed=4', imgClass: 'rounded-xl' },
  { src: 'https://api.ayaka.icu/img/url.io?bili=3&seed=5', imgClass: 'rounded-xl' },
];
export default function Home() {
  return (
    <div className="overflow-auto">
      <Carousel3d items={items} className="w-full rounded-xl" />
    </div>
  );
}
