"use client";
import { useState } from "react";
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
          className="rounded-full w-16 h-16 bg-yellow-500 hover:bg-yellow-600 text-black-800 shadow-lg"
          onClick={openModal}
        >
          <Phone className="w-8 h-8" />
          <span className="sr-only">Call Now</span>
        </Button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-3xl font-semibold mb-6 text-center text-black-700">
              Pozovite nas odmah
            </h2>
            <a
              href="tel:+1234567890"
              className="text-xl text-blue-700 hover:underline text-center block mb-6"
              onClick={closeModal}
            >
              +387 62 223 225
            </a>
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                className="w-full bg-yellow-500 text-black hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                onClick={closeModal}
              >
                Zatvori
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
