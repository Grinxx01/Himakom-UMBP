'use client';


import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/images/slid.jpeg',
  '/images/slid.jpeg',
  '/images/slid.jpeg',
  '/images/slid.jpeg',
];

export default function ProfileSection() {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-x-10  text-white px-12 pr-0 pb-10 pt-0">
      <div className="md:w-[50%]">
        <h2 className="text-4xl font-bold text-yellow-400">Profile Himakom</h2>
        <p className="mt-2 text-gray-300">
          HIMAKOM adalah komunitas mahasiswa yang aktif di bidang teknologi dan inovasi.
          Kami mengadakan berbagai kegiatan untuk meningkatkan keterampilan dan kolaborasi.
        </p>
      </div>

      <div className="relative md:w-[60%] overflow-hidden h-[282px] w-full mt-6 md:mt-0  border-l-2 border-yellow-400">
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ ease: 'linear', duration: 85, repeat: Infinity }}
          style={{ display: 'flex', width: `${images.length * 100}%` }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="min-w-[18%] flex mx-4 justify-center">
              <Image src={src} alt={`Slide ${i}`} width={491} height={282} className="w-full h-[282px] object-cover rounded-3xl shadow-md" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
