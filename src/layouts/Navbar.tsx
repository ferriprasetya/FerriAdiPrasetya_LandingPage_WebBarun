'use client'

import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react'
import Image from 'next/image'
import { menuItems } from '@/contents/menuItems'

export default function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-primary py-4'>
      <NavbarContent className='flex justify-between'>
        <NavbarBrand className='h-full'>
          <Image
            height={78}
            width={136}
            src='/logo.svg'
            alt='logo'
            className='h-12 w-fit object-contain'
          />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='md:hidden'
        />
      </NavbarContent>

      <NavbarContent
        className='hidden gap-4 md:flex md:gap-10 lg:gap-20'
        justify='center'
      >
        {menuItems.map((menu, index) => (
          <NavbarItem key={`${menu.label}-${index}`}>
            <Link color='foreground' href={menu.href}>
              {menu.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className='bg-primary pt-20'>
        {menuItems.map((menu, index) => (
          <NavbarMenuItem key={`mobile-${menu.label}-${index}`}>
            <Link
              className='w-full py-4'
              color='foreground'
              href={menu.href}
              size='lg'
            >
              {menu.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
