import {
  List,
  Datagrid,
  TextField,
  DateField,
  ShowButton,
  EditButton,
  Filter,
  TextInput,
  DateInput,
  SelectInput,
  FilterProps,
} from "react-admin";
import { CustomEditButton, CustomShowButton } from "../common/CustomButtons";

const IncidentAnalysisFilter = (props: FilterProps) => (
  <Filter {...props}>
    <TextInput
      source="keyword"
      label="关键字"
      placeholder="请输入关键字"
      alwaysOn
    />
    <DateInput source="report_time_gte" label="报警时间从" />
    <DateInput source="report_time_lte" label="报警时间至" />
    <DateInput source="response_time_gte" label="处警时间从" />
    <DateInput source="response_time_lte" label="处警时间至" />
    <SelectInput
      source="incident_status"
      choices={[
        { id: "未反馈", name: "未反馈" },
        { id: "已反馈", name: "已反馈" },
      ]}
      label="警情状态"
      alwaysOn
    />
  </Filter>
);

const IncidentAnalysisList = () => {
  return (
    <List filters={<IncidentAnalysisFilter children={undefined} />}>
      <Datagrid>
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
        <CustomShowButton />
        <CustomEditButton />
      </Datagrid>
    </List>
  );
};

export default IncidentAnalysisList;
