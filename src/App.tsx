import { useState, useEffect, useMemo } from 'react';
import { QUESTION_BANK } from './data/questionBank';
import { formatPhysicsFormula } from './utils/formatPhysicsFormula';
import { AppHeader } from './components/AppHeader';
import { HomeView } from './components/HomeView';

type QuizMode = 'full' | 'easy' | 'medium' | 'hard' | 'mock';

type Question = (typeof QUESTION_BANK)[number];

type AnswerMap = Record<number, number>;

type Mistake = {
  questionId: number;
  selectedOptionIndex: number;
};

type HistoryDetail = {
  questionId: number;
  userAnswer: number | undefined;
  isCorrect: boolean;
};

type HistoryItem = {
  id: number;
  date: string;
  mode: QuizMode;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  details: HistoryDetail[];
};

type ConfirmModalState = {
  isOpen: boolean;
  message: string;
  onConfirm: (() => void) | null;
};

type AlertModalState = {
  isOpen: boolean;
  message: string;
  type: 'success' | 'error';
};

export default function App() {
  // Trạng thái ứng dụng
  const [currentView, setCurrentView] = useState<'home' | 'quiz' | 'mistakes' | 'history'>('home');
  const [quizMode, setQuizMode] = useState<QuizMode>('full');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerMap>({});
  const [markedQuestions, setMarkedQuestions] = useState<Set<number>>(new Set());
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Tùy chỉnh phông chữ & cỡ chữ (Nâng cấp giúp dễ đọc hơn)
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large' | 'xlarge'>('normal');
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('sans');

  // Lưu trữ tiến trình trong localStorage / in-memory
  const [userHistory, setUserHistory] = useState<HistoryItem[]>([]);
  const [mistakesList, setMistakesList] = useState<Mistake[]>([]);

  // Custom Modal States (Xử lý lỗi chặn alert/confirm do Sandboxed Iframe)
  const [confirmModal, setConfirmModal] = useState<ConfirmModalState>({ isOpen: false, message: '', onConfirm: null });
  const [alertModal, setAlertModal] = useState<AlertModalState>({ isOpen: false, message: '', type: 'success' });

  // Dynamically load Google Fonts on component mount
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Khởi động đồng hồ bấm giờ
  useEffect(() => {
    let interval: number | undefined;
    if (isTimerActive) {
      interval = window.setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval !== undefined) {
        window.clearInterval(interval);
      }
    };
  }, [isTimerActive]);

  // Thiết lập chế độ thi/luyện tập
  const startQuiz = (mode: QuizMode) => {
    setQuizMode(mode);
    let selected: Question[] = [];
    if (mode === 'full') {
      selected = [...QUESTION_BANK];
    } else if (mode === 'easy') {
      selected = QUESTION_BANK.filter(q => q.difficulty === 'Dễ');
    } else if (mode === 'medium') {
      selected = QUESTION_BANK.filter(q => q.difficulty === 'Trung bình');
    } else if (mode === 'hard') {
      selected = QUESTION_BANK.filter(q => q.difficulty === 'Khó');
    } else if (mode === 'mock') {
      // Chọn ngẫu nhiên 40 câu: 15 dễ, 15 trung bình, 10 khó
      const easy = QUESTION_BANK.filter(q => q.difficulty === 'Dễ').sort(() => 0.5 - Math.random()).slice(0, 15);
      const medium = QUESTION_BANK.filter(q => q.difficulty === 'Trung bình').sort(() => 0.5 - Math.random()).slice(0, 15);
      const hard = QUESTION_BANK.filter(q => q.difficulty === 'Khó').sort(() => 0.5 - Math.random()).slice(0, 10);
      selected = [...easy, ...medium, ...hard];
    }
    setQuizQuestions(selected);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setMarkedQuestions(new Set());
    setShowHint(false);
    setShowExplanation(false);
    setTimer(0);
    setIsTimerActive(true);
    setCurrentView('quiz');
  };

  // Trả lời câu hỏi
  const handleSelectOption = (optionIndex: number) => {
    const question = quizQuestions[currentQuestionIndex];
    if (!question) return;
    if (selectedAnswers[question.id] !== undefined && quizMode !== 'mock') return; // Luyện tập không cho chọn lại

    const newAnswers = { ...selectedAnswers, [question.id]: optionIndex };
    setSelectedAnswers(newAnswers);

    // Cập nhật sổ tay lỗi sai ngay lập tức ở chế độ Luyện tập
    if (quizMode !== 'mock') {
      setShowExplanation(true);
      if (optionIndex !== question.answerIndex) {
        if (!mistakesList.some(m => m.questionId === question.id)) {
          setMistakesList(prev => [...prev, { questionId: question.id, selectedOptionIndex: optionIndex }]);
        }
      } else {
        // Nếu trả lời đúng thì xóa khỏi sổ tay lỗi sai (nếu có)
        setMistakesList(prev => prev.filter(m => m.questionId !== question.id));
      }
    }
  };

  // Đánh dấu câu hỏi
  const toggleMarkQuestion = (qId: number) => {
    const newMarked = new Set(markedQuestions);
    if (newMarked.has(qId)) {
      newMarked.delete(qId);
    } else {
      newMarked.add(qId);
    }
    setMarkedQuestions(newMarked);
  };

  // Chuyển câu tiếp theo / quay lại
  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowHint(false);
      const nextQ = quizQuestions[currentQuestionIndex + 1];
      setShowExplanation(nextQ ? selectedAnswers[nextQ.id] !== undefined && quizMode !== 'mock' : false);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowHint(false);
      const prevQ = quizQuestions[currentQuestionIndex - 1];
      setShowExplanation(prevQ ? selectedAnswers[prevQ.id] !== undefined && quizMode !== 'mock' : false);
    }
  };

  // Hoàn thành bài thi
  const handleSubmitQuiz = () => {
    setIsTimerActive(false);

    // Tính điểm và phân tích kết quả
    let correctCount = 0;
    const details = quizQuestions.map((q) => {
      const userAns = selectedAnswers[q.id];
      const isCorrect = userAns === q.answerIndex;
      if (isCorrect) correctCount++;

      // Lưu câu sai vào sổ tay lỗi sai
      if (userAns !== undefined && !isCorrect) {
        if (!mistakesList.some(m => m.questionId === q.id)) {
          setMistakesList(prev => [...prev, { questionId: q.id, selectedOptionIndex: userAns }]);
        }
      }

      return {
        questionId: q.id,
        userAnswer: userAns,
        isCorrect
      };
    });

    const newResult = {
      id: Date.now(),
      date: new Date().toLocaleString('vi-VN'),
      mode: quizMode,
      totalQuestions: quizQuestions.length,
      correctAnswers: correctCount,
      timeSpent: timer,
      details
    };

    setUserHistory(prev => [newResult, ...prev]);
    setCurrentView('history');
  };

  // Thống kê tổng quan từ ngân hàng câu hỏi
  const statistics = useMemo(() => {
    const totalChapters: Record<string, number> = {
      "Vật lí nhiệt": 0,
      "Khí lí tưởng": 0,
      "Từ trường": 0,
      "Hạt nhân nguyên tử": 0
    };
    QUESTION_BANK.forEach(q => {
      if (totalChapters[q.chapter] !== undefined) totalChapters[q.chapter]++;
    });

    return {
      total: QUESTION_BANK.length,
      easy: QUESTION_BANK.filter(q => q.difficulty === 'Dễ').length,
      medium: QUESTION_BANK.filter(q => q.difficulty === 'Trung bình').length,
      hard: QUESTION_BANK.filter(q => q.difficulty === 'Khó').length,
      chapters: totalChapters
    };
  }, []);

  // Format giây -> mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Class định dạng phông chữ dựa trên trạng thái
  const fontClass = fontFamily === 'serif' ? "font-['Lora',serif]" : "font-['Be_Vietnam_Pro',sans-serif]";
  
  // Class định dạng cỡ chữ động dựa trên trạng thái
  const sizeClass = {
    small: 'text-sm leading-relaxed',
    normal: 'text-base leading-relaxed tracking-wide',
    large: 'text-lg leading-loose tracking-wide',
    xlarge: 'text-xl md:text-2xl leading-loose tracking-wider'
  }[fontSize];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${fontClass} ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      <AppHeader
        currentView={currentView}
        setCurrentView={setCurrentView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        fontSize={fontSize}
        setFontSize={setFontSize}
        mistakesCount={mistakesList.length}
      />

      {/* CHƯƠNG TRÌNH CHÍNH */}
      <main className="max-w-6xl mx-auto px-4 py-6">

        {/* 1. TRANG CHỦ / DASHBOARD */}
        {currentView === 'home' && (
          <HomeView
            statistics={statistics}
            mistakesCount={mistakesList.length}
            startQuiz={startQuiz}
            setCurrentView={setCurrentView}
            darkMode={darkMode}
          />
        )}

        {/* 2. GIAO DIỆN LÀM BÀI TRỰC QUAN */}
        {currentView === 'quiz' && quizQuestions.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-fade-in">
            
            {/* CỘT PHẢI / CHI TIẾT CÂU HỎI */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* THÔNG TIN BÀI THI & ĐỒNG HỒ BẤM GIỜ */}
              <div className={`p-4 rounded-2xl border flex items-center justify-between ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-sm`}>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-sm uppercase px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500">
                    {quizMode === 'mock' ? 'CHẾ ĐỘ THI THỬ (40 Câu)' : `ÔN TẬP CHUYÊN ĐỀ (${quizQuestions.length} Câu)`}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    quizQuestions[currentQuestionIndex]?.difficulty === 'Dễ' ? 'bg-emerald-500/10 text-emerald-500' :
                    quizQuestions[currentQuestionIndex]?.difficulty === 'Trung bình' ? 'bg-amber-500/10 text-amber-500' : 'bg-rose-500/10 text-rose-500'
                  }`}>
                    {quizQuestions[currentQuestionIndex]?.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-mono font-bold text-lg text-rose-500 bg-rose-500/10 px-3 py-1 rounded-lg">
                    ⏱️ {formatTime(timer)}
                  </div>
                  <button
                    onClick={() => {
                      // Tính toán số câu chưa trả lời
                      const totalQs = quizQuestions.length;
                      const answeredCount = Object.keys(selectedAnswers).filter(id => selectedAnswers[Number(id)] !== undefined).length;
                      const unansweredCount = totalQs - answeredCount;

                      const confirmMsg = unansweredCount > 0 
                        ? `Bạn vẫn còn ${unansweredCount} câu hỏi chưa trả lời. Bạn có chắc chắn muốn nộp bài và kết thúc ngay bây giờ không?`
                        : "Bạn có chắc chắn muốn nộp bài và kết thúc bài kiểm tra ngay bây giờ?";

                      // Sử dụng Custom Modal thay thế cho window.confirm
                      setConfirmModal({
                        isOpen: true,
                        message: confirmMsg,
                        onConfirm: () => {
                          handleSubmitQuiz();
                          setConfirmModal({ isOpen: false, message: '', onConfirm: null });
                        }
                      });
                    }}
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold px-4 py-2 rounded-xl text-sm transition-all shadow-md shadow-indigo-600/20"
                  >
                    Nộp Bài
                  </button>
                </div>
              </div>

              {/* NỘI DUNG CÂU HỎI */}
              <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-md space-y-6`}>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400 font-extrabold uppercase tracking-wide">Chương: {quizQuestions[currentQuestionIndex]?.chapter}</span>
                  <button
                    onClick={() => toggleMarkQuestion(quizQuestions[currentQuestionIndex].id)}
                    className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                      markedQuestions.has(quizQuestions[currentQuestionIndex].id) 
                        ? 'bg-amber-500/10 border-amber-500 text-amber-500' 
                        : 'border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900'
                    }`}
                  >
                    🔖 {markedQuestions.has(quizQuestions[currentQuestionIndex].id) ? 'Đã đánh dấu' : 'Đánh dấu làm sau'}
                  </button>
                </div>

                {/* Question Text */}
                <div className="space-y-4">
                  <h3 className={`font-bold leading-relaxed ${sizeClass}`}>
                    Câu {currentQuestionIndex + 1}: {formatPhysicsFormula(quizQuestions[currentQuestionIndex]?.question)}
                  </h3>
                </div>

                {/* Các Đáp Án Lựa Chọn */}
                <div className="grid grid-cols-1 gap-4 pt-4">
                  {quizQuestions[currentQuestionIndex]?.options.map((option, index) => {
                    const question = quizQuestions[currentQuestionIndex];
                    const userSelectedIdx = selectedAnswers[question.id];
                    const isAnswered = userSelectedIdx !== undefined;
                    const isCorrectOption = index === question.answerIndex;
                    const isUserSelection = index === userSelectedIdx;

                    let optionStyle = `${darkMode ? 'bg-slate-900/50 border-slate-700 hover:border-slate-600' : 'bg-slate-50 border-slate-200 hover:border-slate-300'} border-2`;
                    let badgeStyle = `${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-500'}`;

                    if (quizMode !== 'mock' && isAnswered) {
                      if (isCorrectOption) {
                        optionStyle = 'bg-emerald-500/10 border-emerald-500 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400';
                        badgeStyle = 'bg-emerald-500 text-white';
                      } else if (isUserSelection) {
                        optionStyle = 'bg-rose-500/10 border-rose-500 dark:bg-rose-500/5 text-rose-600 dark:text-rose-400';
                        badgeStyle = 'bg-rose-500 text-white';
                      } else {
                        optionStyle = 'opacity-50 border-slate-200 dark:border-slate-700';
                      }
                    } else if (isUserSelection) {
                      optionStyle = 'bg-indigo-500/10 border-indigo-500 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400';
                      badgeStyle = 'bg-indigo-500 text-white';
                    }

                    return (
                      <div
                        key={index}
                        onClick={() => handleSelectOption(index)}
                        className={`p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all hover:scale-101 ${optionStyle}`}
                      >
                        <div className={`w-8 h-8 rounded-xl font-black flex items-center justify-center shadow-inner ${badgeStyle}`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <div className={`font-semibold flex-1 ${fontSize === 'small' ? 'text-sm' : fontSize === 'normal' ? 'text-base' : fontSize === 'large' ? 'text-lg' : 'text-xl'}`}>
                          {formatPhysicsFormula(option)}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* HỖ TRỢ XEM GỢI Ý & GIẢI THÍCH (Chỉ dành cho Luyện tập tự do) */}
                {quizMode !== 'mock' && (
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setShowHint(!showHint)}
                        className={`text-xs font-extrabold px-4 py-2 rounded-xl border transition-all ${
                          showHint 
                            ? 'bg-amber-500/10 border-amber-500 text-amber-500' 
                            : 'border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-900'
                        }`}
                      >
                        💡 {showHint ? 'Ẩn gợi ý làm bài' : 'Xem gợi ý làm bài'}
                      </button>
                    </div>

                    {showHint && (
                      <div className="p-4 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 text-amber-600 dark:text-amber-400 text-sm font-semibold leading-relaxed border border-amber-500/20">
                        <strong>Gợi ý:</strong> {formatPhysicsFormula(quizQuestions[currentQuestionIndex]?.hint)}
                      </div>
                    )}

                    {showExplanation && (
                      <div className="p-5 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-sm leading-relaxed border border-indigo-500/20 space-y-2">
                        <div className="font-black text-sm flex items-center gap-1.5">
                          ✍️ Lời giải & Phân tích chi tiết:
                        </div>
                        <p className="font-medium text-slate-500 dark:text-slate-300">
                          {formatPhysicsFormula(quizQuestions[currentQuestionIndex]?.rationale)}
                        </p>
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* KHU VỰC ĐIỀU HƯỚNG CÂU HỎI TRƯỚC / SAU */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed font-extrabold px-5 py-3 rounded-xl text-sm transition-all"
                >
                  &larr; Câu trước
                </button>
                <span className="text-sm font-extrabold text-slate-400">
                  Câu {currentQuestionIndex + 1} / {quizQuestions.length}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === quizQuestions.length - 1}
                  className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed font-extrabold px-5 py-3 rounded-xl text-sm transition-all"
                >
                  Câu sau &rarr;
                </button>
              </div>

            </div>

            {/* CỘT TRÁI / DANH SÁCH BẢNG CÂU HỎI ĐỂ CHUYỂN NHANH */}
            <div className="space-y-6">
              <div className={`p-5 rounded-3xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
                <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-400">Bảng câu hỏi</h4>
                
                <div className="grid grid-cols-5 gap-2 max-h-96 overflow-y-auto pr-1">
                  {quizQuestions.map((q, idx) => {
                    const isCurrent = idx === currentQuestionIndex;
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isMarked = markedQuestions.has(q.id);

                    let qStyle = `${darkMode ? 'bg-slate-900 border-slate-700 hover:bg-slate-700' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'} text-slate-400 border`;
                    
                    if (isCurrent) {
                      qStyle = 'bg-indigo-600 text-white border-indigo-600 font-extrabold shadow-md shadow-indigo-500/20';
                    } else if (isAnswered) {
                      qStyle = 'bg-emerald-500/20 text-emerald-500 border-emerald-500 dark:bg-emerald-500/10';
                    } else if (isMarked) {
                      qStyle = 'bg-amber-500/20 text-amber-500 border-amber-500 dark:bg-amber-500/10';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentQuestionIndex(idx);
                          setShowHint(false);
                          setShowExplanation(selectedAnswers[q.id] !== undefined && quizMode !== 'mock');
                        }}
                        className={`w-10 h-10 rounded-lg text-xs font-extrabold transition-all flex items-center justify-center ${qStyle}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2 text-xs font-bold text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-emerald-500/20 border border-emerald-500"></span>
                    <span>Đã trả lời</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-amber-500/20 border border-amber-500"></span>
                    <span>Đánh dấu làm sau</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-indigo-600"></span>
                    <span>Đang làm</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* 3. SỔ TAY LỖI SAI (MISTAKES NOTEBOOK) */}
        {currentView === 'mistakes' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black tracking-tight flex items-center gap-2">
                  ⚠️ SỔ TAY LỖI SAI TRỰC TUYẾN
                </h2>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Tập hợp những câu bạn làm chưa đúng để rèn luyện lại đến khi nhuần nhuyễn.</p>
              </div>
              {mistakesList.length > 0 && (
                <button
                  onClick={() => {
                    setConfirmModal({
                      isOpen: true,
                      message: "Bạn có muốn reset lại toàn bộ sổ tay lỗi sai này không?",
                      onConfirm: () => {
                        setMistakesList([]);
                        setConfirmModal({ isOpen: false, message: '', onConfirm: null });
                      }
                    });
                  }}
                  className="bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 font-bold px-4 py-2 rounded-xl text-xs border border-rose-500/20 transition-all"
                >
                  Xóa tất cả lỗi sai
                </button>
              )}
            </div>

            {mistakesList.length === 0 ? (
              <div className={`p-12 text-center rounded-3xl border border-dashed ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-100 border-slate-200'} space-y-4`}>
                <span className="text-5xl">🎉</span>
                <h3 className="text-xl font-bold">Tuyệt vời! Sổ tay lỗi sai trống trơn!</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Bạn chưa làm sai câu hỏi nào hoặc đã hoàn thành việc ôn tập giải quyết mọi câu hỏi bị lỗi. Hãy tiếp tục luyện thi để duy trì phong độ đỉnh cao này!
                </p>
                <button
                  onClick={() => setCurrentView('home')}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all"
                >
                  Quay lại Luyện đề
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {mistakesList.map((m, idx) => {
                    const question = QUESTION_BANK.find(q => q.id === m.questionId);
                    if (!question) return null;

                    return (
                      <div key={m.questionId} className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-400">Câu sai số #{idx + 1} &bull; {question.chapter}</span>
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-500">{question.difficulty}</span>
                        </div>

                        <h3 className={`font-bold leading-relaxed ${sizeClass}`}>
                          Câu hỏi: {formatPhysicsFormula(question.question)}
                        </h3>

                        {/* Các lựa chọn để làm lại ngay lập tức */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {question.options.map((option, oIdx) => {
                            const isCorrectOption = oIdx === question.answerIndex;
                            const isOriginalMistake = oIdx === m.selectedOptionIndex;

                            let optionStyle = `${darkMode ? 'bg-slate-900/40 border-slate-700/50 hover:border-slate-500' : 'bg-slate-50 border-slate-200 hover:border-slate-300'} border-2`;
                            
                            // Chỉ ra câu sai cũ của họ để họ rút kinh nghiệm
                            if (isOriginalMistake) {
                              optionStyle = 'border-rose-500 bg-rose-500/5 text-rose-500 opacity-80';
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => {
                                  if (isCorrectOption) {
                                    setAlertModal({
                                      isOpen: true,
                                      message: "Chúc mừng! Bạn đã giải đúng câu hỏi này! Câu hỏi này đã được xóa khỏi Sổ tay lỗi sai.",
                                      type: 'success'
                                    });
                                    setMistakesList(prev => prev.filter(item => item.questionId !== question.id));
                                  } else {
                                    setAlertModal({
                                      isOpen: true,
                                      message: "Vẫn chưa đúng rồi! Hãy nghiên cứu kỹ lại gợi ý và lý thuyết để tìm ra phương án chính xác nhé.",
                                      type: 'error'
                                    });
                                  }
                                }}
                                className={`p-3 rounded-xl text-left text-xs font-semibold leading-relaxed transition-all flex items-start gap-2.5 ${optionStyle}`}
                              >
                                <span className="bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xxs font-black">
                                  {String.fromCharCode(65 + oIdx)}
                                </span>
                                <span className="font-semibold text-sm leading-relaxed">{formatPhysicsFormula(option)}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* Lời giải giải thích */}
                        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900/50 text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 space-y-1">
                          <p className="font-bold text-slate-700 dark:text-indigo-400">💡 Gợi ý giải mã:</p>
                          <p className="font-medium text-sm leading-relaxed">{formatPhysicsFormula(question.hint)}</p>
                          <p className="font-bold text-slate-700 dark:text-indigo-400 pt-2">✍️ Phân tích khoa học:</p>
                          <p className="font-medium text-sm leading-relaxed">{formatPhysicsFormula(question.rationale)}</p>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        )}

        {/* 4. LỊCH SỬ THI THỬ & ÔN TẬP CÁC CÂU HỎI ĐÃ LÀM */}
        {currentView === 'history' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-black tracking-tight">📜 LỊCH SỬ THI & PHÂN TÍCH</h2>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Theo dõi sự tiến bộ, điểm số trung bình và cấu trúc lỗi sai.</p>
            </div>

            {userHistory.length === 0 ? (
              <div className={`p-12 text-center rounded-3xl border border-dashed ${darkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-slate-100 border-slate-200'} space-y-4`}>
                <span className="text-5xl">📝</span>
                <h3 className="text-xl font-bold">Chưa có dữ liệu lịch sử thi thử</h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                  Dữ liệu điểm số, thời gian làm bài của các lần thi thử sẽ xuất hiện tại đây ngay khi bạn hoàn thành bài thi lần đầu tiên.
                </p>
                <button
                  onClick={() => startQuiz('mock')}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all"
                >
                  Thi Thử Ngay Câu Đầu Tiên
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* DANH SÁCH LƯỢT THI (CỘT TRÁI) */}
                <div className="md:col-span-1 space-y-4">
                  <h3 className="font-bold text-sm text-slate-400 uppercase tracking-wider">Danh sách bài đã làm</h3>
                  <div className="space-y-3">
                    {userHistory.map((historyItem) => {
                      const score = (historyItem.correctAnswers / historyItem.totalQuestions) * 10;
                      return (
                        <div key={historyItem.id} className={`p-4 rounded-2xl border transition-all ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="text-xs text-slate-400">{historyItem.date}</div>
                              <div className="font-bold text-sm">
                                {historyItem.mode === 'mock' ? 'Thi Thử (40 Câu)' : 'Luyện tự do'}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-black text-indigo-500">{score.toFixed(1)} <span className="text-xs text-slate-400">/10đ</span></div>
                              <div className="text-xxs text-slate-400">Đúng: {historyItem.correctAnswers}/{historyItem.totalQuestions}</div>
                            </div>
                          </div>
                          <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-700/50">
                            ⏱️ Làm bài trong: <strong className="text-slate-200">{formatTime(historyItem.timeSpent)}</strong>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* BÁO CÁO PHÂN TÍCH TIẾN ĐỘ & SỔ CÂU HỎI ĐÃ LÀM (CỘT PHẢI) */}
                <div className="md:col-span-2 space-y-6">
                  
                  {/* TỔNG KẾT PHÂN TÍCH */}
                  <div className={`p-6 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg space-y-4`}>
                    <h3 className="text-lg font-black">🌟 Biểu đồ phong độ của bạn</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-white/10 p-3 rounded-xl text-center">
                        <div className="text-xxs text-slate-200 uppercase font-bold">Số lần luyện</div>
                        <div className="text-2xl font-black">{userHistory.length} lần</div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl text-center">
                        <div className="text-xxs text-slate-200 uppercase font-bold">Số câu đã làm</div>
                        <div className="text-2xl font-black">
                          {userHistory.reduce((acc, curr) => acc + curr.totalQuestions, 0)} câu
                        </div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl text-center">
                        <div className="text-xxs text-slate-200 uppercase font-bold">Số câu trả lời đúng</div>
                        <div className="text-2xl font-black text-emerald-300">
                          {userHistory.reduce((acc, curr) => acc + curr.correctAnswers, 0)} câu
                        </div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-xl text-center">
                        <div className="text-xxs text-slate-200 uppercase font-bold">Tỉ lệ đúng TB</div>
                        <div className="text-2xl font-black text-amber-300">
                          {Math.round(
                            (userHistory.reduce((acc, curr) => acc + curr.correctAnswers, 0) /
                              userHistory.reduce((acc, curr) => acc + curr.totalQuestions, 0)) *
                              100
                          )}%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LƯỢT THI GẦN NHẤT CHI TIẾT */}
                  <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} shadow-sm space-y-4`}>
                    <h3 className="font-extrabold text-base">🔍 Chi tiết các câu hỏi đã làm trong lượt cuối cùng</h3>
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                      {userHistory[0]?.details.map((detail, index) => {
                        const question = QUESTION_BANK.find(q => q.id === detail.questionId);
                        if (!question) return null;

                        return (
                          <div key={detail.questionId} className={`p-4 rounded-2xl border ${detail.isCorrect ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-rose-500/30 bg-rose-500/5'} space-y-2`}>
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-bold text-slate-400">Câu {index + 1} &bull; {question.chapter}</span>
                              <span className={`font-bold px-2 py-0.5 rounded ${detail.isCorrect ? 'bg-emerald-500/20 text-emerald-500' : 'bg-rose-500/20 text-rose-500'}`}>
                                {detail.isCorrect ? 'Đúng' : 'Sai'}
                              </span>
                            </div>
                            <p className="text-sm font-bold">{formatPhysicsFormula(question.question)}</p>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              <strong>Lựa chọn của bạn:</strong> {detail.userAnswer !== undefined ? formatPhysicsFormula(question.options[detail.userAnswer]) : 'Chưa trả lời (Bỏ trống)'}
                            </p>
                            <p className="text-xs text-emerald-500 font-bold">
                              ✔️ Đáp án đúng: {formatPhysicsFormula(question.options[question.answerIndex])}
                            </p>
                            <p className="text-xs text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-700/50 leading-relaxed">
                              <strong>Giải thích:</strong> {formatPhysicsFormula(question.rationale)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>
            )}

          </div>
        )}

      </main>

      {/* CUSTOM CONFIRM MODAL */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className={`w-full max-w-md p-6 rounded-3xl shadow-2xl border ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-800'}`}>
            <h3 className="text-lg font-black mb-3">❓ Xác nhận nộp bài</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed mb-6 font-medium">
              {confirmModal.message}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmModal({ isOpen: false, message: '', onConfirm: null })}
                className="px-4 py-2 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all text-slate-500 dark:text-slate-300"
              >
                Hủy bỏ
              </button>
              <button
                onClick={() => confirmModal.onConfirm?.()}
                className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md shadow-indigo-600/20 transition-all"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CUSTOM ALERT MODAL */}
      {alertModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className={`w-full max-w-sm p-6 rounded-3xl shadow-2xl border text-center ${darkMode ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-800'}`}>
            <span className="text-4xl block mb-3">
              {alertModal.type === 'success' ? '🎉' : '❌'}
            </span>
            <h3 className={`text-base font-extrabold mb-4 leading-relaxed`}>
              {alertModal.message}
            </h3>
            <button
              onClick={() => setAlertModal({ isOpen: false, message: '', type: 'success' })}
              className={`px-6 py-2 text-xs font-extrabold text-white rounded-xl shadow-md transition-all ${
                alertModal.type === 'success' ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20' : 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20'
              }`}
            >
              Tôi đã hiểu
            </button>
          </div>
        </div>
      )}

      {/* FOOTER BAR */}
      <footer className={`mt-12 py-8 border-t transition-colors ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-extrabold text-sm text-slate-400">HỆ THỐNG LUYỆN THI VẬT LÍ 12 - PHIÊN BẢN CHUẨN GDPT 2018</p>
            <p className="text-xs text-slate-400 mt-1">Thiết kế tối ưu hóa kỹ năng tính toán, đọc đồ thị & giải mã nhanh lý thuyết.</p>
          </div>
          <div className="text-xs font-semibold text-slate-400">
            🎯 &ldquo;Không có thành công nào dành cho kẻ lười biếng!&rdquo; &bull; NaNa 2008
          </div>
        </div>
      </footer>

    </div>
  );
}