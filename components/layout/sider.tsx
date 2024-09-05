import { useNavItems } from '@/hooks/app';
import { useIsMounted } from '@/hooks/useIsMounted';
import { oneLevelMenuExpandAtom, oneLevelTabSelectIdxAtom } from '@/store/router/state';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import Drawer from '../drawer';
import { CategorySider } from '../home/CategorySider';
import NavItem, { NavItemProps } from '../navigator/NavItem';

type SiderProps = {
  bottomItems: (NavItemProps & { key?: string })[];
};
const Sider = ({ bottomItems }: SiderProps) => {
  const router = useRouter();
  const isMounted = useIsMounted();
  const [selectIdx1, setSelectIdx1] = useAtom(oneLevelTabSelectIdxAtom);
  const [mobileExpand, setMobileExpand] = useAtom(oneLevelMenuExpandAtom);
  const { routers } = useNavItems();

  if (!isMounted) return null;
  return (
    <Drawer
      open={mobileExpand}
      onOpenChange={(open) => setMobileExpand(open)}
      render={() => (
        <div className="flex h-full">
          <div className="flex h-full min-w-[7rem] flex-col justify-between gap-2 border-r p-2 dark:border-white/30">
            <div className="flex flex-col gap-1">
              {routers.map(({ name, path, key }, idx) => (
                <NavItem
                  key={key ?? name}
                  selected={selectIdx1 === idx}
                  className="w-full px-1 py-2"
                  onClick={() => {
                    router.push(path);
                    setSelectIdx1(idx);
                    setMobileExpand(false);
                  }}
                  name={name}
                  indicatorClass="inset-x-4"
                />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {bottomItems.map(({ key, icon, onClick }, idx) => (
                <NavItem
                  key={key}
                  selected={selectIdx1 === routers.length + idx + 1}
                  className="w-full px-1 py-1"
                  onClick={onClick}
                  icon={icon}
                />
              ))}
            </div>
          </div>
          {router.pathname === '/' && (
            <div className="overflow-auto">
              <CategorySider />
            </div>
          )}
        </div>
      )}
    />
  );
};

export default Sider;
