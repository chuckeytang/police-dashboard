import {
  useRecordContext,
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
} from "react-admin";

const IncidentAnalysisShow = () => {
  const record = useRecordContext();
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="incident_number" label="警情编号" />
        <TextField source="receiver" label="接警员" />
        <DateField source="report_time" label="报警时间" />
        <TextField source="contact_number" label="联系电话" />
        <TextField source="reporter" label="报警人" />
        <TextField source="incident_category" label="警情类别" />
        <TextField source="report_source" label="报警来源" />
        <TextField source="incident_location" label="警情地点" />
        <TextField source="incident_details" label="警情详情" />
        <TextField source="incident_status" label="警情状态" />
        <DateField source="response_time" label="处警时间" />
      </SimpleShowLayout>
    </Show>
  );
};

export default IncidentAnalysisShow;
