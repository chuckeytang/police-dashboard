const { app, BrowserWindow } = require("electron");
const path = require("path");
const express = require('express');
const next = require('next');

const fs = require("fs");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: true,
    },
  });

  const url = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'index.html')}`;
  mainWindow.loadURL(url);
  mainWindow.webContents.openDevTools(); // 打开开发者工具
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    console.log("activate:");
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
