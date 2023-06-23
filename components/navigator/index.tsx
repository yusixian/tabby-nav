import { MD_SCREEN_QUERY } from '@/constants';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useToggleTheme } from '@/hooks/useToggleTheme';
import { Drawer, List, ListItem, ListItemButton } from '@mui/material';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgClose, CgDarkMode, CgMenu } from 'react-icons/cg';
import { useMediaQuery } from 'react-responsive';
import NavItem from './NavItem';
import { useRecoilState } from 'recoil';
import { oneLevelMenuExpandAtom, oneLevelTabSelectIdxAtom } from '@/store/router/state';
import Sider from '../layout/sider';

const routers: {
  name?: string;
  key?: string;
  path: string;
}[] = [
  { name: '首页', path: '/' },
  { name: '关于', path: '/about' },
];
const itemVariants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
    },
  },
};
type NavigatorProps = {
  className?: ClassValue;
};

export const Navigator = ({ className }: NavigatorProps) => {
  const router = useRouter();

  const [selectIdx, setSelectIdx] = useRecoilState(oneLevelTabSelectIdxAtom);
  const toggleTheme = useToggleTheme();
  const [mobileExpand, setMobileExpand] = useRecoilState(oneLevelMenuExpandAtom);
  const isMdScreen = useMediaQuery({ query: MD_SCREEN_QUERY });
  const isMounted = useIsMounted();
  const buttons = useMemo(
    () => [
      {
        key: 'Github',
        icon: <AiFillGithub className="h-9 w-9 cursor-pointer" />,
        onClick: () => window?.open('https://github.com/yusixian/tabby-nav', '_blank'),
      },
      {
        key: 'CgDarkMode',
        icon: <CgDarkMode className="h-9 w-9 cursor-pointer" />,
        onClick: toggleTheme,
      },
    ],
    [router, toggleTheme],
  );
  /** Set SelectIdx When Change Route */
  useEffect(() => {
    const path = router.pathname;
    for (let i = 0; i < routers.length; i++) {
      if (routers[i].path === path) {
        setSelectIdx(i);
        break;
      }
    }
  }, [router.pathname, setSelectIdx]);

  if (!isMounted) return null;
  return (
    <div className={clsx('flex items-center', className)}>
      {isMdScreen ? (
        <>
          <motion.nav initial={false} animate={mobileExpand ? 'open' : 'closed'} className="flex w-full justify-end">
            <motion.div
              whileTap={{ scale: 1.3 }}
              className="relative h-8 w-8"
              onClick={() => setMobileExpand(!mobileExpand)}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.span
                className="absolute inset-0 cursor-pointer text-3xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: mobileExpand ? 0 : 1,
                  transition: {
                    delay: mobileExpand ? 0.1 : 0,
                  },
                }}
              >
                <CgMenu />
              </motion.span>
              <motion.span
                className="absolute inset-0 cursor-pointer text-3xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: mobileExpand ? 1 : 0,
                  transition: {
                    delay: mobileExpand ? 0 : 0.1,
                  },
                }}
              >
                <CgClose />
              </motion.span>
            </motion.div>
          </motion.nav>
          <Sider bottomItems={buttons} />
        </>
      ) : (
        <motion.div initial="closed" animate="open" variants={itemVariants} className="ml-4 flex h-full w-full flex-grow gap-4">
          {routers.map(({ name, path, key }, idx) => (
            <NavItem
              selected={selectIdx === idx}
              indicatorClass="bottom-0.5"
              className="px-2"
              key={key ?? name}
              onClick={() => {
                router.push(path);
                setSelectIdx(idx);
              }}
              name={name}
            />
          ))}
          <div className="ml-auto flex items-center gap-1">
            {buttons.map(({ key, icon, onClick }, idx) => (
              <NavItem
                selected={selectIdx === routers.length + idx + 1}
                className="px-1 py-1"
                key={key}
                onClick={onClick}
                icon={icon}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
