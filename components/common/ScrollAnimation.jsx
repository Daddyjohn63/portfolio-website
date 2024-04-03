'use client';
import { motion } from 'framer-motion';

const Reveal = ({ children, duration = 0.8, delay = 0.2, from }) => {
  const variants = {
    hidden: { opacity: 0, y: from },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
