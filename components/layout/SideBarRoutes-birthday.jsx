import Link from 'next/link';
import { headerMenuItems } from './MenuItems';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SideBarRoutes = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // const toggleDropdown = index => {
  //   if (openDropdownIndex === index) {
  //     setOpenDropdownIndex(null);
  //   } else {
  //     setOpenDropdownIndex(index);
  //   }
  // };
  const toggleDropdown = index => {
    // This function toggles the dropdown state, triggering the animation
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  // Using scaleY for the animation
  // Improved variants for smooth opening and closing animations
  // const variants = {
  //   open: { scaleY: 1, opacity: 1, transition: { duration: 0.5 } },
  //   closed: { scaleY: 0, opacity: 0, transition: { duration: 0.5 } }
  // };
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
                    {item.label}
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
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                      // <ul className="bg-gray-50 rounded-md border-t-3 border-primary max-w-sm shadow-md flex flex-col gap-3 py-6">
                      //   {item.subMenuItems.map((subItem, subIndex) => (
                      //     <li key={subIndex} className="text-black hover:text-primary px-6">
                      //       <Link
                      //         className="cursor-pointer justify-between w-full"
                      //         href={subItem.link}
                      //       >
                      //         {subItem.label}
                      //       </Link>
                      //     </li>
                      //   ))}
                      // </ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  className="cursor-pointer text-black flex items-center gap-1"
                  href={item.link}
                >
                  {item.label}
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
