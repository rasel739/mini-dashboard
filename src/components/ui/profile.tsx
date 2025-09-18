'use client';
import { GlobalContext } from '@/lib/global-provider';
import Image from 'next/image';
import React, { useContext } from 'react';

const UserProfile = () => {
  const { session } = useContext(GlobalContext);

  console.log(session);
  return (
    <div className='max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900'>
      <div className='rounded-t-lg h-32 overflow-hidden'>
        <div className='bg-green-300  w-full h-28'></div>
      </div>
      <div className='mx-auto w-32 h-32 relative -mt-16  border-4 border-white rounded-full overflow-hidden'>
        {session?.user?.image ? (
          <Image
            className='object-cover object-center h-32'
            width={32}
            height={32}
            src={session?.user?.image ?? ''}
            alt='Woman looking front'
          />
        ) : (
          <div className='bg-violet-300 w-full  min-h-screen pt-8 pl-5'>
            <span className='text-red-600 text-6xl'>👤</span>
          </div>
        )}
      </div>
      <div className='text-center mt-2'>
        <h2 className='font-semibold'>{session?.user?.name}</h2>
        <p className='text-gray-500'>{session?.user?.email}</p>
      </div>
      <ul className='py-4 mt-2 text-gray-700 flex items-center justify-around'>
        <li className='flex flex-col items-center justify-around'>
          ⭐<span>2k</span>
        </li>
        <li className='flex flex-col items-center justify-between'>
          👥
          <span>10k</span>
        </li>
        <li className='flex flex-col items-center justify-around'>
          💼
          <span>15</span>
        </li>
      </ul>
      <div className='p-4 border-t mx-8 mt-2'>
        <button className='w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2'>
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
