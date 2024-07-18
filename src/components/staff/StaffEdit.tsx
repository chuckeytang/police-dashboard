import { Edit, SimpleForm, TextInput } from "react-admin";
import EditToolbar from "../common/EditToolbar";

const StaffEdit = () => {
  return (
    <Edit>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="police_number" label="警号" />
        <TextInput source="name" label="姓名" />
        <TextInput source="position" label="职务/警衔" />
        <TextInput source="department" label="所属部门" />
        <TextInput source="contact" label="联系方式" />
        <TextInput source="vehicle" label="使用车辆" />
      </SimpleForm>
    </Edit>
  );
};

export default StaffEdit;
