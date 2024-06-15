export interface Staff {
  id: number;
  police_number: string;
  name: string;
  position: string;
  department: string;
  contact: string;
  vehicle?: string;
}

export interface Team {
  id: number;
  team_name: string;
  leader: Staff;
  members: Staff[];
}
