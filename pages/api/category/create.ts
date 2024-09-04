import { CategoryCreateData } from '@/api/type';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data }: { data: CategoryCreateData } = req.body;
  const { parentId, websiteIds, childrenIds, ...rest } = data;
  console.log('======= handle data =======\n', data);

  // TODO: Verify
  const results = await prisma.category.create({
    data: {
      ...rest,
      parent: parentId
        ? {
            connectOrCreate: {
              where: {
                id: parentId,
              },
              create: {
                id: parentId,
                name: '未分类',
              },
            },
          }
        : undefined,
      children: childrenIds?.length
        ? {
            connect: childrenIds?.map((id) => ({
              id,
            })),
          }
        : undefined,
      websites: websiteIds?.length
        ? {
            connect: websiteIds?.map((id) => ({
              id,
            })),
          }
        : undefined,
    },
  });
  res.json(results);
}
