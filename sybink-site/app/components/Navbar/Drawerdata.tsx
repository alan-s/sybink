import React from "react";
import Link from "next/link";
import { getHref } from '@/app/lib/config'

interface NavigationItem {
  name: string
  href: string
  current: boolean
  children?: NavigationItem[]
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: getHref('/'), current: true },
  { name: 'About', href: getHref('/#about'), current: false },
  {
    name: 'Products',
    href: '#',
    current: false,
    children: [
      { name: 'Sentinel', href: getHref('/sentinel'), current: false },
      { name: 'sysPOS', href: getHref('/syspos'), current: false },
    ],
  },
  { name: 'Services', href: getHref('/#services'), current: false },
  { name: 'Contact Us', href: getHref('/#contact'), current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                  'px-2 py-1 text-lg font-normal opacity-75 block'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
