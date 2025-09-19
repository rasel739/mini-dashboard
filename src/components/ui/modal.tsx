import { ModalPropsType } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const Modal = ({ children, modalClose, title }: ModalPropsType) => {
  return (
    <AnimatePresence>
      <div className='fixed inset-0 z-50 flex items-center justify-center px-2'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='absolute inset-0 bg-gray-500 opacity-10'
          onClick={modalClose}
        />
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.75, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className='relative bg-white rounded-md shadow-xl overflow-hidden w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50'
        >
          <div className='bg-indigo-500 text-white px-4 py-3 flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <button
              onClick={modalClose}
              className='text-white text-lg px-2 py-1 rounded hover:bg-indigo-600 transition'
            >
              ❌
            </button>
          </div>
          <div className='p-4'>{children}</div>
          <div className='border-t px-4 py-2 flex justify-end'>
            <button
              onClick={modalClose}
              className='px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition'
            >
              Edit
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
