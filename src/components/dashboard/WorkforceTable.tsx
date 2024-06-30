import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
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

  return (
    <TableContainer>
      <Table>
        <WorkforceTableHead />
        <WorkforceTableBody workforceData={workforceData} />
      </Table>
    </TableContainer>
  );
};

export default WorkforceTable;
