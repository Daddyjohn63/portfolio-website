'use client';
import Link from 'next/link';
import { useState } from 'react';
import { headerMenuItems } from './MenuItems';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronsDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const SideBarRoutes = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open

  const toggleDropdown = index => {
    // Toggle between open and close by clicking the same menu item
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    } else {
      setOpenDropdownIndex(index);
    }
  };

  return (
    <nav
      className={cn(
        'flex items-center gap-10 absolute top-0 left-0 w-full  py-[100px]  transition-all duration-500 ease-in-out z-50 overflow-y-scroll',
        'translate-y-0 opacity-100 visible'
      )}
    >
      {/*---------------------- NAV LIST START ----------------------*/}
      <ul className="flex flex-col items-center gap-4  text-lg font-medium">
        {headerMenuItems?.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center relative group text-black"
          >
            {item.subMenuItems ? (
              <div
                onClick={() => toggleDropdown(index)}
                className="flex items-center gap-1 cursor-pointer"
              >
                {item.label}
                <ChevronDown
                  className={`${
                    openDropdownIndex === index ? 'rotate-180' : 'rotate-0'
                  } transition-transform`}
                />
                {openDropdownIndex === index && (
                  <ul className="absolute top-full left-0 bg-gray-50 rounded-md border-t-3 border-primary max-w-sm shadow-md flex flex-col gap-3 py-6 opacity-100 visible transition-all duration-300 z-20">
                    {item.subMenuItems.map((Item, Index) => (
                      <li key={Index} className="text-black hover:text-primary px-6">
                        <Link href={Item.link}>
                          <span className="cursor-pointer">{Item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link href={item.link !== '' ? `${item.link}` : '/'}>
                <span className="cursor-pointer text-black">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
      {/*---------------------- NAV LIST END ----------------------*/}
    </nav>
  );
};

export default SideBarRoutes;
