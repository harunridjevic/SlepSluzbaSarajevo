"use client";
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Tow truck on highway" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Towing a car" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Roadside assistance" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Vehicle recovery" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Fleet of tow trucks" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Night time towing" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Tow truck driver helping customer" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Heavy duty towing" },
]

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="relative">
                  <img
                    src={images[currentImage].src || "/placeholder.svg"}
                    alt={images[currentImage].alt}
                    className="w-full h-auto"
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
  )
}
