import { createContext } from 'react';

export const JsonExplorerContext = createContext<{
  data: Record<string, unknown>;
} | null>(null);
