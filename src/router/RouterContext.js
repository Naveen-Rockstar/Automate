import { createContext, useContext } from 'react';

export const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}
