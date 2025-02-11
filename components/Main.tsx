import Image from "next/image";

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center text-white  h-screen text-center p-4">
      <div className="relative">
        <div className="w-64 h-64 bg-yellow-500 rounded-full blur-2xl absolute z-10"></div>
        <Image src="/images/logoHimakom.png" alt="HIMAKOM" width={250} height={250} className="relative z-20" />
      </div>
      <h1 className="text-3xl font-bold mt-6">HIMAKOM</h1>
      <p className="text-xl">Himpunan Mahasiswa Ilmu Komputer</p>
      <p className="text-sm">Universitas Mega Buana Palopo</p>
    </main>
  );
};

export default Main;
