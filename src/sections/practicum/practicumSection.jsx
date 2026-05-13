import React from "react";
import { useNavigate } from "react-router-dom";

function PracticumSection() {
  const navigate = useNavigate();
  const practicumClasses = [
    {
      id: 1,
      title: "Praktikum Fisika Dasar",
      code: "FSK101",
      description: "Mempelajari hukum-hukum dasar fisika melalui simulasi virtual dan analisis data terdesentralisasi.",
      instructor: "Dr. Albert Einstone",
      students: 124,
      status: "Aktif",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      title: "Praktikum Smart Contract",
      code: "BLK302",
      description: "Pengembangan dan audit Smart Contract di jaringan Ethereum menggunakan bahasa Solidity.",
      instructor: "Prof. Satoshi Nakamoto",
      students: 89,
      status: "Aktif",
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 3,
      title: "Praktikum Keamanan Siber",
      code: "CYB401",
      description: "Simulasi serangan dan pertahanan jaringan menggunakan metodologi enkripsi modern.",
      instructor: "Mr. Elliot Alderson",
      students: 210,
      status: "Selesai",
      icon: (
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "from-red-500 to-orange-400",
    },
    {
      id: 4,
      title: "Praktikum Jaringan Komputer",
      code: "NET205",
      description: "Konfigurasi routing, switching, dan manajemen topologi jaringan terdistribusi.",
      instructor: "Ir. Linus Torvalds",
      students: 156,
      status: "Aktif",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "from-green-500 to-emerald-400",
    },
    {
      id: 5,
      title: "Praktikum Algoritma & Struktur Data",
      code: "ALG102",
      description: "Implementasi logika pemecahan masalah dengan evaluasi runtime dan memori secara real-time.",
      instructor: "Dr. Ada Lovelace",
      students: 320,
      status: "Aktif",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-yellow-500 to-amber-400",
    },
    {
      id: 6,
      title: "Praktikum IoT & Embedded Systems",
      code: "IOT304",
      description: "Desain sistem perangkat keras terhubung dengan pemantauan sensor berbasis cloud dan blockchain.",
      instructor: "Mr. Nikola Tesla",
      students: 112,
      status: "Pendaftaran",
      icon: (
        <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "from-teal-500 to-cyan-500",
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto w-full relative z-10 flex flex-col">
      {/* Header Section */}
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-semibold mb-4 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-blue-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-blue-400"></span>
            </span>
            Dashboard Mahasiswa
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            Akses <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Kelas Praktikum</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
            Pilih dan kelola kelas praktikum Anda. Semua penilaian dan progres tercatat secara aman di dalam sistem terdesentralisasi kami.
          </p>
        </div>

        {/* Search & Filter bar fake placeholder */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" className="block w-full md:w-64 p-3 pl-10 text-sm text-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all outline-none" placeholder="Cari praktikum..." />
          </div>
          <button className="p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 outline-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
          </button>
        </div>
      </div>

      {/* Grid of Classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {practicumClasses.map((cls) => (
          <div key={cls.id} className="group relative flex flex-col bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100/80 dark:border-gray-700/80 rounded-3xl p-1 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            
            {/* Gradient Top Border Effect */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cls.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="p-6 md:p-8 flex flex-col h-full z-10 relative">
              {/* Header Card */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white dark:bg-gray-700/50 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-600 group-hover:scale-110 transition-transform duration-300">
                  {cls.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                  cls.status === 'Aktif' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800' :
                  cls.status === 'Selesai' ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700' :
                  'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800'
                }`}>
                  {cls.status}
                </span>
              </div>

              {/* Title & Code */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-1">{cls.code}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {cls.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {cls.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6 border-t border-gray-100 dark:border-gray-700/50 pt-4 mt-auto">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  <span className="truncate max-w-[100px]" title={cls.instructor}>{cls.instructor}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  <span>{cls.students} Mhs</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => navigate(`/praktikum/${cls.id}`)}
                className="w-full py-3 px-4 bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 dark:bg-gray-700/50 dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-indigo-500 text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-white font-semibold rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-transparent flex justify-center items-center gap-2 group/btn"
              >
                <span>{cls.status === 'Selesai' ? 'Lihat Riwayat' : cls.status === 'Pendaftaran' ? 'Daftar Kelas' : 'Mulai Belajar'}</span>
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PracticumSection;
