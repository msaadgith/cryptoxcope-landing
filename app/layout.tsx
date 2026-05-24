import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'CryptoXcope',
  description: 'AI-Powered Crypto Intelligence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          bg-[#050816]
          text-white
        "
      >
        {children}

        <Analytics />
      </body>
    </html>
  );
}