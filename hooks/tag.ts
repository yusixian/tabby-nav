import { useMutation, useQuery } from '@tanstack/react-query';
import request from '../api/request';
import { TagCreateData } from '@/api/type';
import { Prisma } from '@prisma/client';

export const useFetchManyTag = (data?: Prisma.TagFindManyArgs) => {
  return useQuery(['fetch_many_tag', data], () => request.post('/api/tag/fetch', { data }), {
    select: (res) => {
      return res;
    },
  });
};

export const useAddTagMutation = () => {
  return useMutation<any, any, TagCreateData, any>((tagData) => request.post('/api/tag/create', { data: tagData }));
};
