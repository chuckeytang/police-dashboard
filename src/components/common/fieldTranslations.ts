interface FieldTranslations {
  "personnel/staff": Record<string, string>;
  "vehicle/vehicle": Record<string, string>;
  workFocus: Record<string, string>;
  incidentAnalysis: Record<string, string>;
  recentDuties: Record<string, string>;
}

export const fieldTranslations: FieldTranslations = {
  "personnel/staff": {
    police_number: "警号",
    name: "姓名",
    position: "职务/警衔",
    department: "所属部门",
    contact: "联系方式",
    vehicle: "使用车辆",
    skills: "技能",
    created_at: "创建时间",
    updated_at: "更新时间",
  },
  "vehicle/vehicle": {
    plate_number: "车牌号",
    vehicle_type: "车辆类型",
    brand_model: "品牌型号",
    status: "状态",
    usage_status: "使用状态",
    department: "所属部门",
    user_id: "使用人员",
    borrow_time: "借出时间",
    return_time: "归还时间",
  },
  workFocus: {
    focus_date: "日期",
    content: "内容",
  },
  incidentAnalysis: {
    incident_number: "警情编号",
    receiver: "接警员",
    report_time: "报警时间",
    contact_number: "联系电话",
    reporter: "报警人",
    incident_category: "警情类别",
    report_source: "报警来源",
    incident_location: "警情地点",
    incident_details: "警情详情",
    incident_status: "警情状态",
    response_time: "处警时间",
  },
  recentDuties: {
    duty_date: "日期",
    duty_type: "勤务类型",
    content: "内容",
  },
};
