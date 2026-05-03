import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex-grow flex items-center justify-center relative overflow-hidden bg-transparent p-6 min-h-screen">
      <div className="relative z-10 w-full max-w-lg">
        {/* Premium Glassmorphism Card */}
        <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-2xl border border-white/80 dark:border-gray-700/50 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          
          {/* Top Bar (Back Link) */}
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors group">
            <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 mr-3 group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </div>
            Kembali ke Beranda
          </Link>

          {/* Branding */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 tracking-tight mb-3">
              Prakti<span className="text-blue-600 dark:text-blue-400">Kuy</span> Portal
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">Akses ke ekosistem praktikum Web3 Anda</p>
          </div>

          {/* Fallback Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Wallet Address / Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="0x... atau email@domain.com" 
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-blue-500 dark:text-white transition-all placeholder-gray-400 font-medium shadow-inner"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">Password</label>
                <Link to="#" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">Lupa password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-blue-500 dark:text-white transition-all placeholder-gray-400 font-medium shadow-inner"
                />
              </div>
            </div>

            <button 
              type="button" 
              className="w-full py-4 mt-2 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-blue-600 dark:to-indigo-600 hover:from-gray-800 hover:to-gray-700 dark:hover:from-blue-500 dark:hover:to-indigo-500 text-white font-bold text-lg shadow-[0_8px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_20px_rgba(59,130,246,0.2)] transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Masuk
            </button>
          </form>
        </div>

        {/* Footer info text */}
        <p className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400 font-medium px-4">
          Dengan masuk ke portal, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi Smart Contract PraktiKuy.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
