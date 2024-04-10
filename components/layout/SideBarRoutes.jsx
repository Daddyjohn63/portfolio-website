import Link from 'next/link';
import { headerMenuItems } from './MenuItems';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const SideBarRoutes = () => {
  const pathname = usePathname();
  const isActive = link => {
    return pathname === link ||
      (pathname === '/' && link === '/') ||
      pathname?.startsWith(`${link}/`)
      ? 'active'
      : '';
  };

  //console.log('MOBILE ROUTES', pathname);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = index => {
    // This function toggles the dropdown state, triggering the animation
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const variants = {
    initial: { opacity: 0, scaleY: 0 },
    animate: { opacity: 1, scaleY: 1, height: 'auto', transition: { duration: 0.5 } },
    exit: { opacity: 0, scaleY: 0, transition: { duration: 0.1 } }
  };

  return (
    <nav className="flex px-3">
      <div className="w-full">
        <ul className="flex flex-col items-start gap-4 text-lg font-medium capitalize ">
          {headerMenuItems?.map((item, index) => (
            <li key={index} className="flex flex-col  group text-black w-full">
              {item.subMenuItems ? (
                <>
                  <div
                    className="w-full flex justify-between   gap-1 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span
                      className={cn(
                        'flex items-center hover:text-zinc-500 transition-all duration-500 ',
                        isActive(item.link) && 'text-sky-700  hover:text-sky-900'
                      )}
                    >
                      {item.label}
                    </span>

                    {item.subMenuItems.length > 0 && (
                      <ChevronDown
                        className={`${
                          openDropdownIndex === index ? 'rotate-180' : 'rotate-0'
                        } transition-transform`}
                      />
                    )}
                  </div>
                  <AnimatePresence>
                    {openDropdownIndex === index && (
                      <motion.ul
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={variants}
                        className="origin-top bg-gray-50 rounded-md border-t-3 border-primary max-w-sm shadow-md flex flex-col gap-3 py-6 overflow-hidden"
                      >
                        {item.subMenuItems.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-black hover:text-primary px-6"
                          >
                            <Link
                              href={subItem.link}
                              className="cursor-pointer justify-between w-full"
                            >
                              <span
                                className={cn(
                                  'flex items-center hover:text-zinc-500 transition-all duration-500 ',
                                  isActive(subItem.link) &&
                                    'text-sky-700  hover:text-sky-900'
                                )}
                              >
                                {subItem.label}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  className="cursor-pointer text-black flex items-center gap-1"
                  href={item.link}
                >
                  <span
                    className={cn(
                      'flex items-center hover:text-zinc-500 transition-all duration-500 ',
                      isActive(item.link) && 'text-sky-700  hover:text-sky-900'
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SideBarRoutes;
