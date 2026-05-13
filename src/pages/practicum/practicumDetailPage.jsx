import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PracticumDetailSection from "../../sections/practicum/practicumDetailSection";
import PracticumTokenModal from "../../sections/practicum/practicumTokenModal";

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
  },
];

function PracticumDetailPage() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const practicum = practicumClasses.find((p) => p.id === parseInt(id));

  if (!practicum) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Praktikum Tidak Ditemukan</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">Praktikum dengan ID tersebut tidak ada.</p>
        <a href="/praktikum" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
          Kembali ke Daftar
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Token Modal — UI only, open/close via state */}
      <PracticumTokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUnlock={() => setIsModalOpen(false)}
        practicumTitle={practicum.title}
      />

      {/* Detail Content — always visible */}
      <PracticumDetailSection
        practicum={practicum}
        onOpenTokenModal={() => setIsModalOpen(true)}
      />
    </div>
  );
}

export default PracticumDetailPage;
