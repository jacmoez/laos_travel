// app/contactus/page.tsx
"use client";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShareAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import Header from "../components/Header";
import { BookingModal } from "../components/Modals";

export default function ContactUsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("General Inquiry");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const openBookingModal = (packageName: string) => {
    setSelectedPackage(packageName);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = (data: any) => {
    const { firstName, lastName, email, phone, nationality, message, packageName } = data;
    const subject = `Booking Request: ${packageName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nNationality: ${nationality}\nPackage: ${packageName}\n\nMessage: ${message}`;
    window.location.href = `mailto:dreamdestination.vtelaos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    alert(`Thank you ${firstName}! Your booking request for "${packageName}" has been opened in your email client. We'll get back to you shortly.`);
    setBookingModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const mailtoLink = `mailto:dreamdestination.vtelaos@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
    alert(`Thank you ${name}! Your message has been opened in your email client. We'll get back to you shortly.`);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f7f0]">
      <Header onBookNow={() => openBookingModal("General Inquiry")} />

      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-center text-[#2E7D32] mb-6 sm:mb-8 mt-4 sm:mt-5 tracking-tight">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column: Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-[#2E7D32]/20">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#2E7D32] mb-4 sm:mb-6 flex items-center">
                <FaCircleInfo className="text-[#ED6A02] mr-2 sm:mr-3" /> Contact Information
              </h2>

              <div className="flex items-start mb-4 sm:mb-6 group hover:bg-[#f0f7f0] p-2 sm:p-3 rounded-xl transition">
                <div className="bg-[#2E7D32]/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 group-hover:bg-[#ED6A02]/10">
                  <FaPhoneAlt className="text-xl sm:text-2xl text-[#2E7D32] group-hover:text-[#ED6A02]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">+856 205 825 0515</p>
                </div>
              </div>

              <div className="flex items-start mb-4 sm:mb-6 group hover:bg-[#f0f7f0] p-2 sm:p-3 rounded-xl transition">
                <div className="bg-[#2E7D32]/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 group-hover:bg-[#ED6A02]/10">
                  <FaEnvelope className="text-xl sm:text-2xl text-[#2E7D32] group-hover:text-[#ED6A02]" />
                </div>
                <div className="break-words">
                  <p className="text-xs sm:text-sm text-gray-500">Email</p>
                  <p className="text-sm sm:text-lg font-semibold text-gray-800">
                    dreamdestination.vtelaos@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6 sm:mb-8 group hover:bg-[#f0f7f0] p-2 sm:p-3 rounded-xl transition">
                <div className="bg-[#2E7D32]/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 group-hover:bg-[#ED6A02]/10">
                  <FaMapMarkerAlt className="text-xl sm:text-2xl text-[#2E7D32] group-hover:text-[#ED6A02]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Head Office</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">123 Main Street, Yangon</p>
                  <p className="text-xs sm:text-sm text-gray-500">Laos</p>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#2E7D32] mb-3 sm:mb-4 flex items-center">
                <FaShareAlt className="text-[#ED6A02] mr-2" /> Follow Us
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a href="https://wa.me/8562012345678" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 border-2 border-[#2E7D32] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <FaWhatsapp className="text-xl sm:text-2xl text-[#2E7D32]" />
                </a>
                <a href="https://facebook.com/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <FaFacebookF className="text-xl sm:text-2xl text-white" />
                </a>
                <a href="https://instagram.com/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <FaInstagram className="text-xl sm:text-2xl text-white" />
                </a>
                <a href="https://tiktok.com/@dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-black rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <FaTiktok className="text-xl sm:text-2xl text-white" />
                </a>
                <a href="https://linkedin.com/company/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                  <FaLinkedinIn className="text-xl sm:text-2xl text-white" />
                </a>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 italic">
                We typically respond within 24 hours on business days.
              </p>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-[#2E7D32]/20">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#2E7D32] mb-4 sm:mb-6 flex items-center">
                <FaPaperPlane className="text-[#ED6A02] mr-2 sm:mr-3" /> Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" id="name" required value={formData.name} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone Number (optional)</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" required value={formData.subject} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent outline-none transition resize-none"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-[#2E7D32] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg hover:bg-[#ED6A02] transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1">
                    <FaPaperPlane className="inline mr-2" /> Send Message
                  </button>
                </div>
                <p className="text-xs text-gray-400 text-center mt-3 sm:mt-4">
                  We'll never share your information. By submitting, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#2E7D32] text-white border-t border-[#1A1A1A]/20 py-6 sm:py-8 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
            <a href="https://wa.me/8562012345678" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 border-2 border-[#2E7D32] flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <FaWhatsapp className="text-xl sm:text-2xl text-[#2E7D32]" />
            </a>
            <a href="https://facebook.com/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <FaFacebookF className="text-xl sm:text-2xl text-white" />
            </a>
            <a href="https://instagram.com/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <FaInstagram className="text-xl sm:text-2xl text-white" />
            </a>
            <a href="https://tiktok.com/@dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-black rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <FaTiktok className="text-xl sm:text-2xl text-white" />
            </a>
            <a href="https://linkedin.com/company/dreamdestination" target="_blank" rel="noopener noreferrer" className="bg-[#0A66C2] rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg hover:scale-110 transition duration-200 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
              <FaLinkedinIn className="text-xl sm:text-2xl text-white" />
            </a>
          </div>
          <div className="text-center text-xs sm:text-sm text-white/70">
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