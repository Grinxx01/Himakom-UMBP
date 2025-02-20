'use client'

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10 py-6 relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/footerBg.jpeg')" }}></div>
      <div className="absolute inset-0 bg-cover bg-center opacity-80 bg-black"></div>
      <div className="relative container px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:text-left border-b-2 border-yellow-400 pb-6">
        
        <div className="flex items-start justify-start  gap-3">
            <Image src="/images/logoHimakom.png" alt="HIMAKOM Logo" width={50} height={50} />
            <div className="pt-3">
                <h2 className="text-yellow-400 font-bold text-xl">HIMAKOM</h2>
                <p className="mt-2 text-gray-300">Jl. Veteran, Palopo <br /> Sulawesi Selatan</p>
            </div>
          </div>

        <div className="pl-16 md:pl-0">
          <h3 className="font-semibold text-lg">Nav Link</h3>
          <ul className="mt-2">
            <li><a href="#" className="hover:text-yellow-400">Beranda</a></li>
            <li><a href="#" className="hover:text-yellow-400">Organisasi</a></li>
            <li><a href="#" className="hover:text-yellow-400">Galery</a></li>
          </ul>
        </div>

        <div className="pl-16 md:pl-0">
          <h3 className="font-semibold text-lg">Sosial Media</h3>
          <div className="mt-2 w-fit flex justify-center md:justify-start gap-4">
            <a href="#"><Image src="/images/instagram.png" alt="Instagram" width={30} height={30} /></a>
            <a href="#"><Image src="/images/whatsapp.png" alt="WhatsApp" width={30} height={30} /></a>
            <a href="#"><Image src="/images/facebook.png" alt="Facebook" width={30} height={30} /></a>
            <a href="#"><Image src="/images/github.png" alt="GitHub" width={30} height={30} /></a>
          </div>
        </div>
      </div>

      <div className="relative text-center text-gray-400 mt-6">
        &copy;Copyright Himakom
      </div>
    </footer>
  );
}
