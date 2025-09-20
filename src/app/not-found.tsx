import Button from '@/components/common/Button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <h2 className='text-2xl mb-6'>Page Not Found</h2>
      <p className='mb-6'>Sorry, the page you are looking for does not exist.</p>
      <Link href='/'>
        <Button variant='primary'>Go Back Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
