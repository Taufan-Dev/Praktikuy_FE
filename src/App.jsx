import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import LoginPage from "./pages/auth/loginPage";
import PracticumPage from "./pages/practicum/practicumPage";
import PracticumDetailPage from "./pages/practicum/practicumDetailPage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0f172a] transition-colors duration-500 text-gray-900 dark:text-gray-100 overflow-x-hidden relative">
      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[30%] -right-32 w-[50rem] h-[50rem] rounded-full bg-indigo-300/20 dark:bg-indigo-600/10 blur-[150px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute -bottom-32 left-[10%] w-[35rem] h-[35rem] rounded-full bg-cyan-200/20 dark:bg-cyan-500/10 blur-[120px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 dark:opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col">
        {!isAuthPage && <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/praktikum" element={<PracticumPage />} />
            <Route path="/praktikum/:id" element={<PracticumDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        {!isAuthPage && <Footer />}
      </div>
    </div>
  );
}

export default App;