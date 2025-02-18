"use client";
import { useState } from "react";
import Image from "next/image";
import { images } from "@/constants/images";
import Filters from "@/components/Filters";

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");

  const filteredImages = images.filter((img) => {
    const matchCategory = category === "All" || img.category === category;
    const matchYear = year === "All" || img.year.toString() === year;
    const matchSearch = img.src.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchYear && matchSearch;
  });

  return (
    <div className="min-h-screen text-white px-12 pt-32">
      <h1 className="text-center text-4xl font-semibold">
        Galeri <span className="text-yellow-400">HIMAKOM</span>
      </h1>
      <p className="text-center text-white mt-2 max-w-xl mx-auto">
        Dokumentasi berbagai kegiatan HIMAKOM dalam mengembangkan teknologi dan
        inovasi. Dari seminar hingga proyek kolaborasi, inilah momen-momen
        terbaik kami!
      </p>

      <div className="mt-6">
        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          year={year}
          setYear={setYear}
        />
      </div>

      <div
        className="mt-8 grid gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gridAutoFlow: "dense",
        }}
      >
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="relative"
            style={{ width: "100%", height: "auto" }}
          >
            <Image
              src={img.src}
              alt={`Gallery ${index}`}
              width={img.width}
              height={img.height}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
