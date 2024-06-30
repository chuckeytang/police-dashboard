import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <CircularProgress />
    <span style={{ marginLeft: "10px" }}>加载中，请稍候...</span>
  </div>
);

export default Loading;
