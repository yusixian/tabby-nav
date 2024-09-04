import { CategoryCreateData, WebsiteCreateData } from '@/api/type';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data }: { data: WebsiteCreateData } = req.body;
  const { categoryId, tagIds, ...rest } = data;
  console.log('======= handle data =======\n', data);

  // TODO: Verify
  const results = await prisma.website.create({
    data: {
      ...rest,
      category: categoryId
        ? {
            connectOrCreate: {
              where: {
                id: categoryId,
              },
              create: {
                id: categoryId,
                name: '未分类',
              },
            },
          }
        : undefined,
      tags: tagIds?.length
        ? {
            connect: tagIds?.map((id) => ({
              id,
            })),
          }
        : undefined,
    },
  });
  res.json(results);
}
