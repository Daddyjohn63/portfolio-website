import Link from 'next/link';
import { headerMenuItems } from './MenuItems';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const SideBarRoutes = () => {
  const pathname = usePathname();

  console.log('mobileroute:', pathname);
  const isActive = link => {
    return pathname === link ||
      (pathname === '/' && link === '/') ||
      pathname?.startsWith(`${link}/`)
      ? 'active'
      : '';
  };

  return (
    <nav className="flex">
      <div>
        {/* NAV LIST START */}

        <ul className="jp-ul flex flex-col   capitalize  ">
          {headerMenuItems?.map((item, i) => (
            // nav item

            <li
              key={item.label}
              className={cn(
                'jp-list bg-sky-200 py-6 pl-6 w-[400px] hover:bg-sky-300 ',
                isActive(item.link) && 'bg-sky-400'
              )}
            >
              <Link className="jp-link w-full" href={item.link}>
                <span
                  className={cn(
                    'flex items-center  transition-all duration-500',
                    isActive(item.link) && 'text-sky-700  hover:text-sky-900 '
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
export default SideBarRoutes;
