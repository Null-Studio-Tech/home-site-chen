'use client'

import MobileNav from "./mobile-nav"
import DesktopNav from "./desktop-nav"
import { FC } from "react"

export interface AppNavProps {
  theme: 'dark' | 'light'
}

const AppNav: FC<AppNavProps> = ({ theme = 'light' }) => {
  return (
    <>
      <MobileNav theme={theme}></MobileNav>
      <DesktopNav theme={theme}></DesktopNav>
    </>
  )
}

export default AppNav;