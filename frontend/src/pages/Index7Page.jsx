import React, { useState } from 'react';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Menu, X } from 'lucide-react';

const Index7Page = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name.toLowerCase()]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // Build FormData with descriptive labels for a structured email
      const payload = new FormData();
      payload.append('Full Name', formData.name);
      payload.append('Phone / WhatsApp', formData.phone);
      payload.append('Email Address', formData.email);
      payload.append('Service Required', 'General Callback');
      payload.append('Message', 'Callback requested via hero quick-form.');
      // FormSubmit config fields
      payload.append('_subject', `Callback Request from ${formData.name} — Trademark Secure Co.`);
      payload.append('_template', 'table');
      payload.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/ajax/Gargijoshilegal@gmail.com', {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });

      const data = await response.json();

      if (response.ok && data.success === 'true') {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', phone: '', email: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to submit. Please check your connection and try again.',
      });
    }
  };


  return (
    <div className="bg-gray-50 text-gray-800 antialiased selection:bg-secondary selection:text-white overflow-x-hidden w-full" id="top">
      
      {/* Navbar exactly from index7.html */}
      {/* Navbar exactly from index7.html */}
      <nav className="fixed w-full z-50 glass-effect border-b border-gray-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 80" className="h-10 md:h-12 w-auto">
                <rect x="0" y="0" width="80" height="80" fill="#0f2247" />
                <rect x="0" y="0" width="80" height="10" fill="#c5a059" />
                <rect x="0" y="70" width="80" height="10" fill="#c5a059" />
                <text x="40" y="54" fontFamily="'Playfair Display', serif" fontSize="42" fontWeight="700" fill="#ffffff" textAnchor="middle">TS</text>
                <text x="95" y="40" fontFamily="'Playfair Display', serif" fontSize="34" fontWeight="800" fill="#0f2247" letterSpacing="1">TRADEMARK</text>
                <line x1="95" y1="48" x2="340" y2="48" stroke="#c5a059" strokeWidth="2.5" />
                <text x="135" y="70" fontFamily="'Playfair Display', serif" fontSize="18" fill="#0f2247" letterSpacing="3">SECURE CO.</text>
              </svg>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-secondary font-medium transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Services</a>
              <a href="#difference" className="text-gray-600 hover:text-secondary font-medium transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Why Us</a>
              <a href="#testimonials" className="text-gray-600 hover:text-secondary font-medium transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-full after:transition-all after:duration-300">Reviews</a>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://wa.me/91890576656" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-green-600 font-semibold transition duration-300 hover:scale-105">
                <i className="fa-brands fa-whatsapp text-xl text-green-500"></i> 890576656
              </a>
              <a href="#contact" className="bg-primary hover:bg-secondary hover:scale-105 active:scale-95 text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg shadow-primary/20 hover:shadow-secondary/20">
                Get Started
              </a>
              
              {/* Mobile hamburger menu toggle */}
              <button 
                onClick={() => setNavOpen(!navOpen)} 
                className="md:hidden text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg p-1 transition"
              >
                {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {navOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white shadow-lg duration-200 animate-fadeIn">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <a href="#services" onClick={() => setNavOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 transition">Services</a>
              <a href="#difference" onClick={() => setNavOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 transition">Why Us</a>
              <a href="#testimonials" onClick={() => setNavOpen(false)} className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 transition">Reviews</a>
              <div className="border-t border-gray-100 my-2 pt-2 px-3 flex flex-col gap-3">
                <a href="https://wa.me/91890576656" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-green-600 font-semibold transition">
                  <i className="fa-brands fa-whatsapp text-xl text-green-500"></i> +91 890576656
                </a>
                <a href="#contact" onClick={() => setNavOpen(false)} className="block text-center bg-primary hover:bg-secondary text-white px-4 py-2.5 rounded-full font-medium shadow-md transition">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Quick Contact Form */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Copy */}
            <div className="text-left animate-fadeInUp">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/45 text-secondary text-sm font-semibold tracking-wide animate-float">
                <i className="fa-solid fa-magnifying-glass mr-1"></i> Free Trademark Search & Consultation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Seamless Online <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#ebd7ae] to-[#a67c22]">Trademark Registration.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IP Protection. Expert Legal Support with 100% Transparent Pricing. Handled by Experienced Trademark Attorneys.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="bg-secondary hover:bg-accent text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2">
                  Explore Services <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Right Side: Short Form */}
            <div className="perspective-1000 w-full max-w-md ml-auto">
              <div className="bg-[#0b1a36]/90 backdrop-blur-md p-6 lg:p-8 rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden card-3d">
                <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
                <p className="text-gray-300 mb-6 text-sm">Drop your details below for a free consultation.</p>
                
                {status.success ? (
                  <div className="bg-white/10 border border-green-500/30 text-white p-6 rounded-2xl text-center space-y-4 animate-fadeIn">
                    <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto text-xl">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h4 className="text-lg font-bold">Request Submitted!</h4>
                    <p className="text-sm text-gray-300">We have received your details. An IP expert will call you shortly.</p>
                    <button 
                      onClick={() => setStatus(prev => ({ ...prev, success: false }))}
                      className="mt-2 px-4 py-1.5 bg-secondary hover:bg-accent text-white text-xs rounded-lg transition font-medium"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 relative z-10">
                    {status.error && (
                      <div className="bg-red-500/10 border border-red-500/30 text-red-200 px-3 py-2 rounded-xl text-xs flex gap-2 items-center">
                        <i className="fa-solid fa-circle-exclamation text-red-400"></i>
                        <span>{status.error}</span>
                      </div>
                    )}

                    <input 
                      type="text" 
                      name="Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-[#173062] bg-[#0f2247]/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition duration-300" 
                      placeholder="Full Name *" 
                    />
                    
                    <input 
                      type="tel" 
                      name="Phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-[#173062] bg-[#0f2247]/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition duration-300" 
                      placeholder="Phone / WhatsApp *" 
                    />
                    
                    <input 
                      type="email" 
                      name="Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-[#173062] bg-[#0f2247]/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition duration-300" 
                      placeholder="Email Address *" 
                    />
                    
                    <button 
                      type="submit" 
                      disabled={status.submitting}
                      className="w-full bg-secondary hover:bg-accent hover:scale-103 active:scale-97 text-white font-bold py-3.5 px-4 rounded-xl transition duration-300 shadow-lg mt-2 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status.submitting ? 'Submitting...' : 'Request Callback'}
                      {!status.submitting && <i className="fa-solid fa-paper-plane text-sm"></i>}
                    </button>
                  </form>
                )}
                <p className="text-xs text-gray-400 mt-4 text-center"><i className="fa-solid fa-lock text-gray-400 mr-1"></i> 100% Secure & Confidential</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">End-to-end legal solutions to safeguard your intellectual property.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8 perspective-1000">
            {/* Trademark */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm card-3d relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <i className="fa-solid fa-trademark text-9xl text-primary"></i>
              </div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-tag text-secondary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Trademark Registration</h3>
              <p className="text-gray-600 mb-6">Protect your brand identity, logos, and slogans. Ensure exclusive rights to your business name.</p>
            </div>

            {/* Copyright */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm card-3d relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <i className="fa-solid fa-copyright text-9xl text-primary"></i>
              </div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-book text-secondary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Copyright Registration</h3>
              <p className="text-gray-600 mb-6">Protect your original expressions of ideas, software code, literature, and creative content.</p>
            </div>

            {/* Design */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/60 shadow-sm card-3d relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <i className="fa-solid fa-pen-nib text-9xl text-primary"></i>
              </div>
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-object-group text-secondary text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Design Registration</h3>
              <p className="text-gray-600 mb-6">Protect the visual appearance, shape, and aesthetic of your products from copycats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference / Comparison Section */}
      <section id="difference" className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Trademark Secure Co.?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We prioritize precision and transparency. See how we compare against standard volume-based agencies.</p>
          </div>

          <div className="max-w-5xl mx-auto perspective-1000 overflow-x-auto pb-4 scrollbar-thin">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200/80 card-3d min-w-[640px] overflow-hidden">
              <div className="grid grid-cols-3 bg-primary text-white p-6 font-semibold items-center">
                <div className="col-span-1 text-lg">Feature</div>
                <div className="col-span-1 text-center text-slate-400">Standard Agencies</div>
                <div className="col-span-1 text-center text-secondary text-lg md:text-xl font-bold">Trademark Secure Co.</div>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-3 p-6 items-center hover:bg-gray-50/80 transition">
                  <div className="col-span-1 font-medium text-gray-800">Application Handled By</div>
                  <div className="col-span-1 text-center text-gray-500"><i className="fa-solid fa-robot text-gray-400 block mb-1"></i> Support Staff / Bots</div>
                  <div className="col-span-1 text-center font-bold text-green-700 bg-green-50 p-3 rounded-xl border border-green-200"><i className="fa-solid fa-user-tie text-green-600 block mb-1"></i> Experienced IP Attorneys</div>
                </div>
                <div className="grid grid-cols-3 p-6 items-center hover:bg-gray-50/80 transition">
                  <div className="col-span-1 font-medium text-gray-800">Pricing Structure</div>
                  <div className="col-span-1 text-center text-gray-500"><i className="fa-solid fa-triangle-exclamation text-red-400 block mb-1"></i> Hidden Fees for Objections</div>
                  <div className="col-span-1 text-center font-bold text-green-700 bg-green-50 p-3 rounded-xl border border-green-200"><i className="fa-solid fa-circle-check text-green-600 block mb-1"></i> 100% Transparent Flat-Rates</div>
                </div>
                <div className="grid grid-cols-3 p-6 items-center hover:bg-gray-50/80 transition">
                  <div className="col-span-1 font-medium text-gray-800">Client Support</div>
                  <div className="col-span-1 text-center text-gray-500"><i className="fa-solid fa-headset text-gray-400 block mb-1"></i> Automated Ticket Systems</div>
                  <div className="col-span-1 text-center font-bold text-green-700 bg-green-50 p-3 rounded-xl border border-green-200"><i className="fa-brands fa-whatsapp text-green-600 block mb-1"></i> Direct Attorney Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Trusted by Growing Brands</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto perspective-1000">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100/80 text-left card-3d shadow-sm">
              <div className="flex text-secondary mb-4">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-600 italic mb-6">"Other agencies quoted me low upfront, but then asked for thousands when an objection came. Trademark Secure handled everything transparently. Highly recommended."</p>
              <p className="font-bold text-primary">- Rahul S., Tech Startup Founder</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100/80 text-left card-3d shadow-sm">
              <div className="flex text-secondary mb-4">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-600 italic mb-6">"Having a direct WhatsApp line to the actual attorney filing my application gave me immense peace of mind. Fast, professional, and zero hidden costs."</p>
              <p className="font-bold text-primary">- Priya K., E-commerce Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section id="contact" className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to secure your intellectual property?</h2>
          <p className="text-lg text-gray-600 mb-10">Speak directly to our operations team to initiate your filing today. No automated bots, just direct expert assistance.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 perspective-1000">
            {/* WhatsApp */}
            <div className="bg-white border border-gray-200/80 p-4 sm:p-6 rounded-2xl flex items-center gap-3 sm:gap-4 card-3d shadow-sm w-full sm:w-auto text-left overflow-hidden">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <i className="fa-brands fa-whatsapp text-2xl text-green-600"></i>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-500">WhatsApp / Call Us</p>
                <a href="https://wa.me/91890576656" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-bold text-primary hover:text-green-600 transition duration-300 break-words">+91 890576656</a>
              </div>
            </div>
            {/* Email */}
            <div className="bg-white border border-gray-200/80 p-4 sm:p-6 rounded-2xl flex items-center gap-3 sm:gap-4 card-3d shadow-sm w-full sm:w-auto text-left overflow-hidden">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                <i className="fa-solid fa-envelope text-xl text-secondary"></i>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-500">Email Us</p>
                <a href="mailto:contact@trademarksecure.co.in" className="text-sm sm:text-lg md:text-xl font-bold text-primary hover:text-secondary transition duration-300 break-all">contact@trademarksecure.co.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer exactly from index7.html */}
      <footer className="bg-[#050e1f] border-t border-[#0d1f40] py-12 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#0d1f40]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 80" className="h-10 w-auto opacity-90">
                  <rect x="0" y="0" width="80" height="80" fill="#0f2247" />
                  <rect x="0" y="0" width="80" height="10" fill="#c5a059" />
                  <rect x="0" y="70" width="80" height="10" fill="#c5a059" />
                  <text x="40" y="54" fontFamily="'Playfair Display', serif" fontSize="42" fontWeight="700" fill="#ffffff" textAnchor="middle">TS</text>
                  <text x="95" y="40" fontFamily="'Playfair Display', serif" fontSize="34" fontWeight="800" fill="#ffffff" letterSpacing="1">TRADEMARK</text>
                  <line x1="95" y1="48" x2="340" y2="48" stroke="#c5a059" strokeWidth="2.5" />
                  <text x="135" y="70" fontFamily="'Playfair Display', serif" fontSize="18" fill="#cbd5e1" letterSpacing="3">SECURE CO.</text>
                </svg>
              </div>
              <p className="text-sm max-w-md mt-4">Premium Intellectual Property Services. Protecting your creative and assets.</p>
            </div>
            <div className="md:text-right pt-4 md:pt-0">
              <p className="text-sm mb-1"><i className="fa-solid fa-location-dot mr-2 text-secondary"></i> Palam Vihar, Gurugram, Haryana - 122001</p>
              <p className="text-xs text-gray-500 mb-3">Locations: Indore | Ahmedabad | Pratapgarh (Rajasthan)</p>
              <p className="text-sm"><i className="fa-solid fa-phone mr-2 text-secondary"></i> +91 890576656</p>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 space-y-4">
            <p><strong>Disclaimer:</strong> This platform provides consultancy solutions. All formal intellectual property filings, prosecution are executed exclusively by independent registered IP Agents and Advocates in compliance with the Bar Council of India regulations.</p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-[#0d1f40]">
              <p>&copy; {new Date().getFullYear()} Trademark Secure Co. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Index7Page;
