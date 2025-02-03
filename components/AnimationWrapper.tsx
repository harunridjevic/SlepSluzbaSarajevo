"use client"

import { useState, useEffect } from "react"
import TowTruckAnimation from "./TowTruckAnimation"
import { motion } from "framer-motion"

export default function AnimationWrapper({ children }: { children: React.ReactNode }) {
  const [showAnimation, setShowAnimation] = useState(true)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false)
      setFadeIn(true) // Trigger fade-in effect after animation ends
    }, 1000) // Tow truck animation lasts for 1 second

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showAnimation && <TowTruckAnimation />}
      <motion.div
        className={showAnimation ? "hidden" : ""}
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeIn ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  )
}
