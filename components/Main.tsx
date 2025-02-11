import Image from "next/image";

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center text-white  h-screen text-center p-4">
      <div className="relative">
        <div className="w-40 h-40 bg-yellow-500 rounded-full blur-2xl absolute z-10"></div>
        <Image src="/images/berandaHimakom.png" alt="HIMAKOM" className="w-40 h-40 relative z-20" />
      </div>
      <h1 className="text-3xl font-bold mt-4">HIMAKOM</h1>
      <p className="text-lg">Himpunan Mahasiswa Ilmu Komputer</p>
      <p className="text-sm text-gray-400">Universitas Mega Buana Palopo</p>
    </main>
  );
};

export default Main;
