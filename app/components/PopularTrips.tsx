// components/PopularTrips.tsx
"use client";
import { popularTrips } from "../lib/data";

interface PopularTripsProps {
  onShowDetails: (tripId: string) => void;
  onBook: (packageName: string) => void;
}

export default function PopularTrips({ onShowDetails, onBook }: PopularTripsProps) {
  return (
    <div className="w-full px-4 md:px-8 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#2E7D32] mb-6 text-center border-b-2 border-[#ED6A02] pb-2 inline-block mx-auto block w-fit px-8">
        Popular Trips in Laos
      </h2>
      <div className="popular-trips-grid mt-8">
        {popularTrips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition hover:-translate-y-2 h-full">
              <img src={trip.image} alt={trip.title} className="w-full h-56 md:h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl text-[#2E7D32]">{trip.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{trip.description}</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => onShowDetails(trip.id)}
                    className="bg-[#2E7D32] text-white px-3 py-1 rounded-full text-xs hover:bg-[#ED6A02] transition"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBook(`${trip.title} Heritage Tour`)}
                    className="bg-[#ED6A02] text-white px-3 py-1 rounded-full text-xs hover:bg-[#2E7D32] transition"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}