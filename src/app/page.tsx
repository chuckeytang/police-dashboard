import * as React from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        定海派出所
      </Typography>
      <Grid container spacing={3}>
        {/* 左侧面板 */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography variant="h6">勤务管理</Typography>
            {/* Add your content here */}
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 }}>
            <Typography variant="h6">街面巡逻</Typography>
            {/* Add your content here */}
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 }}>
            <Typography variant="h6">工作重点</Typography>
            {/* Add your content here */}
          </Paper>
        </Grid>

        {/* 中间地图 */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/source/bg.jpg"
              alt="地图"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Grid>

        {/* 右侧面板 */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography variant="h6">警情分析</Typography>
            {/* Add your content here */}
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 }}>
            <Typography variant="h6">近期勤务</Typography>
            {/* Add your content here */}
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 }}>
            <Typography variant="h6">民警-警情</Typography>
            {/* Add your content here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
