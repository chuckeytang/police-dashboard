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
import { RecentDuties } from "@/types";

const RecentDutiesTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableCell
        sx={{
          borderBottom: "none",
          padding: "4px",
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "17.6%",
          minWidth: "17.6%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        时间
      </DbTableCell>
      <DbTableCell
        sx={{
          borderBottom: "none",
          padding: "4px",
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "23.5%",
          minWidth: "23.5%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        勤务类型
      </DbTableCell>
      <DbTableCell
        sx={{
          borderBottom: "none",
          padding: "4px",
          color: "lightblue",
          textOverflow: "ellipsis",
          maxWidth: "58.8%",
          minWidth: "58.8%",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        勤务内容
      </DbTableCell>
    </TableRow>
  </TableHead>
);

interface RecentDutiesTableBodyProps {
  recentData: RecentDuties[];
}

const RecentDutiesTableBody: React.FC<RecentDutiesTableBodyProps> = ({
  recentData,
}) => (
  <TableBody>
    {recentData.map((row, index) => (
      <TableRow key={index}>
        <DbTableCell
          sx={{
            borderBottom: "none",
            padding: "4px",
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "17.6%",
            minWidth: "17.6%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textAlign: "center",
            paddingY: "10px",
          }}
        >
          {row.duty_date}
        </DbTableCell>
        <DbTableCell
          sx={{
            borderBottom: "none",
            padding: "4px",
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "23.5%",
            minWidth: "23.5%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textAlign: "center",
            paddingY: "10px",
          }}
        >
          {row.duty_type}
        </DbTableCell>
        <DbTableCell
          sx={{
            borderBottom: "none",
            padding: "4px",
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "58.8%",
            minWidth: "58.8%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            paddingY: "10px",
          }}
        >
          {row.content}
        </DbTableCell>
      </TableRow>
    ))}
  </TableBody>
);

const RecentDutiesTable: React.FC = () => {
  const [recentData, setRecentData] = useState<RecentDuties[]>([]);

  useEffect(() => {
    const fetchRecentData = async () => {
      try {
        const response = await axios.get("/api/recentDuties/search");
        console.log("Fetched recent duties data:", response.data);
        setRecentData(response.data);
      } catch (error) {
        console.error("Error fetching recent duties data:", error);
      }
    };
    fetchRecentData();
  }, []);

  return (
    <TableContainer>
      <Table>
        <RecentDutiesTableHead />
        <RecentDutiesTableBody recentData={recentData} />
      </Table>
    </TableContainer>
  );
};

export default RecentDutiesTable;
