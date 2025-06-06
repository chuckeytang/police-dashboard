import React, { useEffect, useState, useRef } from "react";
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
import { Workforce } from "@/types";
import { DbTableBodyCell, DbTableHeaderCell } from "./DbTableCell";

const WorkforceTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableHeaderCell>序号</DbTableHeaderCell>
      <DbTableHeaderCell>时间</DbTableHeaderCell>
      <DbTableHeaderCell>工作内容</DbTableHeaderCell>
    </TableRow>
  </TableHead>
);

interface WorkforceTableBodyProps {
  workforceData: Workforce[];
}

const WorkforceTableBody: React.FC<WorkforceTableBodyProps> = ({
  workforceData,
}) => (
  <TableBody>
    {workforceData.map((row, index) => (
      <TableRow key={index}>
        <DbTableBodyCell>{row.id}</DbTableBodyCell>
        <DbTableBodyCell>{row.focus_date}</DbTableBodyCell>
        <DbTableBodyCell>{row.content}</DbTableBodyCell>
      </TableRow>
    ))}
  </TableBody>
);

const WorkforceTable: React.FC = () => {
  const [workforceData, setWorkforceData] = useState<Workforce[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchWorkforceData = async () => {
      try {
        const response = await axios.get("api/workFocus/search");
        console.log("Fetched workforce data:", response.data);
        for (let i = 0; i < response.data.data.length; i++) {
          response.data.data[i].focus_date = new Date(
            response.data.data[i].focus_date
          ).toLocaleDateString();
        }
        setWorkforceData(response.data.data);
      } catch (error) {
        console.error("Error fetching workforce data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWorkforceData();
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
    window.location.href = "/admin#/workFocus";
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
          height: "285px",
        }}
      >
        <Typography variant="h6">工作重点</Typography>
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
        height: "285px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">工作重点</Typography>
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
          marginTop: "8px",
          overflow: "hidden",
          boxShadow: "none",
          flex: 1,
        }}
        ref={tableContainerRef}
      >
        <Table>
          <WorkforceTableHead />
          <WorkforceTableBody workforceData={workforceData} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default WorkforceTable;
