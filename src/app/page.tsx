"use client";

import * as React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import "animate.css";
import PoliceIncidentTable from "@/components/dashboard/PoliceIncidentTable";
import RecentDutiesTable from "@/components/dashboard/RecentDutiesTable";
import IncidentAnalysisTable from "@/components/dashboard/IncidentAnalysisTable";
import WorkforceTable from "@/components/dashboard/WorkforceTable";
import PatrolTeamTable from "@/components/dashboard/PatrolTeamTable";
import DutyManagementTable from "@/components/dashboard/DutyManagementTable";

const Dashboard = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: 0,
        margin: 0,
        position: "relative",
        backgroundColor: "#001f3f",
      }}
    >
      {/* 背景层 */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#001f3f", // 夜蓝色
          zIndex: -1, // 设置较低的 zIndex 确保背景在最底层
        }}
      />

      <Grid container spacing={2} className="p-2">
        <Grid item xs={3} className="z-10">
          {/* 勤务管理 */}
          <DutyManagementTable />

          {/* 街面巡逻 */}
          <PatrolTeamTable />
        </Grid>

        <Grid item xs={6} position="relative" className="z-0">
          {/* 居中显示的文本 */}
          <div className="animate__animated animate__fadeIn absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 text-sky-100 flex items-center text-4xl mt-6">
            <HiMiniBuildingLibrary className="mr-6" />
            定海派出所
          </div>
          <img
            className="animate__animated animate__fadeIn absolute top-32 left-0 w-full h-full max-w-[960px] max-h-[440px] rounded-lg transform scale-x-[120%] scale-y-[120%]"
            src="/source/bg.jpg"
            alt="map"
          />
          <div className="w-full h-[585px]"></div>
          <IncidentAnalysisTable />
        </Grid>

        <Grid item xs={3} className="z-10">
          {/* 近期勤务 */}
          <RecentDutiesTable />

          {/* 工作重点 */}
          <WorkforceTable />

          {/* 民警警情 */}
          <PoliceIncidentTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
