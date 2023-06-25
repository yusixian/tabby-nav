import { globalConfigAtom } from '@/store/main/state';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { useMemo } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRecoilState } from 'recoil';

const iconClass = 'h-6 w-6 text-primary';
export default function FloatingActions() {
  const [globalConfig, setGlobalConfig] = useRecoilState(globalConfigAtom);
  const actions = useMemo(
    () => [
      {
        icon: globalConfig.showFooter ? <AiFillEyeInvisible className={iconClass} /> : <AiFillEye className={iconClass} />,
        name: '展示页脚',
        event: () => {
          setGlobalConfig((prev) => ({ ...prev, showFooter: !prev.showFooter }));
        },
      },
    ],
    [globalConfig.showFooter, setGlobalConfig],
  );

  return (
    <SpeedDial color="primary" ariaLabel="FloatingActions" className="absolute bottom-4 right-4" icon={<SpeedDialIcon />}>
      {actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} onClick={action.event} tooltipTitle={action.name} />
      ))}
    </SpeedDial>
  );
}
