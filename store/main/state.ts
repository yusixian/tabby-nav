import { Serialize } from '@/apis/type';
import { Category, Tag, Website } from '@prisma/client';
import { atom } from 'recoil';

export const globalConfigAtom = atom<{
  showFooter: boolean;
}>({
  key: 'global_config_atom',
  default: {
    showFooter: true,
  },
});

export const websitesAtom = atom<Serialize<Website & { tags: Tag[] }>[]>({
  key: 'websites_atom',
  default: [],
});

export const categoriesAtom = atom<Serialize<Category & { tags: Tag[] }>[]>({
  key: 'categories_atom',
  default: [],
});
