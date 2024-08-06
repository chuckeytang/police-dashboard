const { app, BrowserWindow } = require('electron');
const express = require('express');
const next = require('next');
const path = require('path');
const fs = require('fs');

// 设置日志文件路径
const logFilePath = path.join(__dirname, 'log.txt');

// 日志记录函数
function logToFile(message) {
  fs.appendFileSync(logFilePath, message + '\n', 'utf8');
}

(async () => {
  const isDev = (await import('electron-is-dev')).default;
  const nextApp = next({ dev: isDev });
  const handle = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) {
        console.error('Failed to start server:', err);
        logToFile('Failed to start server: ' + err);
        throw err;
      }
      console.log('Ready on http://localhost:3000');
      logToFile('Server ready on http://localhost:3000');
    });

    app.on('ready', async () => {
      console.log('Electron app is ready');
      logToFile('Electron app is ready');
      const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          preload: path.join(__dirname, 'preload.js'),
        },
      });

      mainWindow.webContents.openDevTools();

      if (isDev) {
        mainWindow.loadURL('http://localhost:3000');
      } else {
        const serve = (await import('serve')).default;
        serve(path.join(__dirname, '.next/server')).then(() => {
          mainWindow.loadURL('http://localhost:5000');
        });
      }

      mainWindow.on('closed', () => {
        console.log('Main window closed');
        logToFile('Main window closed');
        mainWindow = null;
      });

      mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
        console.error('Failed to load URL:', validatedURL, 'with error code:', errorCode, 'and description:', errorDescription);
        logToFile(`Failed to load URL: ${validatedURL} with error code: ${errorCode} and description: ${errorDescription}`);
      });
    });

    app.on('window-all-closed', () => {
      console.log('All windows closed');
      logToFile('All windows closed');
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      console.log('App activated');
      logToFile('App activated');
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
})();
