'use client';
import AppLayout from '@/components/app-layout';

export default function Home() {

  const onCanPlayHandle = () => { console.log('video can play') }

  return (
    <AppLayout theme="dark">
      <div className='w-full h-full bg-black'>
        <video className='z-0 h-full w-full object-cover object-center' src='video/landing-page-video.webm' autoPlay loop muted onCanPlay={onCanPlayHandle}></video>
      </div>
    </AppLayout>
  )
}
