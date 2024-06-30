import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
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

  return (
    <TableContainer>
      <Table>
        <DutyManagementTableHead />
        <DutyManagementTableBody staffData={staffData} />
      </Table>
    </TableContainer>
  );
};

export default DutyManagementTable;
