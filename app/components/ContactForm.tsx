// components/ContactForm.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaCommentDots,
  FaPaperPlane,
  FaLock,
  FaChevronDown,
  FaPlane,
  FaGolfBall,
  FaEnvelopeOpenText,
} from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Travel Package",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectSubject = (subject: string) => {
    setFormData((prev) => ({ ...prev, subject }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const mailtoLink = `mailto:bookings@dreamdestination.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
    alert(
      `Thank you ${name}! Your message has been opened in your email client. We'll get back to you shortly.`
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Travel Package",
      message: "",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const subjectOptions = [
    {
      value: "Travel Package",
      label: "Travel Package",
      icon: <FaPlane className="mr-2 text-[#ED6A02]" />,
    },
    {
      value: "Golf Package",
      label: "Golf Package",
      icon: <FaGolfBall className="mr-2 text-[#ED6A02]" />,
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-[#2E7D32]/20">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#e8f5e9] rounded-full mb-4">
            <FaEnvelopeOpenText className="text-4xl text-[#2E7D32]" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#2E7D32]">Get in Touch</h3>
          <p className="text-gray-500 text-lg mt-2">We'd love to hear from you</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block font-semibold text-[#2E7D32] mb-2 text-base">
              <FaUser className="inline text-[#ED6A02] mr-2" /> Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 text-base border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30 transition"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold text-[#2E7D32] mb-2 text-base">
              <FaEnvelope className="inline text-[#ED6A02] mr-2" /> Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 text-base border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30 transition"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold text-[#2E7D32] mb-2 text-base">
              <FaPhoneAlt className="inline text-[#ED6A02] mr-2" /> Phone Number{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 text-base border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30 transition"
              placeholder="+856 20 12345678"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold text-[#2E7D32] mb-2 text-base">
              <FaTag className="inline text-[#ED6A02] mr-2" /> Subject
            </label>
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full p-4 text-base border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30 transition bg-white flex items-center justify-between"
              >
                <span className="flex items-center">
                  {formData.subject === "Travel Package" ? (
                    <FaPlane className="mr-2 text-[#ED6A02]" />
                  ) : (
                    <FaGolfBall className="mr-2 text-[#ED6A02]" />
                  )}
                  {formData.subject}
                </span>
                <FaChevronDown
                  className={`text-gray-400 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  {subjectOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => selectSubject(option.value)}
                      className={`w-full px-4 py-3 text-left flex items-center transition hover:bg-[#e8f5e9] ${
                        formData.subject === option.value
                          ? "bg-[#e8f5e9] text-[#2E7D32] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {option.icon}
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mb-8">
            <label className="block font-semibold text-[#2E7D32] mb-2 text-base">
              <FaCommentDots className="inline text-[#ED6A02] mr-2" /> Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 text-base border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30 transition resize-y"
              placeholder="Tell us about your travel plans or questions..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#2E7D32] to-[#1b5e20] text-white font-bold py-4 rounded-full hover:from-[#ED6A02] hover:to-[#c95a02] transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 text-lg"
          >
            <FaPaperPlane /> Send Message
          </button>
          <p className="text-center text-sm text-gray-400 mt-4 flex items-center justify-center gap-1">
            <FaLock className="text-[#ED6A02]" /> We'll never share your information.
          </p>
        </form>
      </div>
    </div>
  );
}