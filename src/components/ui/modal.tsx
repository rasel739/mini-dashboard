import { ModalPropsType } from '@/types';
import { motion } from 'framer-motion';
import React from 'react';

const Modal = ({ children, modalClose, title }: ModalPropsType) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='absolute inset-0 bg-black/40'
        onClick={modalClose}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className='bg-white rounded p-6 z-50 w-full max-w-md'
      >
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <button onClick={modalClose} className='px-2 py-1'>
            ❌
          </button>
        </div>
        <div>{children}</div>
      </motion.div>
    </div>
  );
};

export default Modal;
