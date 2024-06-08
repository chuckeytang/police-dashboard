import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

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

interface StaffPageProps {
  staff: Staff[];
}

export async function getServerSideProps() {
  const staff = await prisma.staff.findMany();
  return {
    props: { staff },
  };
}

const StaffPage = ({ staff }: StaffPageProps) => {
  return (
    <div className="flex">
      <div className="w-64 border-r border-gray-200 p-4">
        <h3 className="font-bold mb-4">勤务管理</h3>
        <ul>
          <li className="mb-2"><Link href="/staff" className="text-blue-500 hover:underline">人员录入</Link></li>
          <li className="mb-2"><Link href="#" className="text-blue-500 hover:underline">排班表</Link></li>
          <li className="mb-2"><Link href="#" className="text-blue-500 hover:underline">排班管理</Link></li>
          <li className="mb-2"><Link href="#" className="text-blue-500 hover:underline">街面巡逻</Link></li>
          <li className="mb-2"><Link href="#" className="text-blue-500 hover:underline">工作重点</Link></li>
          <li className="mb-2"><Link href="#" className="text-blue-500 hover:underline">警情分析</Link></li>
          <li className="mb-2"><Link href="#" className="text-blue-500 hover:underline">近期勤务</Link></li>
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
                <td className="py-2 px-4 border-b">{person.vehicle || '-'}</td>
                <td className="py-2 px-4 border-b">
                  <Link href={`/staff/${person.id}`} className="text-blue-500 hover:underline">详情</Link>
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
