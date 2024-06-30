//近期勤务板块
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Button,
  Paper,
  Typography,
  Skeleton,
} from "@mui/material";
import { DbTableBodyCell, DbTableCell, DbTableHeaderCell } from "./DbTableCell";
import { RecentDuties } from "@/types";

const RecentDutiesTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableHeaderCell>时间</DbTableHeaderCell>
      <DbTableHeaderCell>勤务类型</DbTableHeaderCell>
      <DbTableHeaderCell>勤务内容</DbTableHeaderCell>
    </TableRow>
  </TableHead>
);

interface RecentDutiesTableBodyProps {
  recentData: RecentDuties[];
}

const RecentDutiesTableBody: React.FC<RecentDutiesTableBodyProps> = ({
  recentData,
}) => (
  <TableBody>
    {recentData.map((row, index) => (
      <TableRow key={index}>
        <DbTableBodyCell>{row.duty_date}</DbTableBodyCell>
        <DbTableBodyCell>{row.duty_type}</DbTableBodyCell>
        <DbTableBodyCell>{row.content}</DbTableBodyCell>
      </TableRow>
    ))}
  </TableBody>
);

const RecentDutiesTable: React.FC = () => {
  const [recentData, setRecentData] = useState<RecentDuties[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const response = await axios.get("/api/recentDuties/search");
        for (let i = 0; i < response.data.length; i++) {
          response.data[i].duty_date = new Date(
            response.data[i].duty_date
          ).toLocaleDateString();
        }
        console.log("Fetched recent duties data:", response.data);
        setRecentData(response.data);
      } catch (error) {
        console.error("Error fetching recent duties data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecentData();
  }, []);

  const handleButtonClick = () => {
    window.location.href = "/admin#/recentDuties";
  };

  if (isLoading) {
    return (
      <Paper
        className="animate__animated animate__zoomInRight"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          mt: 1,
          backgroundColor: "#003366a3",
          boxShadow: "none",
          border: "2px solid #1e3a8a",
          color: "white",
          height: "240px",
        }}
      >
        <Typography variant="h6">近期勤务</Typography>
        <Typography sx={{ color: "skyblue" }}>加载中...</Typography>
        <Skeleton variant="text" width="40%" />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={50}
          sx={{ mt: 2 }}
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={50}
          sx={{ mt: 2 }}
        />
      </Paper>
    );
  }

  return (
    <Paper
      className="animate__animated animate__zoomInRight"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        mt: 1,
        backgroundColor: "#003366a3",
        boxShadow: "none",
        border: "2px solid #1e3a8a",
        color: "white",
        height: "240px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">近期勤务</Typography>
        <Button
          variant="contained"
          onClick={handleButtonClick}
          className="bg-[#1e3a8aa3] ml-auto w-10 h-8"
        >
          编辑
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          marginTop: "15px",
          overflow: "hidden",
          boxShadow: "none",
        }}
      >
        <TableContainer>
          <Table>
            <RecentDutiesTableHead />
            <RecentDutiesTableBody recentData={recentData} />
          </Table>
        </TableContainer>
      </TableContainer>
    </Paper>
  );
};

export default RecentDutiesTable;
