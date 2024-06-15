import React, { useState } from "react";

import {
  List,
  useRecordContext,
  useListContext,
  Loading,
  Filter,
  TextInput,
  FilterProps,
} from "react-admin";
import {
  Card,
  CardContent,
  Button,
  List as MuiList,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import Link from "next/link";

interface Staff {
  id: number;
  name: string;
  police_number: string;
  position: string;
  department: string;
  contact: string;
}

interface Team {
  id: number;
  team_name: string;
  leader: Staff;
  members: Staff[];
}

const TeamDetails = ({ team }: { team: Team | null }) => {
  if (!team) {
    return <p>请选择一个班级以查看详细信息</p>;
  }

  return (
    <div className="flex">
      <div>
        <h4 className="mb-6">{team.team_name}</h4>
        <h6>值班班长</h6>
        <Card variant="outlined" className="mb-6">
          <CardContent>
            <p>
              {team.leader.name} ({team.leader.police_number})
            </p>
            <p>{team.leader.position}</p>
            <p>{team.leader.department}</p>
            <p>{team.leader.contact}</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <h6>值班人员</h6>
        <Grid container spacing={2}>
          {team.members.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card variant="outlined">
                <CardContent>
                  <p>
                    {member.name} ({member.police_number})
                  </p>
                  <p>{member.position}</p>
                  <p>{member.department}</p>
                  <p>{member.contact}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const TeamFilter = (props: FilterProps) => (
  <Filter {...props}>
    <TextInput label="搜索班级" source="team_name" alwaysOn />
  </Filter>
);

const TeamList = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const { data, total, isLoading, error } = useListContext<Team>();

  if (error) return <div color="error">加载数据时出错: {error.message}</div>;
  if (isLoading) return <Loading />;

  return (
    <div className="flex">
      <div className="border-r border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <div style={{ display: "inline" }}>班组目录 </div>
          <Button variant="contained" color="primary" size="small">
            <Link href="/team/add" passHref>
              <div className="text-white">+</div>
            </Link>
          </Button>
        </div>
        <MuiList>
          {data.map((team) => (
            <ListItem
              key={team.id}
              button
              selected={selectedTeam?.id === team.id}
              onClick={() => setSelectedTeam(team)}
            >
              <ListItemText primary={team.team_name} />
            </ListItem>
          ))}
        </MuiList>
      </div>
      <div className="flex-1 p-4">
        <TeamDetails team={selectedTeam} />
      </div>
    </div>
  );
};

const TeamListWrapper = () => (
  <List>
    <TeamList />
  </List>
);

export default TeamListWrapper;
