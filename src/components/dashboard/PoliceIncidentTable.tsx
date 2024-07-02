//民警-警情板块
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Box,
  Paper,
  TableContainer,
  Typography,
  Skeleton,
} from "@mui/material";
import { DbTableBodyCell, DbTableHeaderCell } from "./DbTableCell";
import { PoliceIncidentCount } from "@/types";
import DateRangePicker from "../common/DateRangePicker";

const PoliceIncidentHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableHeaderCell>序号</DbTableHeaderCell>
      <DbTableHeaderCell>民警</DbTableHeaderCell>
      <DbTableHeaderCell>警情</DbTableHeaderCell>
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
        <DbTableBodyCell>{index + 1}</DbTableBodyCell>
        <DbTableBodyCell>{row.receiver}</DbTableBodyCell>
        <DbTableBodyCell>{row._count._all}</DbTableBodyCell>
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
  const [isLoading, setIsLoading] = useState(true);

  const fetchIncidentData = async (
    startDate?: Date | null,
    endDate?: Date | null
  ) => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidentData();
  }, []);

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
        <Typography variant="h6">民警-警情</Typography>
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
        mt: 1,
        backgroundColor: "#003366a3",
        boxShadow: "none",
        border: "2px solid #1e3a8a",
        color: "white",
        height: "285px",
      }}
    >
      <Box className="flex justify-between">
        <Typography variant="h6">民警-警情</Typography>
        <Box>
          <DateRangePicker onDateChange={handleDateChange} />
        </Box>
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
        <Table>
          <PoliceIncidentHead />
          <RecentDutiesTableBody policeIncidentData={policeIncidentData} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PoliceIncidentTable;
