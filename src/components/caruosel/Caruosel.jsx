import React, { useState, useEffect } from "react";
import img1 from '/src/assets/img1.jpg';
import img2 from '/src/assets/ad_img2.jpg';
import img3 from '/src/assets/ad_img3.jpg';

const images = ["https://www.kesarsweetsjaipur.com/cdn/shop/files/8_1.jpg?v=1729548122", img2, img3];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle image change on next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle image change on previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change every 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[70vh] lg:mx-20">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 z-30 px-4 -translate-y-1/2 bg-white/30 rounded-full hover:bg-white/50 focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 z-30 px-4 -translate-y-1/2 bg-white/30 rounded-full hover:bg-white/50 focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
}
