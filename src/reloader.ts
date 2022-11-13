import { watch } from 'chokidar';
import { BrowserWindow, app } from 'electron';

type Options = {
  mainPaths?: string[];
  rendererPaths?: string[];
};

// 'node_modules' とドットファイルは無視する
const ignoreFiles = /node_modules|[/\\]\./;

export const reloader = (options: Options) => {
  let mainLock = false;
  let rendererLock = false;

  let mainTimeOut: NodeJS.Timeout;
  let rendererTimeOut: NodeJS.Timeout;

  const mainPaths = options.mainPaths || process.cwd();
  const rendererPaths = options.rendererPaths || process.cwd();

  // アプリをリスタート
  const relaunchApp = () => {
    if (!mainLock) {
      mainLock = true;
      clearTimeout(mainTimeOut);
      mainTimeOut = setTimeout(() => {
        app.relaunch();
        app.exit(0);
        mainLock = false;
      }, 300);
    }
  };

  // レンダラープロセス (=webview) をリロード
  const reloadWeb = () => {
    if (!rendererLock) {
      rendererLock = true;
      clearTimeout(rendererTimeOut);
      rendererTimeOut = setTimeout(() => {
        const wins = BrowserWindow.getAllWindows();
        wins.forEach((win) => {
          win.webContents.reloadIgnoringCache();
          rendererLock = false;
        });
      }, 250);
    }
  };

  // メインプロセスのファイルへの変更を監視
watch(mainPaths, {
    ignored: ignoreFiles,
    alwaysStat: true,
  }).on('change', (_filepath, stat) => {
    if (stat) relaunchApp();
  });

  // レンダラープロセスのファイルへの変更を監視
  watch(rendererPaths, {
    ignored: ignoreFiles,
    alwaysStat: true,
  }).on('change', (_filepath, stat) => {
    if (stat) reloadWeb();
  });
}