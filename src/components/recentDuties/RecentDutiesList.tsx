import {
  List,
  Datagrid,
  TextField,
  DateField,
  ShowButton,
  EditButton,
  Filter,
  TextInput,
  SelectInput,
  FilterProps,
} from "react-admin";

const RecentDutiesFilter = (props: FilterProps) => (
  <Filter {...props}>
    <TextInput
      source="keyword"
      label="关键字"
      placeholder="请输入内容或勤务类型关键字"
      alwaysOn
    />
  </Filter>
);

const RecentDutiesList = () => {
  return (
    <List filters={<RecentDutiesFilter children={undefined} />}>
      <Datagrid>
        <DateField source="duty_date" label="日期" />
        <TextField source="duty_type" label="勤务类型" />
        <TextField source="content" label="内容" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default RecentDutiesList;
