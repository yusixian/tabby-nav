import { useIsMounted } from '@/hooks/useIsMounted';
import { oneLevelMenuExpandAtom, oneLevelTabSelectIdxAtom } from '@/store/router/state';
import { Drawer, List, ListItem } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import NavItem, { NavItemProps } from '../navigator/NavItem';

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
    <Drawer open={mobileExpand} onKeyDown={() => setMobileExpand(false)} onClose={() => setMobileExpand(false)}>
      <List className="w-full">
        {routers.map(({ name, path, key }, idx) => (
          <ListItem key={key ?? name}>
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
          </ListItem>
        ))}
        {bottomItems.map(({ key, icon, onClick }, idx) => (
          <ListItem key={key}>
            <NavItem
              selected={selectIdx1 === routers.length + idx + 1}
              className="w-full px-1 py-1"
              onClick={onClick}
              icon={icon}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sider;
