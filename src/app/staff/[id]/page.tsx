"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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

const StaffDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [staff, setStaff] = useState<Staff | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const fetchStaff = async () => {
        const res = await fetch(`/api/staff/${id}`); // Assuming you have an API endpoint to fetch a staff by ID
        console.log("res:" + res);
        const data = await res.json();
        setStaff(data);
        setLoading(false);
      };

      fetchStaff();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">人员详情</h1>
      {staff && (
        <div className="grid grid-cols-2 gap-2">
          <p>
            <strong>编号:</strong> {staff.code}
          </p>
          <p>
            <strong>警号:</strong> {staff.police_number}
          </p>
          <p>
            <strong>姓名:</strong> {staff.name}
          </p>
          <p>
            <strong>职务/警衔:</strong> {staff.position}
          </p>
          <p>
            <strong>所属部门:</strong> {staff.department}
          </p>
          <p>
            <strong>联系方式:</strong> {staff.contact}
          </p>
          <p>
            <strong>使用车辆:</strong> {staff.vehicle || "-"}
          </p>
          <Link href="/staff">
            <a className="text-blue-500 hover:underline mt-4 inline-block">
              返回
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default StaffDetail;
