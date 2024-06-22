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
import VehicleList from "@/components/vehicle/VehicleList";
import VehicleShow from "@/components/vehicle/VehicleShow";
import VehicleEdit from "@/components/vehicle/VehicleEdit";
import VehicleCreate from "@/components/vehicle/VehicleCreate";
import PatrolTeamList from "@/components/patrolteam/PatrolTeamList";
import PatrolTeamListWrapper from "@/components/patrolteam/PatrolTeamList";

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
      <CustomMenuItem primaryText="街面巡逻" onClick={handleOtherClick}>
        {otherOpen && (
          <div className="flex flex-col pl-4">
            <Menu.Item to="/vehicle/vehicle" primaryText="车辆录入" />
            <Menu.Item to="/vehicle/patrolteam" primaryText="巡逻勤组" />
            <Menu.Item to="/vehicle/patrolschedule" primaryText="巡逻排班" />
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
      name="vehicle/vehicle"
      list={VehicleList}
      show={VehicleShow}
      edit={VehicleEdit}
      create={VehicleCreate}
    />
    <Resource name="vehicle/patrolteam" list={PatrolTeamList} />
    <Resource name="vehicle/patrolschedule" list={ScheduleTable} />
    <Resource
      name="personnel/staff"
      list={StaffList}
      show={StaffShow}
      edit={StaffEdit}
      create={StaffCreate}
    />
    <Resource name="personnel/team" list={TeamList} />
    <Resource name="personnel/schedule" list={ScheduleTable} />
  </Admin>
);

export default AdminPage;
