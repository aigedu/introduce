
import React, { useState, useRef, useEffect } from 'react';
import { Subject, SubjectId, VideoItem } from '../types';
import { ArrowLeft, BookOpen, Monitor, Target, Trophy, ChevronDown, Settings, Lightbulb, GraduationCap, ExternalLink, PlayCircle, Search, Youtube, Loader2 } from 'lucide-react';

interface SubjectDetailProps {
  subject: Subject;
  onBack: () => void;
  tinkVideos?: VideoItem[];
}

// Component Search Video for Tink Creative
const VideoSearch: React.FC<{ videos: VideoItem[] }> = ({ videos }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter videos by name AND ensure link exists and is not empty
  const filteredVideos = videos.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) && v.link && v.link.trim() !== ""
  );

  return (
    <div className="p-5">
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:placeholder-slate-300 focus:ring-2 focus:ring-[#A51C30] focus:border-transparent sm:text-sm transition-shadow shadow-sm"
          placeholder="Nhập tên video bạn muốn tìm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((v, idx) => (
            <a
              key={idx}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#A51C30]/30 rounded-xl transition-all hover:shadow-md group"
            >
              <div className="bg-red-100 p-3 rounded-full flex-shrink-0 group-hover:bg-red-600 transition-colors">
                <Youtube className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h4 className="text-slate-800 font-medium text-base group-hover:text-[#A51C30] transition-colors line-clamp-2">
                  {v.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 flex items-center">
                  Xem trên YouTube <ExternalLink className="w-3 h-3 ml-1" />
                </p>
              </div>
            </a>
          ))
        ) : (
          <div className="text-center py-8 text-slate-500 italic">
            {searchTerm 
              ? `Không tìm thấy video nào phù hợp với từ khóa "${searchTerm}"`
              : "Hiện chưa có video hướng dẫn nào hoặc đang tải..."}
          </div>
        )}
      </div>
    </div>
  );
};

// Helper Component for Accordion Sections
const AccordionSection: React.FC<{
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, icon, colorClass, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip scrolling on the very first render (initial load)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isOpen && sectionRef.current) {
      // Small timeout to allow the DOM to update height before scrolling
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [isOpen]);

  return (
    <div 
      ref={sectionRef}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 scroll-mt-24 mb-4 ${
        isOpen 
          ? 'bg-white border-[#A51C30]/20 shadow-lg shadow-slate-200' 
          : 'bg-white border-slate-200 hover:border-slate-300'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 focus:outline-none group transition-colors ${
          isOpen ? 'bg-white' : 'hover:bg-slate-50'
        }`}
      >
        <div className={`flex items-center gap-3 ${colorClass} group-hover:opacity-100 transition-opacity`}>
          {icon}
          <h3 className={`font-semibold text-lg transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
            {title}
          </h3>
        </div>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-[#530E18]' : 'text-slate-400'
          }`} 
        />
      </button>
      
      {isOpen && (
        <div className="border-t border-slate-100 animate-in fade-in slide-in-from-top-1 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const SubjectDetail: React.FC<SubjectDetailProps> = ({ subject, onBack, tinkVideos = [] }) => {
  
  return (
    <div className="pt-24 pb-20 min-h-screen max-w-5xl mx-auto px-4">
      {/* Top Navigation */}
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-slate-900 transition-colors w-fit mb-6 group"
      >
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Quay lại danh sách
      </button>

      {/* Header Card */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xl overflow-hidden relative group mb-8">
        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${subject.gradient}`}></div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
           <div className="flex-1">
             <div className="flex items-center gap-4 mb-4">
               <div className="text-4xl bg-slate-50 p-3 rounded-xl shadow-inner border border-slate-100 inline-flex">{subject.icon}</div>
               <h1 className="text-3xl font-bold text-slate-900 tracking-wide">{subject.title}</h1>
             </div>
             <p className="text-slate-600 text-lg">{subject.description}</p>
           </div>
           <div className="md:w-1/3 rounded-xl overflow-hidden border border-slate-200 shadow-lg rotate-1 group-hover:rotate-0 transition-transform duration-500">
             <img src={subject.imageUrl} alt={subject.title} className="w-full h-40 object-cover" />
           </div>
        </div>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-2">
        
        {/* Introduction Section (Default Open) */}
        <AccordionSection 
          title="Giới thiệu" 
          icon={<BookOpen className="w-5 h-5" />}
          colorClass="text-blue-600"
          defaultOpen={true}
        >
          <div className="p-5">
            <p className="leading-7 text-slate-700 text-[16px] text-justify">
              {subject.introduction}
            </p>
          </div>
        </AccordionSection>

        {/* Video Tutorials Section - Dynamic for Tink Creative, Static for others */}
        {((subject.videoTutorials && subject.videoTutorials.length > 0) || subject.id === SubjectId.TINK_CREATIVE) && (
          <AccordionSection 
            title="Video hướng dẫn" 
            icon={<PlayCircle className="w-5 h-5" />}
            colorClass="text-red-600"
          >
            {subject.id === SubjectId.TINK_CREATIVE ? (
              <VideoSearch videos={tinkVideos} />
            ) : (
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                {subject.videoTutorials && subject.videoTutorials.map((videoUrl, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-black aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={videoUrl} 
                      title={`${subject.title} tutorial ${index + 1}`} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ))}
              </div>
            )}
          </AccordionSection>
        )}

        {/* Software Section - Hide for Tink Creative */}
        {subject.id !== SubjectId.TINK_CREATIVE && (
          <AccordionSection 
            title="Phần mềm / Dụng cụ môn học" 
            icon={<Monitor className="w-5 h-5" />}
            colorClass="text-purple-600"
          >
            <div className="p-5">
              {subject.softwareUrl ? (
                <a 
                  href={subject.softwareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 rounded-lg text-slate-800 text-sm font-medium border border-slate-200 transition-all group shadow-sm hover:shadow"
                  title="Mở phần mềm trong tab mới"
                >
                  {subject.software}
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-600" />
                </a>
              ) : (
                <div className="inline-block px-4 py-2 bg-slate-100 rounded-lg text-slate-800 text-sm font-medium border border-slate-200">
                  {subject.software}
                </div>
              )}
            </div>
          </AccordionSection>
        )}

        {/* Software Usage Guide Section */}
        <AccordionSection 
          title="Hướng dẫn thực hành / Sử dụng" 
          icon={<Settings className="w-5 h-5" />}
          colorClass="text-pink-600"
        >
          <div className="p-5 space-y-6">
            {subject.usageGuide.map((step, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-800 text-base">{step.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{step.description}</p>
              </div>
            ))}
          </div>
        </AccordionSection>

        {/* Objectives Section */}
        <AccordionSection 
          title="Mục tiêu môn học" 
          icon={<Target className="w-5 h-5" />}
          colorClass="text-green-600"
        >
          <div className="p-5">
            <ul className="space-y-3">
              {subject.objectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </AccordionSection>

        {/* Outcomes Section */}
        <AccordionSection 
          title="Kết quả đầu ra" 
          icon={<Trophy className="w-5 h-5" />}
          colorClass="text-yellow-600"
        >
          <div className="p-5">
            <ul className="space-y-3">
              {subject.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                   <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </AccordionSection>

        {/* Static Reference Problems Section (Replacing AI Homework) */}
        {subject.referenceProblems && subject.referenceProblems.length > 0 && (
          <AccordionSection 
            title="Bài tập tham khảo & Kiến thức" 
            icon={<GraduationCap className="w-5 h-5" />}
            colorClass="text-[#530E18]"
          >
            <div className="p-5 space-y-4">
              <div className="mb-4">
                <p className="text-slate-600 text-sm italic">
                  Dưới đây là các bài tập mẫu điển hình và phần tóm tắt lý thuyết để giúp bạn tự ôn tập.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {subject.referenceProblems.map((prob, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                     <div className="flex items-center gap-2 mb-3">
                        <div className="bg-[#A51C30]/10 p-2 rounded-lg">
                          <BookOpen className="w-4 h-4 text-[#A51C30]" />
                        </div>
                        <h4 className="font-bold text-slate-800">{prob.title}</h4>
                     </div>
                     
                     <div className="mb-4">
                        <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Đề bài</h5>
                        <p className="text-slate-700 text-sm leading-relaxed">{prob.problemStatement}</p>
                     </div>

                     <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                        <h5 className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                           <Lightbulb className="w-3 h-3" />
                           Lý thuyết / Hướng dẫn
                        </h5>
                        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                           {prob.referenceLecture}
                        </p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionSection>
        )}

      </div>
    </div>
  );
};

export default SubjectDetail;