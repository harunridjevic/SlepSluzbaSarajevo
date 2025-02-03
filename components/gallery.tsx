"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  { src: "/gallery-img1.webp", alt: "Šlepanje auta po danu" },
  { src: "/gallery-img2.webp", alt: "Šlepanje auta po danu" },
  { src: "/gallery-img4.webp", alt: "Šlepanje auta po danu" },
  { src: "/gallery-img5.webp", alt: "Šlepanje auta po danu" },
  { src: "/gallery-img6.webp", alt: "Šlepanje auta po danu" },
  { src: "/main-img.webp", alt: "Šleper" },
  { src: "/gallery-img7.webp", alt: "Šlepanje auta po danu" },
  { src: "/gallery-img8.webp", alt: "Šlepanje auta po noći" },
  { src: "/gallery-img9.webp", alt: "Šlepanje auta po noći" },
  { src: "/gallery-img10.webp", alt: "Šlepanje auta po danu" },
  { src: "/gallery-img11.webp", alt: "Šlepanje auta po danu" },
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
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl p-5 bg-white dark:bg-gray-800">
                <div className="relative mt-5">
                  <Image
                    src={images[currentImage].src || "/placeholder.svg"}
                    alt={images[currentImage].alt}
                    width={600}
                    height={400}
                    loading="lazy"
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
