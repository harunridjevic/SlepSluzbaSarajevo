"use client";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isDarkMode]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-blue-700 dark:bg-gray-800 text-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brza i pouzdana vučna služba</h1>
          <p className="text-xl mb-6">
            Vaš pouzdan partner za siguran transport vozila, putničkih i teretnih vozila na teritoriji BiH!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white dark:bg-blue-500 text-blue-700 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-600"
              onClick={openModal}
            >
              <PhoneCall className="mr-2" />
              Pozovite odmah
            </Button>

            <Link
              href="#usluge"
              className="inline-flex items-center justify-center py-2 px-6 rounded-full bg-blue-800 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Saznaj više
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/main-img.webp"
            alt="Naš šleper"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
            priority
            decoding="async"
            loading="eager"
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      </div>

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
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full relative"
            >
              <div className="hidden sm:block">
                <button
                  className="absolute top-4 right-4 text-black dark:text-white hover:text-red-500"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <h2 className="text-3xl font-semibold mb-6 text-center text-black dark:text-white">
                Pozovite nas odmah
              </h2>
              <a
                href="tel:+38762223225"
                className="text-xl text-blue-700 hover:underline text-center block mb-6"
                onClick={closeModal}
              >
                +387 62 223 225
              </a>
              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  className="w-full bg-green-500 text-white dark:bg-green-400 dark:text-gray-900 hover:bg-green-400 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  onClick={() => window.location.href = 'tel:+38762223225'}
                >
                  Pozovi
                </Button>
                <div className="mt-4 sm:hidden">
                  <Button
                    variant="outline"
                    className="w-full bg-yellow-500 text-black dark:bg-yellow-400 dark:text-gray-900 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                    onClick={closeModal}
                  >
                    Zatvori
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
