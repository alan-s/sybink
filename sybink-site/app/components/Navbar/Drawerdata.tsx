import React from "react";
import Link from "next/link";

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

const Data = () => {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    )
  }

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleExpanded(item.name)
                      }}
                      className="w-full text-left px-2 py-1 text-lg font-normal opacity-75 hover:opacity-100 hover:text-black flex items-center justify-between">
                      {item.name}
                    </button>
                    {expandedItems.includes(item.name) && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="px-2 py-1 text-sm text-gray-700 hover:text-black hover:opacity-100 opacity-75 block"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                      'px-2 py-1 text-lg font-normal opacity-75 block'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
