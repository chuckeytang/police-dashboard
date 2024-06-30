"use client";

import { Admin, Resource, Menu, Layout, LayoutProps } from "react-admin";
import dataProvider from "@/dataProvider";
import StaffList from "@/components1/staff/StaffList";
import StaffShow from "@/components1/staff/StaffShow";
import StaffEdit from "@/components1/staff/StaffEdit";
import StaffCreate from "@/components1/staff/StaffCreate";
import TeamList from "@/components1/team/TeamList";
import ScheduleTable from "@/components1/schedule/ScheduleTable";
import { JSX, ReactNode, useState } from "react";
import VehicleList from "@/components1/vehicle/VehicleList";
import VehicleShow from "@/components1/vehicle/VehicleShow";
import VehicleEdit from "@/components1/vehicle/VehicleEdit";
import VehicleCreate from "@/components1/vehicle/VehicleCreate";
import PatrolTeamList from "@/components1/patrolTeam/PatrolTeamList";
import PatrolScheduleTable from "@/components1/patrolSchedule/PatrolScheduleTable";
import WorkFocusList from "@/components1/workFocus/WorkFocusList";
import WorkFocusShow from "@/components1/workFocus/WorkFocusShow";
import WorkFocusEdit from "@/components1/workFocus/WorkFocusEdit";
import WorkFocusCreate from "@/components1/workFocus/WorkFocusCreate";
import IncidentAnalysisList from "@/components1/incidentAnalysis/IncidentAnalysisList";
import IncidentAnalysisShow from "@/components1/incidentAnalysis/IncidentAnalysisShow";
import IncidentAnalysisEdit from "@/components1/incidentAnalysis/IncidentAnalysisEdit";
import IncidentAnalysisCreate from "@/components1/incidentAnalysis/IncidentAnalysisCreate";
import RecentDutiesList from "@/components1/recentDuties/RecentDutiesList";
import RecentDutiesCreate from "@/components1/recentDuties/RecentDutiesCreate";
import RecentDutiesEdit from "@/components1/recentDuties/RecentDutiesEdit";
import RecentDutiesShow from "@/components1/recentDuties/RecentDutiesShow";
import Loading from "@/components1/common/Loading";
import { CustomDashboardMenuItem } from "@/components1/common/CustomButtons";
import i18nProvider from "@/components1/common/i18nProvider";

interface CustomMenuItemProps {
  primaryText: string;
  children: React.ReactNode;
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
            <Menu.Item to="/vehicle/patrolSchedule" primaryText="巡逻排班" />
            <Menu.Item to="/vehicle/patrolTeam" primaryText="巡逻勤组" />
          </div>
        )}
      </CustomMenuItem>
      <Menu.Item to="/workFocus" primaryText="工作重点" />
      <Menu.Item to="/incidentAnalysis" primaryText="警情分析" />
      <Menu.Item to="/recentDuties" primaryText="近期勤务" />
    </Menu>
  );
};

const MyLayout = (props: LayoutProps) => (
  <Layout {...props} menu={CustomMenu} />
);

const AdminPageContent = () => (
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
    <Resource
      name="personnel/team"
      list={TeamList}
      options={{ label: "排班管理" }}
    />
    <Resource
      name="personnel/schedule"
      list={ScheduleTable}
      options={{ label: "排班表" }}
    />
    <Resource
      name="vehicle/vehicle"
      list={VehicleList}
      show={VehicleShow}
      edit={VehicleEdit}
      create={VehicleCreate}
      options={{ label: "车辆录入" }}
    />
    <Resource
      name="vehicle/patrolTeam"
      list={PatrolTeamList}
      options={{ label: "巡逻勤组" }}
    />
    <Resource
      name="vehicle/patrolSchedule"
      list={PatrolScheduleTable}
      options={{ label: "巡逻排班" }}
    />
    <Resource
      name="workFocus"
      list={WorkFocusList}
      show={WorkFocusShow}
      edit={WorkFocusEdit}
      create={WorkFocusCreate}
      options={{ label: "工作重点" }}
    />
    <Resource
      name="incidentAnalysis"
      list={IncidentAnalysisList}
      show={IncidentAnalysisShow}
      edit={IncidentAnalysisEdit}
      create={IncidentAnalysisCreate}
      options={{ label: "警情分析" }}
    />
    <Resource
      name="recentDuties"
      list={RecentDutiesList}
      show={RecentDutiesShow}
      edit={RecentDutiesEdit}
      create={RecentDutiesCreate}
      options={{ label: "近期勤务" }}
    />
  </Admin>
);

export default AdminPageContent;
