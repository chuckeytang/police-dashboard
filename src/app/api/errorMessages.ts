export const MESSAGES = {
  // Success messages
  DELETE_TEAM_SUCCESS: "删除勤务班组成功",
  DELETE_PATROL_TEAM_SUCCESS: "删除巡逻班组成功",
  CREATE_INCIDENT_ANALYSIS_SUCCESS: "创建警情分析成功",
  DELETE_INCIDENT_ANALYSIS_SUCCESS: "删除警情分析成功",
  GET_INCIDENT_ANALYSIS_DETAILS_SUCCESS: "获取警情分析详情成功",
  GET_POLICE_INCIDENT_STATS_SUCCESS: "获取民警警情统计数据成功",
  GET_INCIDENT_ANALYSIS_SUCCESS: "获取警情分析成功",
  UPDATE_INCIDENT_ANALYSIS_SUCCESS: "更新警情分析成功",
  ADD_TEAM_SCHEDULE_SUCCESS: "添加勤务班组排班成功",
  DELETE_TEAM_SCHEDULE_SUCCESS: "删除勤务班组排班成功",
  GET_TEAM_SCHEDULE_SUCCESS: "获取勤务班组排班成功",
  AUTO_TEAM_SCHEDULE_SUCCESS: "自动排班成功",

  // Error messages
  TEAM_NOT_FOUND: "没有该班组信息",
  TEAM_DELETE_FAILED: "删除勤务班组失败",
  TEAM_DEPENDENCY_EXISTS: "勤务班组存在排班依赖关系，请先删除对应排班",
  ADD_TEAM_SCHEDULE_FAILED: "添加勤务班组排班失败",
  DELETE_TEAM_SCHEDULE_FAILED: "删除勤务班组排班失败",
  GET_TEAM_SCHEDULE_FAILED: "获取勤务班组排班失败",
  AUTO_TEAM_SCHEDULE_FAILED: "自动排班排班失败",
  CREATE_INCIDENT_ANALYSIS_FAILED: "创建警情分析失败",
  DELETE_INCIDENT_ANALYSIS_FAILED: "删除警情分析失败",
  GET_POLICE_INCIDENT_STATS_FAILED: "获取民警警情统计数据失败",
  GET_INCIDENT_ANALYSIS_FAILED: "获取警情分析失败",
  UPDATE_INCIDENT_ANALYSIS_FAILED: "更新警情分析失败",
  GET_INCIDENT_ANALYSIS_DETAILS_FAILED: "获取警情分析详情失败",
  DELETE_RECENT_DUTIES_FAILED: "删除近期勤务失败",
  GET_RECENT_DUTIES_DETAILS_FAILED: "获取近期勤务详情失败",
  GET_RECENT_DUTIES_FAILED: "获取近期勤务失败",
  UPDATE_RECENT_DUTIES_FAILED: "更新近期勤务失败",
  CREATE_POLICEMAN_FAILED: "创建警员失败",
  DELETE_POLICEMAN_FAILED: "删除警员失败",
  GET_POLICEMAN_DETAILS_FAILED: "获取警员详情失败",
  GET_POLICEMAN_FAILED: "获取警员失败",
  UPDATE_POLICEMAN_FAILED: "更新警员失败",
  CREATE_TEAM_FAILED: "创建勤务班组失败",
  GET_TEAM_FAILED: "获取勤务班组失败",
  UPDATE_TEAM_FAILED: "更新勤务班组失败",
  ADD_TEAM_MEMBER_FAILED: "添加勤务班组成员失败",
  DELETE_TEAM_MEMBER_FAILED: "删除勤务班组成员失败",
  MEMBER_NOT_IN_TEAM: "选择的勤务组中没有该成员",
  GET_TODAY_TEAM_MEMBERS_FAILED: "获取当天值班勤务班组成员列表失败",
  ADD_PATROL_TEAM_FAILED: "添加巡逻班组失败",
  DELETE_PATROL_TEAM_FAILED: "删除巡逻班组失败",
  GET_PATROL_TEAM_FAILED: "获取巡逻班组失败",
  ADD_PATROL_SCHEDULE_FAILED: "添加巡逻排班失败",
  DELETE_PATROL_SCHEDULE_FAILED: "删除巡逻排班失败",
  GET_PATROL_SCHEDULE_FAILED: "获取巡逻排班失败",
  GET_TODAY_PATROL_TEAM_INFO_FAILED: "获取当日巡逻班组信息失败",
  UPDATE_PATROL_TEAM_FAILED: "更新巡逻班组失败",
  ADD_PATROL_TEAM_MEMBER_FAILED: "添加巡逻班组成员失败",
  DELETE_PATROL_TEAM_MEMBER_FAILED: "删除巡逻班组成员失败",
  ADD_VEHICLE_FAILED: "录入车辆失败",
  DELETE_VEHICLE_FAILED: "删除车辆失败",
  VEHICLE_NOT_SELECTED: "未选择车辆",
  VEHICLE_NOT_FOUND: "没有该车辆",
  GET_VEHICLE_INFO_FAILED: "获取车辆信息失败",
  UPDATE_VEHICLE_INFO_FAILED: "更新车辆信息失败",
  CREATE_WORK_FOCUS_FAILED: "创建工作重点失败",
  DELETE_WORK_FOCUS_FAILED: "删除工作重点失败",
  GET_WORK_FOCUS_DETAILS_FAILED: "获取工作重点详情失败",
  WORK_FOCUS_NOT_SELECTED: "未选择工作重点",
  WORK_FOCUS_NOT_FOUND: "工作重点不存在",
  GET_WORK_FOCUS_FAILED: "获取工作重点失败",
  UPDATE_WORK_FOCUS_FAILED: "更新工作重点失败",

  // Other text
  SELECT_FUTURE_DATE_FOR_SCHEDULE: "请选择今日及以后的日期创建排班。",
  CONFIRM_DELETE_TEAM:
    "你确定要删除选定的勤务班组吗？这将会删除他相关的所有排班记录。",
  CONFIRM_DELETE_PATROL_TEAM:
    "你确定要删除选定的巡逻班组吗？这将会删除他相关的所有排班记录。",
  CONFIRM_DELETE_SCHDULE: "你确定要删除选定日期的早班和晚班吗？",
  CONFIRM_DELETE_PATROL_SCHDULE: "你确定要删除选定日期的巡逻排班吗？",

  TIP: "提示",
  CANCEL: "取消",
  CONFIRM: "确定",
  ADD_SCHEDULE: "添加排班",
  DELETE_SCHEDULE: "删除排班",
  AUDO_SCHEDULE: "自动排班",
  DELETE_TEAM: "删除勤务班组",
  SELECT_MORNING_TEAM: "选择早班班组",
  SELECT_EVENING_TEAM: "选择晚班班组",
  DELETE_PATROL_TEAM: "删除巡逻班组",
};
