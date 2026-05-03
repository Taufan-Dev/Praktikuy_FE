function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Konek Wallet", desc: "Hubungkan Web3 wallet Anda (seperti MetaMask) sebagai identitas mahasiswa yang unik." },
    { num: "02", title: "Kerjakan Tugas", desc: "Selesaikan modul praktikum interaktif yang tersedia di platform sesuai tenggat waktu." },
    { num: "03", title: "Eksekusi Kontrak", desc: "Hasil pekerjaan divalidasi oleh Smart Contract dan nilai diberikan secara otomatis." },
    { num: "04", title: "Mint Sertifikat", desc: "Dapatkan sertifikat keahlian dalam bentuk NFT yang tersimpan abadi di Blockchain." }
  ];

  return (
    <section className="py-24 bg-transparent relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-16 md:w-1/2">
          <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2">Cara Kerja</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Sederhana dan Desentralisasi</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">Lupakan birokrasi yang rumit. Dengan teknologi Blockchain, segalanya berjalan lebih cepat, adil, dan tercatat otomatis.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group pt-10">
              {/* Watermark Number */}
              <div className="text-8xl font-black text-gray-100 dark:text-gray-800 absolute top-0 left-2 z-0 group-hover:text-blue-50 dark:group-hover:text-gray-700 transition-colors duration-300 select-none">
                {step.num}
              </div>
              
              {/* Card Content */}
              <div className="relative z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-100 dark:border-gray-700 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
