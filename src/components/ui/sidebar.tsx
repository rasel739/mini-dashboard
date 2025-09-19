'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { SIDEBAR_LINK } from '@/constants';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/lib/global-provider';
import Button from '../common/Button';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setSideBarOpen(true);
      setDesktopCollapsed(true);
    } else {
      setSideBarOpen(false);
    }
  }, [isDesktop, setSideBarOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isDesktop && sideBarOpen) {
        setSideBarOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [sideBarOpen, isDesktop, setSideBarOpen]);

  return (
    <>
      <AnimatePresence>
        {!isDesktop && sideBarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSideBarOpen(false)}
            className='fixed inset-0 bg-black/50 z-40 md:hidden'
            aria-hidden='true'
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: isDesktop ? 0 : -220 }}
        animate={{
          x: sideBarOpen ? 0 : -220,
          width: isDesktop ? (desktopCollapsed ? 60 : 200) : sideBarOpen ? 200 : 60,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
        className='fixed md:sticky top-0 left-0 h-screen bg-white shadow-xl md:shadow-lg z-50 md:z-30 overflow-hidden flex flex-col'
      >
        <div className='p-3'>
          {isDesktop ? (
            <Button
              variant='primary'
              onClick={() => setDesktopCollapsed(!desktopCollapsed)}
              className={`   ${desktopCollapsed ? 'ml-0' : 'ml-32'}`}
            >
              {desktopCollapsed ? '☰' : 'X'}
            </Button>
          ) : (
            <Button
              variant='primary'
              onClick={() => setSideBarOpen(!sideBarOpen)}
              className={`  ${sideBarOpen ? 'ml-32' : 'ml-0'}`}
            >
              {sideBarOpen ? 'X' : '☰'}
            </Button>
          )}
        </div>

        <nav className='flex-1 overflow-y-auto overflow-x-hidden p-3'>
          <ul className='space-y-1'>
            {SIDEBAR_LINK.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  onClick={() => {
                    if (!isDesktop) setSideBarOpen(false);
                  }}
                  className={`
                    flex items-center p-2.5 rounded-lg ${
                      pathname === item.link ? 'bg-amber-300' : 'hover:bg-slate-300'
                    }
                     transition-all duration-200 group
                    ${
                      desktopCollapsed || !sideBarOpen
                        ? 'justify-start md:justify-center'
                        : 'justify-start'
                    }
                  `}
                >
                  <span className='flex items-center min-w-[20px]'>{item.icon}</span>
                  {!desktopCollapsed && sideBarOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className='ml-3 text-sm font-medium whitespace-nowrap'
                    >
                      {item.title}
                    </motion.span>
                  )}
                  <span className='block md:hidden ml-3'> {item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
