"use client"
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const programs = [
    {
      title: "Pengabdian Masyarakat di kota Palopo",
      description:
        "Menggunakan kemajuan IT untuk membantu masyarakat, seperti pelatihan digital, donasi perangkat, pengurangan kesenjangan teknologi.",
      period: "Juni - Agustus 2025",
      image: "/images/slid.jpeg", 
    },
    {
      title: "Pengabdian Masyarakat di kota Palopo",
      description:
        "Menggunakan kemajuan IT untuk membantu masyarakat, seperti pelatihan digital, donasi perangkat, pengurangan kesenjangan teknologi.",
      period: "Juni - Agustus 2025",
      image: "/images/slid.jpeg", 
    },
    {
      title: "Pengabdian Masyarakat di kota Palopo",
      description:
        "Menggunakan kemajuan IT untuk membantu masyarakat, seperti pelatihan digital, donasi perangkat, pengurangan kesenjangan teknologi.",
      period: "Juni - Agustus 2025",
      image: "/images/slid.jpeg", 
    },
  ];

export default function Carousel() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedPrograms = [...programs, ...programs];

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({ x: [0, -1000], transition: { repeat: Infinity, duration: 40, ease: "linear" } });
    }
  }, [isPaused, controls]);

  return (
    <div className="relative overflow-hidden w-full px-12 pb-20 pr-0">
      <h2 className="text-white text-lg mb-4">Program Unggulan</h2>
      <div
        className="w-full overflow-hidden border-l-4 border-yellow-400"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div className="flex space-x-6" animate={controls}>
          {duplicatedPrograms.map((program, idx) => (
            <div
              key={idx}
              className="w-[486px] h-[216px] bg-white rounded-lg shadow-lg p-4 flex-shrink-0 flex items-center space-x-4"
            >
              <Image
                src={program.image}
                alt={program.title}
                width={200}
                height={208}
                className="h-full rounded-md"
              />
              <div>
                <h3 className="text-xl text-black font-semibold">
                  {program.title}
                </h3>
                <p className="text-sm text-black font-normal">{program.description}</p>
                <p className="text-xs text-black font-semibold mt-2">📅 {program.period}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
