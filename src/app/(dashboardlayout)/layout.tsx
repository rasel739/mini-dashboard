'use client';
import Header from '@/components/ui/header';
import Sidebar from '@/components/ui/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <div className='  px-6 '>
          <Header />
        </div>
        <main className='flex-1 p-6 container mx-auto'>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
