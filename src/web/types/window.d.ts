export interface Api {
  closeApplication: () => void;
}

declare global {
  interface Window {
    api: Api;
  }
}
