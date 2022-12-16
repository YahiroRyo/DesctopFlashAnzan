import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  closeApplication: () => ipcRenderer.send("closeApplication"),
});
