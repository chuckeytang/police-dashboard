// page.tsx
import dynamic from "next/dynamic";
import React from "react";

// 动态加载 AdminPageContent 组件，关闭 SSR
const AdminPageContent = dynamic(() => import("./pageContent"), {
  ssr: false,
});

const AdminPage = () => <AdminPageContent />;

export default AdminPage;
