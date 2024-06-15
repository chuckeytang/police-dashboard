import {
  useRecordContext,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const StaffShow = () => {
  const record = useRecordContext();
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="code" label="编号" />
        <TextField source="police_number" label="警号" />
        <TextField source="name" label="姓名" />
        <TextField source="position" label="职务/警衔" />
        <TextField source="department" label="所属部门" />
        <TextField source="contact" label="联系方式" />
        <TextField source="vehicle" label="使用车辆" />
      </SimpleShowLayout>
    </Show>
  );
};

export default StaffShow;
