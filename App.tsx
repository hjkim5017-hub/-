
import React from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import LinkButtons from './components/LinkButtons';
import CompanyIntro from './components/CompanyIntro';
import Footer from './components/Footer';

const App: React.FC = () => {
  const handleNavigate = (section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F7F5] selection:bg-stone-200 selection:text-[#7A0006]">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative flex flex-col">
        
        <Header onNavigate={handleNavigate} />
        
        <main className="flex-grow pb-24">
          {/* Main Visual Section - Solid Burgundy Style */}
          <ProfileHeader />
          
          {/* Main Action Links */}
          <div className="mt-10">
            <LinkButtons />
          </div>

          {/* Company Introduction Section */}
          <CompanyIntro />
          
          {/* Naver Blog Section */}
          <section className="px-6 mb-12">
             <div 
               onClick={() => window.open('https://blog.naver.com/the-enough', '_blank')}
               className="bg-[#F4F4F2] rounded-3xl p-8 text-stone-900 relative overflow-hidden shadow-sm border border-stone-100 cursor-pointer active:scale-[0.98] transition-all group"
             >
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-[#2DB400] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm">BLOG</span>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">Official Channel</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2 mb-3">더 이너프 공식 블로그</h3>
                  <p className="text-[11px] text-stone-500 leading-relaxed mb-6">
                    최신 시공 사례부터 인테리어 꿀팁까지,<br/>더 이너프의 모든 이야기를 확인해보세요.
                  </p>
                  <div className="flex items-center text-[10px] font-bold text-[#7A0006] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    <span>Visit Blog</span>
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {/* Subtle Visual Element */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                   <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.12 13H15V11H16.12C16.63 11 17 10.63 17 10.12V8.88C17 8.37 16.63 8 16.12 8H13V16H16.12C16.63 16 17 15.63 17 15.12V13.88C17 13.37 16.63 13 16.12 13Z" />
                      <path d="M4 18V6H20V18H4ZM22 4H2V20H22V4ZM11 14V10H7V14H11Z" />
                   </svg>
                </div>
             </div>
          </section>
        </main>

        <Footer />
        
        {/* Floating Contact Action Button */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[320px] z-50">
           <button 
             onClick={() => window.open('https://naver.me/FnsFz5ow', '_blank')}
             className="w-full py-4 bg-[#7A0006] text-white rounded-full font-bold text-sm shadow-2xl tracking-tight flex items-center justify-center space-x-2 active:scale-95 transition-transform"
           >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>온라인 상담 신청하기</span>
           </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default App;
