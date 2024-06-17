import { PrismaClient, Staff } from "@prisma/client";
import { addDays, startOfMonth, endOfMonth } from "date-fns";
import mysql from "mysql2/promise";

const prisma = new PrismaClient();

async function main() {
  // 连接 MySQL 服务器（不指定数据库）
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "casino123", // 使用你设置的 MySQL root 用户密码
  });

  // 创建数据库（如果不存在）
  await connection.query(`CREATE DATABASE IF NOT EXISTS police_dashboard`);

  // 断开连接
  await connection.end();

  // 清空相关表的数据
  await prisma.teamMember.deleteMany({});
  await prisma.schedule.deleteMany({});
  await prisma.team.deleteMany({});
  await prisma.staff.deleteMany({});
  await prisma.vehicle.deleteMany({});
  await prisma.patrolVehicleAssignment.deleteMany({});
  await prisma.patrolStaffAssignment.deleteMany({});
  await prisma.patrolTeam.deleteMany({});

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

  console.log("勤务组创建完成");

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

  // 创建20个vehicle记录
  const vehicleData = [
    {
      code: "01",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "比亚迪",
      status: "完好",
      usage_status: "使用中",
      department: "刑侦科",
      user_id: 1, // 假设已存在用户ID 1
      borrow_time: new Date(2024, 3, 11, 9, 2, 9),
      return_time: new Date(2024, 3, 11, 9, 2, 9),
    },
    {
      code: "02",
      plate_number: "陕A-00932",
      vehicle_type: "货车",
      brand_model: "五菱宏光",
      status: "完好",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "03",
      plate_number: "陕A-00932",
      vehicle_type: "摩托车",
      brand_model: "东风风尚",
      status: "损坏",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "04",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "吉利",
      status: "损坏",
      usage_status: "使用中",
      department: "刑侦科",
      user_id: 2, // 假设已存在用户ID 2
      borrow_time: new Date(2024, 3, 11, 9, 2, 9),
      return_time: new Date(2024, 3, 11, 9, 2, 9),
    },
    {
      code: "05",
      plate_number: "陕A-00932",
      vehicle_type: "SUV",
      brand_model: "比亚迪",
      status: "完好",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "06",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "比亚迪",
      status: "完好",
      usage_status: "使用中",
      department: "刑侦科",
      user_id: 1, // 假设已存在用户ID 1
      borrow_time: new Date(2024, 3, 11, 9, 2, 9),
      return_time: new Date(2024, 3, 11, 9, 2, 9),
    },
    {
      code: "07",
      plate_number: "陕A-00932",
      vehicle_type: "货车",
      brand_model: "五菱宏光",
      status: "完好",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "08",
      plate_number: "陕A-00932",
      vehicle_type: "摩托车",
      brand_model: "东风风尚",
      status: "损坏",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "09",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "吉利",
      status: "损坏",
      usage_status: "使用中",
      department: "刑侦科",
      user_id: 2, // 假设已存在用户ID 2
      borrow_time: new Date(2024, 3, 11, 9, 2, 9),
      return_time: new Date(2024, 3, 11, 9, 2, 9),
    },
    {
      code: "10",
      plate_number: "陕A-00932",
      vehicle_type: "SUV",
      brand_model: "比亚迪",
      status: "完好",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "11",
      plate_number: "陕A-00932",
      vehicle_type: "SUV",
      brand_model: "吉利",
      status: "完好",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "12",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "五菱宏光",
      status: "损坏",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "13",
      plate_number: "陕A-00932",
      vehicle_type: "SUV",
      brand_model: "东风风尚",
      status: "完好",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "14",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "比亚迪",
      status: "损坏",
      usage_status: "使用中",
      department: "刑侦科",
      user_id: 3, // 假设已存在用户ID 3
      borrow_time: new Date(2024, 3, 11, 9, 2, 9),
      return_time: new Date(2024, 3, 11, 9, 2, 9),
    },
    {
      code: "15",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "比亚迪",
      status: "完好",
      usage_status: "使用中",
      department: "刑侦科",
      user_id: 4, // 假设已存在用户ID 4
      borrow_time: new Date(2024, 3, 11, 9, 2, 9),
      return_time: new Date(2024, 3, 11, 9, 2, 9),
    },
    {
      code: "16",
      plate_number: "陕A-00932",
      vehicle_type: "SUV",
      brand_model: "比亚迪",
      status: "完好",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "17",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "吉利",
      status: "损坏",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "18",
      plate_number: "陕A-00932",
      vehicle_type: "货车",
      brand_model: "五菱宏光",
      status: "完好",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "19",
      plate_number: "陕A-00932",
      vehicle_type: "摩托车",
      brand_model: "东风风尚",
      status: "损坏",
      usage_status: "空闲",
      department: null,
      user_id: null,
      borrow_time: null,
      return_time: null,
    },
    {
      code: "20",
      plate_number: "陕A-00932",
      vehicle_type: "轿车",
      brand_model: "比亚迪",
      status: "损坏",
      usage_status: "使用中",
      department: "刑侦科",
      user_id: 5, // 假设已存在用户ID 5
      borrow_time: new Date(2024, 3, 11, 9, 2, 9),
      return_time: new Date(2024, 3, 11, 9, 2, 9),
    },
  ];

  const vehiclePromises = vehicleData.map((vehicle) =>
    prisma.vehicle.create({
      data: {
        code: vehicle.code,
        plate_number: vehicle.plate_number,
        vehicle_type: vehicle.vehicle_type,
        brand_model: vehicle.brand_model,
        status: vehicle.status,
        usage_status: vehicle.usage_status,
        department: vehicle.department,
        user_id: vehicle.user_id,
        borrow_time: vehicle.borrow_time,
        return_time: vehicle.return_time,
      },
    })
  );

  const vehicles = await Promise.all(vehiclePromises);

  // 创建巡逻团队并分配车辆和成员
  for (let i = 1; i <= 3; i++) {
    const patrolTeam = await prisma.patrolTeam.create({
      data: {
        team_name: `巡逻组${i}`,
      },
    });

    // 分配车辆
    const vehicle = vehicles[i - 1]; // 假设车辆从1开始
    await prisma.patrolVehicleAssignment.create({
      data: {
        patrol_team_id: patrolTeam.id,
        vehicle_id: vehicle.id,
      },
    });

    // 分配成员并分配班次
    const members = getRandomMembers(staffs);
    const shifts = ["早班", "中班", "晚班"];
    for (const shift of shifts) {
      for (const member of members) {
        await prisma.patrolStaffAssignment.create({
          data: {
            patrol_team_id: patrolTeam.id,
            staff_id: member.id,
            shift: shift,
          },
        });
      }
    }
  }

  console.log("巡逻组创建完成");
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
