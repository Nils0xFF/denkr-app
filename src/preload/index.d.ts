import { ContextAPI } from './types';

declare global {
  interface Window {
    api: ContextAPI;
  }
}
