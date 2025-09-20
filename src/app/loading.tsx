import Image from 'next/image';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen' suppressHydrationWarning>
      <Image
        className='animate-spin'
        src='/img/spinner.png'
        width={100}
        height={100}
        alt='Loading icon'
      ></Image>
    </div>
  );
};

export default Loading;
