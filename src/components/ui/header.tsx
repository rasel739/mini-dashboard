'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { GlobalContext } from '@/lib/global-provider';
import Button from '../common/Button';

const Header = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  const [dropdownOpen, setDropDownOpen] = useState<boolean>(false);
  const { data: user } = useSession();

  return (
    <header className='w-full flex items-center justify-between gap-4 py-3 '>
      <motion.div
        initial={{ x: -6, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className='flex items-center gap-3 '
      >
        {sideBarOpen ? (
          ''
        ) : (
          <Button variant='primary' onClick={() => setSideBarOpen(!sideBarOpen)}>
            {sideBarOpen ? '' : '☰'}
          </Button>
        )}

        <div className='hidden sm:block'>
          <h1 className='text-lg font-semibold leading-none'>Mini Dashboard</h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 6, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='flex items-center gap-3'
      >
        <div className='flex items-center gap-2'>
          {user?.user ? (
            <button onClick={() => setDropDownOpen(!dropdownOpen)} className='cursor-pointer'>
              <span className='flex items-center gap-2 px-3 py-1 rounded-md hover:bg-slate-50 bg-white shadow-sm'>
                <span className='w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium'>
                  {user?.user?.image ? (
                    <Image src={user?.user?.image} alt='user image' width={32} height={32} />
                  ) : (
                    '👤'
                  )}
                </span>
                <span className='text-sm'>{user?.user?.name}</span>
              </span>
            </button>
          ) : (
            <Link href='/login'>
              <Button type='button' variant='primary'>
                Login
              </Button>
            </Link>
          )}

          <ul
            className={`absolute ${
              dropdownOpen ? 'block' : 'hidden'
            } top-16 right-5 z-10 min-w-[160px]  rounded-lg border border-slate-200 bg-white p-1.5  focus:outline-none`}
          >
            <Link href='/profile' className='cursor-pointer'>
              <li
                role='menuitem'
                className='cursor-pointer text-slate-900 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'
              >
                {'🪪'} Profile
              </li>
            </Link>
            <Link href='/' onClick={() => signOut({ redirectTo: '/' })} className='cursor-pointer'>
              <li
                role='menuitem'
                className='cursor-pointer text-red-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'
              >
                {' ➜]'} Logout
              </li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
