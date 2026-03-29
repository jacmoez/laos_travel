// components/GolfPlacesSlider.tsx
"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { golfPlaces } from "../lib/data";

interface SliderState {
  currentIndex: number;
  total: number;
}

export default function GolfPlacesSlider() {
  const [sliderStates, setSliderStates] = useState<{ [key: string]: SliderState }>({});

  const slideImage = (cardId: string, direction: number) => {
    setSliderStates((prev) => {
      const state = prev[cardId];
      if (!state) return prev;
      let newIndex = state.currentIndex + direction;
      if (newIndex < 0) newIndex = state.total - 1;
      if (newIndex >= state.total) newIndex = 0;
      return { ...prev, [cardId]: { ...state, currentIndex: newIndex } };
    });
  };

  const initSlider = (cardId: string, total: number) => {
    if (!sliderStates[cardId]) {
      setSliderStates((prev) => ({ ...prev, [cardId]: { currentIndex: 0, total } }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6" id="places">
      <div className="section-header text-center mb-6">
        <h2 className="text-3xl font-bold text-[#2E7D32]">Golf Places in Laos</h2>
        <p className="text-gray-600 mt-2">Explore Laos' finest golf courses and destinations — swipe to view more images</p>
        <div className="w-24 h-1 bg-[#ED6A02] mx-auto mt-3 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {golfPlaces.map((place, idx) => {
          const cardId = `golf-card-${idx}`;
          const totalImages = place.images.length;
          initSlider(cardId, totalImages);
          const currentIndex = sliderStates[cardId]?.currentIndex || 0;

          return (
            <div key={idx} className="place-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
              <div className="place-image-slider relative h-[200px] overflow-hidden bg-[#1a2a1a]">
                <div className="slider-container relative w-full h-full">
                  <div
                    className="slider-images flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {place.images.map((img, imgIdx) => (
                      <img key={imgIdx} src={img} className="slider-img min-w-full h-full object-cover" alt={`${place.name} view ${imgIdx + 1}`} />
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); slideImage(cardId, -1); }}
                    className="slider-btn slider-btn-left absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 bg-black/60 text-white rounded-full hover:bg-[#ED6A02] transition flex items-center justify-center"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); slideImage(cardId, 1); }}
                    className="slider-btn slider-btn-right absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 bg-black/60 text-white rounded-full hover:bg-[#ED6A02] transition flex items-center justify-center"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                  <div className="slider-dots absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {place.images.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={(e) => { e.stopPropagation(); slideImage(cardId, dotIdx - currentIndex); }}
                        className={`slider-dot w-2 h-2 rounded-full transition-all ${
                          dotIdx === currentIndex ? "bg-[#ED6A02] w-5" : "bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="place-content p-5 flex-1">
                <h3 className="place-title text-xl font-bold text-[#2E7D32] mb-1">{place.name}</h3>
                <a href={place.mapLink} target="_blank" rel="noopener noreferrer" className="place-location flex items-center text-[#ED6A02] text-sm mb-2 cursor-pointer">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>{place.location}</span>
                </a>
                <div className="place-details flex gap-4 text-sm font-semibold text-[#2E7D32] mb-2">
                  <span><i className="fas fa-flag text-[#ED6A02] mr-1"></i>{place.holes}</span>
                  <span><i className="fas fa-ruler text-[#ED6A02] mr-1"></i>{place.yards}</span>
                </div>
                <p className="place-description text-gray-600 text-sm leading-relaxed">{place.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}