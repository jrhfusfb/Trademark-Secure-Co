import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/91890576656" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.3)] z-50 hover:scale-110 active:scale-95 transition-all duration-300 group animate-float"
    >
      <i className="fa-brands fa-whatsapp text-3xl md:text-4xl"></i>
      {/* Tooltip that shows on hover */}
      <span className="absolute right-20 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with an Expert
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
