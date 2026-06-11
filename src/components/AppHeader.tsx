import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type AppHeaderProps = {
  currentView: 'home' | 'quiz' | 'mistakes' | 'history';
  setCurrentView: Dispatch<SetStateAction<'home' | 'quiz' | 'mistakes' | 'history'>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  fontFamily: 'sans' | 'serif';
  setFontFamily: Dispatch<SetStateAction<'sans' | 'serif'>>;
  fontSize: 'small' | 'normal' | 'large' | 'xlarge';
  setFontSize: Dispatch<SetStateAction<'small' | 'normal' | 'large' | 'xlarge'>>;
  mistakesCount: number;
};

export function AppHeader({
  currentView,
  setCurrentView,
  darkMode,
  setDarkMode,
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  mistakesCount,
}: AppHeaderProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  return (
    <>
      {/* Toggle Button - Luôn hiển thị ở góc trên phải */}
      <button
        onClick={() => setIsHeaderVisible(!isHeaderVisible)}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all shadow-lg hover:scale-110 ${darkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-500'} text-white font-bold text-xl`}
        title={isHeaderVisible ? "Ẩn Header" : "Hiện Header"}
      >
        {isHeaderVisible ? '▼' : '▲'}
      </button>

      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-all duration-300 overflow-hidden ${isHeaderVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} ${darkMode ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-slate-200'} shadow-sm`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold shadow-md shadow-indigo-500/20">
            ⚡
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Khôn hồn thì đưa thằng nhóc đó đây!!!</h1>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Cẩm nang Chinh phục Vật lí 12</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">

          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
            <span className="text-slate-400 mr-1 text-xxs uppercase tracking-wider">Kiểu chữ:</span>
            <button 
              onClick={() => setFontFamily('sans')}
              className={`px-2 py-1 rounded-lg transition-all ${fontFamily === 'sans' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Không chân
            </button>
            <button 
              onClick={() => setFontFamily('serif')}
              className={`px-2 py-1 rounded-lg transition-all ${fontFamily === 'serif' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Có chân
            </button>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-1.5 py-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
            <span className="text-slate-400 px-1.5 text-xxs uppercase tracking-wider">Cỡ chữ:</span>
            <button 
              onClick={() => setFontSize('small')}
              className={`w-6 h-6 rounded-lg transition-all flex items-center justify-center ${fontSize === 'small' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              title="Cỡ chữ Nhỏ"
            >
              A-
            </button>
            <button 
              onClick={() => setFontSize('normal')}
              className={`w-6 h-6 rounded-lg transition-all flex items-center justify-center ${fontSize === 'normal' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              title="Cỡ chữ Vừa"
            >
              A
            </button>
            <button 
              onClick={() => setFontSize('large')}
              className={`w-6 h-6 rounded-lg transition-all flex items-center justify-center ${fontSize === 'large' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              title="Cỡ chữ Lớn"
            >
              A+
            </button>
            <button 
              onClick={() => setFontSize('xlarge')}
              className={`w-7 h-6 rounded-lg transition-all flex items-center justify-center ${fontSize === 'xlarge' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
              title="Cỡ chữ Cực Lớn"
            >
              A++
            </button>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg border transition-all ${darkMode ? 'border-slate-700 bg-slate-800 hover:bg-slate-700' : 'border-slate-200 bg-white hover:bg-slate-100'}`}
            title="Đổi giao diện Sáng / Tối"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      <div className={`border-t transition-colors ${darkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-100 bg-slate-50'} py-2`}>
        <div className="max-w-6xl mx-auto px-4 flex gap-2 flex-wrap">
          <button
            onClick={() => setCurrentView('home')}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${currentView === 'home' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            🏠 Trang chủ
          </button>
          <button
            onClick={() => setCurrentView('mistakes')}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all relative ${currentView === 'mistakes' ? 'bg-rose-600 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            ⚠️ Sổ tay lỗi sai
            {mistakesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xxs font-extrabold px-1.5 py-0.5 rounded-full animate-pulse">
                {mistakesCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setCurrentView('history')}
            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${currentView === 'history' ? 'bg-purple-600 text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            📜 Lịch sử ôn tập
          </button>
        </div>
      </div>
    </header>
    </>
  );
}
