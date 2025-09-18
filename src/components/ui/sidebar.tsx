'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SIDEBAR_LINK } from '@/constants';
import { useContext } from 'react';
import { SideBarContext } from '@/context/sidebar-context';

const Sidebar = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(SideBarContext);
  return (
    <>
      <aside className='flex'>
        <motion.nav
          initial={{ x: -6, opacity: 0 }}
          animate={{ width: sideBarOpen ? 220 : 60, x: 0, opacity: 1 }}
          className='min-h-screen bg-slate-100 p-3 overflow-hidden rounded-t-md rounded-b-md shadow-2xl'
          transition={{ type: 'spring', stiffness: 200, damping: 30, duration: 0.25 }}
        >
          <button
            onClick={() => setSideBarOpen(!sideBarOpen)}
            className={`mb-4 p-2 rounded bg-slate-100 rotate-90 ${sideBarOpen ? 'ml-40' : 'ml-0'}`}
          >
            <span>{sideBarOpen ? 'X' : ''}</span>
          </button>
          <ul className='space-y-2'>
            {SIDEBAR_LINK.map((sidebar) => (
              <li key={sidebar.id}>
                <Link href={sidebar.link}>
                  <span>
                    {sideBarOpen ? (
                      <span>
                        {sidebar.icon} {sidebar.title}
                      </span>
                    ) : (
                      sidebar.icon
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </aside>
    </>
  );
};

export default Sidebar;
