import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const WorkFocusCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <DateInput source="focus_date" label="*日期" />
        <TextInput source="content" label="*内容" />
      </SimpleForm>
    </Create>
  );
};

export default WorkFocusCreate;
