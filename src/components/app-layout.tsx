'use client';
import AppNav from '@/components/app-nav/app-nav';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

export interface AppLayoutProps {
  theme: 'dark' | 'light'
}

const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({ theme = 'light', children }) => {

  return (
    <main className={`w-screen h-screen relative overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <Link href="/">
        <div className={`absolute top-12 left-16 mobile:top-6 mobile:left-4 font-[Roboto] z-10 text-2xl font-light ${theme === 'light' ? 'text-black' : 'text-white'}`}>GAO DING</div>
      </Link>

      <div className='absolute h-5 top-12 right-[7.5rem] flex items-center mobile:top-6 mobile:right-4 z-10'>
        <AppNav theme={theme}></AppNav>
      </div>
      {children}
    </main>
  )
}

export default AppLayout