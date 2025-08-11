import { contextBridge } from 'electron';
import { ContextAPI } from './types';

if (!process.contextIsolated) {
  throw new Error('contextIsolated is not enabled in the BrowserWindow');
}

// Custom APIs for renderer
const api: ContextAPI = {
  locale: navigator.language,
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
