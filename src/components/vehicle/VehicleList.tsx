import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  Filter,
  TextInput,
  SelectInput,
  FilterProps,
  TopToolbar,
  CreateButton,
} from "react-admin";
import {
  CustomExportButton,
  ImportButton,
  StaffTemplateButton,
  VehicleTemplateButton,
} from "../common/CustomButtons";

interface Vehicle {
  id: number;
  plate_number: string;
  vehicle_type: string;
  brand_model: string;
  status: string;
  usage_status: string;
  department?: string;
  user_id?: number;
  borrow_time?: Date;
  return_time?: Date;
}

const VehicleFilter = (props: FilterProps) => (
  <Filter {...props}>
    <SelectInput
      source="vehicle_type"
      choices={[
        { id: "轿车", name: "轿车" },
        { id: "货车", name: "货车" },
        { id: "摩托车", name: "摩托车" },
        { id: "SUV", name: "SUV" },
        // 添加更多车辆类型
      ]}
      label="车辆类型"
      emptyText="全部车辆类型"
      alwaysOn
    />
    <SelectInput
      source="status"
      choices={[
        { id: "完好", name: "完好" },
        { id: "损坏", name: "损坏" },
        // 添加更多状态
      ]}
      label="状态"
      emptyText="全部状态"
      alwaysOn
    />
    <SelectInput
      source="usage_status"
      choices={[
        { id: "使用中", name: "使用中" },
        { id: "空闲", name: "空闲" },
        // 添加更多使用状态
      ]}
      label="使用状态"
      emptyText="全部使用状态"
      alwaysOn
    />
    <SelectInput
      source="department"
      choices={[
        { id: "技术科", name: "技术科" },
        { id: "刑侦科", name: "刑侦科" },
        // 添加更多部门
      ]}
      label="部门"
      emptyText="全部部门"
      alwaysOn
    />
    <TextInput
      source="keyword"
      label="关键字"
      placeholder="请输入车牌号、品牌型号、使用人员"
      alwaysOn
    />
  </Filter>
);

const VehicleList = () => {
  return (
    <List
      actions={
        <TopToolbar>
          <CreateButton />
          <CustomExportButton resource="vehicle/vehicle" label="导出" />
          <VehicleTemplateButton />
          <ImportButton resource="vehicle/vehicle" label="导入" />
        </TopToolbar>
      }
      filters={<VehicleFilter children={undefined} />}
    >
      <Datagrid>
        <TextField source="plate_number" label="车牌号" />
        <TextField source="vehicle_type" label="车辆类型" />
        <TextField source="brand_model" label="品牌型号" />
        <TextField source="status" label="状态" />
        <TextField source="usage_status" label="使用状态" />
        <TextField source="department" label="使用部门" />
        <TextField source="user_id" label="使用人员" />
        <TextField source="borrow_time" label="借出时间" />
        <TextField source="return_time" label="应归还时间" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default VehicleList;
