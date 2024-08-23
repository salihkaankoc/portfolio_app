import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ endValue }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 1; // Animasyon süresi (saniye cinsinden)
    const startValue = 0;
    const increment = (endValue - startValue) / (duration * 60); // FPS: 60

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= endValue) {
          clearInterval(interval);
          return endValue;
        }
        return prev + increment;
      });
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(interval);
  }, [endValue]);

  return (
    <motion.div
        className='text-white text-4xl font-semibold'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
     
    >
      {Math.floor(count)}
    </motion.div>
  );
};

export default AnimatedCounter;