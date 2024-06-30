import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import { PiPoliceCarFill } from "react-icons/pi";
import DbTableCell from "./DbTableCell";
import { PatrolTeam } from "@/types";

const PatrolTeamTableHead: React.FC = () => (
  <TableHead>
    <TableRow>
      <DbTableCell
        sx={{ color: "white", maxWidth: "50px", minWidth: "50px" }}
      />
      <DbTableCell
        sx={{
          color: "lightblue",
          maxWidth: "80px",
          minWidth: "80px",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        早
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "lightblue",
          maxWidth: "80px",
          minWidth: "80px",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        中
      </DbTableCell>
      <DbTableCell
        sx={{
          color: "lightblue",
          maxWidth: "80px",
          minWidth: "80px",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        晚
      </DbTableCell>
    </TableRow>
  </TableHead>
);

interface PatrolTeamTableBodyProps {
  patrolTeamData: PatrolTeam[];
}

const PatrolTeamTableBody: React.FC<PatrolTeamTableBodyProps> = ({
  patrolTeamData,
}) => (
  <TableBody>
    {patrolTeamData.map((row, index) => (
      <TableRow key={index}>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "50px",
            minWidth: "50px",
          }}
        >
          <PiPoliceCarFill fontSize={20} />
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "lightblue",
            textOverflow: "ellipsis",
            maxWidth: "50px",
            minWidth: "50px",
          }}
        >
          {row.team_name}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "80px",
            minWidth: "80px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {row.patrol_staff_assignments &&
            row.patrol_staff_assignments
              .filter((member) => member.shift === "早班")
              .map((member, memberIndex) => (
                <div key={memberIndex}>{member.staff.name}</div>
              ))}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "80px",
            minWidth: "80px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {row.patrol_staff_assignments &&
            row.patrol_staff_assignments
              .filter((member) => member.shift === "中班")
              .map((member, memberIndex) => (
                <div key={memberIndex}>{member.staff.name}</div>
              ))}
        </DbTableCell>
        <DbTableCell
          sx={{
            color: "white",
            textOverflow: "ellipsis",
            maxWidth: "80px",
            minWidth: "80px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {row.patrol_staff_assignments &&
            row.patrol_staff_assignments
              .filter((member) => member.shift === "晚班")
              .map((member, memberIndex) => (
                <div key={memberIndex}>{member.staff.name}</div>
              ))}
        </DbTableCell>
      </TableRow>
    ))}
  </TableBody>
);

const PatrolTeamTable: React.FC = () => {
  const [patrolTeamData, setPatrolTeamData] = useState<PatrolTeam[]>([]);

  useEffect(() => {
    const fetchPatrolTeamData = async () => {
      try {
        const response = await axios.get("api/vehicle/patrolTeam/search");
        console.log("Fetched patrol team data:", response.data);
        setPatrolTeamData(response.data);
      } catch (error) {
        console.error("Error fetching patrol team data:", error);
      }
    };
    fetchPatrolTeamData();
  }, []);

  return (
    <TableContainer>
      <Table>
        <PatrolTeamTableHead />
        <PatrolTeamTableBody patrolTeamData={patrolTeamData} />
      </Table>
    </TableContainer>
  );
};

export default PatrolTeamTable;