'use client';
import { SideBarContextType } from '@/types';
import { createContext, useState } from 'react';

export const SideBarContext = createContext<SideBarContextType>({
  sideBarOpen: false,
  setSideBarOpen: () => {},
});

const SideBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <SideBarContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
