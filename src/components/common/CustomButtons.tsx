import React from "react";
import { MenuItemLink, useDataProvider } from "react-admin";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { fieldTranslations } from "./fieldTranslations";
import { useSnackbar } from "notistack";
import * as XLSX from "xlsx";
import { Button } from "@mui/material";

export const CustomDashboardMenuItem = () => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); // 防止默认行为
    window.location.href = "http://localhost:3000/"; // 导航到根路径
  };

  return (
    <MenuItemLink
      leftIcon={<DashboardIcon />}
      primaryText="驾驶舱"
      to="/" // 这里设置一个默认的路径
      onClick={handleClick}
    />
  );
};

interface ImportButtonProps {
  resource: keyof typeof fieldTranslations;
  label: string;
}

export const ImportButton: React.FC<ImportButtonProps> = ({
  resource,
  label,
}) => {
  const dataProvider = useDataProvider();
  const { enqueueSnackbar } = useSnackbar();

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);

      // 将中文字段名转回英文字段名
      const translations = fieldTranslations[resource] || {};
      const reverseTranslations = Object.fromEntries(
        Object.entries(translations).map(([key, value]) => [value, key])
      );

      const translatedData = json.map((item: any) => {
        const translatedItem: any = {};
        for (const key in item) {
          translatedItem[reverseTranslations[key] || key] = item[key];
        }
        return translatedItem;
      });

      try {
        const result = await dataProvider.createMany(resource, {
          data: translatedData,
        });
        enqueueSnackbar("导入成功", { variant: "success" });
      } catch (error: any) {
        if (error.body && Array.isArray(error.body.results)) {
          error.body.results.forEach((result: any) => {
            if (result.status === "error") {
              enqueueSnackbar(
                `导入失败: ${result.error} - 数据: ${JSON.stringify(
                  result.data
                )}`,
                { variant: "error" }
              );
            }
          });
        } else {
          enqueueSnackbar("导入失败: 未知错误", { variant: "error" });
        }
      }
    };
    reader.readAsBinaryString(file);
    // 重置文件输入控件的值
    event.target.value = "";
  };

  return (
    <Button variant="contained" component="label">
      {label}
      <input type="file" accept=".xlsx, .xls" hidden onChange={handleImport} />
    </Button>
  );
};

const createTemplateDownloadButton = (
  entity: keyof typeof fieldTranslations,
  label: string
) => {
  const handleDownload = () => {
    const translations = fieldTranslations[entity];
    const worksheetData = Object.values(translations).map((value) => ({
      [value]: "",
    }));
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "模板");
    XLSX.writeFile(workbook, `${label}模板.xlsx`);
  };

  return <Button onClick={handleDownload}>模板下载</Button>;
};

export const StaffTemplateButton = () =>
  createTemplateDownloadButton("personnel/staff", "人员录入");
export const VehicleTemplateButton = () =>
  createTemplateDownloadButton("vehicle/vehicle", "车辆录入");
export const WorkFocusTemplateButton = () =>
  createTemplateDownloadButton("workFocus", "工作重点");
export const IncidentAnalysisTemplateButton = () =>
  createTemplateDownloadButton("incidentAnalysis", "警情分析");
export const RecentDutiesTemplateButton = () =>
  createTemplateDownloadButton("recentDuties", "近期勤务");

interface CustomExportButtonProps {
  resource: keyof typeof fieldTranslations;
  label: string;
}

export const CustomExportButton: React.FC<CustomExportButtonProps> = ({
  resource,
  label,
}) => {
  const dataProvider = useDataProvider();

  const handleExport = async () => {
    const { data } = await dataProvider.getList(resource, {
      pagination: { page: 1, perPage: 100 },
      sort: { field: "id", order: "ASC" },
      filter: {},
    });

    const translations = fieldTranslations[resource] || {};

    // 创建一个新的数组，添加中文表头
    const exportData = data.map((item: any) => {
      const translatedItem: any = {};
      for (const key in item) {
        translatedItem[translations[key] || key] = item[key];
      }
      return translatedItem;
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Export");

    XLSX.writeFile(workbook, `${resource}_export.xlsx`);
  };

  return <Button onClick={handleExport}>{label}</Button>;
};
