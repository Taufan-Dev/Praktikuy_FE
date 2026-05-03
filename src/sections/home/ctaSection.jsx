function CtaSection() {
  return (
    <section className="py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative shadow-2xl">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 z-0"></div>
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay z-0"></div>
        <div className="absolute top-[-5%] right-[-5%] w-[20rem] h-[20rem] bg-blue-500/40 rounded-full blur-[80px] z-0"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[20rem] h-[20rem] bg-cyan-500/40 rounded-full blur-[80px] z-0"></div>
        
        <div className="relative z-10 px-8 py-16 md:py-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Siap Menjadi Bagian dari <br className="hidden md:block" /> Ekosistem Web3?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mb-10">
            Bergabunglah dengan ribuan mahasiswa lainnya yang telah merasakan transparansi dan keamanan praktikum generasi baru bersama PraktiKuy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-indigo-900 font-bold text-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(255,255,255,0.2)]">
              Hubungkan Wallet
            </button>
            <button className="px-8 py-4 rounded-full bg-indigo-800/40 border border-indigo-400 text-white font-bold text-lg hover:bg-indigo-700/50 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
              Baca Dokumentasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
