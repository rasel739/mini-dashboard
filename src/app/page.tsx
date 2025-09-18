'use client';

import { CARD_CONTENT } from '@/constants';
import DashboardLayout from './(dashboardlayout)/layout';
import NeonBox from '@/components/common/NeonBox';
import Card from '@/components/ui/card';

export default function Home() {
  return (
    <DashboardLayout>
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-xl font-bold'>Welcome to your Dashboard</h1>
            <p className='text-sm text-slate-600'>Quick summary</p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {CARD_CONTENT.map((card) => (
            <div key={card.id}>
              <NeonBox neonColor={card.color} radius='rounded-2xl' pad={0}>
                <Card title={card.title}>{card.totalCount}</Card>
              </NeonBox>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
