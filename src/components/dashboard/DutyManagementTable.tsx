import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Box,
  Button,
  Paper,
  Typography,
  Skeleton,
} from "@mui/material";
import { DbTableBodyCell, DbTableCell, DbTableHeaderCell } from "./DbTableCell";
import { Staff, Team } from "@/types";

const DutyManagementTableHead: React.FC<{ leaders: Staff[] }> = ({
  leaders,
}) => (
  <TableHead>
    <TableRow>
      <DbTableHeaderCell>值班领导</DbTableHeaderCell>
      <div className="flex flex-col">
        {leaders.map((leader, index) => (
          <DbTableHeaderCell key={index}>
            {leader.name} {leader.contact}
          </DbTableHeaderCell>
        ))}
      </div>
    </TableRow>
  </TableHead>
);

interface DutyManagementTableBodyProps {
  staffData: Staff[];
}

const DutyManagementTableBody: React.FC<DutyManagementTableBodyProps> = ({
  staffData,
}) => (
  <TableBody>
    {staffData.map((staff, index) => (
      <TableRow key={index}>
        <DbTableBodyCell>
          {staff.is_leader ? "值班领导" : "值班员"}
        </DbTableBodyCell>
        <DbTableBodyCell>
          {staff.name} {staff.contact}
        </DbTableBodyCell>
      </TableRow>
    ))}
  </TableBody>
);

const DutyManagementTable: React.FC = () => {
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [leaders, setLeaders] = useState<Staff[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noDuty, setNoDuty] = useState(false);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get("/api/personnel/todayStaff");
        console.log("Fetched staff data:", response.data);

        if (!response.data.dayTeam && !response.data.nightTeam) {
          setNoDuty(true);
        } else {
          const dayTeam = response.data.dayTeam;
          const nightTeam = response.data.nightTeam;

          const combinedStaffData = [
            ...(dayTeam?.members || []),
            ...(nightTeam?.members || []),
          ];

          setStaffData(combinedStaffData);

          const combinedLeaders = [
            ...(dayTeam?.leader ? [dayTeam.leader] : []),
            ...(nightTeam?.leader ? [nightTeam.leader] : []),
          ];

          setLeaders(combinedLeaders);
          setNoDuty(false);
        }
      } catch (error) {
        console.error("Error fetching staff data:", error);
        setNoDuty(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStaffData();
  }, []);

  const handleButtonClick = () => {
    window.location.href = "/admin#/personnel/staff";
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
          height: "365px",
        }}
      >
        <Typography variant="h6">勤务管理</Typography>
        <Typography className="text-sky-300">加载中...</Typography>
        <Skeleton variant="text" width="40%" />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={50}
          className="mt-2"
        />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={50}
          className="mt-2"
        />
      </Paper>
    );
  }

  if (noDuty) {
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
          height: "365px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">勤务管理</Typography>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            className="bg-[#1e3a8aa3] ml-auto w-10 h-8"
          >
            编辑
          </Button>
        </Box>
        <Typography className="text-sky-300">今日无值班班组</Typography>
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
        height: "365px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">勤务管理</Typography>
        <Typography className="ml-2 text-sm">今日备勤等级:</Typography>
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
            <DutyManagementTableHead leaders={leaders} />
            <DutyManagementTableBody staffData={staffData} />
          </Table>
        </TableContainer>
      </TableContainer>
    </Paper>
  );
};

export default DutyManagementTable;
