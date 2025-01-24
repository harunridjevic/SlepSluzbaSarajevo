"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link"; // Import Link for navigation

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-blue-700 text-white py-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brza i pouzdana vučna služba</h1>
          <p className="text-xl mb-6">
          Vaš pouzdan partner za siguran transport vozila – 24/7!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-100"
              onClick={openModal}
            >
              <PhoneCall className="mr-2" />
              Pozovite odmah
            </Button>

            <Link
                href="#usluge" // Use the same ID as your target section
                className="inline-flex items-center justify-center py-2 px-6 rounded-full bg-blue-800 hover:bg-blue-600 transition-colors duration-200"
              >
                Saznaj više
                <ArrowRight className="ml-2" />
              </Link>


          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/main-img.jpg?height=400&width=600"
            alt="Tow truck in action"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-3xl font-semibold mb-6 text-center text-black">Pozovite nas odmah</h2>
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
    </section>
  );
}
