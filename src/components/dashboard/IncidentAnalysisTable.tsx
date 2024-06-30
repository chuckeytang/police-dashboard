import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
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

  return (
    <TableContainer>
      <Table>
        <IncidentAnalysisTableHead />
        <IncidentAnalysisTableBody analysisData={analysisData} />
      </Table>
    </TableContainer>
  );
};

export default IncidentAnalysisTable;
