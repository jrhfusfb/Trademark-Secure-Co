import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Index8Page = () => {
  useEffect(() => {
    document.title = "Trademark Registration India – Starting ₹1,499 | Trademark Secure Co.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Register your trademark in India with expert IP attorneys. Flat-rate pricing from ₹1,499 + Govt fees. Free trademark search & consultation. Get TM protection from Day 1. Call now!');
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name.toLowerCase()]: value }));
  };

  const handleServiceChange = (e) => {
    setFormData((prev) => ({ ...prev, service: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // Build FormData with descriptive labels so the received email is structured
      const payload = new FormData();
      payload.append('Full Name', formData.name);
      payload.append('Phone / WhatsApp', formData.phone);
      payload.append('Email Address', formData.email);
      payload.append('Service Required', formData.service);
      payload.append('Message', formData.message || 'N/A');
      // FormSubmit config fields
      payload.append('_subject', `New Consultation Request from ${formData.name} — Trademark Secure Co.`);
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
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: '',
        });
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/45 text-secondary text-sm font-semibold tracking-wide animate-float">
              <i className="fa-solid fa-magnifying-glass mr-1"></i> Free Trademark Search & Consultation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Your One Stop <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-[#ebd7ae] to-[#a67c22]">Trademark Solution Provider</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Protect Your Brand <br /> Secure Your Legacy
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#pricing" className="bg-secondary hover:bg-accent text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20 flex items-center justify-center gap-2">
                View Packages <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="https://wa.me/918905766456" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-green-400 text-xl"></i> Free Consultation
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-400"><i className="fa-solid fa-shield-halved text-secondary mr-1"></i> Handled exclusively by expert IP Attorneys.</p>
          </div>
        </div>
      </section>

      {/* Difference / Comparison Section */}
      <section id="difference" className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Trademark Secure Co.?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We prioritize precision and transparency. See how we are different from other agencies</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto pb-4 scrollbar-thin">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200/80 min-w-[640px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-gray-300/80">
              <div className="grid grid-cols-3 bg-primary text-white p-6 font-semibold items-center">
                <div className="col-span-1 text-lg">Feature</div>
                <div className="col-span-1 text-center text-slate-400">Other Agencies</div>
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

      {/* Pricing Cards Section */}
      <section id="pricing" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent <span className="text-secondary">No-Surprise</span> Pricing</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Choose the protection level you need. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch perspective-1000">
            {/* Basic Filing Pricing */}
            <div className="bg-[#0b1a36]/80 rounded-3xl p-8 border border-slate-700/60 hover:border-secondary transition-all duration-300 flex flex-col card-3d shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Basic Filing</h3>
              <p className="text-slate-400 mb-6 border-b border-slate-700/60 pb-6 text-sm">Perfect for straightforward applications with minimal risk of opposition.</p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">₹1,499</span>
                  <span className="text-slate-400 text-sm">+ Govt Fees</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 text-slate-300 flex-grow">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Trademark Search</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Class Selection</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Drafting & Filing of Application</li>
                <li className="flex items-start gap-2 text-slate-500"><i className="fa-solid fa-xmark mt-1"></i> <span className="line-through">Drafting & Filing Reply to Registry’s Objection (if any)</span></li>
                <li className="flex items-start gap-2 text-slate-500"><i className="fa-solid fa-xmark mt-1"></i> <span className="line-through">Hearing</span></li>
              </ul>
              
              <a href="#contact" className="block w-full text-center bg-[#173062] hover:bg-[#1a3461] text-white font-bold py-3 rounded-xl transition duration-300 hover:scale-102 active:scale-98">Select Basic</a>
            </div>

            {/* Comprehensive Protection Pricing */}
            <div className="bg-[#0f2247] rounded-3xl p-8 border-2 border-secondary flex flex-col card-3d-highlight relative shadow-2xl animate-float-slow transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg rounded-tr-3xl uppercase tracking-wide">Most Popular</div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-3 text-secondary text-xs font-bold tracking-widest uppercase border border-secondary rounded-full">End-to-End Shield</div>
              <h3 className="text-2xl font-bold mb-2">Comprehensive Shield</h3>
              <p className="text-slate-300 mb-6 border-b border-slate-700/60 pb-6 text-sm">Complete peace of mind. Covers your application from filing until registration.</p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-secondary animate-pulse-glow rounded px-1">₹3,999</span>
                  <span className="text-slate-400 text-sm">+ Govt Fees</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 text-slate-200 flex-grow">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Trademark Search</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Class Selection</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Drafting & Filing of Application</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Drafting & Filing Reply to Registry’s Objection (if any)</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Hearing Attendance by Advocate</li>
              </ul>
              
              <a href="#contact" className="block w-full text-center bg-secondary hover:bg-accent text-white font-bold py-3.5 rounded-xl transition duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-secondary/25">Secure My Brand</a>
            </div>

            {/* IP Rescue Pricing */}
            <div className="bg-[#0b1a36]/80 rounded-3xl p-8 border border-slate-700/60 hover:border-secondary transition-all duration-300 flex flex-col card-3d shadow-xl">
              <h3 className="text-2xl font-bold mb-2">IP Rescue & Support</h3>
              <p className="text-slate-400 mb-6 border-b border-slate-700/60 pb-6 text-sm">Did another agency or bot mess up your application? We will fix it.</p>
              
              <div className="mb-6 space-y-2">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">₹2,999</span>
                  <span className="text-slate-400 text-sm">+ Govt Fees</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 text-slate-300 flex-grow">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Takeover of Existing Application</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Strategy Review by IP Advocate</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Drafting & Filing of Application</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Drafting & Filing Reply to Registry’s Objection (if any)</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-1"></i> Hearing Attendance by Advocate</li>
              </ul>
              
              <a href="#contact" className="block w-full text-center bg-[#173062] hover:bg-[#1a3461] text-white font-bold py-3 rounded-xl transition duration-300 hover:scale-102 active:scale-98">Select IP Rescue</a>
            </div>

          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-semibold tracking-wide">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Full-Spectrum <span className="text-secondary">IP Protection</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From filing to registration and beyond - we cover every stage of your intellectual property journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Trademark Services Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-6 border border-primary/15">
                <i className="fa-solid fa-tag text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Trademark Services</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Protect your brand identity from end-to-end. We manage the entire lifecycle of your trademarks globally.</p>
              <ul className="space-y-2.5 text-sm text-gray-700 flex-grow">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Trademark Registration</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Reply to Examination Objection</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Show Cause Hearing</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Trademark Opposition</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Trademark Renewal</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Rectification / Cancellation</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Assignment &amp; Licensing</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> International Trademark Registration</li>
              </ul>
            </div>

            {/* Copyright Services Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/25">
                <i className="fa-solid fa-copyright text-2xl text-secondary"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Copyright Services</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Safeguard your original works of authorship, from software code and literature to music and visual arts.</p>
              <ul className="space-y-2.5 text-sm text-gray-700 flex-grow">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Copyright Registration</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Discrepancy &amp; Objection Reply</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Copyright Hearing</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Software &amp; Code Protection</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Assignment &amp; Licensing</li>

                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Take-down Notices (DMCA)</li>
              </ul>
            </div>

            {/* Design Services Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-6 border border-primary/15">
                <i className="fa-solid fa-cube text-2xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Design Services</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Secure the unique visual appearance, shape, and configuration of your commercial products.</p>
              <ul className="space-y-2.5 text-sm text-gray-700 flex-grow">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Design Search &amp; Clearance</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Design Registration &amp; Filing</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Objection Reply &amp; Hearing</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Renewal of Design</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Cancellation Proceedings</li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-secondary mt-0.5 shrink-0"></i> Assignment &amp; Licensing</li>

              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Register Your Trademark Now. Secure Your Brand!</h2>
              <p className="text-lg text-gray-600 mb-10">Speak directly to our legal expert or fill out the form to initiate your filing today. No automated bots, just direct expert assistance.</p>
              
              <div className="space-y-6 perspective-1000">
                {/* WhatsApp */}
                <div className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-2xl flex items-center gap-3 sm:gap-4 card-3d shadow-sm overflow-hidden">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-brands fa-whatsapp text-2xl text-green-600"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500">WhatsApp / Call Us</p>
                    <a href="https://wa.me/918905766456" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-bold text-primary hover:text-green-600 transition duration-300 break-words">+91 8905766456</a>
                  </div>
                </div>
                {/* Email */}
                <div className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-2xl flex items-center gap-3 sm:gap-4 card-3d shadow-sm overflow-hidden">
                  <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-envelope text-xl text-secondary"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500">Email Us</p>
                    <a href="mailto:contact@trademarksecure.co.in" className="text-sm sm:text-lg md:text-xl font-bold text-primary hover:text-secondary transition duration-300 break-all">contact@trademarksecure.co.in</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="perspective-1000">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden card-3d">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-5 rounded-bl-full pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-primary mb-6">Get Free Expert Consultation</h3>
                
                {status.success ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h4 className="text-xl font-bold">Thank You!</h4>
                    <p>Your consultation request has been successfully submitted. Our expert IP attorneys will get back to you shortly.</p>
                    <button 
                      onClick={() => setStatus(prev => ({ ...prev, success: false }))}
                      className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    {status.error && (
                      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-sm flex gap-2 items-center">
                        <i className="fa-solid fa-circle-exclamation text-red-500"></i>
                        <span>{status.error}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition duration-300" 
                        placeholder="Enter your name" 
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp <span className="text-red-500">*</span></label>
                        <input 
                          type="tel" 
                          name="Phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition duration-300" 
                          placeholder="+91 XXXXX XXXXX" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                        <input 
                          type="email" 
                          name="Email" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition duration-300" 
                          placeholder="you@company.com" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                      <select 
                        name="Service" 
                        value={formData.service}
                        onChange={handleServiceChange}
                        required 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition bg-white duration-300"
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="Trademark">Trademark Registration</option>
                        <option value="Copyright">Copyright Registration</option>
                        <option value="Design">Design Registration</option>
                        <option value="Prosecution">IP Prosecution (Objections/Hearings)</option>

                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                      <textarea 
                        name="Message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows="3" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition duration-300" 
                        placeholder="Tell us a bit about your brand or requirement..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={status.submitting}
                      className="w-full bg-primary hover:bg-secondary hover:scale-103 active:scale-97 text-white font-bold py-3.5 px-4 rounded-xl transition duration-300 shadow-lg hover:shadow-primary/20 flex justify-center items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {status.submitting ? 'Submitting...' : 'Submit Request'}
                      {!status.submitting && <i className="fa-solid fa-paper-plane text-sm"></i>}
                    </button>
                  </form>
                )}
                <p className="text-xs text-gray-400 mt-4 text-center"><i className="fa-solid fa-lock text-gray-300 mr-1"></i> Your details are secure. We do not share your data.</p>
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
              <p className="text-gray-600 italic mb-6">"Excellent, efficient, and thoroughly professional trademark registration services. The team at Trademark Secure Co. made the entire filing process seamless and stress-free. Highly recommended for anyone looking to secure their brand identity!"</p>
              <p className="font-bold text-primary">- Mr. Pratik Porwal</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100/80 text-left card-3d shadow-sm">
              <div className="flex text-secondary mb-4">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-600 italic mb-6">"I recently registered my trademark for which I used the services of Trademark Secure and had a very good experience. The team was responsive, explained the process very clearly, and kept me informed about the status of my application. I appreciated the transparent communication and timely assistance whenever I had questions. Overall, the process was smooth and professional which made the trademark registration process hassle free."</p>
              <p className="font-bold text-primary">- Mr. Mrinal Jain</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-gray-600">Got questions? We have answers. If you don't find what you are looking for, contact us.</p>
          </div>

          <div className="space-y-4 perspective-1000">
            {[
              {
                question: "Can I use the ™ symbol immediately?",
                answer: "Yes, you can start using the ™ (Trademark) symbol next to your brand name or logo immediately after your application is filed with the IP Registry. The ® (Registered) symbol can only be used once the trademark is officially registered and the registration certificate is issued."
              },
              {
                question: "How long does the trademark registration process take?",
                answer: "It usually takes 6-12 months, but you get the protection upon filing."
              },
              {
                question: "What is the Government Fees?",
                answer: "The government fees vary, but we guide you through it transparently."
              },
              {
                question: "How long is a trademark registration valid?",
                answer: "Once registered, a trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by paying the renewal fee."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden card-3d shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 font-semibold text-lg text-primary flex justify-between items-center transition hover:bg-gray-50 focus:outline-none"
                >
                  <span className="font-serif">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-secondary' : 'text-gray-400'}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-[500px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 py-5 text-gray-600 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index8Page;
