import { Prisma } from '@prisma/client';
import request from './request';
import { CategoryCreateData, CategoryData, TagCreateData, TagData, WebsiteCreateData, WebsiteData } from './type';

export const addCategory = (data?: CategoryCreateData) => request.post<any, CategoryData>('/api/category/create', { data });
export const fetchCategory = (firstArgs?: Prisma.CategoryFindFirstArgs) =>
  request.post<any, CategoryData>('/api/category/fetch', { firstArgs });
export const fetchManyCategory = (manyArgs?: Prisma.CategoryFindManyArgs) =>
  request.post<any, CategoryData[]>('/api/category/fetch', { manyArgs });

export const addTag = (data?: TagCreateData) => request.post<any, TagData>('/api/tag/create', { data });
export const fetchTag = (firstArgs?: Prisma.TagFindFirstArgs) => request.post<any, TagData>('/api/tag/fetch', { firstArgs });
export const fetchManyTag = (manyArgs?: Prisma.TagFindManyArgs) => request.post<any, TagData[]>('/api/tag/fetch', { manyArgs });

export const addWebsite = (data?: WebsiteCreateData) => request.post<any, WebsiteData>('/api/website/create', { data });
export const fetchWebsite = (firstArgs?: Prisma.WebsiteFindFirstArgs) =>
  request.post<any, WebsiteData>('/api/website/fetch', { firstArgs });
export const fetchManyWebsite = (manyArgs?: Prisma.WebsiteFindManyArgs) =>
  request.post<any, WebsiteData[]>('/api/website/fetch', { manyArgs });
