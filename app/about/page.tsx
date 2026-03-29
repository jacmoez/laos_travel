// app/about/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaLeaf,
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Header from "../components/Header";
import { BookingModal } from "../components/Modals";

export default function AboutPage() {
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

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f7f0]">
      <Header onBookNow={() => openBookingModal("General Inquiry")} />

      <main className="flex-1 flex flex-col items-center p-6">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-semibold text-[#2E7D32] mb-4 flex items-center">
                <FaLeaf className="text-[#ED6A02] mr-3" /> Our Story
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, Dream Destination Travel began with a simple mission: to help travelers
                experience the authentic beauty of Laos and Southeast Asia. What started as a small local
                tour operator has grown into a trusted name in travel, known for personalized service and
                deep cultural connections.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe that travel is more than just visiting places—it's about creating stories,
                forging connections, and transforming perspectives. Every journey we craft is designed to
                immerse you in the local culture while ensuring comfort and sustainability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to offer tours across Laos, Thailand, Vietnam, and Cambodia, with a team
                of passionate local guides who share their knowledge and love for their homeland.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Laos landscape"
                className="rounded-2xl shadow-lg h-48 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Local temple"
                className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="River view"
                className="rounded-2xl shadow-lg h-48 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Mountains"
                className="rounded-2xl shadow-lg h-48 w-full object-cover mt-8"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2E7D32] to-[#1a4f1e] rounded-2xl p-8 md:p-12 text-center text-white shadow-xl mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Experience Laos?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let us help you create unforgettable memories. Contact us today to start planning your dream journey.
            </p>
            <button
              onClick={() => openBookingModal("General Inquiry")}
              className="bg-[#ED6A02] hover:bg-white hover:text-[#2E7D32] text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
            >
              Book Your Dream Trip
            </button>
          </div>
        </div>
      </main>

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

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packageName={selectedPackage}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
}