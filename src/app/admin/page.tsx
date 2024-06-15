"use client";

import { Admin, Resource, Menu, Layout, LayoutProps } from "react-admin";
import dataProvider from "@/dataProvider";
import StaffList from "@/components/staff/StaffList";
import StaffShow from "@/components/staff/StaffShow";
import StaffEdit from "@/components/staff/StaffEdit";
import StaffCreate from "@/components/staff/StaffCreate";
import TeamList from "@/components/team/TeamList";
import ScheduleTable from "@/components/schedule/ScheduleTable"; // 导入 ScheduleTable
import { JSX } from "react";

const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.Item to="/personnel" primaryText="勤务管理">
      <div className="flex flex-col">
        <Menu.Item to="/personnel/staff" primaryText="人员录入" />
        <Menu.Item to="/personnel/schedule" primaryText="排班表" />
        <Menu.Item to="/personnel/team" primaryText="排班管理" />
      </div>
    </Menu.Item>
  </Menu>
);

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
