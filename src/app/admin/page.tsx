"use client";

import { Admin, Resource, Menu, Layout, LayoutProps } from "react-admin";
import dataProvider from "@/dataProvider";
import StaffList from "@/components/StaffList";
import StaffShow from "@/components/StaffShow";
import StaffEdit from "@/components/StaffEdit";
import StaffCreate from "@/components/StaffCreate";
import TeamList from "@/components/TeamList"; // 新增导入 TeamList
import { JSX } from "react";

const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.Item to="/personnel" primaryText="勤务管理">
      <div className="flex flex-col">
        <Menu.Item to="/personnel/staff" primaryText="人员录入" />
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
    <Resource name="personnel/team" list={TeamList} /> {/* 新增排班管理 */}
  </Admin>
);

export default AdminPage;
