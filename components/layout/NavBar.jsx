import Link from 'next/link';
import { headerMenuItems } from './MenuItems';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const NavBar = ({ pathname }) => {
  //console.log('DESKTOP', pathname);
  const isActive = link => {
    return pathname === link ||
      (pathname === '/' && link === '/') ||
      pathname?.startsWith(`${link}/`)
      ? 'active'
      : '';
  };
  //console.log('nav menu', headerMenuItems);
  return (
    <nav className="hidden md:flex">
      <div>
        {/* NAV LIST START */}
        <ul className="flex gap-6 capitalize text-xl">
          {headerMenuItems?.map((item, i) => (
            // nav item
            <li key={i} className="flex flex-col relative group">
              {/* Check if there are subMenuItems to decide on rendering the Link or just a span */}
              {item.subMenuItems && item.subMenuItems.length > 0 ? (
                <span
                  className={cn(
                    'flex items-center hover:text-zinc-500 transition-all duration-500',
                    isActive(item.link) && 'text-sky-700 hover:text-sky-900'
                  )}
                >
                  {item.label}
                  <ChevronDown className="ml-2 group-hover:rotate-180 transition-all duration-500 w-4 h-4" />
                </span>
              ) : (
                <Link href={item.link}>
                  <span
                    className={cn(
                      'flex items-center hover:text-zinc-500 transition-all duration-500',
                      isActive(item.link) && 'text-sky-700 hover:text-sky-900'
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              )}
              {/* Display the dropdown menu if subMenuItems exists and has length */}
              {item.subMenuItems && item.subMenuItems.length > 0 && (
                <ul className="jp-border mt-3 absolute top-full left-0 h-fit w-[180px] bg-gray-50 rounded-t-none border-t-[3px] border-solid border-violet-500 shadow drop-shadow flex flex-col gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:h-fit group-hover:py-6 transition-all duration-300 z-20">
                  {item.subMenuItems.map((dropdownItem, i) => (
                    <li
                      key={i}
                      className="text-black hover:text-violet-500 transition-all duration-300 ease-in-out px-6"
                    >
                      <Link href={dropdownItem.link}>{dropdownItem.label}</Link>
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
