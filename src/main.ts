import path from 'node:path';
import { BrowserWindow, app } from 'electron';

// ホットリロードスクリプトをインポート
import { reloader } from './reloader';

// 開発モードの場合はホットリロードする
if (process.env.NODE_ENV === 'development') {
  reloader({
    // メイン・レンダラーともに webpack が出力するファイルを監視
    mainPaths: ['dist/main.js', 'dist/preload.js'],
    rendererPaths: ['dist/index.html', 'dist/app.js', 'dist/app.css'],
  });
}

app.whenReady().then(() => {
  // アプリの起動イベント発火で BrowserWindow インスタンスを作成
  const mainWindow = new BrowserWindow({
    webPreferences: {
      // webpack が出力したプリロードスクリプトを読み込み
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // レンダラープロセスをロード
  mainWindow.loadFile('dist/index.html');
});

// すべてのウィンドウが閉じられたらアプリを終了する
app.once('window-all-closed', () => app.quit());