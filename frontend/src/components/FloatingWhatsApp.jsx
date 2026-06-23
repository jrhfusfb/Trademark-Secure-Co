import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/918905766456" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-2 group animate-float"
    >
      {/* WhatsApp Circle Button */}
      <div className="bg-[#25D366] group-hover:bg-[#128C7E] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.25)] group-hover:scale-108 group-active:scale-95 transition-all duration-300">
        <i className="fa-brands fa-whatsapp text-3xl md:text-4xl"></i>
      </div>
      {/* Permanent Text Bubble below the icon */}
      <span className="bg-white text-[#0f2247] text-[10px] md:text-xs font-extrabold px-2.5 py-1 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.12)] border border-gray-100/80 whitespace-nowrap select-none transition-transform duration-300 group-hover:translate-y-[-2px] tracking-wide uppercase">
        How Can I Help You
      </span>
    </a>
  );
};

export default FloatingWhatsApp;

