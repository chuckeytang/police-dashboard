import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

const VehicleCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="code" label="编号" />
        <TextInput source="plate_number" label="车牌号" />
        <SelectInput
          source="vehicle_type"
          label="车辆类型"
          choices={[
            { id: "轿车", name: "轿车" },
            { id: "货车", name: "货车" },
            { id: "摩托车", name: "摩托车" },
            { id: "SUV", name: "SUV" },
            // 添加更多车辆类型
          ]}
        />
        <TextInput source="brand_model" label="品牌型号" />
        <SelectInput
          source="status"
          label="状态"
          choices={[
            { id: "完好", name: "完好" },
            { id: "损坏", name: "损坏" },
            // 添加更多状态
          ]}
        />
        <SelectInput
          source="usage_status"
          label="使用状态"
          choices={[
            { id: "使用中", name: "使用中" },
            { id: "空闲", name: "空闲" },
            // 添加更多使用状态
          ]}
        />
        <TextInput source="department" label="使用部门" />
        <TextInput source="user_id" label="使用人员" />
        <DateTimeInput source="borrow_time" label="借出时间" />
        <DateTimeInput source="return_time" label="应归还时间" />
      </SimpleForm>
    </Create>
  );
};

export default VehicleCreate;
