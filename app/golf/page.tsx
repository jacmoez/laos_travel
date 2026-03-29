// app/golf/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaFlag,
  FaRuler,
  FaGolfBall,
  FaArrowRight,
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Header from "../components/Header";
import { BookingModal } from "../components/Modals";

// Golf places data
const golfPlaces = [
  {
    name: "Luang Prabang Golf Club",
    location: "Luang Prabang, Laos",
    holes: "18 Holes",
    yards: "7,200 yards",
    description: "Set against stunning mountain backdrops, this championship course offers a challenging yet scenic experience designed to blend with the natural landscape.",
    mapLink: "https://www.google.com/maps/place/Luang+Prabang+Golf+Club/@19.867168,102.085388,14z/",
    image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg.rend.hgtvcom.966.644.suffix/1573243603510.jpeg",
  },
  {
    name: "Long Vien Golf Club",
    location: "Vientiane, Laos",
    holes: "18 Holes",
    yards: "6,850 yards",
    description: "One of Vientiane's premier courses featuring rolling fairways, strategic bunkering, and scenic water features. Known for excellent conditioning.",
    mapLink: "https://www.google.com/maps?ll=17.903951,102.68792",
    image: "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg",
  },
  {
    name: "SEA Games Golf Club",
    location: "Vientiane, Laos",
    holes: "27 Holes",
    yards: "7,100 yards",
    description: "Built for the SEA Games, this course offers a challenging layout with wide fairways and large greens. Host to numerous international tournaments.",
    mapLink: "https://www.google.com/maps/place/SEA+Games+Golf+Club/@18.063169,102.727647",
    image: "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg",
  },
  {
    name: "Lakeview Golf Club",
    location: "Vientiane, Laos",
    holes: "18 Holes",
    yards: "6,900 yards",
    description: "Scenic course with beautiful lake views on multiple holes. Offers a relaxing golf experience with well-maintained fairways and friendly staff.",
    mapLink: "https://www.google.com/maps/place/Lakeview+Golf+Club+Vientiane/@18.001775,102.683344",
    image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg.rend.hgtvcom.966.644.suffix/1573243603510.jpeg",
  },
  {
    name: "Mekong Golf & Resort",
    location: "Vientiane Province, Laos",
    holes: "18 Holes",
    yards: "7,050 yards",
    description: "A championship course situated along the Mekong River featuring challenging holes, water hazards, and a full-service resort with accommodations.",
    mapLink: "https://www.google.com/maps?ll=18.026691,102.457932",
    image: "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg",
  },
  {
    name: "Lao Country Club",
    location: "Vientiane, Laos",
    holes: "18 Holes",
    yards: "6,800 yards",
    description: "Traditional country club atmosphere with a well-designed course suitable for all skill levels. Known for its excellent practice facilities.",
    mapLink: "https://www.google.com/maps/place/Lao+Country+Club/@17.885438,102.671513",
    image: "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg",
  },
];

// Popular packages (new style cards)
const popularPackages = [
  {
    title: "Vientiane Escape",
    duration: "4 Days - 3 Nights",
    price: "$599",
    desc: "2 rounds at Long Vien & Lakeview • Transfers • Hotel • Caddie",
    image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg.rend.hgtvcom.966.644.suffix/1573243603510.jpeg",
  },
  {
    title: "Vientiane Getaway",
    duration: "5 Days - 4 Nights",
    price: "$799",
    desc: "3 rounds at Long Vien, SEA Games & Lakeview • Transfers • Accommodations",
    image: "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg",
  },
  {
    title: "Luang Prabang Escape",
    duration: "3 Days - 2 Nights",
    price: "$499",
    desc: "2 rounds at Luang Prabang GC • Cozy stays • Daily breakfast • Temple visits",
    image: "https://media.nomadicmatt.com/2022/vangvieng1.jpeg",
  },
  {
    title: "Thailand-Laos Adventure",
    duration: "4 Days - 3 Nights",
    price: "$699",
    desc: "Nong Khai + Vientiane • Victory Park, Lao CC, Long Vien, Lakeview",
    image: "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg",
  },
];

// All packages (regular cards)
const allPackages = [
  {
    title: "Vientiane Golf Escape",
    duration: "4 Days - 3 Nights",
    location: "Vientiane, Laos",
    description: "Two rounds at Long Vien and Lakeview Golf Clubs. Includes transfers, quality hotel stay, cart & caddie.",
    price: "$599",
    image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg.rend.hgtvcom.966.644.suffix/1573243603510.jpeg",
  },
  {
    title: "Vientiane Golf Getaway",
    duration: "5 Days - 4 Nights",
    location: "Vientiane, Laos",
    description: "Three rounds at Long Vien, SEA Games, and Lakeview. Includes transfers, caddie services, and accommodations.",
    price: "$799",
    image: "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg",
  },
  {
    title: "Vientiane Premier Golf",
    duration: "6 Days - 5 Nights",
    location: "Vientiane, Laos",
    description: "Four rounds at Long Vien, SEA Games, Mekong Resort, and Lakeview. Private transfers and premium accommodations.",
    price: "$1,099",
    image: "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg",
  },
  {
    title: "Luang Prabang Golf Escape",
    duration: "3 Days - 2 Nights",
    location: "Luang Prabang, Laos",
    description: "Two rounds at Luang Prabang Golf Club. Includes cozy stays, daily breakfast, and cultural temple visits.",
    price: "$499",
    image: "https://media.nomadicmatt.com/2022/vangvieng1.jpeg",
  },
  {
    title: "Laos Golf & Culture Tour",
    duration: "8 Days - 7 Nights",
    location: "Vientiane & Luang Prabang",
    description: "Rounds in Vientiane and Luang Prabang plus guided sightseeing, scenic train ride, and historic city tours.",
    price: "$1,499",
    image: "https://www.secret-retreats.com/blog/wp-content/uploads/2021/06/young-woman-walking-wooden-path-with-green-rice-field-vang-vieng-laos-scaled.jpg",
  },
  {
    title: "Laos Golf Holiday",
    duration: "7 Days - 6 Nights",
    location: "Luang Prabang & Vientiane",
    description: "Week-long adventure playing at Laos' premier golf courses including Luang Prabang and Vientiane layouts.",
    price: "$1,299",
    image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg.rend.hgtvcom.966.644.suffix/1573243603510.jpeg",
  },
  {
    title: "Thailand-Laos Adventure",
    duration: "4 Days - 3 Nights",
    location: "Nong Khai & Vientiane",
    description: "Start at Nong Khai's Victory Park, then cross into Vientiane for rounds at Lao Country Club, Long Vien, and Lakeview.",
    price: "$699",
    image: "https://media.npr.org/assets/img/2023/03/01/gettyimages-1410422468_wide-f64095a661d8b05ad0433ef9da08b1f83dd23d24.jpg",
  },
  {
    title: "Thailand-Laos Journey",
    duration: "12 Days - 11 Nights",
    location: "Bangkok & Vientiane",
    description: "Up to 10 rounds on premier courses in Thailand and Laos, complemented by cultural sightseeing.",
    price: "$2,499",
    image: "https://www.pgaresort.com/images/content/homepageclubslidersmallimg/palm-harbor---innisbrook-resort---golf---2024-folklore-films-_12-1-.jpg",
  },
  {
    title: "Laid Back Laos Golf",
    duration: "5 Days - 4 Nights",
    location: "Vientiane, Laos",
    description: "Three rounds at premier courses, comfortable accommodations, daily breakfast, and seamless transfers.",
    price: "$849",
    image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/06/06/5b172fb47abc957b64518a7b_GettyImages-942686126.jpg.rend.hgtvcom.966.644.suffix/1573243603510.jpeg",
  },
];

export default function GolfPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("General Inquiry");

  const openBookingModal = (packageName: string) => {
    setSelectedPackage(packageName);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = (data: any) => {
    const { firstName, lastName, email, phone, nationality, message, packageName } = data;
    const subject = `Booking Request: ${packageName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nNationality: ${nationality}\nPackage: ${packageName}\n\nMessage: ${message}`;
    window.location.href = `mailto:bookings@dreamdestination.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    alert(`Thank you ${firstName}! Your booking request for "${packageName}" has been opened in your email client. We'll get back to you shortly.`);
    setBookingModalOpen(false);
  };

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.slice(1);
        const element = document.getElementById(id!);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f7f0]">
      <Header onBookNow={() => openBookingModal("General Inquiry")} />

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#2E7D32] to-[#1a4f1e] py-16 px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Laos Golf</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover premier golf destinations and exclusive packages in the heart of Southeast Asia
          </p>
        </div>

        {/* Golf Places Section */}
        <div className="max-w-6xl mx-auto px-4 py-12" id="places">
          <div className="section-header text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E7D32]">Golf Places in Laos</h2>
            <p className="text-gray-600 mt-2">Explore Laos' finest golf courses and destinations</p>
            <div className="w-24 h-1 bg-[#ED6A02] mx-auto mt-4 rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {golfPlaces.map((place, idx) => (
              <div key={idx} className="place-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="place-image h-48 overflow-hidden">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="place-content p-5">
                  <h3 className="text-xl font-bold text-[#2E7D32] mb-1">{place.name}</h3>
                  <a href={place.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#ED6A02] text-sm mb-2 hover:underline">
                    <FaMapMarkerAlt className="mr-1" /> <span>{place.location}</span>
                  </a>
                  <div className="flex gap-4 text-sm font-semibold text-[#2E7D32] mb-3">
                    <span><FaFlag className="inline text-[#ED6A02] mr-1" /> {place.holes}</span>
                    <span><FaRuler className="inline text-[#ED6A02] mr-1" /> {place.yards}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Golf Packages (new style cards) */}
        <div className="bg-white py-12" id="packages">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2E7D32] mb-4">Popular Golf Packages</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Our most booked golf packages in Laos</p>
            <div className="w-24 h-1 bg-[#ED6A02] mx-auto mb-8 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="package-card-new relative bg-gradient-to-br from-[#2E7D32] to-[#1a4f1e] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 cursor-pointer h-[350px] group"
                >
                  <div className="absolute inset-0 z-0">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E7D32]/90 via-black/40 to-transparent z-10"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white transition-transform duration-500 group-hover:translate-y-[-15px]">
                    <h3 className="text-2xl font-extrabold mb-1 drop-shadow-lg">{pkg.title}</h3>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <FaGolfBall /> <span>{pkg.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-yellow-300 mb-2">{pkg.price} <span className="text-sm text-white/70">/person</span></div>
                    <p className="text-sm opacity-0 max-h-0 transition-all duration-500 group-hover:opacity-100 group-hover:max-h-[60px] mb-2 overflow-hidden">{pkg.desc}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); openBookingModal(pkg.title); }}
                      className="inline-block bg-[#ED6A02] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#2E7D32] transition transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => openBookingModal("General Inquiry")}
                className="inline-flex items-center bg-[#2E7D32] text-white px-8 py-3 rounded-full font-bold hover:bg-[#ED6A02] transition shadow-lg"
              >
                View All Packages <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* All Golf Packages (regular cards) */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-[#2E7D32] mb-4 text-center">All Golf Packages</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Complete selection of golf packages across Laos</p>
          <div className="w-24 h-1 bg-[#ED6A02] mx-auto mb-8 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPackages.map((pkg, idx) => (
              <div key={idx} className="package-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
                <div className="package-image h-44 overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="package-content p-5 flex flex-col flex-1">
                  <span className="inline-block bg-[#ED6A02] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">{pkg.duration}</span>
                  <h3 className="text-lg font-bold text-[#2E7D32] mb-1">{pkg.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <FaMapMarkerAlt className="text-[#ED6A02] mr-1" /> {pkg.location}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{pkg.description}</p>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-3 mt-auto">
                    <div className="font-bold text-[#ED6A02] text-xl">{pkg.price} <span className="text-xs text-gray-500">/person</span></div>
                    <button
                      onClick={() => openBookingModal(pkg.title)}
                      className="bg-[#2E7D32] text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-[#ED6A02] transition"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2E7D32] text-white border-t border-[#1A1A1A]/20 py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
            <a href="https://wa.me/8562012345678" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all hover:scale-110 transform duration-200 border-2 border-[#2E7D32] flex items-center justify-center w-12 h-12">
              <FaWhatsapp className="text-2xl text-[#2E7D32]" />
            </a>
            <a href="https://tiktok.com/@dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-[#1A1A1A] rounded-full p-3 shadow-md hover:shadow-lg transition-all hover:scale-110 transform duration-200 flex items-center justify-center w-12 h-12">
              <FaTiktok className="text-2xl text-white" />
            </a>
            <a href="https://facebook.com/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] rounded-full p-3 shadow-md hover:shadow-lg transition-all hover:scale-110 transform duration-200 flex items-center justify-center w-12 h-12">
              <FaFacebookF className="text-2xl text-white" />
            </a>
            <a href="https://instagram.com/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] rounded-full p-3 shadow-md hover:shadow-lg transition-all hover:scale-110 transform duration-200 flex items-center justify-center w-12 h-12">
              <FaInstagram className="text-2xl text-white" />
            </a>
            <a href="https://youtube.com/@dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-[#FF0000] rounded-full p-3 shadow-md hover:shadow-lg transition-all hover:scale-110 transform duration-200 flex items-center justify-center w-12 h-12">
              <FaYoutube className="text-2xl text-white" />
            </a>
            <a href="https://linkedin.com/company/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] rounded-full p-3 shadow-md hover:shadow-lg transition-all hover:scale-110 transform duration-200 flex items-center justify-center w-12 h-12">
              <FaLinkedinIn className="text-2xl text-white" />
            </a>
          </div>
          <div className="text-center text-sm text-white/70">
            <p>© {new Date().getFullYear()} Dream Destination Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packageName={selectedPackage}
        onSubmit={handleBookingSubmit}
      />

      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .package-card-new {
          transition: all 0.5s ease;
        }
        .package-card-new:hover {
          transform: translateY(-15px) rotate(2deg);
          box-shadow: 0 30px 35px -10px rgba(0, 0, 0, 0.3);
        }
        .package-card-new .absolute.bottom-0 {
          transition: transform 0.5s ease;
        }
        .package-card-new:hover .absolute.bottom-0 {
          transform: translateY(-15px);
        }
        .package-card-new p {
          transition: all 0.5s ease;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
        }
        .package-card-new:hover p {
          opacity: 1;
          max-height: 60px;
        }
        .package-card-new button {
          transition: all 0.3s ease;
          transform: scale(0);
          opacity: 0;
        }
        .package-card-new:hover button {
          transform: scale(1);
          opacity: 1;
        }
        .package-card-new button:hover {
          background-color: #2E7D32 !important;
          transform: scale(1.1) !important;
        }
      `}</style>
    </div>
  );
}