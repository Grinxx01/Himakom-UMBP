"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="px-12 pt-4 fixed top-0 left-0 right-0">
      <div className="bg-[#383636] text-white px-8 py-4 flex justify-between items-center rounded-lg">
        <div className="flex items-center gap-4">
          <Image src="/images/logoHimakom.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
        </div>

        <nav className="flex gap-8">
          <Link href="/" className="hover:text-yellow-400">
            Beranda
          </Link>

          <div className="relative group">
            <div className="cursor-pointer hover:text-yellow-400">
              Organisasi ▾
            </div>
            <div className="absolute left-0 mt-2 w-40 bg-[#444242] rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/struktur"
                className="block px-4 py-2 hover:bg-[#585555]"
              >
                Struktur
              </Link>
              <Link
                href="/program"
                className="block px-4 py-2 hover:bg-[#585555]"
              >
                Program
              </Link>
            </div>
          </div>

          <Link href="/galeri" className="hover:text-yellow-400">
            Galeri
          </Link>
        </nav>

        <Link
          href="https://instagram.com"
          className="text-white hover:text-yellow-400"
        >
          <Instagram size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
