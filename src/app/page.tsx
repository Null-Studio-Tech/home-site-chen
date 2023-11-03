'use client';
import AppLayout from '@/components/app-layout';
import Link from 'next/link';
import arrowRight from '@/assets/images/arrow-right.png';
import arrowDown from '@/assets/images/arrow-down.png';
import Image from 'next/image';

export default function Home() {

  const onCanPlayHandle = () => { console.log('video can play') }

  return (
    <AppLayout theme="dark">
      <div className='w-full h-full relative bg-black'>
        <video className='z-0 h-full w-full object-cover object-center' src='video/landing-page-video.webm' autoPlay loop muted onCanPlay={onCanPlayHandle}></video>
        <div className='absolute flex flex-col mobile:hidden w-fit h-1/2 bottom-0 right-16'>
          <Link href='/work'>
            <Image src={arrowRight} width={56} height={56} alt="link to work"></Image>
          </Link>
        </div>
        <div className='absolute flex-row hidden mobile:flex w-full justify-center bottom-20'>
          <Link href='/work'>
            <Image src={arrowDown} width={56} height={56} alt="link to work"></Image>
          </Link>
        </div>
      </div>
    </AppLayout>
  )
}
