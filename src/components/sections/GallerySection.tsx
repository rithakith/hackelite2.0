"use client";
import { useState, useCallback } from "react";
import Image from "next/image";

const firstRow = [
  {
    id: 1,
    src: "/gallery/img1.jpg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: "/gallery/img2.jpg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "/gallery/img3.jpg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "/gallery/img4.jpg",
    alt: "Gallery Image 4",
  },
];

const secondRow = [
  {
    id: 5,
    src: "/gallery/img5.png",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: "/gallery/img6.png",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: "/gallery/img7.png",
    alt: "Gallery Image 7",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const allImages = [...firstRow, ...secondRow];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  return (
    <section
      id="gallery"
      className="w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-orbitron font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-12">
          Event Gallery
        </h2>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-xl relative aspect-square">
            <div
              key={allImages[currentSlide].id}
              className="relative w-full h-full"
            >
              <Image
                src={allImages[currentSlide].src}
                alt={allImages[currentSlide].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index
                    ? "bg-[#b146e4]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:block space-y-6">
          {/* First row - 4 images */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {firstRow.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() =>
                  setSelectedImage(selectedImage === image.id ? null : image.id)
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    selectedImage === image.id
                      ? "scale-110"
                      : "group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Second row - 3 centered images */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {secondRow.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() =>
                  setSelectedImage(selectedImage === image.id ? null : image.id)
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-transform duration-500 ${
                    selectedImage === image.id
                      ? "scale-110"
                      : "group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <Image
                src={
                  [...firstRow, ...secondRow].find(
                    (img) => img.id === selectedImage
                  )?.src || ""
                }
                alt="Selected gallery image"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[#b146e4] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
