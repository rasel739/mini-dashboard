'use client';
import { GlobalContextType } from '@/types';
import { createContext, useState } from 'react';

export const GlobalContext = createContext<GlobalContextType>({
  sideBarOpen: false,
  setSideBarOpen: () => {},
});

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
