import { atom } from 'recoil';

export const oneLevelTabSelectIdxAtom = atom<number>({
  key: 'one_level_tab_select_idx_atom',
  default: 0,
});

export const oneLevelMenuExpandAtom = atom<boolean>({
  key: 'one_level_menu_expand_atom',
  default: false,
});
