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
  await prisma.patrolSchedule.deleteMany({});
  await prisma.patrolVehicleAssignment.deleteMany({});
  await prisma.patrolStaffAssignment.deleteMany({});
  await prisma.team.deleteMany({});
  await prisma.patrolTeam.deleteMany({});
  await prisma.staff.deleteMany({});
  await prisma.vehicle.deleteMany({});
  await prisma.workFocus.deleteMany({});
  await prisma.incidentAnalysis.deleteMany({});

  // 创建20个staff记录
  const staffData = [
    {
      police_number: "ZP00001",
      name: "秦壮保",
      position: "主任",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00001",
      skills: ["英语", "法律", "编程"],
    },
    {
      police_number: "ZP00002",
      name: "钱勤筠",
      position: "科长",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00002",
      skills: ["驾驶", "射击", "英语"],
    },
    {
      police_number: "ZP00003",
      name: "张颢启",
      position: "科长",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00003",
      skills: ["法律", "谈判", "编程"],
    },
    {
      police_number: "ZP00004",
      name: "雷琳",
      position: "民警",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00004",
      skills: ["射击", "驾驶", "英语"],
    },
    {
      police_number: "ZP00005",
      name: "吴川宜",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00005",
      skills: ["编程", "驾驶", "谈判"],
    },
    {
      police_number: "ZP00006",
      name: "孙英",
      position: "科长",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00006",
      skills: ["驾驶", "英语", "编程"],
    },
    {
      police_number: "ZP00007",
      name: "李彬",
      position: "科长",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00007",
      skills: ["法律", "驾驶", "谈判"],
    },
    {
      police_number: "ZP00008",
      name: "赵伟",
      position: "民警",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00008",
      skills: ["射击", "驾驶", "英语"],
    },
    {
      police_number: "ZP00009",
      name: "周晓",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00009",
      skills: ["编程", "驾驶", "谈判"],
    },
    {
      police_number: "ZP00010",
      name: "王磊",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00010",
      skills: ["驾驶", "英语", "法律"],
    },
    {
      police_number: "ZP00011",
      name: "刘畅",
      position: "主任",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00011",
      skills: ["英语", "法律", "编程"],
    },
    {
      police_number: "ZP00012",
      name: "陈浩",
      position: "科长",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00012",
      skills: ["驾驶", "射击", "英语"],
    },
    {
      police_number: "ZP00013",
      name: "丁磊",
      position: "科长",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00013",
      skills: ["法律", "谈判", "编程"],
    },
    {
      police_number: "ZP00014",
      name: "黄丽",
      position: "民警",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00014",
      skills: ["射击", "驾驶", "英语"],
    },
    {
      police_number: "ZP00015",
      name: "韩梅",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00015",
      skills: ["编程", "驾驶", "谈判"],
    },
    {
      police_number: "ZP00016",
      name: "张强",
      position: "科长",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00016",
      skills: ["驾驶", "英语", "编程"],
    },
    {
      police_number: "ZP00017",
      name: "李四",
      position: "科长",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00017",
      skills: ["法律", "驾驶", "谈判"],
    },
    {
      police_number: "ZP00018",
      name: "王五",
      position: "民警",
      department: "刑侦科",
      contact: "18876787654",
      vehicle: "陕A-00018",
      skills: ["射击", "驾驶", "英语"],
    },
    {
      police_number: "ZP00019",
      name: "赵六",
      position: "民警",
      department: "技术科",
      contact: "18876787654",
      vehicle: "陕A-00019",
      skills: ["编程", "驾驶", "谈判"],
    },
    {
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
  const patrolTeams = [];
  for (let i = 1; i <= 3; i++) {
    const patrolTeam = await prisma.patrolTeam.create({
      data: {
        team_name: `巡逻组${i}`,
      },
    });

    patrolTeams.push(patrolTeam);

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

  // 生成本月的排班数据
  currentDate = firstDayOfMonth;
  isTeam1DayShift = true;
  let teamIndex = 0;

  while (currentDate <= lastDayOfMonth) {
    await prisma.patrolSchedule.create({
      data: {
        schedule_date: currentDate,
        patrol_team_id: patrolTeams[teamIndex % patrolTeams.length].id,
      },
    });

    // 切换到下一个巡逻组
    teamIndex++;
    // 日期加1
    currentDate = addDays(currentDate, 1);
  }

  console.log("巡逻排班数据创建完成");

  // 创建一些 WorkFocus 数据
  const workFocusData = [
    {
      focus_date: firstDayOfMonth,
      content: "加强社区巡逻，确保安全",
    },
    {
      focus_date: addDays(firstDayOfMonth, 2),
      content: "处理市中心交通问题",
    },
    {
      focus_date: addDays(firstDayOfMonth, 5),
      content: "与学校合作进行安全教育",
    },
    {
      focus_date: addDays(firstDayOfMonth, 10),
      content: "社区义务劳动日",
    },
    {
      focus_date: addDays(firstDayOfMonth, 15),
      content: "道路修缮计划启动",
    },
  ];

  for (const data of workFocusData) {
    await prisma.workFocus.create({
      data,
    });
  }

  console.log("WorkFocus 数据创建完成");

  // 创建一些 IncidentAnalysis 数据
  const incidentAnalysisData = [
    {
      incident_number: "001",
      receiver: "张三",
      report_time: addDays(firstDayOfMonth, 1),
      contact_number: "1234567890",
      reporter: "李四",
      incident_category: "盗窃",
      report_source: "电话",
      incident_location: "东街123号",
      incident_details: "商店被盗",
      incident_status: "未反馈",
      response_time: addDays(firstDayOfMonth, 1),
    },
    {
      incident_number: "002",
      receiver: "王五",
      report_time: addDays(firstDayOfMonth, 2),
      contact_number: "0987654321",
      reporter: "赵六",
      incident_category: "交通事故",
      report_source: "微信",
      incident_location: "西街456号",
      incident_details: "两车相撞",
      incident_status: "已反馈",
      response_time: addDays(firstDayOfMonth, 2),
    },
    {
      incident_number: "003",
      receiver: "李四",
      report_time: addDays(firstDayOfMonth, 3),
      contact_number: "1122334455",
      reporter: "孙七",
      incident_category: "火灾",
      report_source: "微博",
      incident_location: "南街789号",
      incident_details: "住宅区火灾",
      incident_status: "未反馈",
      response_time: addDays(firstDayOfMonth, 3),
    },
    {
      incident_number: "004",
      receiver: "赵六",
      report_time: addDays(firstDayOfMonth, 4),
      contact_number: "6677889900",
      reporter: "周八",
      incident_category: "打架斗殴",
      report_source: "电话",
      incident_location: "北街101号",
      incident_details: "街头斗殴",
      incident_status: "已反馈",
      response_time: addDays(firstDayOfMonth, 4),
    },
    {
      incident_number: "005",
      receiver: "孙七",
      report_time: addDays(firstDayOfMonth, 5),
      contact_number: "4455667788",
      reporter: "吴九",
      incident_category: "诈骗",
      report_source: "邮件",
      incident_location: "中街202号",
      incident_details: "网络诈骗",
      incident_status: "未反馈",
      response_time: addDays(firstDayOfMonth, 5),
    },
  ];

  for (const data of incidentAnalysisData) {
    await prisma.incidentAnalysis.create({
      data,
    });
  }

  console.log("IncidentAnalysis 数据创建完成");

  // 创建一些 RecentDuties 数据
  const recentDutiesData = [
    {
      duty_date: firstDayOfMonth,
      duty_type: "巡逻",
      content: "加强社区巡逻，确保安全",
    },
    {
      duty_date: addDays(firstDayOfMonth, 1),
      duty_type: "交通执勤",
      content: "处理市中心交通问题",
    },
    {
      duty_date: addDays(firstDayOfMonth, 2),
      duty_type: "安全教育",
      content: "与学校合作进行安全教育",
    },
    {
      duty_date: addDays(firstDayOfMonth, 3),
      duty_type: "社区服务",
      content: "社区义务劳动日",
    },
    {
      duty_date: addDays(firstDayOfMonth, 4),
      duty_type: "维修",
      content: "道路修缮计划启动",
    },
  ];

  for (const data of recentDutiesData) {
    await prisma.recentDuties.create({
      data,
    });
  }

  console.log("RecentDuties 数据创建完成");
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
