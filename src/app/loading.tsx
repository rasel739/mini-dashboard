import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Image
        className='w-20 h-20 animate-spin'
        src='https://www.svgrepo.com/show/474682/loading.svg'
        width={20}
        height={20}
        alt='Loading icon'
      ></Image>
    </div>
  );
};

export default Loading;
