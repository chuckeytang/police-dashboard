import {
  useRecordContext,
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
} from "react-admin";

const WorkFocusShow = () => {
  const record = useRecordContext();
  return (
    <Show>
      <SimpleShowLayout>
        <DateField source="focus_date" label="日期" />
        <TextField source="content" label="内容" />
      </SimpleShowLayout>
    </Show>
  );
};

export default WorkFocusShow;
