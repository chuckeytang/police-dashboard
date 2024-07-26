import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const IncidentAnalysisEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="incident_number" label="*警情编号" />
        <TextInput source="receiver" label="*接警员" />
        <DateInput source="report_time" label="报警时间" />
        <TextInput source="contact_number" label="联系电话" />
        <TextInput source="reporter" label="报警人" />
        <TextInput source="incident_category" label="警情类别" />
        <TextInput source="report_source" label="报警来源" />
        <TextInput source="incident_location" label="警情地点" />
        <TextInput source="incident_details" label="警情详情" />
        <TextInput source="incident_status" label="警情状态" />
        <DateInput source="response_time" label="处警时间" />
      </SimpleForm>
    </Edit>
  );
};

export default IncidentAnalysisEdit;
