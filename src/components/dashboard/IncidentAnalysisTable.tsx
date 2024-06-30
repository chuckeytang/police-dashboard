//警情分析板块
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
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import DbTableCell from "./DbTableCell";
import { IncidentAnalysis } from "@/types";

const IncidentAnalysisTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableCell
        sx={{
          color: "#7DF9FF",
          textOverflow: "ellipsis",
          maxWidth: "16.4%",
          minWidth: "16.4%",
          paddingRight: "10px",
        }}
      >
        报警时间
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "#7DF9FF",
          textOverflow: "ellipsis",
          maxWidth: "16.4%",
          minWidth: "16.4%",
          paddingRight: "10px",
        }}
      >
        警情类型
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "#7DF9FF",
          textOverflow: "ellipsis",
          maxWidth: "23.8%",
          minWidth: "23.8%",
          textAlign: "auto",
          paddingRight: "10px",
        }}
      >
        案由
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "#7DF9FF",
          textOverflow: "ellipsis",
          maxWidth: "26.8%",
          minWidth: "26.8%",
          textAlign: "auto",
          paddingRight: "10px",
        }}
      >
        详情
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "#7DF9FF",
          textOverflow: "ellipsis",
          maxWidth: "16.4%",
          minWidth: "16.4%",
          textAlign: "center",
          paddingRight: "10px",
        }}
      >
        责任民警
      </DbTableCell>
    </TableRow>
  </TableHead>
);

interface IncidentAnalysisTableBodyProps {
  analysisData: IncidentAnalysis[];
}

const IncidentAnalysisTableBody: React.FC<IncidentAnalysisTableBodyProps> = ({
  analysisData,
}) => (
  <TableBody>
    {analysisData.map((row, index) => (
      <TableRow key={index}>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "16.4%",
            minWidth: "16.4%",
            paddingY: "6px",
            paddingRight: "10px",
          }}
        >
          {row.report_time}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "16.4%",
            minWidth: "16.4%",
            paddingY: "6px",
            paddingRight: "10px",
          }}
        >
          {row.incident_category}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "23.8%",
            minWidth: "23.8%",
            textAlign: "auto",
            paddingY: "6px",
            paddingRight: "10px",
          }}
        >
          {row.report_source}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "26.8%",
            minWidth: "26.8%",
            textAlign: "auto",
            paddingY: "6px",
            paddingRight: "10px",
          }}
        >
          {row.incident_details}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "16.4%",
            minWidth: "16.4%",
            textAlign: "center",
            paddingY: "6px",
            paddingRight: "10px",
          }}
        >
          {row.receiver}
        </DbTableCell>
      </TableRow>
    ))}
  </TableBody>
);

const IncidentAnalysisTable: React.FC = () => {
  const [analysisData, setAnalysisData] = useState<IncidentAnalysis[]>([]);

  useEffect(() => {
    const fetchAnalysisData = async () => {
      try {
        const response = await axios.get("api/incidentAnalysis/search");
        console.log("Fetched incident analysis data:", response.data);
        setAnalysisData(response.data);
      } catch (error) {
        console.error("Error fetching incident analysis data:", error);
      }
    };
    fetchAnalysisData();
  }, []);

  const handleButtonClick = () => {
    window.location.href = "/admin#/incidentAnalysis";
  };

  return (
    <Paper
      className="animate__animated animate__zoomInUp "
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: "35vh",
        backgroundColor: "#003366",
        boxShadow: "none",
        border: "2px solid #1e3a8a",
        color: "white",
        marginTop: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6">警情分析</Typography>
        <Box sx={{ ml: 4 }}>
          <FormControl sx={{ minWidth: 120, ml: "center" }} size="small">
            <InputLabel id="select-label" sx={{ color: "white" }}>
              警情类型
            </InputLabel>
            <Select
              labelId="select-label"
              label="选择选项"
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                ".MuiSvgIcon-root": { color: "white" },
              }}
              MenuProps={{
                PaperProps: {
                  sx: { backgroundColor: "#003366", color: "black" },
                },
              }}
            >
              <MenuItem value={1}>警情分析</MenuItem>
              <MenuItem value={2}>Every Night</MenuItem>
              <MenuItem value={3}>Weeknights</MenuItem>
              <MenuItem value={4}>Weekends</MenuItem>
              <MenuItem value={5}>Weekly</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
          marginTop: "15px",
          overflow: "hidden",
          boxShadow: "none",
        }}
      >
        <TableContainer>
          <Table>
            <IncidentAnalysisTableHead />
            <IncidentAnalysisTableBody analysisData={analysisData} />
          </Table>
        </TableContainer>
      </TableContainer>
    </Paper>
  );
};

export default IncidentAnalysisTable;
