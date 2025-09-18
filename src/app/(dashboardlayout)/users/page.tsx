'use client';
import Card from '@/components/ui/card';
import Modal from '@/components/ui/modal';
import useFetch from '@/hooks/useFetch';
import { User } from '@/types';
import { useState } from 'react';

const Users = () => {
  const { data, loading, error } = useFetch<User[]>('/users');
  const [selected, setSelected] = useState<User | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className='text-red-600'>Failed to load users: {error}</div>;

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-bold'>Users</h2>
      </div>

      <Card>
        <div className='overflow-auto'>
          <table className='min-w-full border-collapse border border-green-800'>
            <thead>
              <tr className='text-left text-sm text-slate-600'>
                <th className='table-border'>ID</th>
                <th className='table-border'>Name</th>
                <th className='table-border'>Email</th>
                <th className='table-border'>Company</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => setSelected(user)}
                  className='cursor-pointer hover:bg-slate-50'
                >
                  <td className='table-border'>{user.id}</td>
                  <td className='table-border'>{user.name}</td>
                  <td className='table-border'>{user.email}</td>
                  <td className='table-border'>{user.company?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {selected && (
        <Modal modalClose={() => setSelected(null)} title={selected.name}>
          <div>
            <p>
              <strong>Email:</strong> {selected.email}
            </p>
            <p>
              <strong>Phone:</strong> {selected.phone}
            </p>
            <p>
              <strong>Website:</strong> {selected.website}
            </p>
            <p>
              <strong>Company:</strong> {selected.company?.name}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Users;
