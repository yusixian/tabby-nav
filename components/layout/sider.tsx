import { oneLevelMenuExpandAtom, oneLevelTabSelectIdxAtom } from '@/store/router/state';
import { Drawer, List, ListItem, ListItemButton } from '@mui/material';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import NavItem, { NavItemProps } from '../navigator/NavItem';
import { useIsMounted } from '@/hooks/useIsMounted';

const routers: {
  name?: string;
  key?: string;
  path: string;
}[] = [
  { name: '首页', path: '/' },
  { name: '关于', path: '/about' },
];

type SiderProps = {
  bottomItems: (NavItemProps & { key?: string })[];
};
const Sider = ({ bottomItems }: SiderProps) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const [selectIdx1, setSelectIdx1] = useRecoilState(oneLevelTabSelectIdxAtom);
  const [mobileExpand, setMobileExpand] = useRecoilState(oneLevelMenuExpandAtom);
  if (!isMounted) return null;
  return (
    <Drawer anchor="left" open={mobileExpand} onKeyDown={() => setMobileExpand(false)} onClose={() => setMobileExpand(false)}>
      <List className="min-w-[10rem]">
        {routers.map(({ name, path, key }, idx) => (
          <ListItem key={key ?? name} disablePadding>
            <ListItemButton>
              <NavItem
                selected={selectIdx1 === idx}
                className="w-full px-1 py-1"
                onClick={() => {
                  router.push(path);
                  setSelectIdx1(idx);
                  setMobileExpand(false);
                }}
                name={name}
                indicatorClass="inset-x-4"
              />
            </ListItemButton>
          </ListItem>
        ))}
        {bottomItems.map(({ key, icon, onClick }, idx) => (
          <ListItem key={key} disablePadding>
            <ListItemButton>
              <NavItem
                selected={selectIdx1 === routers.length + idx + 1}
                className="w-full px-1 py-1"
                onClick={onClick}
                icon={icon}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sider;
