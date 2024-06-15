import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 创建团队并分配领导和成员
  const team1 = await prisma.team.create({
    data: {
      team_name: "勤务一组",
      leader: {
        connect: { id: 1 }, // 假设id为1的人员是领导
      },
      members: {
        connect: [{ id: 2 }, { id: 3 }], // 假设id为2和3的人员是成员
      },
    },
  });

  const team2 = await prisma.team.create({
    data: {
      team_name: "勤务二组",
      leader: {
        connect: { id: 4 }, // 假设id为4的人员是领导
      },
      members: {
        connect: [{ id: 5 }, { id: 6 }], // 假设id为5和6的人员是成员
      },
    },
  });

  console.log({ team1, team2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
