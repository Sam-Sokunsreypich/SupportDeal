import React, { useState, useEffect } from "react";
import img1 from '/assets/clothes_banner.jpg';
import img2 from '/assets/clothes_banner1.jpg';


const images = ["https://marketplace.canva.com/EAFfT9NH-JU/1/0/1600w/canva-gray-minimalist-fashion-big-sale-banner-TvkdMwoxWP8.jpg","https://i.pinimg.com/736x/90/43/8e/90438ef6208a7f01a80dbb9acd8ac624.jpg","https://i.pinimg.com/736x/fa/e4/c6/fae4c6a565497d7dd3900388abe7236b.jpg"];

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
            <img src={image}
                  srcSet={`${image}?w=300 300w, ${image}?w=600 600w, ${image}?w=1200 1200w`}
                  sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
                  className="block w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent text-5xl font-bold absolute top-1/2 left-0 z-30 px-4 -translate-y-1/2 bg-white/30 rounded-full hover:bg-white/50 focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent text-5xl font-bold absolute top-1/2 right-0 z-30 px-4 -translate-y-1/2 bg-white/30 rounded-full hover:bg-white/50 focus:outline-none"
      >
        &#8250;
      </button>
    </div>
  );
}
