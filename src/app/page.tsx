'use client';

import { CARD_CONTENT } from '@/constants';
import DashboardLayout from './(dashboardlayout)/layout';
import NeonBox from '@/components/common/NeonBox';
import Card from '@/components/ui/card';
import { motion, easeOut } from 'framer-motion';

export default function Home() {
  const cardVariants = {
    expand: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    collapse: { opacity: 0, y: 8, scale: 0.98 },
    expand: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: easeOut } },
  };

  return (
    <DashboardLayout>
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-xl font-bold'>Welcome to your Dashboard</h1>
            <p className='text-sm text-slate-600'>Quick summary</p>
          </div>
        </div>

        <motion.div
          variants={cardVariants}
          initial='collapse'
          animate='expand'
          className='grid grid-cols-1 sm:grid-cols-3 gap-4'
        >
          {CARD_CONTENT.map((card) => (
            <motion.div key={card.id} variants={itemVariants} layout>
              <NeonBox neonColor={card.color} radius='rounded-2xl' pad={0}>
                <Card title={card.title} className='rounded-lg'>
                  {card.totalCount}
                </Card>
              </NeonBox>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
