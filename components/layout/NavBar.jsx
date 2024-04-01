import Link from 'next/link';
import { headerMenuItems } from './MenuItems';
import { cn } from '@/lib/utils';

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
          {headerMenuItems?.map(item => (
            // nav item

            <li key={item.label}>
              <Link href={item.link}>
                <span
                  className={cn(
                    'flex items-center hover:text-zinc-500 transition-all duration-500',
                    isActive(item.link) && 'text-sky-700  hover:text-sky-900'
                  )}
                >
                  {item?.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
