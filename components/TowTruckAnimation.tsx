"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TowTruckAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000); // Animation lasts for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-blue-600 flex items-center justify-center"
          initial={{ opacity: 1.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ x: "100%" }}  // Start off the screen (right side)
            animate={{ x: "-100%" }} // Move to the left side (off the screen)
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: "linear" }}  // Adjusted speed for smoother movement
            className="absolute"
          >
            {/* Tow truck SVG */}
            <img 
              src="/towing_car.webp" 
              alt="Šleper" 
              className="w-76 h-24 text-white fill-current"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TowTruckAnimation;
