import React from "react";
import { MenuItemLink } from "react-admin";
import DashboardIcon from "@mui/icons-material/Dashboard";

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
