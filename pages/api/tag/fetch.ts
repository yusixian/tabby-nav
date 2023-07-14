import { TagCreateData } from '@/api/type';
import { Prisma, PrismaClient, Tag } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data }: { data: Prisma.TagFindManyArgs } = req.body;
  const results = await prisma.tag.findMany(data);
  res.json(results);
}
