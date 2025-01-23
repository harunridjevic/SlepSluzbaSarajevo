"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const TowTruckAnimation = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 3000) // Animation lasts for 3 seconds

    return () => clearTimeout(timer)
  }, [])

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
            initial={{ right: "-100%" }}  // Start off the screen (right side)
            animate={{ right: "100%" }}   // Move to the left side (off the screen)
            exit={{ right: "-100%" }}
            transition={{ duration: 1, ease: "linear" }}  // Adjusted speed for faster movement
            className="absolute"
          >
            {/* Tow truck SVG */}
            <img 
              src="/tow-truck.svg" 
              alt="Tow Truck" 
              className="w-48 h-48 text-white fill-current transform"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TowTruckAnimation
