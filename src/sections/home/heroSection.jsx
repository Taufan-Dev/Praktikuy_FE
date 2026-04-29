function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
        Smart Practicum LMS 🚀
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Platform pembelajaran praktikum berbasis flow yang membantu mahasiswa
        belajar lebih terstruktur dan efektif.
      </p>

      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Mulai Belajar
      </button>
    </section>
  );
}

export default HeroSection;
