
import { Disclosure } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Drawer from './Drawer'
import Drawerdata from './Drawerdata'
import { getAssetPath } from '@/app/lib/config'

interface NavigationItem {
  name: string
  href: string
  current: boolean
  children?: NavigationItem[]
}

const navigation: NavigationItem[] = [
  { name: 'home', href: '/', current: true },
  { name: 'about', href: '/#about', current: false },
  {
    name: 'products',
    href: '',
    current: false,
    children: [
      { name: 'Sentinel', href: '/products/sentinel', current: false },
      { name: 'sysPOS', href: '/products/syspos', current: false },
    ],
  },
  { name: 'services', href: '/#services', current: false },
  { name: 'contact Us', href: '/#contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Disclosure as="nav" className="navbar">
      <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

            {/* LOGO */}
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-12 w-40 lg:hidden"
                src={getAssetPath("/assets/logo/logo.png")}
                alt="logo"
              />
              <img
                className="hidden h-full w-full lg:block"
                src={getAssetPath("/assets/logo/logo.png")}
                alt="logo"
              />
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:block m-auto">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'text-black'
                          : 'text-gray-700 hover:text-black',
                        'px-3 py-4 text-lg font-normal opacity-80 hover:opacity-100 transition'
                      )}
                    >
                      {item.name}
                    </Link>

                    {/* Dropdown */}
                    {item.children && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="block lg:hidden">
            <Bars3Icon
              className="h-6 w-6 cursor-pointer"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* MOBILE DRAWER */}
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </div>
      </div>
    </Disclosure>
  )
}

export default Navbar