import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const PoppinsSans = Poppins({
  variable: '--font-Poppins-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoppinsSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
