"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Truck, Sun, Moon } from "lucide-react";
import Image from 'next/image';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="bg-blue-700 dark:bg-gray-800 text-white py-3 px-4 md:px-8 sticky top-0 z-20 shadow-xl shadow-blue-800/50 dark:shadow-gray-900/50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
                    <Image 
              src="/TowTruckIcon.webp" 
              alt="Ikonica šlepera" 
              width={50} 
              height={50} 
            />
          <span className="text-sm md:text-base font-semibold tracking-tight mt-1">
            Šlep Služba Sarajevo
          </span>
        </Link>

        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex space-x-6 text-sm md:text-base">
            <li>
              <Link
                href="#services"
                className="inline-block py-2 px-6 rounded-full bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Usluge
              </Link>
            </li>
            <li>
              <Link
                href="#why-choose-us"
                className="inline-block py-2 px-6 rounded-full bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Zašto nas izabrati
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="inline-block py-2 px-6 rounded-full bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Cjenovnik
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="inline-block py-2 px-6 rounded-full bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Kontakt
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-200"
          >
            {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>

          <button
            onClick={openModal}
            className="text-white md:hidden"
          >
            Menu
          </button>
        </nav>
      </div>

      {/* Modal with Navigation Content */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
            >
              <h2 className="text-3xl font-semibold mb-6 text-center text-black dark:text-white">
                Navigacija
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#services"
                    className="block py-2 px-6 rounded-lg bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    onClick={closeModal}
                  >
                    Usluge
                  </Link>
                </li>
                <li>
                  <Link
                    href="#why-choose-us"
                    className="block py-2 px-6 rounded-lg bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    onClick={closeModal}
                  >
                    Zašto nas izabrati
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="block py-2 px-6 rounded-lg bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    onClick={closeModal}
                  >
                    Cjenovnik
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="block py-2 px-6 rounded-lg bg-blue-800 hover:bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    onClick={closeModal}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  className="w-full bg-yellow-500 text-black dark:bg-yellow-400 dark:text-gray-900 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                  onClick={closeModal}
                >
                  Zatvori
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
