const AgendaProgram = () => {
    return (
      <div className="text-white px-12 pt-32 pb-20">
        <h2 className="text-3xl font-semibold">
          Agenda & <span className="text-yellow-400">Program</span>
        </h2>
        <p className="text-gray-400 mt-2">Agenda rutin</p>
        
        <div className="mt-6 relative pl-6 border-l-4 border-yellow-400 space-y-6">
          <div className="pl-4">
            <h3 className="text-xl font-semibold">Workshop & Seminar (Setiap bulan)</h3>
            <p className="text-gray-300 mt-2">
              Pelatihan interaktif seputar teknologi terbaru seperti Web Development, AI, dan Cybersecurity. Mengundang pembicara profesional dari industri IT.
            </p>
          </div>
          
          <div className="pl-4">
            <h3 className="text-xl font-semibold">Kompetisi & Hackathon (Setiap semester)</h3>
            <p className="text-gray-300 mt-2">
              Ajang unjuk kreativitas dalam pemrograman dan pengembangan aplikasi. Mahasiswa dapat berkompetisi dalam tim dan menciptakan solusi inovatif.
            </p>
          </div>
          
          <div className="pl-4">
            <h3 className="text-xl font-semibold">Kelas & Pelatihan (Setiap minggu)</h3>
            <p className="text-gray-300 mt-2">
              Sesi belajar bersama untuk meningkatkan skill coding, UI/UX, dan jaringan komputer. Dibimbing oleh mentor dari HIMAKOM dan alumni.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AgendaProgram;
  