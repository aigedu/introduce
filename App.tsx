
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SubjectDetail from './components/SubjectDetail';
import { SUBJECTS } from './constants';
import { Subject } from './types';
import { ArrowRight, Code, Cpu, Layers, PenTool, Wifi } from 'lucide-react';

function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const getSubjectIcon = (iconStr: string) => {
     // Helper to map string to Lucid icons if needed, currently using emoji in constants, 
     // but let's add visual flair on the dashboard cards with Lucide
     switch(iconStr) {
         case "🐱": return <Code className="w-8 h-8 text-white" />;
         case "🏎️": return <Cpu className="w-8 h-8 text-white" />; // Rover
         case "📡": return <Wifi className="w-8 h-8 text-white" />; // Rio
         case "🏰": return <Layers className="w-8 h-8 text-white" />;
         case "⚡": return <PenTool className="w-8 h-8 text-white" />;
         default: return <Code className="w-8 h-8 text-white" />;
     }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#A51C30] selection:text-white">
      <Navbar onHomeClick={() => setSelectedSubject(null)} />

      {selectedSubject ? (
        <SubjectDetail 
          subject={selectedSubject} 
          onBack={() => setSelectedSubject(null)} 
        />
      ) : (
        <>
          {/* Hero Section */}
          <div id="about-aig" className="relative pt-24 pb-20 sm:pt-28 sm:pb-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 pb-2">
                <span className="block text-slate-900">Khơi dậy đam mê</span>
                <span className="block bg-gradient-to-r from-[#A51C30] to-[#530E18] bg-clip-text text-transparent leading-tight">
                  Sáng tạo & Công nghệ
                </span>
              </h1>
              <p className="mt-14 text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                Chào mừng đến với AIG EDUCATION. Nền tảng học tập tương tác giúp bạn làm chủ Scratch, Robotics, Thiết kế 3D và Mạch điện tử.
              </p>
              <div className="flex justify-center gap-4">
                <button 
                   onClick={() => document.getElementById('subjects')?.scrollIntoView({behavior: 'smooth'})}
                   className="px-8 py-3 rounded-full bg-gradient-to-r from-[#A51C30] to-[#530E18] hover:opacity-90 text-white font-semibold transition-all shadow-lg hover:shadow-[#A51C30]/25"
                >
                  Bắt đầu ngay
                </button>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-[#A51C30] rounded-full blur-[128px]"></div>
                <div className="absolute top-[30%] right-[20%] w-96 h-96 bg-[#530E18] rounded-full blur-[128px]"></div>
            </div>
          </div>

          {/* Subject Grid */}
          <div id="subjects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-14">
            <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">Chương trình đào tạo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SUBJECTS.map((subject) => (
                <div 
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject)}
                  className="group relative bg-white rounded-2xl p-1 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-xl border border-slate-100"
                >
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${subject.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative h-full bg-white rounded-xl p-8 flex flex-col items-start z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.gradient} flex items-center justify-center mb-6 shadow-md`}>
                        {getSubjectIcon(subject.icon)}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#A51C30] group-hover:to-[#530E18] transition-colors">
                        {subject.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">
                        {subject.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-[#A51C30] group-hover:text-[#530E18]">
                        Khám phá ngay <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <footer className="border-t border-slate-200 bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
               <p>&copy; 2024 AIG EDUCATION. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
