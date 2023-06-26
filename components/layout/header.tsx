import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { Navigator } from '../navigator';
import Lottie from 'lottie-react';
import markAnim from '@/public/lottie/mark.json';

export function Header() {
  const router = useRouter();

  return (
    <header className="flex select-none items-center justify-between gap-4 overflow-visible bg-header px-4 pb-3 pt-2">
      <motion.div
        initial={{ rotate: -180, scale: 0 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.1 }}
        className="flex cursor-pointer items-center justify-center whitespace-nowrap text-2xl font-bold"
        onClick={() => router.push('/')}
      >
        <Lottie className="-mb-1 -mr-1 h-12 w-12" playsInline animationData={markAnim} />
        <p className="cos-logo" />
      </motion.div>
      <Navigator className="h-full flex-grow" />
    </header>
  );
}
