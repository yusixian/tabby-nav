import { addCategory, fetchCategory, fetchManyCategory } from '@/api/api';
import { CategoryCreateData, CategoryData } from '@/api/type';
import { Prisma } from '@prisma/client';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useFetchManyCategory = (manyArgs?: Prisma.CategoryFindManyArgs) => {
  return useQuery<CategoryData[]>(['fetch_many_category', manyArgs], () => fetchManyCategory(manyArgs), {
    select: (res) => {
      return res;
    },
  });
};

export const useAddCategoryMutation = () => {
  return useMutation<CategoryData, any, CategoryCreateData, any>((categoryData) => addCategory(categoryData), {});
};

export const useFetchFirstCategory = (firstArgs?: Prisma.CategoryFindFirstArgs) => {
  return useQuery<CategoryData>(['fetch_first_category', firstArgs], () => fetchCategory(firstArgs), {
    select: (res) => {
      return res;
    },
  });
};
