"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  MessageCircle,
  Menu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Wind,
  Leaf,
  Lightbulb,
  Phone,
  Instagram,
  Check,
  ArrowUpRight,
  X,
  Sun,
  Moon
} from "lucide-react";

const PRODUCTS = [
  {
    id: 'stretch',
    tab: 'Stretch Ceilings',
    title: 'Stretch Ceilings',
    desc: 'The classic done properly: a perfectly smooth membrane with no seams or joins. Matte, gloss and satin finishes to suit any interior.',
    features: ['150+ membrane shades', 'Fitted in 3–5 hours', 'Perfectly level finish', 'Won\'t yellow or warp over time'],
    price: 'From £45/m²',
    img: '/images/stretch.jpg',
  },
  {
    id: 'lighting',
    tab: 'Lighting Ceilings',
    title: 'Lighting Ceilings',
    desc: 'A ceiling that lights the room from within: concealed LED lines trace the geometry of the space, and a floating edge gives the whole structure a weightless feel.',
    features: ['Dimmable warm-white or RGB', 'Floating edge & linear light', 'LED strip rated for 15+ years', 'Controlled from your phone'],
    price: 'From £110/m²',
    img: '/images/lighting.jpg',
  },
  {
    id: 'acoustic',
    tab: 'Acoustic Ceilings',
    title: 'Acoustic Ceilings',
    desc: 'Quiet, built in: an acoustic membrane absorbs echo and outside noise while looking indistinguishable from a premium matte ceiling.',
    features: ['Reduces noise by up to 30%', 'Ideal for home cinemas & studies', 'Hypoallergenic materials', 'Same premium appearance'],
    price: 'From £145/m²',
    img: '/images/acoustic.jpg',
  },
  {
    id: 'sail',
    tab: 'Ceiling Sail',
    title: 'Ceiling Sail',
    desc: 'Sculptural curves where a flat ceiling simply can\'t compete. A multi-level fabric sail turns your ceiling into an architectural feature.',
    features: ['Bespoke shape and curvature', 'Sail-effect fabric finish', 'Illumination built into the folds', 'Suited to lofts & high ceilings'],
    price: 'From £240/m²',
    img: '/images/sail.jpg',
  },
];

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(PRODUCTS[0].id);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  // Day/Night mode state
  const [isNightMode, setIsNightMode] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dropdownRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !location || !phone) return;
    setFormSubmitted(true);
  };

  // Set the current year client-side
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Handle clicking outside to close the desktop products dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectProductFromMenu = (productId) => {
    setActiveProduct(productId);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    
    // Smooth scroll to catalog
    const catalogSection = document.getElementById("catalog");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeProductData = PRODUCTS.find((p) => p.id === activeProduct);

  return (
    <>
      {/* ============ HEADER ============ */}
      <header id="site-header" class="fixed top-0 inset-x-0 z-50 bg-mist/85 backdrop-blur-md border-b border-ink/5">
        <div class="max-w-7xl mx-auto px-6 md:px-10">
          <div class="flex items-center justify-between h-24">

            {/* Logo */}
            <a href="#top" class="flex items-center gap-2.5 leading-none group">
              <span class="w-2.5 h-2.5 rounded-full bg-blue"></span>
              <span class="font-display font-semibold text-2xl tracking-tight">Aura</span>
            </a>

            {/* Desktop nav */}
            <nav class="hidden lg:flex items-center gap-12 font-medium text-[15px]">
              <a href="#top" class="hover:text-blue transition-colors">Home</a>
              <div class="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  class="flex items-center gap-1.5 hover:text-blue transition-colors"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div
                  className={`dropdown-panel absolute left-1/2 -translate-x-1/2 top-full mt-5 w-72 bg-card rounded-2xl shadow-xl shadow-ink/10 border border-ink/5 p-2 transition-all duration-200 ${
                    dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {PRODUCTS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => selectProductFromMenu(p.id)}
                      class="w-full text-left px-4 py-3 rounded-xl hover:bg-blue-light flex items-center justify-between group"
                    >
                      <span class="font-medium">{p.tab}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-blue transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
              <a href="#benefits" class="hover:text-blue transition-colors">Our Benefits</a>
              <a href="#contact" class="hover:text-blue transition-colors">Contact Us</a>
            </nav>

            {/* Right: contacts */}
            <div class="hidden md:flex items-center gap-6">
              <a href="tel:+442079460192" class="font-display text-lg font-semibold tracking-tight hover:text-blue transition-colors">
                +44 20 7946 0192
              </a>
              <a
                href="https://wa.me/442079460192"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-glow flex items-center justify-center w-11 h-11 rounded-full bg-blue text-white hover:bg-blue-dark"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              class="lg:hidden flex items-center justify-center w-10 h-10"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden border-t border-ink/5 bg-mist transition-all duration-350 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div class="px-6 py-6 flex flex-col gap-1">
            <a href="#top" onClick={() => setMobileMenuOpen(false)} class="py-3.5 font-medium border-b border-ink/5">Home</a>
            
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              class="flex items-center justify-between py-3.5 font-medium border-b border-ink/5"
              aria-expanded={mobileProductsOpen}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`pl-3 flex flex-col ${mobileProductsOpen ? 'block' : 'hidden'}`}>
              {PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => selectProductFromMenu(p.id)}
                  class="text-left py-2.5 text-ink/70 border-b border-ink/5 last:border-0"
                >
                  {p.tab}
                </button>
              ))}
            </div>

            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} class="py-3.5 font-medium border-b border-ink/5">Our Benefits</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} class="py-3.5 font-medium border-b border-ink/5">Contact Us</a>
            
            <div class="flex items-center justify-between pt-6">
              <a href="tel:+442079460192" class="font-display text-lg font-semibold">+44 20 7946 0192</a>
              <a
                href="https://wa.me/442079460192"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-11 h-11 rounded-full bg-blue text-white"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="top">

        {/* ============ HERO ============ */}
        <section class="relative pt-48 pb-28 md:pt-60 md:pb-40 px-6 md:px-10 overflow-hidden bg-mist">
          <div class="absolute -top-24 right-[-10%] w-[560px] h-[560px] glow-orb rounded-full pointer-events-none"></div>

          <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-14 items-center relative">
            <div>
              <span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue mb-7">
                <span class="w-2 h-2 rounded-full bg-blue"></span> Bespoke Ceilings, Installed UK-Wide
              </span>
              <h1 class="font-display text-[2.5rem] leading-[1.12] md:text-6xl md:leading-[1.08] font-semibold tracking-tight">
                Elevate Your Space: bespoke ceiling solutions across the UK
              </h1>
              <p class="mt-7 text-lg text-ink/65 max-w-lg leading-relaxed">
                Flawless stretch &amp; integrated lighting ceilings installed in 1 day. No dust, no mess, premium certified materials.
              </p>

              <div class="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contact" class="btn-primary group inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-full tracking-wide">
                  Calculate Your Price (1-Min Quiz)
                  <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/442079460192" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 border border-ink/20 hover:border-blue hover:text-blue font-semibold px-7 py-4 rounded-full transition-colors">
                  Chat on WhatsApp
                </a>
              </div>

              <div class="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink/55">
                <div class="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue" /> Fixed quote, no hidden costs</div>
                <div class="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue" /> Free home survey</div>
              </div>
            </div>

            <div>
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl shadow-ink/10 border border-white h-[380px] md:h-[480px] select-none">
                {/* Day Image */}
                <img
                  src="/images/hero.jpg"
                  alt="Bright modern living room with an integrated lighting ceiling (Day)"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    isNightMode ? "opacity-0" : "opacity-100"
                  }`}
                  draggable="false"
                />

                {/* Night Image */}
                <img
                  src="/images/hero_night.jpg"
                  alt="Bright modern living room with an integrated lighting ceiling (Night)"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    isNightMode ? "opacity-100" : "opacity-0"
                  }`}
                  draggable="false"
                />

                {/* English Dual Toggle Control (Top-Right overlay) */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md p-1 rounded-full flex gap-1 z-10 shadow-lg border border-ink/5">
                  <button
                    type="button"
                    onClick={() => setIsNightMode(false)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                      !isNightMode
                        ? "bg-blue text-white shadow-sm"
                        : "text-ink/65 hover:text-ink hover:bg-ink/5"
                    }`}
                  >
                    <Sun className={`w-4 h-4 ${!isNightMode ? "text-white fill-white" : "text-orange-500"}`} />
                    <span>Day</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsNightMode(true)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                      isNightMode
                        ? "bg-blue text-white shadow-sm"
                        : "text-ink/65 hover:text-ink hover:bg-ink/5"
                    }`}
                  >
                    <Moon className={`w-4 h-4 ${isNightMode ? "text-white fill-white" : "text-indigo-500"}`} />
                    <span>Night</span>
                  </button>
                </div>

                {/* English Label Overlay at bottom-left */}
                <div className="absolute bottom-5 left-5 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-semibold z-10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
                  <span>{isNightMode ? "Night Lighting Active" : "Daylight Mode"}</span>
                </div>
              </div>

              <div class="mt-5 flex flex-wrap items-center gap-x-8 gap-y-5 bg-white rounded-2xl shadow-lg shadow-ink/5 border border-ink/5 px-7 py-6">
                <div class="flex items-center gap-3.5">
                  <div class="w-10 h-10 shrink-0 rounded-full bg-blue-light flex items-center justify-center">
                    <Sparkles className="w-4.5 h-4.5 text-blue" />
                  </div>
                  <div class="leading-tight whitespace-nowrap">
                    <p class="text-sm font-semibold">1-Day Install</p>
                    <p class="text-xs text-ink/50">Certified &amp; insured</p>
                  </div>
                </div>
                <div class="hidden sm:block h-9 w-px bg-ink/10"></div>
                <div class="flex items-center gap-3.5">
                  <div class="w-10 h-10 shrink-0 rounded-full bg-blue-light flex items-center justify-center">
                    <ShieldCheck className="w-4.5 h-4.5 text-blue" />
                  </div>
                  <div class="leading-tight whitespace-nowrap">
                    <p class="text-sm font-semibold">10-Year Warranty</p>
                    <p class="text-xs text-ink/50">Insurance-backed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CATALOG (TABS) ============ */}
        <section id="catalog" class="anchor-target py-28 md:py-36 px-6 md:px-10 bg-white">
          <div class="max-w-7xl mx-auto">
            <div class="max-w-xl mb-14">
              <span class="text-xs font-semibold tracking-[0.2em] uppercase text-blue">Our Solutions</span>
              <h2 class="font-display text-4xl md:text-[2.75rem] font-semibold tracking-tight mt-4">Modern Ceiling Systems</h2>
              <p class="mt-5 text-ink/60 leading-relaxed">Four systems, one outcome: a ceiling that finishes the room, rather than one you simply stop noticing.</p>
            </div>

            {/* Tabs */}
            <div id="tabs-row" class="flex flex-wrap gap-3 mb-11" role="tablist">
              {PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  role="tab"
                  onClick={() => setActiveProduct(p.id)}
                  data-active={p.id === activeProduct}
                  class="tab-btn px-5 py-2.5 rounded-full text-sm font-semibold border border-ink/10 transition-all duration-350"
                >
                  {p.tab}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div id="product-panel">
              {activeProductData && (
                <div className="panel-fade grid lg:grid-cols-2 gap-12 items-center bg-mist rounded-3xl p-7 md:p-11 border border-ink/5">
                  <div class="order-2 lg:order-1">
                    <h3 class="font-display text-3xl font-semibold mb-4">{activeProductData.title}</h3>
                    <p class="text-ink/65 leading-relaxed mb-7">{activeProductData.desc}</p>
                    <ul class="space-y-3.5 mb-9">
                      {activeProductData.features.map((f, idx) => (
                        <li key={idx} class="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 mt-0.5 text-blue shrink-0" />
                          <span class="text-ink/75">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div class="flex items-center flex-wrap gap-6">
                      <span class="font-display text-2xl font-semibold">{activeProductData.price}</span>
                      <a
                        href={`https://wa.me/442079460192?text=Hi,%20I'd%20like%20a%20quote%20for%20${encodeURIComponent(activeProductData.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-primary inline-flex items-center gap-2 text-white font-semibold px-6 py-3.5 rounded-full tracking-wide"
                      >
                        Enquire via WhatsApp
                      </a>
                    </div>
                  </div>
                  <div class="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl shadow-ink/10 border border-white">
                    <img
                      src={activeProductData.img}
                      alt={`${activeProductData.title} — example interior`}
                      class="w-full h-72 md:h-96 object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============ BENEFITS ============ */}
        <section id="benefits" class="anchor-target py-28 md:py-36 px-6 md:px-10 bg-mist">
          <div class="max-w-7xl mx-auto">
            <div class="max-w-xl mb-16">
              <span class="text-xs font-semibold tracking-[0.2em] uppercase text-blue">Our Benefits</span>
              <h2 class="font-display text-4xl md:text-[2.75rem] font-semibold tracking-tight mt-4">No dust, no surprises, no chasing us up</h2>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="hover-lift bg-white rounded-2xl p-8 border border-ink/5">
                <div class="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-6">
                  <Wind className="w-6 h-6 text-blue" />
                </div>
                <h3 class="font-display text-xl font-semibold mb-2.5">Dust-Free Installation</h3>
                <p class="text-sm text-ink/60 leading-relaxed">Every fit uses advanced vacuum extraction, so your furniture, floors and walls stay exactly as we found them.</p>
              </div>

              <div class="hover-lift bg-white rounded-2xl p-8 border border-ink/5">
                <div class="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue" />
                </div>
                <h3 class="font-display text-xl font-semibold mb-2.5">10-Year Warranty</h3>
                <p class="text-sm text-ink/60 leading-relaxed">An insurance-backed guarantee on materials and workmanship, confirmed in writing before any work begins.</p>
              </div>

              <div class="hover-lift bg-white rounded-2xl p-8 border border-ink/5">
                <div class="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-6">
                  <Leaf className="w-6 h-6 text-blue" />
                </div>
                <h3 class="font-display text-xl font-semibold mb-2.5">Eco-Friendly Materials</h3>
                <p class="text-sm text-ink/60 leading-relaxed">Certified, non-toxic, A+ rated membranes — safe for bedrooms, nurseries and anyone with allergies.</p>
              </div>

              <div class="hover-lift bg-white rounded-2xl p-8 border border-ink/5">
                <div class="w-12 h-12 rounded-xl bg-blue-light flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-blue" />
                </div>
                <h3 class="font-display text-xl font-semibold mb-2.5">Expert Lighting Craft</h3>
                <p class="text-sm text-ink/60 leading-relaxed">Flawless track systems and shadow-gap profiles, designed to work with the room instead of against it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ GET IN TOUCH (REDESIGNED LIGHT THEME WITH FORM) ============ */}
        <section id="quote" class="anchor-target py-28 md:py-36 px-6 md:px-10 bg-gradient-to-br from-white to-blue-light/20 text-ink relative overflow-hidden border-t border-b border-ink/5">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] glow-orb rounded-full pointer-events-none opacity-40"></div>

          <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Direct Contacts */}
            <div class="lg:col-span-7">
              <span class="text-xs font-semibold tracking-[0.2em] uppercase text-blue">Get in Touch</span>
              <h2 class="font-display text-4xl md:text-[2.75rem] font-semibold tracking-tight mt-4 text-ink">
                Tell us about your room, we'll quote your ceiling
              </h2>
              <p class="mt-5 text-ink/60 leading-relaxed max-w-xl">
                Fill out the quote form to calculate your price, or reach us directly via your preferred channel. We reply within 15 minutes during business hours.
              </p>

              <div class="mt-10 flex flex-col gap-4 max-w-lg">
                <a
                  href="tel:+442079460192"
                  class="flex items-center gap-4 p-4 bg-white/60 hover:bg-blue hover:text-white border border-ink/5 rounded-2xl transition-all duration-350 group shadow-sm"
                >
                  <div class="w-10 h-10 rounded-xl bg-blue-light text-blue group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p class="text-xs text-ink/50 group-hover:text-white/70 transition-colors">Call directly</p>
                    <p class="font-semibold text-sm">+44 20 7946 0192</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/442079460192"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 p-4 bg-white/60 hover:bg-blue hover:text-white border border-ink/5 rounded-2xl transition-all duration-350 group shadow-sm"
                >
                  <div class="w-10 h-10 rounded-xl bg-blue-light text-blue group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p class="text-xs text-ink/50 group-hover:text-white/70 transition-colors">WhatsApp message</p>
                    <p class="font-semibold text-sm">Typically replies in 15 mins</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/aura.ceilings.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-4 p-4 bg-white/60 hover:bg-blue hover:text-white border border-ink/5 rounded-2xl transition-all duration-350 group shadow-sm"
                >
                  <div class="w-10 h-10 rounded-xl bg-blue-light text-blue group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p class="text-xs text-ink/50 group-hover:text-white/70 transition-colors">Instagram Portfolio</p>
                    <p class="font-semibold text-sm">200+ completed installations</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Quote Form */}
            <div id="contact" class="anchor-target lg:col-span-5">
              <div class="bg-white rounded-3xl p-8 border border-ink/5 shadow-xl shadow-ink/5 relative overflow-hidden">
                {formSubmitted ? (
                  <div class="panel-fade flex flex-col items-center text-center py-8">
                    <div class="w-16 h-16 rounded-full bg-blue-light text-blue flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 class="font-display text-2xl font-semibold mb-3">Request Received!</h3>
                    <p class="text-ink/65 text-sm leading-relaxed max-w-xs">
                      Thank you, <strong>{name}</strong>! We will calculate the cost for your room in <strong>{location}</strong> and contact you at <strong>{phone}</strong> within 15 minutes.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setName("");
                        setLocation("");
                        setPhone("");
                      }}
                      class="mt-8 text-sm font-semibold text-blue hover:underline"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} class="flex flex-col gap-5">
                    <div>
                      <h3 class="font-display text-2xl font-semibold mb-1">Calculate Cost</h3>
                      <p class="text-xs text-ink/50">Submit your details to get a free price calculation</p>
                    </div>

                    <div class="h-px bg-ink/5 my-1"></div>

                    <div class="flex flex-col gap-1.5">
                      <label htmlFor="name-input" class="text-xs font-semibold text-ink/70">Your Name</label>
                      <input
                        id="name-input"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        class="w-full px-4 py-3 bg-mist rounded-xl border border-ink/5 focus:outline-none focus:border-blue text-sm text-ink placeholder-ink/30"
                      />
                    </div>

                    <div class="flex flex-col gap-1.5">
                      <label htmlFor="location-input" class="text-xs font-semibold text-ink/70">Where do you live? (City / Area)</label>
                      <input
                        id="location-input"
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. London, Chelsea"
                        class="w-full px-4 py-3 bg-mist rounded-xl border border-ink/5 focus:outline-none focus:border-blue text-sm text-ink placeholder-ink/30"
                      />
                    </div>

                    <div class="flex flex-col gap-1.5">
                      <label htmlFor="phone-input" class="text-xs font-semibold text-ink/70">Phone Number</label>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +44 7911 123456"
                        class="w-full px-4 py-3 bg-mist rounded-xl border border-ink/5 focus:outline-none focus:border-blue text-sm text-ink placeholder-ink/30"
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn-primary w-full text-white font-semibold py-4 rounded-xl mt-2 flex items-center justify-center gap-2"
                    >
                      Calculate My Price
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
            
          </div>
        </section>

      </main>

      {/* ============ FOOTER ============ */}
      <footer class="bg-white border-t border-ink/5 px-6 md:px-10 pt-20 pb-10">
        <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-blue"></span>
              <span class="font-display font-semibold text-2xl">Aura</span>
            </div>
            <p class="mt-5 text-sm text-ink/55 max-w-xs leading-relaxed">
              We design and install ceiling systems that become part of the room's architecture — not just something fitted over your head.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-5 text-sm">Navigation</h4>
            <ul class="space-y-3 text-sm text-ink/55">
              <li><button onClick={() => selectProductFromMenu('stretch')} class="hover:text-blue">Products</button></li>
              <li><a href="#benefits" class="hover:text-blue">Our Benefits</a></li>
              <li><a href="#contact" class="hover:text-blue">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-5 text-sm">Contact</h4>
            <ul class="space-y-3 text-sm text-ink/55">
              <li><a href="tel:+442079460192" class="hover:text-blue">+44 20 7946 0192</a></li>
              <li><a href="https://wa.me/442079460192" class="hover:text-blue">WhatsApp</a></li>
              <li><a href="https://instagram.com/aura.ceilings.uk" class="hover:text-blue">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="max-w-7xl mx-auto mt-14 pt-7 border-t border-ink/5 text-xs text-ink/40 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {currentYear} Aura Ceilings. All rights reserved.</span>
          <span>Bespoke ceiling installation across the UK</span>
        </div>
      </footer>
    </>
  );
}
