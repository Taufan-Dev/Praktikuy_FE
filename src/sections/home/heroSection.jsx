import React from "react";

function HeroSection() {
  const features = [
    {
      title: "Immutable Records",
      description: "Nilai dan sertifikat praktikum disimpan di Blockchain, terjamin keasliannya dan tidak dapat diubah oleh pihak manapun.",
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Smart Contract Automation",
      description: "Penilaian dilakukan otomatis secara real-time berdasarkan logika Smart Contract yang transparan dan dapat diaudit oleh siapa saja.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Decentralized Identity",
      description: "Identitas mahasiswa yang aman dan pseudonim, memastikan privasi data diri sekaligus menjaga validitas kredensial Anda.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 bg-transparent">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 backdrop-blur-sm text-blue-600 dark:text-blue-300 text-sm font-semibold mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-blue-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 dark:bg-blue-400"></span>
          </span>
          Didukung oleh Blockchain & Smart Contract
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-6">
          Mari Belajar Dengan<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400">
            PraktiKuy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Platform pembelajaran praktikum yang mengintegrasikan teknologi <strong className="dark:text-white">Blockchain</strong> dan <strong className="dark:text-white">Smart Contract</strong>. Mengamankan tugas, penilaian, dan kredensial secara transparan dan tidak dapat dimanipulasi!
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white font-semibold text-lg shadow-[0_8px_30px_rgb(59,130,246,0.3)] dark:shadow-[0_8px_30px_rgb(59,130,246,0.15)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.5)] transform hover:-translate-y-1 transition-all duration-300">
            Mulai Praktikum
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300">
            Cara Kerja Sistem
          </button>
        </div>

        {/* Features Integrated into Dashboard Mockup */}
        <div className="mt-20 w-full relative">
          <div className="rounded-2xl border border-white/60 dark:border-gray-700/50 bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl p-2 md:p-4 shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="w-full bg-white dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col overflow-hidden relative transition-colors duration-500">
              {/* Fake Window Header */}
              <div className="w-full h-12 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/80 flex items-center px-4 gap-2 relative z-20">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 h-6 w-32 md:w-48 bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 shadow-sm"></div>
              </div>
              
              {/* Content Area containing the features */}
              <div className="flex-1 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-50 dark:bg-[#0f172a] flex flex-col items-center justify-center relative py-12 px-6 md:px-12">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/95 dark:to-[#0f172a]/95"></div>
                
                <div className="relative z-10 w-full max-w-5xl">
                  <div className="text-center mb-10">
                    <h2 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">Mengapa PraktiKuy?</h2>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">Praktikum Bebas Manipulasi</h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Kami menggabungkan kemudahan e-learning dengan keamanan Blockchain. Rasakan pengalaman belajar yang adil, transparan, dan mutakhir.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {features.map((feature, idx) => (
                      <div key={idx} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 flex items-center justify-center mb-4 shadow-sm">
                          {feature.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
