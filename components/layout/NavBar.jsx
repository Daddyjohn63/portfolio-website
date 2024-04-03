import Link from 'next/link';
import { headerMenuItems } from './MenuItems';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const NavBar = ({ pathname }) => {
  const isActive = link => {
    return pathname === link ||
      (pathname === '/' && link === '/') ||
      pathname?.startsWith(`${link}/`)
      ? 'active'
      : '';
  };

  return (
    <nav className="hidden md:flex">
      <div>
        {/* NAV LIST START */}
        <ul className="flex gap-6 capitalize">
          {headerMenuItems?.map((item, i) => (
            // nav item

            <li key={i} className="flex flex-col relative group">
              <Link href={item.link}>
                <span
                  className={cn(
                    'flex items-center hover:text-zinc-500 transition-all duration-500 ',
                    isActive(item.link) && 'text-sky-700  hover:text-sky-900'
                  )}
                >
                  {item?.label}
                  {item?.subMenuItems && (
                    <ChevronDown className="group-hover:rotate-180 transition-all duration-500 w-4 h-4 " />
                  )}
                </span>
              </Link>
              {/* if item has dropdown property..then */}
              {item.subMenuItems && (
                //display the ul for dropdown menus
                <ul className="lg:absolute lg:top-full left-0 lg:h-fit h-0 bg-gray-50 lg:rounded-t-none  border-t-3 border-solid border-black flex flex-col gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:h-fit group-hover:py-6 transition-all duration-300 z-20">
                  {/* now map over the sub-items */}
                  {item.subMenuItems.map((dropdownItem, i) => (
                    <li
                      key={i}
                      className="text-black hover:text-primary transition-all duration-300 ease-in-out px-6 group/subDrop"
                    >
                      <Link href={dropdownItem?.link}>{dropdownItem?.label}</Link>
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
export default NavBar;
