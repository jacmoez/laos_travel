// components/ServicesSection.tsx
"use client";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { travelPackages, golfPackages } from "../lib/data";

interface ServicesSectionProps {
  onShowPackageDetails: (title: string, duration: string, description: string) => void;
  onBook: (packageName: string) => void;
}

export default function ServicesSection({ onShowPackageDetails, onBook }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"travel" | "golf">("travel");
  const travelCarouselRef = useRef<HTMLDivElement>(null);
  const golfCarouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) ref.current.scrollBy({ left: -350, behavior: "smooth" });
  };
  const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) ref.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  const packages = activeCategory === "travel" ? travelPackages : golfPackages;
  const carouselRef = activeCategory === "travel" ? travelCarouselRef : golfCarouselRef;

  return (
    <div className="w-full px-4 md:px-8 py-8" id="our_services">
      <h3 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-2 text-center mt-5">Our Services</h3>
      <div className="package-category-buttons flex justify-center gap-4 my-8 flex-wrap">
        <button
          onClick={() => setActiveCategory("travel")}
          className={`category-btn px-6 py-2 rounded-full font-bold transition ${
            activeCategory === "travel"
              ? "bg-gradient-to-r from-[#ed5002] to-[#D4AF37] text-white"
              : "bg-gradient-to-r from-[#511703] to-[#996515] text-white"
          }`}
        >
          Travel Packages
        </button>
        <button
          onClick={() => setActiveCategory("golf")}
          className={`category-btn px-6 py-2 rounded-full font-bold transition ${
            activeCategory === "golf"
              ? "bg-gradient-to-r from-[#ed5002] to-[#D4AF37] text-white"
              : "bg-gradient-to-r from-[#511703] to-[#996515] text-white"
          }`}
        >
          Golf Packages
        </button>
      </div>

      <div className="packages-slider-section relative">
        <button
          onClick={() => scrollLeft(carouselRef)}
          className="slider-arrow slider-arrow-left absolute top-1/2 -translate-y-1/2 left-2 md:left-[-15px] w-10 h-10 bg-white rounded-full shadow-md border border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition z-30 flex items-center justify-center"
          aria-label="Scroll left"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scrollRight(carouselRef)}
          className="slider-arrow slider-arrow-right absolute top-1/2 -translate-y-1/2 right-2 md:right-[-15px] w-10 h-10 bg-white rounded-full shadow-md border border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white transition z-30 flex items-center justify-center"
          aria-label="Scroll right"
        >
          <FaChevronRight />
        </button>

        <div
          ref={carouselRef}
          className="packages-grid-carousel flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {packages.map((pkg, idx) => (
            <div key={idx} className="package-mini-card flex-shrink-0 w-[320px] md:w-[350px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
              <div className="package-mini-image h-48 md:h-56 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="package-mini-content p-4">
                <div className="package-mini-title font-bold text-[#2E7D32] text-lg md:text-xl mb-1">{pkg.title}</div>
                <div className="package-mini-duration-text text-[#ED6A02] text-sm font-semibold mb-2">{pkg.duration}</div>
                <div className="package-mini-footer flex gap-2 justify-between items-center">
                  <button
                    onClick={() => onShowPackageDetails(pkg.title, pkg.duration, pkg.description)}
                    className="btn-details bg-[#ED6A02] text-white px-4 py-1 rounded-full text-sm hover:bg-[#2E7D32] transition"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBook(`${pkg.title} - ${pkg.duration}`)}
                    className="btn-book bg-[#2E7D32] text-white px-4 py-1 rounded-full text-sm hover:bg-[#ED6A02] transition"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}