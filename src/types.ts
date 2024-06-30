export interface Staff {
  id: number;
  code: string;
  police_number: string;
  name: string;
  position: string;
  department: string;
  contact: string;
  vehicle?: string;
  skills: Record<string, any>; // Assuming Json can be any structure
  created_at: Date;
  updated_at: Date;
  team?: Team[]; // Optional since Staff can be part of multiple teams
  is_leader?: boolean;
  members?: Staff[];
  patrol_staff_assignments?: PatrolStaffAssignment[];
}

export interface Team {
  id: number;
  team_name: string;
  leader_id?: number; // Optional, as it can be null
  created_at: Date;
  updated_at: Date;
  leader?: Staff; // Optional, as the team may not have a leader
  members?: Staff[];
  day_schedules?: Schedule[];
  night_schedules?: Schedule[];
}

export interface TeamMember {
  id: number;
  team_id: number;
  staff_id: number;
  team: Team;
  staff: Staff;
}

export interface Vehicle {
  id: number;
  code: string;
  plate_number: string;
  vehicle_type: string;
  brand_model: string;
  status: string;
  usage_status: string;
  department?: string;
  user_id?: number;
  borrow_time?: Date;
  return_time?: Date;
  created_at: Date;
  updated_at: Date;
  patrol_vehicle_assignments?: PatrolVehicleAssignment[];
}

export interface PatrolVehicleAssignment {
  id: number;
  patrol_team_id: number;
  vehicle_id: number;
  created_at: Date;
  updated_at: Date;
  patrol_team: PatrolTeam;
  vehicle: Vehicle;
}

export interface Schedule {
  id: number;
  day_team_id: number;
  night_team_id: number;
  schedule_date: Date;
  created_at: Date;
  updated_at: Date;
  day_team: Team;
  night_team: Team;
}

export interface PatrolSchedule {
  id: number;
  patrol_team_id: number;
  schedule_date: Date;
  created_at: Date;
  updated_at: Date;
  patrol_team: PatrolTeam;
}

export interface WorkFocus {
  id: number;
  focus_date: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

// 驾驶舱需要的数据类型
export interface PoliceIncidentCount {
  receiver: string;
  _count: {
    _all: number;
  };
}

export interface RecentDuties {
  duty_date: string;
  duty_type: string;
  content: string;
}

export interface IncidentAnalysis {
  report_time: string;
  incident_category: string;
  report_source: string;
  incident_details: string;
  receiver: string;
}

export interface Workforce {
  id: number;
  focus_date: string;
  content: string;
}

export interface PatrolStaffAssignment {
  id: number;
  staff: Staff;
  shift: string;
}

export interface PatrolTeam {
  id: number;
  team_name: string;
  created_at: Date;
  updated_at: Date;
  vehicle: Vehicle | null;
  members: Array<PatrolStaffAssignment>;
  patrol_staff_assignments: PatrolStaffAssignment[];
  patrol_vehicle_assignments: PatrolVehicleAssignment[];
}
