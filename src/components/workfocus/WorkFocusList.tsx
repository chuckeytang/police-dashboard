import {
  List,
  Datagrid,
  TextField,
  DateField,
  ShowButton,
  EditButton,
  Filter,
  TextInput,
  FilterProps,
} from "react-admin";

const WorkFocusFilter = (props: FilterProps) => (
  <Filter {...props}>
    <TextInput
      source="keyword"
      label="关键字"
      placeholder="请输入内容关键字"
      alwaysOn
    />
  </Filter>
);

const WorkFocusList = () => {
  return (
    <List filters={<WorkFocusFilter children={undefined} />}>
      <Datagrid>
        <DateField source="focus_date" label="日期" />
        <TextField source="content" label="内容" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default WorkFocusList;
