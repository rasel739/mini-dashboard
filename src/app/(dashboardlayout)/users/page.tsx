'use client';
import Spinner from '@/components/common/Spinner';
import Modal from '@/components/ui/modal';
import useFetch from '@/hooks/useFetch';
import { User } from '@/types';
import Link from 'next/link';
import { useState } from 'react';

const Users = () => {
  const { data, loading, error } = useFetch<User[]>('/users');
  const [selected, setSelected] = useState<User | null>(null);

  if (loading) return <Spinner />;

  return (
    <div>
      <div className='flex items-center justify-center mb-2'>
        <h2 className='text-2xl font-bold'>Users</h2>
      </div>
      <div className='text-center mt-10'>
        <span className='space-x-2'>{error && <div className='text-red-600'>{error}</div>}</span>
      </div>
      <div className='w-full overflow-x-auto'>
        <div className='max-h-96 overflow-y-auto'>
          <table className='min-w-full border-collapse'>
            <thead className='sticky top-0 bg-black text-white '>
              <tr className='text-left text-sm w-full mb-4'>
                <th className=' p-2 w-1/4'>Id</th>
                <th className=' p-2 w-1/4'>Name</th>
                <th className=' p-2 w-1/4'>Email</th>
                <th className=' p-2 w-1/4'>Phone</th>
              </tr>
            </thead>
            <tbody className='bg-gray-200'>
              {data?.map((user) => (
                <tr
                  key={user?.id}
                  onClick={() => setSelected(user)}
                  className='cursor-pointer hover:bg-gray-500 hover:text-white  w-full mb-4'
                >
                  <td className='shadow p-2 w-1/4'>{user.id}</td>
                  <td className='shadow p-2 w-1/4'>{user.name}</td>
                  <td className='shadow p-2 w-1/4'>{user.email}</td>
                  <td className='shadow p-2 w-1/4'>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selected && (
        <Modal modalClose={() => setSelected(null)} title={selected.name}>
          <ul className='space-y-3 text-gray-700'>
            <li className='flex'>
              <span className='w-24 font-semibold text-gray-900'>Email:</span>
              <span className='break-all'>{selected.email}</span>
            </li>
            <li className='flex'>
              <span className='w-24 font-semibold text-gray-900'>Phone:</span>
              <span>{selected.phone}</span>
            </li>
            <li className='flex'>
              <span className='w-24 font-semibold text-gray-900'>Company:</span>
              <span>{selected.company?.name}</span>
            </li>
            <li className='flex'>
              <span className='w-24 font-semibold text-gray-900'>Portfolio:</span>
              <Link
                href={`https://${selected.website}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-500 hover:underline break-all'
              >
                {selected.website}
              </Link>
            </li>
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Users;
