import { auth } from '@/auth';
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout';
import { redirect } from 'next/navigation';

async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}

export default AuthLayout;
