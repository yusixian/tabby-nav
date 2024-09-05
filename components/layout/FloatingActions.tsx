import { globalConfigAtom } from '@/store/main/state';
import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
  Typography,
} from '@material-tailwind/react';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineToTop } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

export default function FloatingActions({ onBackToTop, iconClass }: { onBackToTop: () => void; iconClass?: string }) {
  const _iconClass = twMerge('h-6 w-6 text-primary', clsx(iconClass));
  const [globalConfig, setGlobalConfig] = useAtom(globalConfigAtom);
  const actions = useMemo(
    () => [
      {
        icon: globalConfig.showFooter ? <AiFillEyeInvisible className={_iconClass} /> : <AiFillEye className={_iconClass} />,
        name: globalConfig.showFooter ? '关闭页脚' : '展示页脚',
        event: () => {
          setGlobalConfig((prev) => ({ ...prev, showFooter: !prev.showFooter }));
        },
      },
      {
        icon: <AiOutlineToTop className={_iconClass} />,
        name: '回到顶部',
        event: onBackToTop,
      },
    ],
    [_iconClass, globalConfig.showFooter, onBackToTop, setGlobalConfig],
  );

  return (
    <div className="absolute bottom-10 right-6">
      <SpeedDial>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full bg-primary shadow shadow-primary hover:shadow-md hover:shadow-primary">
            <FaPlus className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          {actions.map((action) => (
            <SpeedDialAction key={action.name}>
              <div className="flex flex-col items-center justify-center" onClick={action.event}>
                {action.icon}
                <Typography className="text-xs font-normal text-primary">{action.name}</Typography>
              </div>
            </SpeedDialAction>
          ))}
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
