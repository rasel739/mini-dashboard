'use client';

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '../loading';

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (session) {
      router.replace('/');
    }
  }, [status, session, router]);

  if (status === 'loading' || session) {
    return <Loading />;
  }
  return (
    <div className='bg-gray-50 '>
      <div className='flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='text-center sm:mx-auto sm:w-full sm:max-w-md'>
          <h1 className='text-3xl font-extrabold text-gray-900 dark:text-white'>Sign in</h1>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-indigo-500 px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 shadow-2xl'>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-white'
                >
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    type='text'
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2  shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600   dark:focus:border-indigo-400 dark:focus:ring-indigo-400'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 dark:text-white'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2  shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600   dark:focus:border-indigo-400 dark:focus:ring-indigo-400'
                  />
                </div>
              </div>

              <div>
                <button
                  data-testid='login'
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50'
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300'></div>
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='bg-white dark:bg-gray-700 px-2 text-gray-500 dark:text-white'>
                    Or continue with
                  </span>
                </div>
              </div>
              <div className='mt-6 grid grid-cols-2 gap-3'>
                <button
                  onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })}
                  className='inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50'
                >
                  <span className='sr-only'>Sign in with Google</span>
                  <Image src='/img/google.png' alt='google-auth-img' width={32} height={32} />
                </button>
                <button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50'>
                  <span className='sr-only'>Sign in with GitHub</span>
                  <Image src='/img/google.png' alt='google-auth-img' width={32} height={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
