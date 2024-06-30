//勤务管理板块
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
} from "@mui/material";
import DbTableCell from "./DbTableCell";
import { Staff } from "@/types";

const DutyManagementTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableCell
        sx={{
          borderBottom: "none",
          padding: "4px",
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "80px",
          minWidth: "50px",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        值班领导
      </DbTableCell>
      <DbTableCell
        sx={{
          borderBottom: "none",
          padding: "4px",
          color: "white",
          textOverflow: "ellipsis",
          maxWidth: "140px",
          minWidth: "140px",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        张三 154344341233
      </DbTableCell>
      <DbTableCell
        sx={{
          borderBottom: "none",
          padding: "4px",
          color: "white",
          textOverflow: "ellipsis",
          maxWidth: "140px",
          minWidth: "140px",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        李三 15434434123
      </DbTableCell>
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
    <TableRow>
      <DbTableCell
        sx={{
          borderBottom: "none",
          padding: "4px",
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "80px",
          minWidth: "50px",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        值班员
      </DbTableCell>
      {staffData.slice(0, 2).map((staff, index) => (
        <DbTableCell
          key={index}
          sx={{
            borderBottom: "none",
            padding: "4px",
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "140px",
            minWidth: "140px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {staff.name} {staff.contact}
        </DbTableCell>
      ))}
    </TableRow>
    {staffData.slice(2).map((staff, index) => (
      <TableRow key={index}>
        <DbTableCell
          sx={{
            borderBottom: "none",
            padding: "4px",
            color: "lightblue",
            textOverflow: "ellipsis",
            maxWidth: "80px",
            minWidth: "50px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          值班员
        </DbTableCell>
        <DbTableCell
          sx={{
            borderBottom: "none",
            padding: "4px",
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "140px",
            minWidth: "140px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {staff.name} {staff.contact}
        </DbTableCell>
        <DbTableCell
          sx={{
            borderBottom: "none",
            padding: "4px",
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "140px",
            minWidth: "140px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {/* Render next staff if exists */}
          {staffData[index + 1]
            ? `${staffData[index + 1].name} ${staffData[index + 1].contact}`
            : ""}
        </DbTableCell>
      </TableRow>
    ))}
  </TableBody>
);

const DutyManagementTable: React.FC = () => {
  const [staffData, setStaffData] = useState<Staff[]>([]);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get("/api/personnel/staff/search");
        console.log("Fetched staff data:", response.data);
        setStaffData(response.data);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };
    fetchStaffData();
  }, []);

  const handleButtonClick = () => {
    window.location.href = "/admin#/personnel/staff";
  };

  return (
    <Paper
      className="animate__animated animate__zoomInLeft"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        mt: 2,
        backgroundColor: "#003366",
        boxShadow: "none",
        border: "2px solid #1e3a8a",
        color: "white",
        width: "100%",
        marginLeft: 1,
        zIndex: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">勤务管理</Typography>
        <Typography sx={{ ml: 2, fontSize: "1rem" }}>今日备勤等级:</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: "auto" }}
          onClick={handleButtonClick}
        >
          编辑
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          marginTop: "20px",
          overflow: "hidden",
          minWidth: "100%",
          boxShadow: "none",
          zIndex: 3,
        }}
      >
        <TableContainer>
          <Table>
            <DutyManagementTableHead />
            <DutyManagementTableBody staffData={staffData} />
          </Table>
        </TableContainer>
      </TableContainer>
    </Paper>
  );
};

export default DutyManagementTable;
