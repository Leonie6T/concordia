const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const applications = await prisma.application.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  });
  console.log('--- Last 5 Applications ---');
  console.log(JSON.stringify(applications, null, 2));

  const incidents = await prisma.incident.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' }
  });
  console.log('--- Last 5 Incidents ---');
  console.log(JSON.stringify(incidents, null, 2));
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
