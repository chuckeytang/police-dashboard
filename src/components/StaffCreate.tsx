import { Create, SimpleForm, TextInput } from "react-admin";

const StaffCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="code" label="编号" />
        <TextInput source="police_number" label="警号" />
        <TextInput source="name" label="姓名" />
        <TextInput source="position" label="职务/警衔" />
        <TextInput source="department" label="所属部门" />
        <TextInput source="contact" label="联系方式" />
        <TextInput source="vehicle" label="使用车辆" />
      </SimpleForm>
    </Create>
  );
};

export default StaffCreate;
