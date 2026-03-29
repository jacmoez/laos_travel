// components/HeroCarousel.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  "https://media.nomadicmatt.com/2022/vangvieng1.jpeg",
  "https://media.worldnomads.com/explore/laos/5-things-laos-social.jpg",
  "https://www.secret-retreats.com/blog/wp-content/uploads/2021/06/young-woman-walking-wooden-path-with-green-rice-field-vang-vieng-laos-scaled.jpg",
  "https://picsum.photos/id/1018/1600/900",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (newIndex: number) => {
    if (isTransitioning) return;
    let index = newIndex;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full shadow-xl">
      {/* Left Arrow */}
      <button
        onClick={() => goToSlide(currentIndex - 1)}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center z-40 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-lg md:text-xl" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => goToSlide(currentIndex + 1)}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center z-40 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-lg md:text-xl" />
      </button>

      <div className="flex carousel-slide will-change-transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((src, idx) => (
          <div key={idx} className="w-full flex-shrink-0 relative carousel-height">
            <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="carousel-btn-container absolute bottom-[20%] left-0 right-0 flex justify-center gap-4 z-30 pointer-events-none">
        <a href="#our_services" className="pointer-events-auto bg-gradient-to-r from-[#ed5002] to-[#D4AF37] text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">
          Travel Packages
        </a>
        <a href="#our_services" className="pointer-events-auto bg-gradient-to-r from-[#511703] to-[#996515] text-white px-6 py-2 rounded-full font-bold shadow-md hover:scale-105 transition">
          Golf Packages
        </a>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-[#ED6A02] w-6" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}