// src/app/ClientProviders.tsx
"use client";

import { SnackbarProvider } from "notistack";
import React from "react";

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
};

export default ClientProviders;
