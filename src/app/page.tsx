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
      sx={{ padding: 0, margin: 0, position: "relative" }}
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

      <Grid container spacing={2} sx={{ zIndex: 3, padding: 2 }}>
        <Grid item xs={3}>
          {/* 勤务管理 */}
          <DutyManagementTable />

          {/* 街面巡逻 */}
          <PatrolTeamTable />

          {/* 工作重点 */}
          <WorkforceTable />
        </Grid>

        <Grid item xs={6} position="relative">
          {/* 居中显示的文本 */}
          <Typography
            className="animate__animated animate__fadeIn " // 添加动画类
            variant="h4"
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%,50%)", // 调整文本位置到图片上方
              zIndex: 1, // 确保文本在图片之上
              color: "white", // 文本颜色为白色
              display: "flex",
            }}
          >
            <HiMiniBuildingLibrary />
            定海派出所
          </Typography>
          <Box
            className="animate__animated animate__fadeIn"
            component="img"
            src="/source/bg.jpg" // 替换为你的图片URL
            alt="map"
            sx={{
              width: "100%", // 图片宽度，占容器的80%
              height: "100%", // 保持图片的原始比例
              maxWidth: "960px", // 最大宽度限制，避免图片过大
              maxHeight: "440px", // 最大高度限制，保持16:9比例
              borderRadius: 2, // 圆角
              zIndex: -1,
              boxShadow: "none",
              position: "absolute",
              transform: "scale(1.5)",
              top: 80,
              left: 0,
            }}
            mt={4}
          ></Box>

          <Box
            className="animate__animated animate__fadeIn"
            sx={{
              width: "100%", // 图片宽度，占容器的80%
              height: "100%", // 保持图片的原始比例
              maxWidth: "960px", // 最大宽度限制，避免图片过大
              maxHeight: "440px", // 最大高度限制，保持16:9比例
              borderRadius: 2, // 圆角
              zIndex: -1,
              boxShadow: "none",
            }}
            mt={4}
          ></Box>

          <IncidentAnalysisTable />
        </Grid>

        <Grid item xs={3}>
          <RecentDutiesTable />

          <PoliceIncidentTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
