import Card from '@/components/card';
import { useIsMounted } from '@/hooks/useIsMounted';
import { Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FaGithub, FaStar } from 'react-icons/fa';

export default function About() {
  const isMounted = useIsMounted();
  if (!isMounted) return null;
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-3 p-4">
      <Card title="About">
        <div className="flex flex-col gap-2">
          <p>
            🐱 TabbyNav是一个基于 Next.js + Typescript + React + Tailwind
            开发的导航网站，旨在帮助用户方便地管理和组织自己的导航链接。 Github 地址为
            <Link href="https://github.com/yusixian/tabby-nav" target="_blank" className="mx-1">
              https://github.com/yusixian/tabby-nav
            </Link>
          </p>
          <List className="w-full text-lg">
            <ListItem>
              <ListItemButton onClick={() => window.open('https://github.com/yusixian/tabby-nav', '_blank')}>
                <ListItemIcon>
                  <FaGithub className="h-10 w-10" />
                </ListItemIcon>
                <ListItemText primary="tabby-nav" className="text-lg" />
                <FaStar className="mr-2 h-6 w-6 fill-yellow-400" />
                Star
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Card>
    </main>
  );
}
