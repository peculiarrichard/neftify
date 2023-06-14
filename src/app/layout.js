"use client";
import './globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export const metadata = {
  title: 'Neftify | Blockchain Infura',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 1000,
    });
  }, []);
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
