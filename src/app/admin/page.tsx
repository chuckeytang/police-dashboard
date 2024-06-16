"use client";

import { Admin, Resource, Menu, Layout, LayoutProps } from "react-admin";
import dataProvider from "@/dataProvider";
import StaffList from "@/components/staff/StaffList";
import StaffShow from "@/components/staff/StaffShow";
import StaffEdit from "@/components/staff/StaffEdit";
import StaffCreate from "@/components/staff/StaffCreate";
import TeamList from "@/components/team/TeamList";
import ScheduleTable from "@/components/schedule/ScheduleTable"; // 导入 ScheduleTable
import { JSX, ReactNode, useState } from "react";

interface CustomMenuItemProps {
  primaryText: string;
  children: ReactNode;
  onClick: () => void;
}

const CustomMenuItem = ({
  primaryText,
  children,
  onClick,
}: CustomMenuItemProps) => {
  return (
    <div>
      <Menu.Item to="#" primaryText={primaryText} onClick={onClick} />
      {children}
    </div>
  );
};

const CustomMenu = () => {
  const [personnelOpen, setPersonnelOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  const handlePersonnelClick = () => {
    setPersonnelOpen(!personnelOpen);
  };

  const handleOtherClick = () => {
    setOtherOpen(!otherOpen);
  };

  return (
    <Menu>
      <Menu.DashboardItem />
      <CustomMenuItem primaryText="勤务管理" onClick={handlePersonnelClick}>
        {personnelOpen && (
          <div className="flex flex-col pl-4">
            <Menu.Item to="/personnel/staff" primaryText="人员录入" />
            <Menu.Item to="/personnel/schedule" primaryText="排班表" />
            <Menu.Item to="/personnel/team" primaryText="排班管理" />
          </div>
        )}
      </CustomMenuItem>
      <CustomMenuItem primaryText="其他管理" onClick={handleOtherClick}>
        {otherOpen && (
          <div className="flex flex-col pl-4">
            <Menu.Item to="/other/option1" primaryText="选项一" />
            <Menu.Item to="/other/option2" primaryText="选项二" />
          </div>
        )}
      </CustomMenuItem>
    </Menu>
  );
};

const MyLayout = (props: LayoutProps) => (
  <Layout {...props} menu={CustomMenu} />
);

const AdminPage = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource
      name="personnel/staff"
      list={StaffList}
      show={StaffShow}
      edit={StaffEdit}
      create={StaffCreate}
    />
    <Resource name="personnel/team" list={TeamList} />
    <Resource name="personnel/schedule" list={ScheduleTable} />{" "}
    {/* 新增排班表 */}
  </Admin>
);

export default AdminPage;
