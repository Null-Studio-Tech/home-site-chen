import navData from '@/data/nav.json'
import Link from 'next/link'

export default function MobileNav() {
  const routes = navData.nav.map(nav => ({ name: nav.en, path: nav.path }))

  return (
    <div className="w-full h-full min-h-[1.25rem] flex justify-around items-center">
      {routes.map(r => (
        <Link href={r.path} key={r.name}>
          <span className='text-white font=[Roboto] text-base font-light ml-9'>{r.name}</span>
        </Link>))}
    </div>
  )
}