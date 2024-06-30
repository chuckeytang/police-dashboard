import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHead, TableBody, TableRow } from "@mui/material";
import DbTableCell from "./DbTableCell";
import { PoliceIncidentCount } from "@/types";

const PoliceIncidentTable = () => {
  const [policeIncidentData, setPoliceIncidentData] = useState<
    PoliceIncidentCount[]
  >([]);

  useEffect(() => {
    const fetchIncidentData = async () => {
      try {
        const response = await axios.get(
          "/api/incidentanalysis/policeIncidentCount"
        );
        setPoliceIncidentData(response.data);
      } catch (error) {
        console.error("Error fetching incident data:", error);
      }
    };

    fetchIncidentData();
  }, []);

  return (
    <Table>
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
    </Table>
  );
};

export default PoliceIncidentTable;
