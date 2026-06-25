import React from 'react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#top' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Why Choose Us', href: '#difference' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ];

  const services = [
    'Trademark Registration',
    'Copyright Registration',
    'Design Registration',
    'Trademark Renewal',
  ];

  const socials = [
    { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/trademarksecureco?utm_source=qr', label: 'Instagram' },
    { icon: 'fa-brands fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fa-brands fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fa-brands fa-whatsapp', href: 'https://wa.me/918905766456', label: 'WhatsApp' },
  ];

  return (
    <footer className="relative bg-[#030b1a] text-gray-400 overflow-hidden">

      {/* Top Gold Accent Bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      {/* Background decorative orbs */}
      <div className="absolute top-0 left-[-10%] w-72 h-72 rounded-full bg-[#0f2247] opacity-30 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-80 h-80 rounded-full bg-[#c5a059] opacity-5 blur-[100px] pointer-events-none" />

      {/* Main Footer Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            {/* Logo SVG */}
            <div className="mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" className="h-10 w-auto">
                <rect x="0" y="0" width="80" height="80" fill="#0f2247" />
                <rect x="0" y="0" width="80" height="10" fill="#c5a059" />
                <rect x="0" y="70" width="80" height="10" fill="#c5a059" />
                <text x="40" y="54" fontFamily="'Playfair Display', serif" fontSize="42" fontWeight="700" fill="#ffffff" textAnchor="middle">TS</text>
                <text x="95" y="40" fontFamily="'Playfair Display', serif" fontSize="36" fontWeight="800" fill="#ffffff" letterSpacing="1">TRADEMARK</text>
                <line x1="95" y1="48" x2="390" y2="48" stroke="#c5a059" strokeWidth="2.5" />
                <text x="155" y="70" fontFamily="'Playfair Display', serif" fontSize="18" fill="#94a3b8" letterSpacing="4">SECURE CO.</text>
              </svg>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Premium intellectual property services. Protecting your creative and industrial assets.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#1a3060] bg-[#0a1a38] flex items-center justify-center text-gray-400 hover:text-[#c5a059] hover:border-[#c5a059] hover:bg-[#0f2247] transition-all duration-300 hover:scale-110"
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#c5a059] rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#c5a059] transition-all duration-200 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-chevron-right text-[10px] text-[#c5a059] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#c5a059] rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-gray-400 flex items-center gap-2">
                  <i className="fa-solid fa-shield-halved text-[#c5a059] text-[10px]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-[#c5a059] rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0f2247] border border-[#1a3060] flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-location-dot text-[#c5a059] text-xs" />
                </div>
                <div>
                  <p className="text-sm text-white leading-snug">Palam Vihar, Gurugram</p>
                  <p className="text-xs text-gray-500 mt-0.5">Haryana – 122001</p>
                  <p className="text-xs text-gray-500 mt-1">Indore | Ahmedabad | Jaipur | Pratapgarh (Raj.)</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0f2247] border border-[#1a3060] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-[#c5a059] text-xs" />
                </div>
                <a href="tel:+918905766456" className="text-sm text-white hover:text-[#c5a059] transition duration-200">
                  +91 8905 766 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0f2247] border border-[#1a3060] flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-[#c5a059] text-xs" />
                </div>
                <a href="mailto:contact@trademarksecure.co.in" className="text-sm text-white hover:text-[#c5a059] transition duration-200 break-all">
                  contact@trademarksecure.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent mb-8" />

        {/* Disclaimer */}
        <div className="bg-[#070f20] border border-[#0d1f40] rounded-2xl px-6 py-4 mb-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            <span className="text-[#c5a059] font-semibold">Disclaimer: </span>
            This platform provides legal technology and consultancy solutions. All formal intellectual property filings, prosecution are executed by independent registered IP Agents and Advocates in compliance with the Bar Council of India regulations.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} <span className="text-gray-400 font-medium">Trademark Secure Co.</span> All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-600">
            <i className="fa-solid fa-shield-halved text-[#c5a059] text-xs" />
            <span>Trusted IP Professionals across India</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#c5a059] transition duration-200">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-[#c5a059] transition duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
