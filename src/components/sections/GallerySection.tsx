"use client";
import { useState } from "react";
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
    src: "/gallery/img1.jpg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: "/gallery/img2.jpg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: "/gallery/img3.jpg",
    alt: "Gallery Image 7",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text mb-12">
          Event Gallery
        </h2>{" "}
        <div className="space-y-6">
          {/* First row - 4 images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
