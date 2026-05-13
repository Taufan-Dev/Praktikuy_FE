import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TABS = [
  { id: "modul", label: "Modul", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
  { id: "pretest", label: "Pre-Test", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> },
  { id: "posttest", label: "Post-Test", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { id: "laporan", label: "Laporan", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
];

const modulData = [
  { id: 1, title: "Modul 1 – Pengenalan & Konsep Dasar", status: "Selesai", pages: 24, duration: "45 menit" },
  { id: 2, title: "Modul 2 – Implementasi dan Analisis", status: "Aktif", pages: 18, duration: "60 menit" },
  { id: 3, title: "Modul 3 – Evaluasi & Pengujian", status: "Terkunci", pages: 20, duration: "50 menit" },
];

const questions = [
  { id: 1, question: "Apa yang dimaksud dengan konsep dasar pada praktikum ini?", options: ["Jawaban A", "Jawaban B", "Jawaban C", "Jawaban D"] },
  { id: 2, question: "Sebutkan komponen utama yang digunakan dalam percobaan!", options: ["Opsi 1", "Opsi 2", "Opsi 3", "Opsi 4"] },
  { id: 3, question: "Bagaimana prinsip kerja alat yang akan digunakan?", options: ["Prinsip A", "Prinsip B", "Prinsip C", "Prinsip D"] },
];

function ModulTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Daftar Modul Praktikum</h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">3 Modul</span>
      </div>
      {modulData.map((m) => (
        <div key={m.id} className="group flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md transition-all duration-300">
          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
            m.status === "Selesai" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
            m.status === "Aktif" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
            "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
          }`}>
            {m.status === "Selesai" ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            ) : m.status === "Terkunci" ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            ) : m.id}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{m.title}</h3>
            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                {m.pages} halaman
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {m.duration}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              m.status === "Selesai" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
              m.status === "Aktif" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
              "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            }`}>{m.status}</span>
            <button disabled={m.status === "Terkunci"} className="p-2 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function TestTab({ type }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const isPretest = type === "pretest";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{isPretest ? "Pre-Test" : "Post-Test"}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{isPretest ? "Jawab sebelum memulai praktikum." : "Jawab setelah menyelesaikan praktikum."}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{Object.keys(answers).length}/{questions.length}</div>
          <div className="text-xs text-gray-400">terjawab</div>
        </div>
      </div>
      {submitted ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{isPretest ? "Pre-Test" : "Post-Test"} Berhasil Dikumpulkan!</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Jawaban Anda telah direkam secara on-chain dan tidak dapat diubah.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700">
              <p className="font-semibold text-gray-900 dark:text-white mb-4">
                <span className="text-blue-500 mr-2">{idx + 1}.</span>{q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt) => (
                  <button key={opt} onClick={() => !submitted && setAnswers((p) => ({ ...p, [q.id]: opt }))}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                      answers[q.id] === opt
                        ? "bg-blue-600 border-blue-600 text-white shadow-md"
                        : "bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600"
                    }`}>{opt}</button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => Object.keys(answers).length >= questions.length && setSubmitted(true)}
            disabled={Object.keys(answers).length < questions.length}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Kumpulkan Jawaban
          </button>
        </div>
      )}
    </div>
  );
}

function LaporanTab() {
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Laporan Praktikum</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Upload laporan akhir praktikum dalam format PDF. Hash file akan disimpan on-chain.</p>
      </div>
      {submitted ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Laporan Berhasil Dikirim!</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">File: <span className="font-medium text-gray-700 dark:text-gray-300">{file?.name}</span></p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Hash laporan telah disimpan di blockchain dan menunggu verifikasi asisten.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]); }}
            className={`relative border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-300 cursor-pointer ${
              dragging ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" :
              file ? "border-green-400 bg-green-50 dark:bg-green-900/10" :
              "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 bg-gray-50/50 dark:bg-gray-800/50"
            }`}
          >
            <input type="file" accept=".pdf,.doc,.docx" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => { if (e.target.files[0]) setFile(e.target.files[0]); }} />
            {file ? (
              <>
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{file.name}</p>
                <p className="text-xs text-gray-400 mt-1">{(file.size / 1024).toFixed(1)} KB — Klik untuk ganti file</p>
              </>
            ) : (
              <>
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Drag & drop atau <span className="text-blue-600 dark:text-blue-400">pilih file</span></p>
                <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX — Maks. 20 MB</p>
              </>
            )}
          </div>
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <p className="text-xs text-amber-700 dark:text-amber-300">Pastikan laporan sudah sesuai format yang ditentukan. Hash dokumen akan diverifikasi asisten melalui Smart Contract.</p>
          </div>
          <button onClick={() => file && setSubmitted(true)} disabled={!file}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            Kirim Laporan
          </button>
        </div>
      )}
    </div>
  );
}

function PracticumDetailSection({ practicum, onOpenTokenModal }) {
  const [activeTab, setActiveTab] = useState("modul");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button onClick={() => navigate("/praktikum")}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Kembali ke Daftar Praktikum
        </button>

        {/* Header Card */}
        <div className="relative rounded-3xl overflow-hidden mb-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700 shadow-xl">
          <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${practicum.color}`} />
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 bg-white dark:bg-gray-700/50 rounded-2xl shadow border border-gray-100 dark:border-gray-600 flex-shrink-0">
              {practicum.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase">{practicum.code}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  practicum.status === "Aktif" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                  practicum.status === "Selesai" ? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400" :
                  "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                }`}>{practicum.status}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{practicum.title}</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{practicum.description}</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0 w-full md:w-auto">
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{practicum.students}</div>
                  <div className="text-xs text-gray-400">Mahasiswa</div>
                </div>
                <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">3</div>
                  <div className="text-xs text-gray-400">Modul</div>
                </div>
              </div>
              <button onClick={onOpenTokenModal}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                Masukkan Token
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 p-1.5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-100 dark:border-gray-700 overflow-x-auto">
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-1 justify-center ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}>
              {tab.icon}{tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-100 dark:border-gray-700 rounded-3xl p-6 md:p-8 shadow-lg">
          {activeTab === "modul" && <ModulTab />}
          {activeTab === "pretest" && <TestTab type="pretest" />}
          {activeTab === "posttest" && <TestTab type="posttest" />}
          {activeTab === "laporan" && <LaporanTab />}
        </div>
      </div>
    </div>
  );
}

export default PracticumDetailSection;
