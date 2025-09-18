'use client';
import Loading from '@/app/loading';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({ children, redirectTo = '/login' }: ProtectedRouteProps) => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.replace(`${redirectTo}?callbackUrl=${pathname}`);
    }
  }, [status, session, router, redirectTo, pathname]);

  if (status === 'loading' || !session) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
