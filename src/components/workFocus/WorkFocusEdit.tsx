import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const WorkFocusEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <DateInput source="focus_date" label="*日期" />
        <TextInput source="content" label="*内容" />
      </SimpleForm>
    </Edit>
  );
};

export default WorkFocusEdit;
