import React from 'react';

interface NavbarProps {
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const handleScrollToAbout = () => {
    onHomeClick();
    // Allow a brief moment for the Home view to mount if we are navigating back from a subject
    setTimeout(() => {
      const element = document.getElementById('about-aig');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={onHomeClick}>
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#A51C30] to-[#530E18] bg-clip-text text-transparent">
                AIG EDUCATION
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={onHomeClick}
                className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Trang chủ
              </button>
              <button 
                onClick={handleScrollToAbout}
                className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Giới thiệu
              </button>
              <a href="#" className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;