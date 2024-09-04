import { TagCreateData } from '@/api/type';
import { Prisma, PrismaClient, Tag } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data }: { data: TagCreateData } = req.body;
  const { websiteIds, categoryIds, ...rest } = data;

  // TODO: Verify
  const results = await prisma.tag.create({
    data: {
      ...rest,
      websites: websiteIds?.length
        ? {
            connect: websiteIds?.map((id) => ({
              id,
            })),
          }
        : undefined,
      categories: categoryIds?.length
        ? {
            connect: categoryIds?.map((id) => ({
              id,
            })),
          }
        : undefined,
    },
  });
  res.json(results);
}
