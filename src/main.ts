import path from "node:path";
import { BrowserWindow, app } from "electron";

// ホットリロードスクリプトをインポート
import { reloader } from "./reloader";

// 開発モードの場合はホットリロードする
if (process.env.NODE_ENV === "development") {
  reloader({
    // メイン・レンダラーともに webpack が出力するファイルを監視
    mainPaths: ["dist/main.js", "dist/preload.js"],
    rendererPaths: ["dist/index.html", "dist/app.js", "dist/app.css"],
  });
}

const setupWindow = (): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      preload: path.resolve(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("dist/index.html");
  mainWindow.webContents.openDevTools();
  mainWindow.setMenuBarVisibility(false);
  mainWindow.setFullScreen(true);

  return mainWindow;
};

app.whenReady().then(() => {
  setupWindow();
});

// すべてのウィンドウが閉じられたらアプリを終了する
app.once("window-all-closed", () => app.quit());
