// components/Footer.tsx
import Link from "next/link";
import { FaWhatsapp, FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2E7D32] text-white py-8 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Link
            href="#"
            className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FaWhatsapp className="text-2xl text-[#2E7D32]" />
          </Link>
          <Link
            href="#"
            className="bg-[#1A1A1A] rounded-full p-3 w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FaTiktok className="text-2xl text-white" />
          </Link>
          <Link
            href="#"
            className="bg-[#1877F2] rounded-full p-3 w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FaFacebookF className="text-2xl text-white" />
          </Link>
          <Link
            href="#"
            className="bg-gradient-to-r from-[#833AB4] to-[#FCAF45] rounded-full p-3 w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-2xl text-white" />
          </Link>
        </div>
        <div className="text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Dream Destination Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}