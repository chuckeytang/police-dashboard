"use client";

import { Admin, Resource, Menu, Layout, LayoutProps } from "react-admin";
import dataProvider from "@/dataProvider";
import StaffList from "@/components/staff/StaffList";
import StaffShow from "@/components/staff/StaffShow";
import StaffEdit from "@/components/staff/StaffEdit";
import StaffCreate from "@/components/staff/StaffCreate";
import TeamList from "@/components/team/TeamList";
import ScheduleTable from "@/components/schedule/ScheduleTable";
import { JSX, ReactNode, useState } from "react";
import VehicleList from "@/components/vehicle/VehicleList";
import VehicleShow from "@/components/vehicle/VehicleShow";
import VehicleEdit from "@/components/vehicle/VehicleEdit";
import VehicleCreate from "@/components/vehicle/VehicleCreate";
import PatrolTeamList from "@/components/patrolteam/PatrolTeamList";
import PatrolScheduleTable from "@/components/patrolschedule/PatrolScheduleTable";
import WorkFocusList from "@/components/workfocus/WorkFocusList";
import WorkFocusShow from "@/components/workfocus/WorkFocusShow";
import WorkFocusEdit from "@/components/workfocus/WorkFocusEdit";
import WorkFocusCreate from "@/components/workfocus/WorkFocusCreate";
import IncidentAnalysisList from "@/components/incidentanalysis/IncidentAnalysisList";
import IncidentAnalysisShow from "@/components/incidentanalysis/IncidentAnalysisShow";
import IncidentAnalysisEdit from "@/components/incidentanalysis/IncidentAnalysisEdit";
import IncidentAnalysisCreate from "@/components/incidentanalysis/IncidentAnalysisCreate";
import RecentDutiesList from "@/components/recentduties/RecentDutiesList";
import RecentDutiesCreate from "@/components/recentduties/RecentDutiesCreate";
import RecentDutiesEdit from "@/components/recentduties/RecentDutiesEdit";
import RecentDutiesShow from "@/components/recentduties/RecentDutiesShow";
import Loading from "@/components/common/Loading";
import { CustomDashboardMenuItem } from "@/components/common/CustomButtons";
import i18nProvider from "@/components/common/i18nProvider";

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
      <CustomDashboardMenuItem />
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
            <Menu.Item to="/vehicle/patrolschedule" primaryText="巡逻排班" />
            <Menu.Item to="/vehicle/patrolteam" primaryText="巡逻勤组" />
          </div>
        )}
      </CustomMenuItem>
      <Menu.Item to="/workfocus" primaryText="工作重点" />
      <Menu.Item to="/incidentanalysis" primaryText="警情分析" />
      <Menu.Item to="/recentduties" primaryText="近期勤务" />
    </Menu>
  );
};

const MyLayout = (props: LayoutProps) => (
  <Layout {...props} menu={CustomMenu} />
);

const AdminPage = () => (
  <Admin
    dataProvider={dataProvider}
    layout={MyLayout}
    loading={Loading}
    i18nProvider={i18nProvider}
  >
    <Resource
      name="personnel/staff"
      list={StaffList}
      show={StaffShow}
      edit={StaffEdit}
      create={StaffCreate}
      options={{ label: "人员录入" }}
    />
    <Resource name="personnel/team" list={TeamList} />
    <Resource name="personnel/schedule" list={ScheduleTable} />
    <Resource
      name="vehicle/vehicle"
      list={VehicleList}
      show={VehicleShow}
      edit={VehicleEdit}
      create={VehicleCreate}
    />
    <Resource name="vehicle/patrolteam" list={PatrolTeamList} />
    <Resource name="vehicle/patrolschedule" list={PatrolScheduleTable} />
    <Resource
      name="workfocus"
      list={WorkFocusList}
      show={WorkFocusShow}
      edit={WorkFocusEdit}
      create={WorkFocusCreate}
    />
    <Resource
      name="incidentanalysis"
      list={IncidentAnalysisList}
      show={IncidentAnalysisShow}
      edit={IncidentAnalysisEdit}
      create={IncidentAnalysisCreate}
    />
    <Resource
      name="recentduties"
      list={RecentDutiesList}
      show={RecentDutiesShow}
      edit={RecentDutiesEdit}
      create={RecentDutiesCreate}
    />
  </Admin>
);

export default AdminPage;
