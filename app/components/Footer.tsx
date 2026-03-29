import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2E7D32] text-white py-8 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Link href="#" className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <i className="fab fa-whatsapp text-2xl text-[#2E7D32]"></i>
          </Link>
          <Link href="#" className="bg-[#1A1A1A] rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <i className="fab fa-tiktok text-2xl text-white"></i>
          </Link>
          <Link href="#" className="bg-[#1877F2] rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <i className="fab fa-facebook-f text-2xl text-white"></i>
          </Link>
          <Link href="#" className="bg-gradient-to-r from-[#833AB4] to-[#FCAF45] rounded-full p-3 w-12 h-12 flex items-center justify-center">
            <i className="fab fa-instagram text-2xl text-white"></i>
          </Link>
        </div>
        <div className="text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Dream Destination Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}