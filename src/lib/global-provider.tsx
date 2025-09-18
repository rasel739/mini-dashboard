'use client';
import { GlobalContextType } from '@/types';
import { useSession } from 'next-auth/react';
import { createContext, useState } from 'react';

export const GlobalContext = createContext<GlobalContextType>({
  sideBarOpen: false,
  setSideBarOpen: () => {},
  session: null,
});

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <GlobalContext.Provider value={{ sideBarOpen, setSideBarOpen, session }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
