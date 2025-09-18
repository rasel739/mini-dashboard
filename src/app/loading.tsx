import Image from 'next/image';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Image
        className='animate-spin'
        src='https://www.svgrepo.com/show/474682/loading.svg'
        width={80}
        height={80}
        alt='Loading icon'
      ></Image>
    </div>
  );
};

export default Loading;
