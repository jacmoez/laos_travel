"use client";
import { useEffect, useState } from "react";

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

export function DetailModal({ isOpen, onClose, title, duration, price, highlights, description, icon = "fa-gift", onBook }: DetailModalProps) {
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
        <button onClick={onClose} className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-[#ED6A02] transition">
          &times;
        </button>
        <div className="modal-icon text-center text-4xl text-[#2E7D32] mb-4">
          <i className={`fas ${icon}`}></i>
        </div>
        <h3 className="modal-title text-center text-2xl font-bold text-[#2E7D32] mb-2">{title}</h3>
        <div className="modal-details bg-gray-50 p-4 rounded-xl my-4">
          {duration && (
            <div className="detail-item flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold text-[#2E7D32]"><i className="fas fa-clock mr-2"></i>Duration:</span>
              <span>{duration}</span>
            </div>
          )}
          {price && (
            <div className="detail-item flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold text-[#2E7D32]"><i className="fas fa-tag mr-2"></i>Price:</span>
              <span>{price}</span>
            </div>
          )}
          {highlights && (
            <div className="detail-item flex justify-between py-2 border-b border-gray-200">
              <span className="font-semibold text-[#2E7D32]"><i className="fas fa-star mr-2"></i>Highlights:</span>
              <span>{highlights}</span>
            </div>
          )}
          <div className="modal-description mt-3">
            <strong className="text-[#2E7D32]">Description:</strong>
            <p className="mt-1 text-gray-700">{description}</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button onClick={onBook} className="flex-1 bg-gradient-to-r from-[#2E7D32] to-[#1b5e20] text-white font-bold py-3 rounded-full hover:from-[#ED6A02] hover:to-[#c95a02] transition">
            Book Now
          </button>
          <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-800 font-bold py-3 rounded-full hover:bg-gray-300 transition">
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

export function BookingModal({ isOpen, onClose, packageName, onSubmit }: BookingModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, packageName });
    onClose();
  };

  const getFlagIcon = (value: string) => {
    if (!value) return "🌏";
    const flagMap: { [key: string]: string } = {
      "🇺🇸 United States": "🇺🇸",
      "🇬🇧 United Kingdom": "🇬🇧",
      "🇦🇺 Australia": "🇦🇺",
      "🇨🇦 Canada": "🇨🇦",
      "🇱🇦 Laos": "🇱🇦",
      "🇲🇲 Myanmar": "🇲🇲",
    };
    return flagMap[value] || "🌏";
  };

  const selectedFlag = getFlagIcon(formData.nationality);

  return (
    <div className="modal fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[10000]">
      <div className="modal-content bg-white rounded-2xl max-w-[550px] w-[90%] max-h-[85vh] overflow-y-auto p-8 relative animate-[modalSlideIn_0.3s_ease] shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-[#ED6A02] transition">
          &times;
        </button>
        <div className="modal-icon text-center text-4xl text-[#2E7D32] mb-4">
          <i className="fas fa-envelope-open-text"></i>
        </div>
        <h3 className="modal-title text-center text-2xl font-bold text-[#2E7D32] mb-2">Request a Booking</h3>
        <p className="modal-subtitle text-center text-gray-500 text-sm mb-4">Booking: {packageName}</p>
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
          <div className="flag-select relative mb-4">
            <span className="flag-icon absolute left-4 top-1/2 -translate-y-1/2 text-lg pointer-events-none">{selectedFlag}</span>
            <select
              name="nationality"
              required
              value={formData.nationality}
              onChange={handleChange}
              className="modal-select w-full p-3 pl-10 border border-gray-200 rounded-xl appearance-none bg-white focus:outline-none focus:border-[#ED6A02] focus:ring-2 focus:ring-[#ED6A02]/30"
            >
              <option value="">Select Nationality</option>
              <option value="🇺🇸 United States">🇺🇸 United States</option>
              <option value="🇬🇧 United Kingdom">🇬🇧 United Kingdom</option>
              <option value="🇦🇺 Australia">🇦🇺 Australia</option>
              <option value="🇨🇦 Canada">🇨🇦 Canada</option>
              <option value="🇱🇦 Laos">🇱🇦 Laos</option>
              <option value="🇲🇲 Myanmar">🇲🇲 Myanmar</option>
            </select>
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