import { SerializeCategory, SerializeTag, SerializeWebsite } from '@/api/type';
import { atom } from 'jotai';

export const globalConfigAtom = atom<{
  showFooter: boolean;
}>({
  showFooter: true,
});

export const websitesAtom = atom<SerializeWebsite[]>([]);

export const categoriesAtom = atom<SerializeCategory[]>([]);

export const tagsAtom = atom<SerializeTag[]>([]);
