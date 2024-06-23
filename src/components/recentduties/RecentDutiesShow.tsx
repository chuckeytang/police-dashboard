import {
  useRecordContext,
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
} from "react-admin";

const RecentDutiesShow = () => {
  const record = useRecordContext();
  return (
    <Show>
      <SimpleShowLayout>
        <DateField source="duty_date" label="日期" />
        <TextField source="duty_type" label="勤务类型" />
        <TextField source="content" label="内容" />
      </SimpleShowLayout>
    </Show>
  );
};

export default RecentDutiesShow;
