'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Spinner = () => {
  const [timeNow, setTimeNow] = useState<string | null>(null);

  useEffect(() => {
    setTimeNow(new Date().toLocaleString());
  }, []);

  if (!timeNow) return null;
  return (
    <div className='flex justify-center items-center h-screen'>
      <Image
        className='animate-spin'
        src='/img/spinner.svg'
        width={100}
        height={100}
        alt='Spinner icon'
        unoptimized
      ></Image>
    </div>
  );
};

export default Spinner;
