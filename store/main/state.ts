import { SerializeCategory, SerializeWebsite, SerializeTag } from '@/api/type';
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

export const websitesAtom = atom<SerializeWebsite[]>({
  key: 'websites_atom',
  default: [],
});

export const categoriesAtom = atom<SerializeCategory[]>({
  key: 'categories_atom',
  default: [],
});

export const tagsAtom = atom<SerializeTag[]>({
  key: 'tags_atom',
  default: [],
});
