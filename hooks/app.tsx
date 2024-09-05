import { routers } from '@/constants/router';
import { websitesAtom } from '@/store/main/state';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';
import { useToggleTheme } from './useToggleTheme';

export const useNavItems = () => {
  const toggleTheme = useToggleTheme();
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
    [toggleTheme],
  );
  return { routers, buttons };
};

export const useTagWebsite = (tagName: string) => {
  const websites = useAtomValue(websitesAtom);
  return useMemo(() => {
    const filteredWebsite = websites.filter(({ tags }) => tags.findIndex(({ name }) => name === tagName) !== -1);
    return filteredWebsite;
  }, [tagName, websites]);
};
