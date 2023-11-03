import navData from '@/data/nav.json'
import Link from 'next/link'
import { useLockBodyScroll } from '@uidotdev/usehooks'
import { FC, useState } from 'react'
import Image from 'next/image'
import lightBtn from '@/assets/images/menu-btn-light.png';
import darkBtn from '@/assets/images/menu-btn-dark.png';

export interface MobileNavProps {
  theme: 'dark' | 'light'
}

const MobileNav: FC<MobileNavProps> = ({ theme }) => {
  const routes = navData.nav.map(nav => ({ name: nav.en, path: nav.path }))
  useLockBodyScroll()
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <div className='text-white w-4 h-3 mobile:block hidden' onClick={() => setShowNav(true)}>
        <Image src={theme === 'dark' ? lightBtn : darkBtn} alt='menu button'></Image>
      </div>
      <div className={`fixed inset-0 flex flex-col bg-white px-4 ${showNav ? '' : 'hidden'}`}>
        <header className='flex flex-row w-full h-[72px] justify-between items-center'>
          <span className='font-[Roboto] text-black text-2xl font-light'>GAO DING</span>
          <span className='font-[Roboto] text-black text-2xl font-light' onClick={() => setShowNav(false)}>X</span>
        </header>
        <div className='flex-1 w-full flex flex-col justify-center gap-10'>
          {routes.map(r => (
            <Link href={r.path} key={r.name}>
              <span className='font-[Roboto] text-black text-3xl font-light'>{r.name}</span>
            </Link>))}
        </div>
      </div>
    </>
  )
}

export default MobileNav