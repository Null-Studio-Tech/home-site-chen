'use client'

import { useMediaQuery } from "usehooks-ts"
import MobileNav from "./mobile-nav"
import DesktopNav from "./desktop-nav"

export default function AppNav() {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return isMobile ? (<MobileNav></MobileNav>) : (<DesktopNav></DesktopNav>)
}