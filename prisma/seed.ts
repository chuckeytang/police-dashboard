import { PrismaClient, Staff } from "@prisma/client";
import { addDays, startOfMonth, endOfMonth } from "date-fns";

const prisma = new PrismaClient();

async function main() {
  // 清空相关表的数据
  await prisma.teamMember.deleteMany({});
  await prisma.schedule.deleteMany({});
  await prisma.team.deleteMany({});
  await prisma.staff.deleteMany({});

  // 创建20个staff记录
  const staffData = [
    {
      code: "01",
      police_number: "ZP00001",
      name: "秦壮保",
      position: "主任",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00001",
      skills: ["英语", "法律", "编程"],
    },
    {
      code: "02",
      police_number: "ZP00002",
      name: "钱勤筠",
      position: "科长",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00002",
      skills: ["驾驶", "射击", "英语"],
    },
    {
      code: "03",
      police_number: "ZP00003",
      name: "张颢启",
      position: "科长",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00003",
      skills: ["法律", "谈判", "编程"],
    },
    {
      code: "04",
      police_number: "ZP00004",
      name: "雷琳",
      position: "民警",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00004",
      skills: ["射击", "驾驶", "英语"],
    },
    {
      code: "05",
      police_number: "ZP00005",
      name: "吴川宜",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00005",
      skills: ["编程", "驾驶", "谈判"],
    },
    {
      code: "06",
      police_number: "ZP00006",
      name: "孙英",
      position: "科长",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00006",
      skills: ["驾驶", "英语", "编程"],
    },
    {
      code: "07",
      police_number: "ZP00007",
      name: "李彬",
      position: "科长",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00007",
      skills: ["法律", "驾驶", "谈判"],
    },
    {
      code: "08",
      police_number: "ZP00008",
      name: "赵伟",
      position: "民警",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00008",
      skills: ["射击", "驾驶", "英语"],
    },
    {
      code: "09",
      police_number: "ZP00009",
      name: "周晓",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00009",
      skills: ["编程", "驾驶", "谈判"],
    },
    {
      code: "10",
      police_number: "ZP00010",
      name: "王磊",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00010",
      skills: ["驾驶", "英语", "法律"],
    },
    {
      code: "11",
      police_number: "ZP00011",
      name: "刘畅",
      position: "主任",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00011",
      skills: ["英语", "法律", "编程"],
    },
    {
      code: "12",
      police_number: "ZP00012",
      name: "陈浩",
      position: "科长",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00012",
      skills: ["驾驶", "射击", "英语"],
    },
    {
      code: "13",
      police_number: "ZP00013",
      name: "丁磊",
      position: "科长",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00013",
      skills: ["法律", "谈判", "编程"],
    },
    {
      code: "14",
      police_number: "ZP00014",
      name: "黄丽",
      position: "民警",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00014",
      skills: ["射击", "驾驶", "英语"],
    },
    {
      code: "15",
      police_number: "ZP00015",
      name: "韩梅",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00015",
      skills: ["编程", "驾驶", "谈判"],
    },
    {
      code: "16",
      police_number: "ZP00016",
      name: "张强",
      position: "科长",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00016",
      skills: ["驾驶", "英语", "编程"],
    },
    {
      code: "17",
      police_number: "ZP00017",
      name: "李四",
      position: "科长",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00017",
      skills: ["法律", "驾驶", "谈判"],
    },
    {
      code: "18",
      police_number: "ZP00018",
      name: "王五",
      position: "民警",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00018",
      skills: ["射击", "驾驶", "英语"],
    },
    {
      code: "19",
      police_number: "ZP00019",
      name: "赵六",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00019",
      skills: ["编程", "驾驶", "谈判"],
    },
    {
      code: "20",
      police_number: "ZP00020",
      name: "钱七",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00020",
      skills: ["驾驶", "英语", "法律"],
    },
  ];

  const staffPromises = staffData.map((staff) =>
    prisma.staff.create({
      data: {
        code: staff.code,
        police_number: staff.police_number,
        name: staff.name,
        position: staff.position,
        department: staff.department,
        contact: staff.contact,
        vehicle: staff.vehicle,
        skills: { set: staff.skills },
      },
    })
  );
  const staffs = await Promise.all(staffPromises);

  // 随机选择3-5个成员
  function getRandomMembers(staffs: Staff[]) {
    const memberCount = Math.floor(Math.random() * 3) + 3;
    const shuffled = staffs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, memberCount);
  }

  // 创建团队并分配领导和成员
  const team1 = await prisma.team.create({
    data: {
      team_name: "勤务一组",
      leader: {
        connect: { id: staffs[0].id }, // 假设id为1的人员是领导
      },
    },
  });

  const team2 = await prisma.team.create({
    data: {
      team_name: "勤务二组",
      leader: {
        connect: { id: staffs[1].id }, // 假设id为2的人员是领导
      },
    },
  });

  const team3 = await prisma.team.create({
    data: {
      team_name: "勤务三组",
      leader: {
        connect: { id: staffs[2].id }, // 假设id为3的人员是领导
      },
    },
  });

  // 为每个团队分配3-5个成员
  const teams = [team1, team2, team3];
  for (const team of teams) {
    const members = getRandomMembers(staffs);
    for (const member of members) {
      await prisma.teamMember.create({
        data: {
          team_id: team.id,
          staff_id: member.id,
        },
      });
    }
  }

  console.log({ team1, team2, team3 });

  // 获取当前月份的第一天和最后一天
  const today = new Date();
  const firstDayOfMonth = startOfMonth(today);
  const lastDayOfMonth = endOfMonth(today);

  // 生成本月的排班数据
  let currentDate = firstDayOfMonth;
  let isTeam1DayShift = true;

  while (currentDate <= lastDayOfMonth) {
    await prisma.schedule.create({
      data: {
        schedule_date: currentDate,
        day_team: {
          connect: { id: isTeam1DayShift ? team1.id : team2.id },
        },
        night_team: {
          connect: { id: isTeam1DayShift ? team2.id : team1.id },
        },
      },
    });

    // 切换班次
    isTeam1DayShift = !isTeam1DayShift;
    // 日期加1
    currentDate = addDays(currentDate, 1);
  }
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
