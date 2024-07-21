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
  TopToolbar,
  CreateButton,
} from "react-admin";
import {
  CustomExportButton,
  ImportButton,
  StaffTemplateButton,
  WorkFocusTemplateButton,
} from "../common/CustomButtons";

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
    <List
      actions={
        <TopToolbar>
          <CreateButton />
          <CustomExportButton resource="workFocus" label="导出" />
          <WorkFocusTemplateButton />
          <ImportButton resource="workFocus" label="导入" />
        </TopToolbar>
      }
      filters={<WorkFocusFilter children={undefined} />}
    >
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
