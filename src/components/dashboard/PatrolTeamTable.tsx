import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
  Skeleton,
} from "@mui/material";
import { PiPoliceCarFill } from "react-icons/pi";
import { DbTableBodyCell, DbTableHeaderCell } from "./DbTableCell";
import { PatrolTeam, Vehicle } from "@/types";

const PatrolTeamTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableHeaderCell />
      <DbTableHeaderCell />
      <DbTableHeaderCell>早</DbTableHeaderCell>
      <DbTableHeaderCell>中</DbTableHeaderCell>
      <DbTableHeaderCell>晚</DbTableHeaderCell>
    </TableRow>
  </TableHead>
);

interface PatrolTeamTableBodyProps {
  patrolTeamData: PatrolTeam[];
}

const PatrolTeamTableBody: React.FC<PatrolTeamTableBodyProps> = ({
  patrolTeamData,
}) => (
  <TableBody>
    {patrolTeamData.map((row, index) => (
      <TableRow key={index}>
        <DbTableBodyCell>
          <PiPoliceCarFill />
        </DbTableBodyCell>
        <DbTableBodyCell>{row.team_name}</DbTableBodyCell>
        <DbTableBodyCell>
          <div className="flex flex-col truncate space-x-1 w-[60px]">
            {row.patrol_staff_assignments &&
              row.patrol_staff_assignments
                .filter((member) => member.shift === "早班")
                .map((member, memberIndex) => (
                  <div key={memberIndex}>{member.staff.name}</div>
                ))}
          </div>
        </DbTableBodyCell>
        <DbTableBodyCell>
          <div className="flex flex-col truncate space-x-1 w-[60px]">
            {row.patrol_staff_assignments &&
              row.patrol_staff_assignments
                .filter((member) => member.shift === "中班")
                .map((member, memberIndex) => (
                  <div key={memberIndex}>{member.staff.name}</div>
                ))}
          </div>
        </DbTableBodyCell>
        <DbTableBodyCell>
          <div className="flex flex-col truncate space-x-1 w-[60px]">
            {row.patrol_staff_assignments &&
              row.patrol_staff_assignments
                .filter((member) => member.shift === "晚班")
                .map((member, memberIndex) => (
                  <div key={memberIndex}>{member.staff.name}</div>
                ))}
          </div>
        </DbTableBodyCell>
      </TableRow>
    ))}
  </TableBody>
);

interface VehicleTableBodyProps {
  vehicleData: Vehicle[];
}

const VehicleTableBody: React.FC<VehicleTableBodyProps> = ({ vehicleData }) => (
  <TableBody>
    {vehicleData.map((assignment, index) => (
      <TableRow key={index}>
        <DbTableBodyCell>
          <PiPoliceCarFill />
        </DbTableBodyCell>
        <DbTableBodyCell>{assignment.brand_model}</DbTableBodyCell>
        <DbTableBodyCell>{assignment.plate_number}</DbTableBodyCell>
      </TableRow>
    ))}
  </TableBody>
);

const PatrolTeamTable: React.FC = () => {
  const [patrolTeamData, setPatrolTeamData] = useState<PatrolTeam[]>([]);
  const [vehicleData, setVehicleData] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noDuty, setNoDuty] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPatrolTeamData = async () => {
      try {
        const response = await axios.get(
          "/api/vehicle/patrolTeam/todayPatrolTeam"
        );
        console.log("Fetched patrol team data:", response.data);

        if (!response.data || response.data.length === 0) {
          setNoDuty(true);
        } else {
          setPatrolTeamData(response.data);
          let vData = response.data.reduce(
            (acc: any, team: any) => [
              ...acc,
              ...team.patrol_vehicle_assignments.map(
                (assignment: any) => assignment.vehicle
              ),
            ],
            []
          );
          setVehicleData(vData);
          setNoDuty(false);
        }
      } catch (error) {
        console.error("Error fetching patrol team data:", error);
        setNoDuty(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPatrolTeamData();
  }, []);

  useEffect(() => {
    const scrollSpeed = 30; // pixels per second

    const scroll = () => {
      if (tableContainerRef.current) {
        tableContainerRef.current.scrollTop += scrollSpeed / 60;
        if (
          tableContainerRef.current.scrollTop +
            tableContainerRef.current.clientHeight >=
          tableContainerRef.current.scrollHeight
        ) {
          tableContainerRef.current.scrollTop = 0;
        }
      }
    };

    const interval = setInterval(scroll, 1000 / 60);
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleButtonClick = () => {
    window.location.href = "/admin#/vehicle/vehicle";
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
          height: "431px",
        }}
      >
        <Typography variant="h6">街面巡逻</Typography>
        <Typography className="text-sky-300">加载中...</Typography>
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
          height: "431px",
        }}
      >
        <Box className="flex items-center">
          <Typography variant="h6">街面巡逻</Typography>
          {/* <Typography className="ml-2 text-sm">今日备勤车辆:</Typography> */}
          <Button
            variant="contained"
            onClick={handleButtonClick}
            sx={{
              backgroundColor: "#1e3a8aa3",
              ml: "auto",
              width: "40px",
              height: "32px",
            }}
          >
            编辑
          </Button>
        </Box>
        <Typography className="text-sky-300">今日无值班巡逻班组</Typography>
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
        height: "430px",
      }}
    >
      <Box className="flex items-center">
        <Typography variant="h6">街面巡逻</Typography>
        {/* <Typography className="ml-2 text-sm">今日备勤车辆:</Typography> */}
        <Button
          variant="contained"
          onClick={handleButtonClick}
          sx={{
            backgroundColor: "#1e3a8aa3",
            ml: "auto",
            width: "40px",
            height: "32px",
          }}
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
        ref={tableContainerRef}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <DbTableHeaderCell />
                <DbTableHeaderCell>车辆名称</DbTableHeaderCell>
                <DbTableHeaderCell>车牌号</DbTableHeaderCell>
              </TableRow>
            </TableHead>
            <VehicleTableBody vehicleData={vehicleData} />
          </Table>
        </TableContainer>
      </TableContainer>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          overflow: "hidden",
          boxShadow: "none",
        }}
        ref={tableContainerRef}
      >
        <TableContainer>
          <Table>
            <PatrolTeamTableHead />
            <PatrolTeamTableBody patrolTeamData={patrolTeamData} />
          </Table>
        </TableContainer>
      </TableContainer>
    </Paper>
  );
};

export default PatrolTeamTable;
