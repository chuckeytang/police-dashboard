import React from "react";
import {
  TopToolbar,
  CreateButton,
  ExportButton,
  useTranslate,
} from "react-admin";

const CustomListActions = () => {
  const translate = useTranslate();
  return (
    <TopToolbar>
      <CreateButton label={translate("ra.action.create")} />
      <ExportButton label={translate("ra.action.export")} />
    </TopToolbar>
  );
};

export default CustomListActions;
