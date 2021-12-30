import { createContext, RefObject, useContext } from 'react';

export const PluginContext = createContext(
  {} as {
    query: string;
  }
);

export function usePluginContext() {
  const context = useContext(PluginContext);

  if (!context) {
    throw new Error(`No access to plugin context`);
  }

  return context;
}
