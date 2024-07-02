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
  Skeleton,
  SelectChangeEvent,
} from "@mui/material";
import { DbTableBodyCell, DbTableHeaderCell } from "./DbTableCell";
import { IncidentAnalysis } from "@/types";

const IncidentAnalysisTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableHeaderCell>报警时间</DbTableHeaderCell>
      <DbTableHeaderCell>警情类型</DbTableHeaderCell>
      <DbTableHeaderCell>案由</DbTableHeaderCell>
      <DbTableHeaderCell>详情</DbTableHeaderCell>
      <DbTableHeaderCell>责任民警</DbTableHeaderCell>
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
        <DbTableBodyCell>{row.report_time}</DbTableBodyCell>
        <DbTableBodyCell>{row.incident_category}</DbTableBodyCell>
        <DbTableBodyCell>{row.report_source}</DbTableBodyCell>
        <DbTableBodyCell>{row.incident_details}</DbTableBodyCell>
        <DbTableBodyCell>{row.receiver}</DbTableBodyCell>
      </TableRow>
    ))}
  </TableBody>
);

const IncidentAnalysisTable: React.FC = () => {
  const [analysisData, setAnalysisData] = useState<IncidentAnalysis[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysisData = async (incident_category = "") => {
      setIsLoading(true);
      try {
        const response = await axios.get("api/incidentAnalysis/search", {
          params: { incident_category },
        });
        console.log("Fetched incident analysis data:", response.data);
        setAnalysisData(response.data);
      } catch (error) {
        console.error("Error fetching incident analysis data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnalysisData(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (
    event: SelectChangeEvent<typeof selectedCategory>
  ) => {
    setSelectedCategory(event.target.value as string);
  };

  const handleButtonClick = () => {
    window.location.href = "/admin#/incidentAnalysis";
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
        <Typography variant="h6">警情分析</Typography>
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
        <Typography variant="h6">警情分析</Typography>
        <Box sx={{ ml: 4 }}>
          <FormControl
            sx={{ width: 120, height: 30, ml: "center" }}
            size="small"
          >
            <InputLabel id="select-label" sx={{ color: "white" }}>
              警情类型
            </InputLabel>
            <Select
              labelId="select-label"
              value={selectedCategory}
              onChange={(event: SelectChangeEvent<string>) =>
                handleCategoryChange(event)
              }
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
                  sx: {
                    backgroundColor: "#003366",
                    color: "white",
                    fontSize: 1,
                  },
                },
              }}
            >
              <MenuItem value="">全部</MenuItem>
              <MenuItem value={"盗窃"}>盗窃</MenuItem>
              <MenuItem value={"交通事故"}>交通事故</MenuItem>
              <MenuItem value={"火灾"}>火灾</MenuItem>
              <MenuItem value={"打架斗殴"}>打架斗殴</MenuItem>
              <MenuItem value={"诈骗"}>诈骗</MenuItem>
            </Select>
          </FormControl>
        </Box>
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
