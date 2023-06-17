'use client';
import AppNav from '@/components/nav/app-nav';
import React, { PropsWithChildren } from 'react';

export interface AppLayoutProps {
  theme: 'dark' | 'light'
}

const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({ theme = 'light', children }) => {

  return (
    <main className={`w-screen h-screen relative overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className={`absolute top-12 left-16 font-[Roboto] z-10 text-2xl font-light ${theme === 'light' ? 'text-black' : 'text-white'}`}>GAO DING</div>
      <div className='absolute h-5 top-12 right-[7.5rem] z-10'>
        <AppNav></AppNav>
      </div>
      {children}
    </main>
  )
}

export default AppLayout