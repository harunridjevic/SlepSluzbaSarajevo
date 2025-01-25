"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Call Now Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-yellow-500 hover:bg-yellow-600 text-black dark:text-black shadow-lg"
          onClick={openModal}
        >
          <Phone className="w-8 h-8" />
        </Button>
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
                  onClick={() => window.location.href='tel:+38762223225'}
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

    </>
  );
}
