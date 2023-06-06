'use client';
import AppNav from '@/components/nav/app-nav';

export default function Home() {

  const onCanPlayHandle = () => { console.log('video can play') }

  return (
    <main className="w-screen h-screen relative bg-slate-300 overflow-hidden">
      <div className="absolute top-12 left-16 font-[Roboto] z-10 text-2xl text-white font-light">GAO DING</div>
      <div className='absolute h-5 top-12 right-[7.5rem] z-10'>
        <AppNav></AppNav>
      </div>
      {/* <Image className='z-0' src={BgImage} alt='home background' fill={true} priority></Image> */}
      <video className='z-0 h-full w-full object-cover object-center' src='video/landing-page-video.webm' autoPlay loop muted onCanPlay={onCanPlayHandle}></video>
    </main>
  )
}
