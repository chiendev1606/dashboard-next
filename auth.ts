import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (email === 'admin@admin.com' && password === 'admin') {
          return {
            id: '1',
            email: 'admin@admin.com',
          };
        }
        return null;
      },
      type: 'credentials',
    }),
  ],
});
