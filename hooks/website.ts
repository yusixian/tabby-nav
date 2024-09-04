import { addWebsite, fetchManyWebsite, fetchWebsite } from '@/api/api';
import { WebsiteCreateData, WebsiteData } from '@/api/type';
import { Prisma } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useFetchManyWebsite = (manyArgs?: Prisma.WebsiteFindManyArgs) => {
  return useQuery<WebsiteData[]>(['fetch_many_website', manyArgs], () => fetchManyWebsite(manyArgs), {
    select: (res) => {
      console.log('fetch many res:', res);
      return res;
    },
  });
};

export const useAddWebsiteMutation = () => {
  return useMutation<WebsiteData, any, WebsiteCreateData, any>((websiteData) => addWebsite(websiteData));
};

export const useFetchFirstWebsite = (firstArgs?: Prisma.WebsiteFindFirstArgs) => {
  return useQuery<WebsiteData>(['fetch_first_website', firstArgs], () => fetchWebsite(firstArgs), {
    select: (res) => {
      console.log('fetch first res:', res);
      return res;
    },
  });
};
