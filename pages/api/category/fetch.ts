import { TagCreateData } from '@/api/type';
import { Prisma, PrismaClient, Tag } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { manyArgs, firstArgs }: { manyArgs: Prisma.CategoryFindManyArgs; firstArgs?: Prisma.CategoryFindFirstArgs } = req.body;
  if (manyArgs) {
    const results = await prisma.category.findMany(manyArgs);
    res.json(results);
    return;
  }
  if (firstArgs) {
    const results = await prisma.category.findFirst(firstArgs);
    res.json(results);
    return;
  }
}
