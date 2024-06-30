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
import { Workforce } from "@/types";
import DbTableCell from "./DbTableCell";

const WorkforceTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableCell
        sx={{
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "40px",
          minWidth: "40px",
        }}
      >
        序号
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "90px",
          minWidth: "90px",
          textAlign: "center",
        }}
      >
        时间
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "210px",
          minWidth: "210px",
        }}
      >
        工作内容
      </DbTableCell>
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
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "40px",
            minWidth: "40px",
          }}
        >
          {row.id}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "90px",
            minWidth: "90px",
            textAlign: "center",
          }}
        >
          {row.focus_date}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "210px",
            minWidth: "210px",
          }}
        >
          {row.content}
        </DbTableCell>
      </TableRow>
    ))}
  </TableBody>
);

const WorkforceTable: React.FC = () => {
  const [workforceData, setWorkforceData] = useState<Workforce[]>([]);

  useEffect(() => {
    const fetchWorkforceData = async () => {
      try {
        const response = await axios.get("api/workFocus/search");
        console.log("Fetched workforce data:", response.data);
        setWorkforceData(response.data);
      } catch (error) {
        console.error("Error fetching workforce data:", error);
      }
    };
    fetchWorkforceData();
  }, []);

  const handleButtonClick = () => {
    window.location.href = "/admin#/workFocus";
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
        <Typography variant="h6">工作重点</Typography>
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
          marginTop: "2px",
          overflow: "hidden",
          minWidth: "100%",
          boxShadow: "none",
          zIndex: 3,
        }}
      >
        <TableContainer>
          <Table>
            <WorkforceTableHead />
            <WorkforceTableBody workforceData={workforceData} />
          </Table>
        </TableContainer>
      </TableContainer>
    </Paper>
  );
};

export default WorkforceTable;
