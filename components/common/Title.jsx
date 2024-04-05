'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const Title = ({ subTitle, title, primary, titleBlack, classNames, subTitleColor }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, translateX: 0 },
        hidden: { opacity: 0, translateX: -200 }
      }}
    >
      <div
        className={twMerge(
          'flex flex-col items-center w-full  text-center mb-[60px]',
          primary ? 'text-black' : titleBlack ? 'text-black' : 'text-white',
          classNames
        )}
      >
        {/* Subtitle */}
        <h5
          className={twMerge(
            'lg:text-2xl text-xl relative subtitle flex justify-center items-center mb-2',
            primary ? 'before:bg-black' : 'before:bg-white',
            subTitleColor ? subTitleColor : 'text-inherit'
          )}
        >
          {subTitle}
        </h5>

        {/* Main Title */}
        <h3 className="lg:text-[40px] text-3xl font-bold relative title flex gap-3 max-w-3xl leading-[45px]">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default Title;
