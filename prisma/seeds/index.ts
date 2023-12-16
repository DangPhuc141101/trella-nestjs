import { PrismaClient } from '@prisma/client';
import { organizations } from './organization';
import { projects } from './project';

const prisma = new PrismaClient();

const cleanData = async () => {
  await prisma.organization.deleteMany();
  await prisma.project.deleteMany();
};
const main = async () => {
  await cleanData();
  await prisma.organization.createMany({ data: organizations });
  await prisma.project.createMany({ data: projects });
};
main();
