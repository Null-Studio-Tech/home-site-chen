import navData from '@/data/nav.json'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

export interface DesktopNavProps {
  theme: 'dark' | 'light'
}

const DesktopNav: FC<DesktopNavProps> = ({ theme }) => {
  const routes = navData.nav.map(nav => ({ name: nav.en, path: nav.path }))
  const curPath = usePathname()

  return (
    <div className="w-full h-full min-h-[1.25rem] flex mobile:hidden justify-around items-center">
      {routes.map(r => (
        <Link href={r.path} key={r.name}>
          <div className='group relative min-w-[80px] w-fit min-h-[52px] h-fit ml-9'>
            <div className={`absolute inset-0 flex justify-center items-center font=[Roboto] text-base font-light ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{r.name}</div>
            {r.path === curPath ?
              (<div className='flex absolute inset-0 justify-center items-center'>
                <div className={`w-[80px] h-[52px] ${theme === 'dark' ? 'bg-active-small' : 'bg-dark-active-small'}`}></div>
              </div>)
              :
              (<div className='hidden group-hover:flex absolute inset-0 justify-center items-center'>
                <div className={`w-[80px] h-[52px] transform animate-highlight-small animate-mode-forwards ${theme === 'dark' ? 'bg-highlight-small' : 'bg-dark-highlight-small'}`}></div>
              </div>)}
          </div>
        </Link>))}
    </div>

  )
}

export default DesktopNav