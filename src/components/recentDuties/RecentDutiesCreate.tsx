import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const RecentDutiesCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <DateInput source="duty_date" label="*日期" />
        <TextInput source="duty_type" label="*勤务类型" />
        <TextInput source="content" label="*内容" />
      </SimpleForm>
    </Create>
  );
};

export default RecentDutiesCreate;
