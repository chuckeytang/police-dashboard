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

export interface PatrolTeam {
  id: number;
  team_name: string;
  created_at: Date;
  updated_at: Date;
  PatrolVehicleAssignments?: PatrolVehicleAssignment[];
  PatrolStaffAssignments?: PatrolStaffAssignment[];
  schedules?: PatrolSchedule[];
}

export interface Vehicle {
  id: number;
  plate_number: string;
  vehicle_type: string;
  brand_model: string;
}

export interface PatrolStaffAssignment {
  id: number;
  staff: Staff;
  shift: string;
}

export interface PatrolVehicleAssignment {
  id: number;
  vehicle: Vehicle;
}

export interface Schedule {
  id: number;
  schedule_date: Date;
  day_team: {
    team_name: string;
  };
  night_team: {
    team_name: string;
  };
}

export interface PatrolSchedule {
  id: number;
  patrol_team_id: number;
  schedule_date: Date;
  created_at: Date;
  updated_at: Date;
  patrol_team: PatrolTeam;
}