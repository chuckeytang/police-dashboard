import {
  useRecordContext,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

const VehicleShow = () => {
  const record = useRecordContext();
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="plate_number" label="车牌号" />
        <TextField source="vehicle_type" label="车辆类型" />
        <TextField source="brand_model" label="品牌型号" />
        <TextField source="status" label="状态" />
        <TextField source="usage_status" label="使用状态" />
        <TextField source="department" label="使用部门" />
        <TextField source="user_id" label="使用人员" />
        <TextField source="borrow_time" label="借出时间" />
        <TextField source="return_time" label="应归还时间" />
      </SimpleShowLayout>
    </Show>
  );
};

export default VehicleShow;
