'use client';
import useSticky from '@/hooks/useSticky';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavBar from './NavBar';
import { cn } from '@/lib/utils';

const Header = () => {
  const { sticky } = useSticky(150);
  const pathname = usePathname();
  const isHome = pathname === '/'; // Returns true if on home page

  // const isActive =
  //   (pathname === '/' && href === '/') ||
  //   pathname === href ||
  //   pathname?.startsWith(`${href}/`);

  // Adjust header classes based on the page and scroll position
  const headerClass = cn('top-0 left-0 w-full z-10', {
    'page-header is-sticky bg-white shadow-md': sticky,
    'bg-transparent absolute': !sticky && isHome, // Transparent only when not sticky and on the home page
    'bg-white': !isHome || sticky // White background if not on the home page or if sticky
  });

  // Adjust text color based on the page
  const textColorClass = cn({
    'text-black': !isHome || sticky, // Black text if not on the home page or if sticky
    'text-white': isHome && !sticky // White text only when on the home page and not sticky
  });

  return (
    <header className={headerClass}>
      <div
        className={`flex h-[80px] items-center justify-between px-4 ${textColorClass}`}
      >
        {/* LOGO START */}
        <Link className={textColorClass} href="/">
          My Portfolio App Logo
        </Link>
        {/* LOGO END */}

        {/* NAVBAR START */}
        <NavBar textColorClass={textColorClass} />
        {/* NAVBAR END */}

        {/* SOCIAL MEDIA START */}
        <div>
          <p className={textColorClass}>Social Media</p>
        </div>
        {/* SOCIAL MEDIA END */}
      </div>
    </header>
  );
};

export default Header;
