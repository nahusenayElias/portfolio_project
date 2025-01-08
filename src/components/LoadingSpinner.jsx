// src/components/LoadingSpinner.jsx
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
      />
    </div>
  );
};

export default LoadingSpinner;
