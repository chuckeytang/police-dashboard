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
  vehicle: Vehicle | null; // 确保 vehicle 是可以为空的
  members: Array<PatrolStaffAssignment>;
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
