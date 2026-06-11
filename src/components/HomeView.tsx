import type { Dispatch, SetStateAction } from 'react';

type HomeViewProps = {
  statistics: {
    total: number;
    easy: number;
    medium: number;
    hard: number;
    chapters: Record<string, number>;
  };
  mistakesCount: number;
  startQuiz: (mode: 'full' | 'easy' | 'medium' | 'hard' | 'mock') => void;
  setCurrentView: Dispatch<SetStateAction<'home' | 'quiz' | 'mistakes' | 'history'>>;
  darkMode: boolean;
};

export function HomeView({ statistics, mistakesCount, startQuiz, setCurrentView, darkMode }: HomeViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 text-white p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="bg-indigo-500/30 text-indigo-300 font-black text-xs px-3 py-1.5 rounded-full uppercase tracking-wider border border-indigo-500/20">
            DÀNH CHO THẾ HỆ 2008 (THPT 2018)
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Sẵn sàng Bứt phá <br className="hidden md:inline" />
            Kỳ thi Tốt nghiệp THPT Quốc gia môn Vật Lí!
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-medium">
            Hệ thống 100 câu hỏi chọn lọc toàn diện bám sát lý thuyết & bài tập chuẩn mực: từ Vật lí nhiệt, Khí lí tưởng, cảm ứng từ trường đến Vật lí hạt nhân.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => startQuiz('mock')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
            >
              🚀 Thi Thử Toàn Diện (40 Câu)
            </button>
            <button
              onClick={() => startQuiz('full')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-extrabold px-6 py-3 rounded-xl transition-all border border-slate-700"
            >
              📚 Luyện Trọn Bộ 100 Câu
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-2xl border transition-all ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-sm`}>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4">Phân bố Câu hỏi</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-bold mb-1.5">
                <span className="text-emerald-500">Mức độ Dễ (Nhận biết)</span>
                <span>{statistics.easy} câu</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${(statistics.easy / statistics.total) * 100}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-1.5">
                <span className="text-amber-500">Mức độ Trung bình (Thông hiểu)</span>
                <span>{statistics.medium} câu</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(statistics.medium / statistics.total) * 100}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold mb-1.5">
                <span className="text-rose-500">Mức độ Khó (Vận dụng cao)</span>
                <span>{statistics.hard} câu</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full rounded-full" style={{ width: `${(statistics.hard / statistics.total) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl border transition-all col-span-1 md:col-span-2 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-sm`}>
          <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-4">Nội dung theo Chương</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(statistics.chapters).map(([chapter, count]) => (
              <div key={chapter} className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-slate-50 border-slate-100'}`}>
                <div className="text-xs text-slate-400 font-black mb-1">{chapter}</div>
                <div className="text-lg font-extrabold flex items-baseline gap-2">
                  <span>{count} câu</span>
                  <span className="text-xs text-slate-400 font-normal">({Math.round((count / statistics.total) * 100)}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-extrabold tracking-tight">Chế độ Ôn tập Mục tiêu</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div onClick={() => startQuiz('easy')} className={`p-5 rounded-2xl border cursor-pointer hover:scale-105 transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:border-emerald-500' : 'bg-white border-slate-200 hover:border-emerald-500'} group shadow-sm`}>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              🟢
            </div>
            <h4 className="font-extrabold text-lg mb-1">Mức Độ Dễ</h4>
            <p className="text-xs text-slate-400 mb-3">Luyện vững vàng 30 câu hỏi lý thuyết nền tảng cốt lõi cực chuẩn.</p>
            <span className="text-xs font-bold text-emerald-500 group-hover:underline">Bắt đầu ngay →</span>
          </div>

          <div onClick={() => startQuiz('medium')} className={`p-5 rounded-2xl border cursor-pointer hover:scale-105 transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:border-amber-500' : 'bg-white border-slate-200 hover:border-amber-500'} group shadow-sm`}>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-amber-500 group-hover:text-white transition-all">
              🟡
            </div>
            <h4 className="font-extrabold text-lg mb-1">Mức Độ Trung bình</h4>
            <p className="text-xs text-slate-400 mb-3">Luyện phản xạ tính toán nhanh, đọc đồ thị & phân tích hiện tượng lý học.</p>
            <span className="text-xs font-bold text-amber-500 group-hover:underline">Bắt đầu ngay →</span>
          </div>

          <div onClick={() => startQuiz('hard')} className={`p-5 rounded-2xl border cursor-pointer hover:scale-105 transition-all ${darkMode ? 'bg-slate-800 border-slate-700 hover:border-rose-500' : 'bg-white border-slate-200 hover:border-rose-500'} group shadow-sm`}>
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-rose-500 group-hover:text-white transition-all">
              🔴
            </div>
            <h4 className="font-extrabold text-lg mb-1">Mức Độ Vận Dụng Cao</h4>
            <p className="text-xs text-slate-400 mb-3">Chinh phục điểm 9, 10 với các bài tập thực tiễn kết hợp, phóng xạ hạt nhân khó.</p>
            <span className="text-xs font-bold text-rose-500 group-hover:underline">Bắt đầu ngay →</span>
          </div>

          <div onClick={() => setCurrentView('mistakes')} className={`p-5 rounded-2xl border cursor-pointer hover:scale-105 transition-all ${darkMode ? 'bg-slate-800 border-rose-900/30 hover:border-rose-500' : 'bg-white border-rose-100 hover:border-rose-500'} group shadow-sm relative`}>
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-rose-500 group-hover:text-white transition-all">
              ⚠️
            </div>
            <h4 className="font-extrabold text-lg mb-1">Sổ Tay Lỗi Sai</h4>
            <p className="text-xs text-slate-400 mb-3">Tự động tập hợp những câu bạn làm sai để ôn tập lại một cách hoàn hảo.</p>
            <span className="text-xs font-bold text-rose-500 group-hover:underline">Xem danh sách →</span>
            {mistakesCount > 0 && (
              <span className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-extrabold w-6 h-6 flex items-center justify-center rounded-full">
                {mistakesCount}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-100 border-slate-200'} shadow-inner`}>
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">💡 Lời khuyên Ôn thi Hiệu quả</h3>
        <ul className="space-y-2 text-sm text-slate-400 leading-relaxed list-disc list-inside">
          <li>Hãy bắt đầu từ <strong className="text-indigo-400">Mức Độ Dễ</strong> để rà soát toàn bộ định nghĩa sách giáo khoa mới.</li>
          <li>Làm bài ở chế độ <strong className="text-indigo-400">Thi thử 40 Câu</strong> định kỳ để rèn luyện tốc độ làm bài trong 50 phút.</li>
          <li>Mỗi khi làm sai một câu, hãy truy cập <strong className="text-indigo-400">Sổ tay lỗi sai</strong> ngay để xem lời giải và giải quyết triệt để vấn đề đó.</li>
        </ul>
      </div>
    </div>
  );
}
