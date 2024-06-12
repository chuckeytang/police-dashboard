"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Staff {
  id: number;
  code: string;
  police_number: string;
  name: string;
  position: string;
  department: string;
  contact: string;
  vehicle?: string;
  created_at: string;
  updated_at: string;
}

const mockData: Staff[] = [
  {
    id: 1,
    code: "01",
    police_number: "ZP00001",
    name: "秦壮保",
    position: "主任",
    department: "刑侦科",
    contact: "18876787654",
    vehicle: "陕A-00001",
    created_at: "2024-01-01T12:00:00Z",
    updated_at: "2024-01-01T12:00:00Z",
  },
  {
    id: 2,
    code: "02",
    police_number: "ZP00002",
    name: "钱勤笺",
    position: "科长",
    department: "技术科",
    contact: "18876787654",
    vehicle: "陕A-00002",
    created_at: "2024-01-01T12:00:00Z",
    updated_at: "2024-01-01T12:00:00Z",
  },
  {
    id: 3,
    code: "03",
    police_number: "ZP00003",
    name: "张颢启",
    position: "科长",
    department: "刑侦科",
    contact: "18876787654",
    vehicle: "陕A-00003",
    created_at: "2024-01-01T12:00:00Z",
    updated_at: "2024-01-01T12:00:00Z",
  },
  // 继续添加更多的模拟数据
];

const StaffPage = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setStaff(mockData);
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex">
      <div className="w-64 border-r border-gray-200 p-4">
        <h3 className="font-bold mb-4">勤务管理</h3>
        <ul>
          <li className="mb-2">
            <Link href="/staff" className="text-blue-500 hover:underline">
              人员录入
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="text-blue-500 hover:underline">
              排班表
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="text-blue-500 hover:underline">
              排班管理
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="text-blue-500 hover:underline">
              街面巡逻
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="text-blue-500 hover:underline">
              工作重点
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="text-blue-500 hover:underline">
              警情分析
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="text-blue-500 hover:underline">
              近期勤务
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">人员录入</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">编号</th>
              <th className="py-2 px-4 border-b">警号</th>
              <th className="py-2 px-4 border-b">姓名</th>
              <th className="py-2 px-4 border-b">职务/警衔</th>
              <th className="py-2 px-4 border-b">所属部门</th>
              <th className="py-2 px-4 border-b">联系方式</th>
              <th className="py-2 px-4 border-b">使用车辆</th>
              <th className="py-2 px-4 border-b">操作</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((person) => (
              <tr key={person.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{person.code}</td>
                <td className="py-2 px-4 border-b">{person.police_number}</td>
                <td className="py-2 px-4 border-b">{person.name}</td>
                <td className="py-2 px-4 border-b">{person.position}</td>
                <td className="py-2 px-4 border-b">{person.department}</td>
                <td className="py-2 px-4 border-b">{person.contact}</td>
                <td className="py-2 px-4 border-b">{person.vehicle || "-"}</td>
                <td className="py-2 px-4 border-b">
                  <Link
                    href={`/staff/${person.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    详情
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffPage;
