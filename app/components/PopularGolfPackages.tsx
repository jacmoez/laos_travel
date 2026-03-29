// components/PopularGolfPackages.tsx
"use client";
import { popularGolfData } from "../lib/data";

interface PopularGolfPackagesProps {
  onShowDetails: (title: string, duration: string, description: string) => void;
  onBook: (packageName: string) => void;
}

export default function PopularGolfPackages({ onShowDetails, onBook }: PopularGolfPackagesProps) {
  return (
    <div className="bg-white py-2 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-2">🏌️ Popular Golf Packages</h2>
        <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto">
          Family-friendly packages — Details & Book buttons always visible
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGolfData.map((pkg, idx) => (
            <div
              key={idx}
              className="package-card-new relative bg-gradient-to-br from-[#2E7D32] to-[#1a4f1e] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 cursor-pointer h-[380px]"
              onClick={() => onShowDetails(pkg.title, pkg.duration, pkg.desc)}
            >
              <div className="package-card-new-image absolute inset-0 z-0">
                <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              <div className="package-card-new-overlay absolute inset-0 bg-gradient-to-t from-[#2E7D32]/90 via-black/50 to-transparent z-10"></div>
              <div className="package-card-new-content absolute bottom-0 left-0 right-0 p-5 z-20 text-white">
                <h3 className="text-xl font-extrabold mb-1 drop-shadow-lg">{pkg.title}</h3>
                <div className="package-card-new-price text-sm font-semibold text-yellow-300 bg-black/50 inline-block px-3 py-1 rounded-full mb-2">
                  {pkg.priceTag}
                </div>
                <p className="text-sm leading-relaxed mb-3 line-clamp-2">{pkg.desc}</p>
                <div className="package-card-buttons flex gap-3 mt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onShowDetails(pkg.title, pkg.duration, pkg.desc);
                    }}
                    className="card-details-btn flex-1 bg-[#ED6A02]/80 backdrop-blur-sm text-white py-2 rounded-full text-sm font-semibold border border-white/30 hover:bg-[#ED6A02] transition"
                  >
                    <i className="fas fa-info-circle mr-1"></i> Details
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBook(pkg.title);
                    }}
                    className="card-book-btn flex-1 bg-[#2E7D32]/80 backdrop-blur-sm text-white py-2 rounded-full text-sm font-semibold border border-white/30 hover:bg-[#2E7D32] transition"
                  >
                    <i className="fas fa-bookmark mr-1"></i> Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/golf" className="inline-flex items-center bg-white text-[#2E7D32] px-6 py-2 rounded-full font-bold hover:bg-[#ED6A02] hover:text-white transition shadow-lg">
            View All Packages <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}