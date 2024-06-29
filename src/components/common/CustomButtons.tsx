import {
  ExportButton,
  DashboardMenuItem,
  ShowButton,
  EditButton,
} from "react-admin";

export const CustomExportButton = () => <ExportButton label="导出" />;

export const CustomDashboardMenuItem = () => (
  <DashboardMenuItem primaryText="驾驶舱" />
);

export const CustomShowButton = () => <ShowButton label="详情" />;

export const CustomEditButton = () => <EditButton label="编辑" />;
