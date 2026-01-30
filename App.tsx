import React, { useState, useMemo, useRef } from 'react';
import { ArrowRight, ArrowLeft, RefreshCw, MapPin, Award, Sparkles, Quote, Zap } from 'lucide-react';
import { QUESTIONS, DIMENSION_LABELS, DIMENSION_DESCRIPTIONS } from './constants';
import { UserAnswers, MatchResult, DimensionKey, City } from './types';
import { calculateUserScores, calculateMatches } from './utils';
import UserRadarChart from './components/RadarChart';

type GameState = 'home' | 'quiz' | 'result';

function App() {
  const [gameState, setGameState] = useState<GameState>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  
  const resultRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswer = (value: number) => {
    const question = QUESTIONS[currentQuestionIndex];
    if (!question) return;

    setAnswers(prev => ({ ...prev, [question.id]: value }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 250);
    } else {
      setGameState('result');
      // Scroll to top when results load
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  };

  const handleRetake = () => {
    setGameState('home');
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Results Logic
  const results = useMemo(() => {
    if (gameState !== 'result') return null;
    const scores = calculateUserScores(answers);
    const matches = calculateMatches(scores);
    return { scores, matches };
  }, [gameState, answers]);

  // Views
  if (gameState === 'home') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-teal-50 to-blue-50 font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-8 text-center space-y-8">
          <div className="w-24 h-24 bg-gradient-to-tr from-teal-400 to-cyan-300 text-white rounded-full flex items-center justify-center mx-auto shadow-lg transform hover:scale-105 transition-transform duration-300">
            <MapPin size={48} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">城市性格匹配测试</h1>
            <p className="text-gray-500 text-lg">发现你的"天选之城"</p>
          </div>
          <p className="text-gray-600 leading-relaxed px-4">
            中国幅员辽阔，每座城市都有独特的性格。
            通过30道生活方式测试题，分析你的性格维度，找到那个最懂你的城市。
          </p>
          
          <button
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-teal-200 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            开始测试 <ArrowRight size={24} />
          </button>
          
          <div className="text-xs text-gray-400 mt-4">
            预计耗时 3-5 分钟 • 16座热门城市
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'quiz') {
    const question = QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

    // Safety check to prevent errors during state transitions
    if (!question) {
        return <div className="min-h-screen flex items-center justify-center bg-slate-50"><RefreshCw className="animate-spin text-teal-500" /></div>;
    }

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 font-sans">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-6 sm:p-10 min-h-[500px] flex flex-col relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>
          
          {/* Header */}
          <div className="relative z-10 mb-8">
             <div className="flex justify-between items-end mb-3">
               <span className="text-xs font-bold text-teal-600 tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full">
                 第 {currentQuestionIndex + 1} / {QUESTIONS.length} 题
               </span>
               <span className="text-xs font-medium text-gray-400">
                 进度 {Math.round(progress)}%
               </span>
             </div>
             <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
               <div 
                  className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
               ></div>
             </div>
          </div>

          {/* Question */}
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 leading-snug">
              {question.text}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-teal-400 hover:bg-teal-50/50 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-teal-500 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity transform scale-0 group-hover:scale-100 duration-200"></div>
                    </div>
                    <span className="text-gray-700 group-hover:text-teal-900 font-medium text-lg">
                      {option.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 mt-8 flex justify-between items-center">
            <button 
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${currentQuestionIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'}`}
            >
              <ArrowLeft size={16} /> 上一题
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'result' && results) {
    const { scores, matches } = results;
    const topMatch = matches[0];
    const otherMatches = matches.slice(1, 7); // Show next 6 matches

    return (
      <div ref={resultRef} className="min-h-screen bg-[#F0F7FF] font-sans pb-20">
        {/* Top Banner / Header */}
        <div className="bg-gradient-to-b from-[#F0F7FF] to-white pb-12 pt-12 px-4 text-center rounded-b-[3rem] shadow-sm mb-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#00ACC1] mb-3">
              你的性格与这座城市最匹配
            </h1>
            <p className="text-gray-500 text-lg">发现你的"天选之城"</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 space-y-12">
          
          {/* 1. Hero Card - Top Match */}
          <div className="relative -mt-20">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-white">
              <div className="p-8 md:p-12 flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-24 h-24 bg-[#26C6DA] rounded-2xl rotate-3 absolute top-0 left-0 opacity-20"></div>
                  <div className="w-24 h-24 bg-[#26C6DA] text-white rounded-2xl flex items-center justify-center shadow-lg relative z-10 -rotate-3">
                    <MapPin size={48} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Match Badge */}
                <div className="inline-flex items-center gap-1 bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-sm font-bold mb-2">
                  <Sparkles size={14} /> 匹配度
                </div>

                {/* Score */}
                <div className="text-7xl font-bold text-[#00ACC1] mb-4 tracking-tighter">
                  {topMatch.score}%
                </div>

                {/* City Title */}
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <MapPin className="text-[#00ACC1]" size={28} />
                  你的天选之城：{topMatch.city.name}
                </h2>

                {/* Tags Groups */}
                <div className="space-y-4 mb-10 w-full max-w-lg mx-auto">
                   <div className="flex flex-wrap justify-center gap-3">
                      {topMatch.city.personaTypes.map((tag) => (
                        <span key={tag} className="px-5 py-2 rounded-full bg-[#E0F7FA] text-[#006064] font-medium text-base shadow-sm">
                          {tag}
                        </span>
                      ))}
                   </div>
                   <div className="flex flex-wrap justify-center gap-3">
                      {topMatch.city.tags.map((tag) => (
                        <span key={tag} className="px-5 py-2 rounded-full bg-[#26C6DA] text-white font-medium text-base shadow-sm">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

                {/* Match Reason Box */}
                <div className="bg-[#F8FAFC] rounded-2xl p-6 md:p-8 text-left w-full max-w-3xl border border-slate-100">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700 mb-4">
                    <Sparkles className="text-[#00ACC1]" size={20} />
                    匹配理由
                  </h3>
                  <p className="text-gray-600 leading-8 text-base md:text-lg">
                    {topMatch.city.detailedDescription}
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* 2. Other Suitable Cities Grid */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-8">
               <div className="h-px bg-gray-300 w-12 md:w-24"></div>
               <h3 className="text-xl md:text-2xl font-bold text-gray-800">其他适合你的城市</h3>
               <div className="h-px bg-gray-300 w-12 md:w-24"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherMatches.map((match) => (
                <div key={match.city.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-[#E0F7FA] rounded-full flex items-center justify-center text-[#00ACC1]">
                          <MapPin size={18} />
                       </div>
                       <h4 className="text-xl font-bold text-gray-800">{match.city.name}</h4>
                    </div>
                    <span className="text-[#26C6DA] font-bold text-lg bg-[#E0F7FA] px-2 py-1 rounded-lg">
                      {match.score}%
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {match.city.personaTypes.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600">
                        {tag}
                      </span>
                    ))}
                    {match.city.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white border border-gray-200 text-gray-500">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mt-auto line-clamp-3">
                    {match.city.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Analysis Section (Moved to Bottom) */}
          <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10">
            <div className="text-center mb-8">
               <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">性格维度深度分析</h3>
               <p className="text-gray-500">了解你的生活偏好构成</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-50 rounded-2xl p-4">
                <UserRadarChart scores={scores} />
              </div>

              <div className="space-y-5">
                {Object.entries(scores).map(([key, value]) => {
                   const k = key as DimensionKey;
                   const val = value as number;
                   const desc = val > 50 ? DIMENSION_DESCRIPTIONS[k].high : DIMENSION_DESCRIPTIONS[k].low;
                   return (
                     <div key={key} className="relative">
                       <div className="flex justify-between text-sm mb-1">
                         <span className="font-bold text-gray-700">{DIMENSION_LABELS[k]}</span>
                         <span className="text-gray-500">{val}分 • {desc}</span>
                       </div>
                       <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                         <div 
                            className="h-full rounded-full bg-gradient-to-r from-teal-400 to-cyan-500" 
                            style={{ width: `${val}%` }}
                         ></div>
                       </div>
                     </div>
                   );
                })}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pb-12 text-center">
            <button
              onClick={handleRetake}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 hover:border-teal-500 hover:text-teal-600 text-gray-600 rounded-xl font-bold text-lg shadow-sm hover:shadow-md transition-all duration-200"
            >
              <RefreshCw size={20} /> 
              <span>重新测试</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  return null;
}

export default App;