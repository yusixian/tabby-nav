import { Category, Tag, Website } from '@prisma/client';

type DateToString<T> = T extends Date ? string : T;

type TransformDateFields<T> = {
  [P in keyof T]: DateToString<T[P]>;
};

export type Serialize<T extends Object> = TransformDateFields<T>;

export type SerializeCategory = Serialize<Category & { tags: Tag[] }>;
export type SerializeWebsite = Serialize<Website & { tags: Tag[] }>;
export type SerializeTag = Serialize<Tag & { websites: SerializeWebsite[]; categories: SerializeCategory[] }>;

export type TagCreateData = {
  name: string;
  icon?: string;
  websiteIds?: number[];
  categoryIds?: number[];
};

export type WebsiteCreateData = {
  name: string;
  url: string;
  desc?: string;
  icon?: string;
  tags: string ;// split by ','
};
