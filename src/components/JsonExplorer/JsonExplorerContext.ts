import { createContext } from 'react';

export const JsonExplorerContext = createContext<{
  jsonData: Record<string, unknown>;
} | null>(null);
