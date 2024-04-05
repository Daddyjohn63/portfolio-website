'use client';
import Link from 'next/link';
import { useState } from 'react';
import { headerMenuItems } from './MenuItems';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const SideBarRoutes = () => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const isActive = link =>
    pathname === link ||
    (pathname === '/' && link === '/') ||
    pathname?.startsWith(`${link}/`)
      ? 'active'
      : '';

  const toggleSubMenu = (index, event) => {
    event.stopPropagation(); // Prevent event from propagating to parent elements
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <nav className="flex">
      <div>
        <ul className="flex flex-col gap-6 capitalize">
          {headerMenuItems?.map((item, i) => (
            <li key={i} className="flex flex-col relative group">
              <div className="flex items-center justify-between">
                {/* Using onClick to navigate manually if submenu is not present */}
                <div
                  onClick={() => !item.subMenuItems && (window.location.href = item.link)}
                  className={cn(
                    'flex items-center cursor-pointer text-black hover:text-zinc-500 transition-all duration-500',
                    isActive(item.link) && 'text-sky-700 hover:text-sky-900'
                  )}
                >
                  {item.label}
                </div>
                {item.subMenuItems && (
                  <ChevronDown
                    onClick={e => toggleSubMenu(i, e)}
                    className="ml-2 text-black cursor-pointer transition-transform duration-500 w-4 h-4"
                  />
                )}
              </div>
              {item.subMenuItems && openSubMenu === i && (
                <ul className="mt-3 bg-gray-50 rounded-t-none border-t-[3px] border-solid border-violet-500 shadow drop-shadow flex flex-col gap-3 py-6 transition-all duration-300 z-20">
                  {item.subMenuItems.map((dropdownItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-black hover:text-violet-500 transition-all duration-300 ease-in-out px-6"
                    >
                      <Link href={dropdownItem.link}>
                        <div className="cursor-pointer text-black">
                          {dropdownItem.label}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBarRoutes;
