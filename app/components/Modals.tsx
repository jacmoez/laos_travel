// components/Modals.tsx
"use client";
import { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import CountryFlag from "react-country-flag";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  duration?: string;
  price?: string;
  highlights?: string;
  description: string;
  icon?: string;
  onBook: () => void;
}

export function DetailModal({
  isOpen,
  onClose,
  title,
  duration,
  price,
  highlights,
  description,
  icon = "fa-gift",
  onBook,
}: DetailModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[10000]">
      <div className="modal-content bg-white rounded-2xl max-w-[550px] w-[90%] max-h-[85vh] overflow-y-auto p-8 relative animate-[modalSlideIn_0.3s_ease] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-[#ED6A02] transition"
        >
          &times;
        </button>
        <div className="modal-icon text-center text-4xl text-[#2E7D32] mb-4">
          <i className={`fas ${icon}`}></i>
        </div>
        <h3 className="modal-title text-center text-2xl font-bold text-[#2E7D32] mb-2">
          {title}
        </h3>
        <div className="modal-details bg-gray-50 p-4 rounded-xl my-4">
          {duration && (
            <div className="detail-item flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold text-[#2E7D32]">
                <i className="fas fa-clock mr-2"></i>Duration:
              </span>
              <span>{duration}</span>
            </div>
          )}
          {price && (
            <div className="detail-item flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold text-[#2E7D32]">
                <i className="fas fa-tag mr-2"></i>Price:
              </span>
              <span>{price}</span>
            </div>
          )}
          {highlights && (
            <div className="detail-item flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold text-[#2E7D32]">
                <i className="fas fa-star mr-2"></i>Highlights:
              </span>
              <span>{highlights}</span>
            </div>
          )}
          <div className="modal-description mt-3">
            <strong className="text-[#2E7D32]">Description:</strong>
            <p className="mt-1 text-gray-700">{description}</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={onBook}
            className="flex-1 bg-gradient-to-r from-[#2E7D32] to-[#1b5e20] text-white font-bold py-3 rounded-full hover:from-[#ED6A02] hover:to-[#c95a02] transition"
          >
            Book Now
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 rounded-full hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  onSubmit: (data: any) => void;
}

export function BookingModal({
  isOpen,
  onClose,
  packageName,
  onSubmit,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = [
    { code: "LA", name: "Laos", flagCode: "LA" },
    { code: "US", name: "United States", flagCode: "US" },
    { code: "GB", name: "United Kingdom", flagCode: "GB" },
    { code: "AU", name: "Australia", flagCode: "AU" },
    { code: "CA", name: "Canada", flagCode: "CA" },
    { code: "MM", name: "Myanmar", flagCode: "MM" },
  ];

  const selectedCountry = countries.find((c) => c.name === formData.nationality);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectNationality = (countryName: string) => {
    setFormData((prev) => ({ ...prev, nationality: countryName }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, packageName });
    onClose();
  };

  return (
    <div className="modal fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[10000]">
      <div className="modal-content bg-white rounded-2xl max-w-[550px] w-[90%] max-h-[85vh] overflow-y-auto p-8 relative animate-[modalSlideIn_0.3s_ease] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-[#ED6A02] transition"
        >
          &times;
        </button>
        <div className="modal-icon text-center text-4xl text-[#2E7D32] mb-4">
          <i className="fas fa-envelope-open-text"></i>
        </div>
        <h3 className="modal-title text-center text-2xl font-bold text-[#2E7D32] mb-2">
          Request a Booking
        </h3>
        <p className="modal-subtitle text-center text-gray-500 text-sm mb-4">
          Booking: {packageName}
        </p>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="packageName" value={packageName} />
          <div className="flex gap-3 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="modal-input flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="modal-input flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="modal-input w-full p-3 border border-gray-200 rounded-xl mb-4 focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            value={formData.phone}
            onChange={handleChange}
            className="modal-input w-full p-3 border border-gray-200 rounded-xl mb-4 focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30"
          />

          {/* Custom dropdown with SVG flags */}
          <div className="relative mb-4" ref={dropdownRef}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nationality
            </label>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full p-3 border border-gray-200 rounded-xl bg-white flex items-center justify-between focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30"
            >
              <span className="flex items-center gap-2">
                {selectedCountry ? (
                  <CountryFlag
                    countryCode={selectedCountry.flagCode}
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                ) : (
                  <span className="w-5 h-5 inline-block"></span>
                )}
                {formData.nationality || "Select Nationality"}
              </span>
              <FaChevronDown
                className={`text-gray-400 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => selectNationality(country.name)}
                    className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-[#e8f5e9] transition ${
                      formData.nationality === country.name
                        ? "bg-[#e8f5e9] text-[#2E7D32] font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <CountryFlag
                      countryCode={country.flagCode}
                      svg
                      style={{ width: "1.5em", height: "1.5em" }}
                    />
                    {country.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <textarea
            name="message"
            rows={3}
            placeholder="Additional requests or travel dates..."
            value={formData.message}
            onChange={handleChange}
            className="modal-input w-full p-3 border border-gray-200 rounded-xl mb-6 focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30 resize-y"
          ></textarea>
          <button
            type="submit"
            className="modal-btn w-full bg-gradient-to-r from-[#2E7D32] to-[#1b5e20] text-white font-bold py-3 rounded-full hover:from-[#ED6A02] hover:to-[#c95a02] transition flex items-center justify-center gap-2"
          >
            <i className="fas fa-paper-plane"></i> Send Booking Request
          </button>
        </form>
      </div>
    </div>
  );
}