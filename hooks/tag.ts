import { addTag, fetchManyTag, fetchTag } from '@/api/api';
import { TagCreateData, TagData } from '@/api/type';
import { Prisma } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useFetchManyTag = (manyArgs?: Prisma.TagFindManyArgs) => {
  return useQuery<TagData[]>(['fetch_many_tag', manyArgs], () => fetchManyTag(manyArgs), {
    select: (res) => {
      console.log('fetch many res:', res);
      return res;
    },
  });
};

export const useAddTagMutation = () => {
  return useMutation<TagData, any, TagCreateData, any>((tagData) => addTag(tagData));
};

export const useFetchFirstTag = (firstArgs?: Prisma.TagFindFirstArgs) => {
  return useQuery<TagData>(['fetch_first_tag', firstArgs], () => fetchTag(firstArgs), {
    select: (res) => {
      console.log('fetch first res:', res);
      return res;
    },
  });
};
