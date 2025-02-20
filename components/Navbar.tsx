import { useState } from "react";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-6 md:px-12 pt-4 fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#383636] text-white px-6 md:px-8 py-4 flex justify-between items-center rounded-lg">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src="/images/logoHimakom.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-yellow-400">Beranda</Link>

          {/* Dropdown Menu */}
          <div className="relative group">
            <div className="cursor-pointer hover:text-yellow-400">Organisasi ▾</div>
            <div className="absolute left-0 mt-2 w-40 bg-[#444242] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/pages/organisasi" className="block px-4 py-2 hover:bg-[#585555]">Program</Link>
              <Link href="/program" className="block px-4 py-2 hover:bg-[#585555]">Struktur</Link>
            </div>
          </div>

          <Link href="/pages/galeri" className="hover:text-yellow-400">Galeri</Link>
        </nav>

        {/* Instagram Icon */}
        <Link href="https://instagram.com" className="hidden md:block text-white hover:text-yellow-400">
          <Instagram size={24} />
        </Link>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#383636] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Sidebar Links */}
        <div className="mt-12 flex flex-col space-y-4 p-6 text-white">
          <Link href="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Beranda
          </Link>

          {/* Dropdown Menu di Sidebar */}
          <div className="group">
            <div className="cursor-pointer hover:text-yellow-400">Organisasi ▾</div>
            <div className="mt-2 bg-[#444242] rounded shadow-lg">
              <Link href="/pages/organisasi" className="block px-4 py-2 hover:bg-[#585555]" onClick={() => setIsOpen(false)}>
                Program
              </Link>
              <Link href="/program" className="block px-4 py-2 hover:bg-[#585555]" onClick={() => setIsOpen(false)}>
                Struktur
              </Link>
            </div>
          </div>

          <Link href="/pages/galeri" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Galeri
          </Link>

          {/* Instagram Link */}
          <Link href="https://instagram.com" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            <Instagram size={24} />
          </Link>
        </div>
      </div>

      {/* Overlay (Background Transparan) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
