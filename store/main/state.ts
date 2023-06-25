import { atom } from 'recoil';

export const globalConfigAtom = atom<{
  showFooter: boolean;
}>({
  key: 'global_config_atom',
  default: {
    showFooter: true,
  },
});
