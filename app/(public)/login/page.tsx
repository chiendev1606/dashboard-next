'use client';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Logo from '@/public/logo';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: 'admin@admin.com',
      password: 'admin',
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      await signIn('credentials', {
        email: values.username,
        password: values.password,
        redirect: true,
        redirectTo: '/dashboard',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <Logo />
        <div className="w-full flex flex-col gap-8 border p-4 rounded-md shadow-md">
          <div>
            <h1 className="text-2xl font-semibold">Login</h1>
            <p className="text-sm text-muted-foreground">Login to your SupportMe account</p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="border-input w-full"
                        placeholder="john@doe.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="border-input w-full"
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full capitalize text-base"
                type="submit"
                size="lg"
              >
                Login
              </Button>
              <p className="text-sm text-muted-foreground flex items-center gap-2 justify-between">
                Don't have an account?{' '}
                <Link href="/sign-up">
                  <Button variant="outline">Sign up</Button>
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
