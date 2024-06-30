//民警-警情板块
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Box,
  Button,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";
import DbTableCell from "./DbTableCell";
import { PoliceIncidentCount } from "@/types";
import DateRangePicker from "../common/DateRangePicker";

const PoliceIncidentHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableCell
        sx={{
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "80px",
          minWidth: "50px",
          textAlign: "center",
        }}
      >
        序号
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "140px",
          minWidth: "140px",
          textAlign: "center",
        }}
      >
        民警
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "140px",
          minWidth: "140px",
          textAlign: "center",
        }}
      >
        警情
      </DbTableCell>
    </TableRow>
  </TableHead>
);

interface PoliceIncidentBodyProps {
  policeIncidentData: PoliceIncidentCount[];
}

const RecentDutiesTableBody: React.FC<PoliceIncidentBodyProps> = ({
  policeIncidentData,
}) => (
  <TableBody>
    {policeIncidentData.map((row, index) => (
      <TableRow key={index}>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "80px",
            minWidth: "50px",
            textAlign: "center",
          }}
        >
          {index + 1}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "140px",
            minWidth: "140px",
            textAlign: "center",
          }}
        >
          {row.receiver}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "140px",
            minWidth: "140px",
            textAlign: "center",
          }}
        >
          {row._count._all}
        </DbTableCell>
      </TableRow>
    ))}
  </TableBody>
);

const PoliceIncidentTable = () => {
  const [policeIncidentData, setPoliceIncidentData] = useState<
    PoliceIncidentCount[]
  >([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const fetchIncidentData = async (
    startDate?: Date | null,
    endDate?: Date | null
  ) => {
    try {
      const response = await axios.get(
        "/api/incidentAnalysis/policeIncidentCount",
        {
          params: {
            startDate: startDate?.toISOString(),
            endDate: endDate?.toISOString(),
          },
        }
      );
      setPoliceIncidentData(response.data);
    } catch (error) {
      console.error("Error fetching incident data:", error);
    }
  };

  useEffect(() => {
    fetchIncidentData();
  }, []);

  const handleDateChange = (startDate: Date | null, endDate: Date | null) => {
    setStartDate(startDate);
    setEndDate(endDate);
    if (startDate && endDate) {
      fetchIncidentData(startDate, endDate);
    }
  };

  return (
    <Paper
      className="animate__animated animate__zoomInRight"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        mt: 2,
        backgroundColor: "#003366",
        boxShadow: "none",
        border: "2px solid #1e3a8a",
        color: "white",
        height: "30vh",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">民警-警情</Typography>
        <Box sx={{ ml: "auto" }}>
          <DateRangePicker onDateChange={handleDateChange} />
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          marginTop: "20px",
          overflow: "hidden",
          minWidth: "100%",
          boxShadow: "none",
        }}
      >
        <Table>
          <PoliceIncidentHead />
          <RecentDutiesTableBody policeIncidentData={policeIncidentData} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PoliceIncidentTable;
