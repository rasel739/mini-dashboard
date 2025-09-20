'use client';
import { useSession } from 'next-auth/react';
import Button from '@/components/common/Button';
import InputField from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Spinner from '@/components/common/Spinner';
import { signIn } from '../auth';

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  useEffect(() => {
    if (status === 'authenticated' && session) {
      router.replace(callbackUrl);
    }
  }, [status, session, callbackUrl, router]);

  if (status === 'loading' || status === 'authenticated') {
    return <Spinner />;
  }

  return (
    <div className='bg-gray-50 '>
      <div className='flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-indigo-500 px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 shadow-2xl'>
            <div className='text-center sm:mx-auto sm:w-full sm:max-w-md'>
              <h1 className='text-3xl font-extrabold text-gray-50'>Sign in</h1>
            </div>
            <form className='space-y-6'>
              <InputField
                id='email'
                label='Email'
                type='email'
                name='email'
                autoComplete='off'
                placeholder='Enter your email'
              />

              <InputField
                id='password'
                label='Password'
                type='password'
                name='password'
                autoComplete='current-password'
                placeholder='Enter your password'
              />

              <div className='flex justify-center items-center'>
                <Button type='submit' variant='primary' disabled={true}>
                  Login
                </Button>
              </div>
            </form>
            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300 mb-5'></div>
                </div>
              </div>
              <div className='mt-10 flex justify-center items-center'>
                <Button
                  className='hover:bg-slate-800'
                  onClick={() => {
                    signIn('google', { callbackUrl, redirect: true });
                  }}
                  variant='outline'
                  icon='/img/google.png'
                >
                  Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
