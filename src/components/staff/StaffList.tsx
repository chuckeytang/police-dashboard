import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  Filter,
  TextInput,
  SelectInput,
  FilterProps,
} from "react-admin";

interface Staff {
  id: number;
  code: string;
  police_number: string;
  name: string;
  position: string;
  department: string;
  contact: string;
  vehicle?: string;
}

const StaffFilter = (props: FilterProps) => (
  <Filter {...props}>
    <SelectInput
      source="department"
      choices={[
        { id: "技术科", name: "技术科" },
        { id: "刑侦科", name: "刑侦科" },
        // 添加更多部门
      ]}
      label="部门"
      emptyText="全部部门"
      alwaysOn
    />
    <SelectInput
      source="position"
      choices={[
        { id: "主任", name: "主任" },
        { id: "科长", name: "科长" },
        { id: "民警", name: "民警" },
        // 添加更多职务/警衔
      ]}
      label="职务/警衔"
      emptyText="全部职务/警衔"
      alwaysOn
    />
    <TextInput
      source="keyword"
      label="关键字"
      placeholder="请输入警号、姓名、联系方式"
      alwaysOn
    />
  </Filter>
);

const StaffList = () => {
  return (
    <List filters={<StaffFilter children={undefined} />}>
      <Datagrid>
        <TextField source="code" label="编号" />
        <TextField source="police_number" label="警号" />
        <TextField source="name" label="姓名" />
        <TextField source="position" label="职务/警衔" />
        <TextField source="department" label="所属部门" />
        <TextField source="contact" label="联系方式" />
        <TextField source="vehicle" label="使用车辆" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default StaffList;
