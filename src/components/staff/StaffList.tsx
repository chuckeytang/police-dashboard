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
  useNotify,
  useListContext,
  useDataProvider,
  Button,
  TopToolbar,
  CreateButton,
} from "react-admin";

interface Staff {
  id: number;
  police_number: string;
  name: string;
  position: string;
  department: string;
  contact: string;
  vehicle?: string;
}
import { useSnackbar } from "notistack";
import {
  CustomExportButton,
  ImportButton,
  StaffTemplateButton,
} from "../common/CustomButtons";

const StaffFilter = (props: FilterProps) => (
  <Filter {...props}>
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
    <SelectInput
      source="position"
      choices={[
        { id: "主任", name: "主任" },
        { id: "科长", name: "科长" },
        { id: "民警", name: "民警" },
        // 添加更多职务/警衔
      ]}
      label="职务/警衔"
      emptyText="全部职务/警衔"
      alwaysOn
    />
    <TextInput
      source="keyword"
      label="关键字"
      placeholder="请输入警号、姓名、联系方式"
      alwaysOn
    />
  </Filter>
);

const CustomBulkDeleteButton = (props: any) => {
  const notify = useNotify();
  const { selectedIds, resource, refetch } = useListContext();
  const { enqueueSnackbar } = useSnackbar();
  const dataProvider = useDataProvider();

  const handleDelete = async () => {
    try {
      const response = await dataProvider.deleteMany(resource, {
        ids: selectedIds,
      });
      enqueueSnackbar("删除成功", { variant: "success" });
      refetch();
    } catch (error: any) {
      console.error("Failed to delete staff:", error);
      enqueueSnackbar(error.body.error, { variant: "error" });
    }
  };

  return <Button label="删除" onClick={handleDelete} {...props} />;
};

const StaffList = () => {
  return (
    <List
      actions={
        <TopToolbar>
          <CreateButton />
          <CustomExportButton resource="personnel/staff" label="导出" />
          <StaffTemplateButton />
          <ImportButton resource="personnel/staff" label="导入" />
        </TopToolbar>
      }
      filters={<StaffFilter children={undefined} />}
    >
      <Datagrid bulkActionButtons={<CustomBulkDeleteButton />}>
        <TextField source="police_number" label="警号" />
        <TextField source="name" label="姓名" />
        <TextField source="position" label="职务/警衔" />
        <TextField source="department" label="所属部门" />
        <TextField source="contact" label="联系方式" />
        <TextField source="vehicle" label="使用车辆" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default StaffList;
