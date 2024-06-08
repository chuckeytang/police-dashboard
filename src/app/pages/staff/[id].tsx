import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
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



export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const staff = await prisma.staff.findUnique({
    where: { id: Number(id) },
  });
  return {
    props: { staff },
  };
};

const StaffDetail = ({ staff }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">人员详情</h1>
      <p><strong>编号:</strong> {staff.code}</p>
      <p><strong>警号:</strong> {staff.police_number}</p>
      <p><strong>姓名:</strong> {staff.name}</p>
      <p><strong>职务/警衔:</strong> {staff.position}</p>
      <p><strong>所属部门:</strong> {staff.department}</p>
      <p><strong>联系方式:</strong> {staff.contact}</p>
      <p><strong>使用车辆:</strong> {staff.vehicle || '-'}</p>
      <Link href="/staff">
        <a className="text-blue-500 hover:underline mt-4 inline-block">返回</a>
      </Link>
    </div>
  );
};

export default StaffDetail;
