"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "./client_providers";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // 捕获未捕获的异常
    window.addEventListener("error", (event) => {
      console.error("Renderer process error:", event.error);
    });

    // 捕获 Promise 中未捕获的拒绝
    window.addEventListener("unhandledrejection", (event) => {
      console.error("Unhandled rejection:", event.reason);
    });
  }, []);

  return (
    <body className={inter.className}>
      <ClientProviders>{children}</ClientProviders>
    </body>
  );
}
