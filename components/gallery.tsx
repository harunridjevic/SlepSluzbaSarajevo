"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/gallery-img1.jpg?height=400&width=600", alt: "Tow truck on highway" },
  { src: "/gallery-img2.jpg?height=400&width=600", alt: "Towing a car" },
  { src: "/gallery-img4.jpg?height=400&width=600", alt: "Vehicle recovery" },
  { src: "/gallery-img5.jpg?height=400&width=600", alt: "Fleet of tow trucks" },
  { src: "/gallery-img6.jpg?height=400&width=600", alt: "Night time towing" },
  { src: "/main-img.jpg?height=400&width=600", alt: "Heavy duty towing" },
  { src: "/gallery-img7.jpg?height=400&width=600", alt: "Night time towing" },
  { src: "/gallery-img8.jpg?height=400&width=600", alt: "Night time towing" },
  { src: "/gallery-img9.jpg?height=400&width=600", alt: "Night time towing" },
  { src: "/gallery-img10.jpg?height=400&width=600", alt: "Night time towing" },
  { src: "/gallery-img11.jpg?height=400&width=600", alt: "Night time towing" },
];

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-white">Galerija</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Dialog key={index} onOpenChange={(open) => { if (!open) setCurrentImage(index); }}>
              <DialogTrigger onClick={() => setCurrentImage(index)}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-5 bg-white dark:bg-gray-800">
                <div className="relative mt-5">
                  <img
                    src={images[currentImage].src || "/placeholder.svg"}
                    alt={images[currentImage].alt}
                    className="w-full h-auto rounded-lg"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
  
}
