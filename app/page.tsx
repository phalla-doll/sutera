'use client';

import Image from 'next/image';
import { Globe, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 'omega',
    title: 'PROJECT OMEGA',
    status: 'ACTIVE',
    shortDesc: 'Haptic feedback gloves for VR sculpting.',
    longDesc: 'Project Omega explores the boundaries of tactile feedback in virtual environments. By utilizing micro-pneumatic actuators, these gloves simulate the resistance and texture of digital clay, allowing artists to sculpt with unprecedented precision and physical intuition. The system integrates with Unity and Unreal Engine via custom plugins, providing sub-millimeter tracking and instantaneous haptic response.',
    tags: ['HARDWARE', 'UNITY'],
    visual: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-evtjXo6aKDxlNGX9HsdCWMTSFhZCnW.png&w=1000&q=75',
    links: [{ label: 'VIEW REPOSITORY', url: '#' }, { label: 'READ WHITEPAPER', url: '#' }]
  },
  {
    id: 'neural',
    title: 'NEURAL LINK UI',
    status: 'DEPLOYED',
    shortDesc: 'Brain-computer interface dashboard for real-time monitoring.',
    longDesc: 'A high-performance WebGL dashboard designed to visualize real-time neural activity. It processes thousands of data points per second, translating complex brainwave patterns into readable, actionable metrics for researchers and clinicians. The interface is built with React and Three.js, ensuring 60fps rendering even under heavy data loads.',
    tags: ['WEBGL', 'REACT'],
    visual: 'https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-opbOAvh8t0ruHQOw2uhzIMtpPAbrNP.png&w=1000&q=75',
    links: [{ label: 'LIVE DEMO', url: '#' }, { label: 'DOCUMENTATION', url: '#' }]
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white text-black selection:bg-[#FF4500] selection:text-white">
      {/* Background Grid Lines */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Horizontal Lines */}
        <div className="absolute top-[35%] left-0 w-full h-[1px] bg-black/10" />
        <div className="absolute top-[65%] left-0 w-full h-[1px] bg-black/10" />
        
        {/* Vertical Lines */}
        <div className="absolute top-0 left-[25%] w-[1px] h-full bg-black/10" />
        <div className="absolute top-0 left-[75%] w-[1px] h-full bg-black/10" />
        
        {/* Crosshairs */}
        <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 text-[#FF4500] text-xs font-mono">+</div>
        <div className="absolute top-[35%] left-[75%] -translate-x-1/2 -translate-y-1/2 text-[#FF4500] text-xs font-mono">+</div>
        <div className="absolute top-[65%] left-[25%] -translate-x-1/2 -translate-y-1/2 text-[#FF4500] text-xs font-mono">+</div>
        <div className="absolute top-[65%] left-[75%] -translate-x-1/2 -translate-y-1/2 text-[#FF4500] text-xs font-mono">+</div>
      </div>

      {/* Top Navigation */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10 font-mono text-xs uppercase tracking-wider">
        <div className="font-sans font-medium text-sm tracking-normal">SUTÉRA</div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="border border-black px-2 py-1 bg-white hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-colors cursor-pointer">
            CHANGE REALITY
          </div>
          <Globe className="w-5 h-5 stroke-[1.5] text-[#FF4500]" />
        </div>
        
        <div className="text-right leading-tight">
          <div className="text-black/50">LOCAL TIME</div>
          <div>ZUR 10:22 PM</div>
        </div>
      </header>

      {/* Main Content (Hero) */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between p-6 pt-24 pb-12">
        
        {/* Top Left: Huge Heading */}
        <div className="relative max-w-3xl">
          <h1 className="text-[10vw] leading-[0.85] font-medium tracking-tighter">
            REALITY<span className="relative">,
              <div className="absolute top-0 left-full ml-2 -mt-4 border border-[#FF4500] text-[#FF4500] px-1.5 py-0.5 text-[10px] font-mono whitespace-nowrap bg-white">
                <span className="absolute -top-2 -left-2 text-[8px]">+</span>
                LAB REALITY
              </div>
            </span><br />
            BY DESIGN.
          </h1>
        </div>

        {/* Center Island Image & Callouts */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] pointer-events-none flex items-center justify-center">
          
          {/* The Island Image */}
          <div className="relative w-[280px] h-[210px] md:w-[400px] md:h-[300px] z-20 shrink-0">
            <Image 
              src="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-zJFuTatkOlIXBxVbP58TAzlCr5PTv7.png&w=1000&q=75" 
              alt="3D Floating Island" 
              fill 
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Callout 1: Top Right */}
          <div className="absolute top-[5%] md:top-[10%] right-[5%] md:right-[10%] lg:right-[15%] w-32 md:w-64 z-30">
            <div className="text-[8px] md:text-[9px] font-mono uppercase leading-tight mb-2 bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-1 md:p-0 rounded">
              WHERE IMAGINATION<br />
              BRANCHES INTO A<br />
              LANDSCAPE OF ENDLESS<br />
              DIVERSITY
            </div>
            {/* Line connecting to flower */}
            <svg className="absolute top-full left-0 w-[160px] h-[100px] overflow-visible hidden lg:block" style={{ transform: 'translate(-100%, 0)' }}>
              <path d="M 160 0 L 100 0 L 60 60 L 0 60" fill="none" stroke="black" strokeWidth="1" />
              <rect x="-4" y="56" width="8" height="8" fill="white" stroke="#FF4500" strokeWidth="1" />
              <rect x="-2" y="58" width="4" height="4" fill="#FF4500" />
            </svg>
          </div>

          {/* Callout 2: Left */}
          <div className="absolute top-[20%] md:top-[30%] left-[5%] md:left-[5%] lg:left-[10%] w-32 md:w-48 text-left md:text-right z-30">
            <div className="text-[8px] md:text-[9px] font-mono uppercase leading-tight mb-2 bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-1 md:p-0 rounded">
              FROM DEEP ROOTS, CREATIVITY<br />
              DRAWS ITS STRENGTH
            </div>
            {/* Line connecting to left side */}
            <svg className="absolute top-full right-0 w-[160px] h-[80px] overflow-visible hidden lg:block" style={{ transform: 'translate(100%, 0)' }}>
              <path d="M 0 0 L 60 0 L 100 60 L 160 60" fill="none" stroke="black" strokeWidth="1" />
              <rect x="156" y="56" width="8" height="8" fill="white" stroke="#FF4500" strokeWidth="1" />
              <rect x="158" y="58" width="4" height="4" fill="#FF4500" />
            </svg>
          </div>

          {/* Callout 3: Bottom Right */}
          <div className="absolute bottom-[15%] md:bottom-[10%] right-[10%] md:right-[20%] lg:right-[25%] w-24 md:w-32 z-30">
            {/* Line connecting to bottom */}
            <svg className="absolute bottom-full left-0 w-[120px] h-[100px] overflow-visible hidden lg:block" style={{ transform: 'translate(-100%, 0)' }}>
              <path d="M 120 100 L 60 100 L 20 20 L 0 20" fill="none" stroke="black" strokeWidth="1" />
              <rect x="-4" y="16" width="8" height="8" fill="white" stroke="#FF4500" strokeWidth="1" />
              <rect x="-2" y="18" width="4" height="4" fill="#FF4500" />
            </svg>
            <div className="text-[8px] md:text-[9px] font-mono uppercase leading-tight mt-2 bg-white/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-1 md:p-0 rounded">
              FOUNDATION<br />
              DESIGNED FOR<br />
              GROWTH
            </div>
          </div>

          {/* Callout 4: Far Right Box */}
          <div className="absolute top-[60%] md:top-[40%] right-[5%] md:right-[5%] lg:right-[5%] w-40 md:w-64 z-30">
            {/* Line connecting to right side */}
            <svg className="absolute top-1/2 right-full w-[120px] h-[80px] overflow-visible hidden lg:block" style={{ transform: 'translate(0, -50%)' }}>
              <path d="M 120 40 L 80 40 L 40 80 L 0 80" fill="none" stroke="black" strokeWidth="1" />
              <rect x="-4" y="76" width="8" height="8" fill="white" stroke="#FF4500" strokeWidth="1" />
              <rect x="-2" y="78" width="4" height="4" fill="#FF4500" />
            </svg>
            <div className="border border-[#FF4500] bg-white p-2 md:p-3 font-mono text-[8px] md:text-[10px] uppercase shadow-sm">
              <div className="flex justify-between items-center border-b border-[#FF4500] pb-1 md:pb-2 mb-1 md:mb-2 bg-[#FF4500]/10 p-1 text-[#FF4500]">
                <span className="font-bold text-xs md:text-sm">SUTÉRA</span>
                <span className="text-[6px] md:text-[8px]">/25</span>
              </div>
              <div className="leading-relaxed">
                SU (UNDERNEATH)<br />
                + TERA (EARTH)<br /><br />
                → UNDERNEATH THE EARTH
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-6 md:gap-0 mt-auto">
          
          {/* Bottom Left: Core Threads */}
          <div className="w-full md:w-64 font-mono text-[9px] uppercase">
            <div className="font-bold mb-3">[ CORE THREADS OF MY WORK ]</div>
            <div className="flex gap-3">
              {/* Icons Column */}
              <div className="w-8 flex flex-col border border-black">
                <div className="h-8 border-b border-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-black rotate-45" />
                    <div className="w-full h-[1px] bg-black -rotate-45" />
                    <div className="w-full h-[1px] bg-black" />
                  </div>
                </div>
                <div className="h-24 grid grid-cols-3 grid-rows-8 gap-[1px] bg-black/10 p-[1px]">
                  {Array.from({length: 24}).map((_, i) => (
                    <div key={i} className={`bg-white ${[2, 5, 7, 11, 14, 18, 21, 23].includes(i) ? 'bg-[#FF4500]' : ''}`} />
                  ))}
                </div>
              </div>
              {/* Text Column */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="border-b border-black pb-1 mb-1">
                  <div className="flex justify-between">
                    <span>01. (XR/MR/VR)</span>
                    <span className="tracking-tighter">{'////////////////'}</span>
                  </div>
                  <div className="font-bold">PERCEPTUAL INTERFACES</div>
                </div>
                <div className="border-b border-black pb-1 mb-1">
                  <div className="flex justify-between">
                    <span>02.</span>
                    <span className="tracking-tighter">{'///////////////////////'}</span>
                  </div>
                  <div className="font-bold">EMBODIMENT</div>
                </div>
                <div className="border-b border-black pb-1 mb-1">
                  <div className="flex justify-between">
                    <span>03.</span>
                    <span className="tracking-tighter">{'///////////////////////'}</span>
                  </div>
                  <div className="font-bold">IA & AI</div>
                </div>
                <div className="pb-1">
                  <div className="flex justify-between">
                    <span>04.</span>
                    <span className="tracking-tighter">{'///////////////////////'}</span>
                  </div>
                  <div className="font-bold">SYSTEM AND TOOLS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right: About Box */}
          <div className="w-full max-w-[320px] md:w-80 flex flex-col gap-2">
            <div className="border border-black bg-white">
              <div className="bg-[#FF4500] text-white text-[10px] font-mono px-2 py-1 flex justify-between items-center uppercase">
                <span>NOT A STUDIO - JUST ME</span>
                <button className="border border-white/30 bg-white/10 hover:bg-white/20 p-0.5">
                  <X className="w-3 h-3" />
                </button>
              </div>
              <div className="p-4 font-mono text-[10px] leading-relaxed">
                I&apos;m Stella Mühlhaus and I currently work at Meta. On the side I give talks, workshops, and mentor, as well as writing on design and technology. This site is simply a collection of what I do and share info along the way.
              </div>
            </div>
            <div className="flex justify-end gap-2 font-mono text-[9px]">
              <button className="border border-black rounded-full px-3 py-1 hover:bg-[#FF4500] hover:border-[#FF4500] hover:text-white transition-colors">LINKEDIN</button>
              <button className="border border-black rounded-full px-3 py-1 hover:bg-[#FF4500] hover:border-[#FF4500] hover:text-white transition-colors">MEDIUM</button>
              <button className="border border-black rounded-full px-3 py-1 hover:bg-[#FF4500] hover:border-[#FF4500] hover:text-white transition-colors">INSTAGRAM</button>
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: Philosophy */}
      <section className="relative z-10 w-full min-h-screen p-6 py-24 flex flex-col justify-center border-t border-black/10 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto w-full">
          <div className="font-mono text-xs text-[#FF4500] mb-12">[ 01. PHILOSOPHY ]</div>
          <h2 className="text-[11vw] md:text-[7.5vw] leading-[0.85] font-medium tracking-tighter uppercase">
            <div className="block">We build interfaces</div>
            <div className="block">that</div>
            <div className="block"><span className="text-black/30 hover:text-black transition-colors">feel human</span>, systems</div>
            <div className="block">that</div>
            <div className="block"><span className="text-[#FF4500]">augment reality</span>, and</div>
            <div className="block">tools that <span className="italic font-serif">empower.</span></div>
          </h2>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="border border-black p-6 bg-white hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-colors group flex flex-col">
              <div className="text-lg mb-12">01</div>
              <div className="font-bold mb-4 uppercase">Spatial Computing</div>
              <div className="opacity-70 group-hover:opacity-100 leading-relaxed">Moving beyond flat screens into environments that understand context and depth.</div>
            </div>
            <div className="border border-black p-6 bg-white hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-colors group flex flex-col">
              <div className="text-lg mb-12">02</div>
              <div className="font-bold mb-4 uppercase">Neural Interfaces</div>
              <div className="opacity-70 group-hover:opacity-100 leading-relaxed">Direct pathways between human intent and machine execution.</div>
            </div>
            <div className="border border-black p-6 bg-white hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-colors group flex flex-col">
              <div className="text-lg mb-12">03</div>
              <div className="font-bold mb-4 uppercase">Generative Systems</div>
              <div className="opacity-70 group-hover:opacity-100 leading-relaxed">Tools that co-create, adapting to the user&apos;s workflow in real-time.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Lab Experiments */}
      <section className="relative z-10 w-full py-24 p-6 flex flex-col border-t border-black/10 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto w-full">
          <div className="font-mono text-xs text-[#FF4500] mb-12">[ 02. LAB EXPERIMENTS ]</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div 
              className="group relative border border-black bg-white cursor-pointer hover:border-[#FF4500] transition-colors duration-300 flex flex-col"
              onClick={() => setSelectedProject(projects[0])}
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 translate-y-1 z-10" />

              {/* Top bar */}
              <div className="flex justify-between items-center p-4 border-b border-black group-hover:border-[#FF4500] transition-colors bg-black/5">
                <div className="font-mono text-[10px] tracking-widest text-black/50">ID: {projects[0].id.toUpperCase()}</div>
                <div className="border border-black px-2 py-1 text-[9px] font-mono bg-white group-hover:bg-[#FF4500] group-hover:text-white group-hover:border-[#FF4500] transition-colors">
                  STATUS: {projects[0].status}
                </div>
              </div>

              {/* Image Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5 border-b border-black group-hover:border-[#FF4500] transition-colors">
                <Image 
                  src={projects[0].visual}
                  alt={projects[0].title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Area */}
              <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold tracking-tighter mb-3 group-hover:text-[#FF4500] transition-colors">
                    {projects[0].title}
                  </h3>
                  <p className="font-mono text-xs text-black/60 mb-6 line-clamp-2">
                    {projects[0].shortDesc}
                  </p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="flex gap-2 font-mono text-[9px]">
                    {projects[0].tags.map(tag => (
                      <span key={tag} className="border border-black/20 px-2 py-1 rounded-full bg-black/5 group-hover:border-[#FF4500]/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center group-hover:bg-[#FF4500] group-hover:text-white group-hover:border-[#FF4500] transition-all duration-300 -rotate-45 group-hover:rotate-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div 
              className="group relative border border-black bg-white cursor-pointer hover:border-[#FF4500] transition-colors duration-300 flex flex-col"
              onClick={() => setSelectedProject(projects[1])}
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity translate-x-1 translate-y-1 z-10" />

              {/* Top bar */}
              <div className="flex justify-between items-center p-4 border-b border-black group-hover:border-[#FF4500] transition-colors bg-[#FF4500]/5">
                <div className="font-mono text-[10px] tracking-widest text-black/50">ID: {projects[1].id.toUpperCase()}</div>
                <div className="border border-[#FF4500] text-[#FF4500] px-2 py-1 text-[9px] font-mono bg-white group-hover:bg-[#FF4500] group-hover:text-white transition-colors">
                  STATUS: {projects[1].status}
                </div>
              </div>

              {/* Image Area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FF4500]/10 border-b border-black group-hover:border-[#FF4500] transition-colors">
                <Image 
                  src={projects[1].visual}
                  alt={projects[1].title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Area */}
              <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold tracking-tighter mb-3 group-hover:text-[#FF4500] transition-colors">
                    {projects[1].title}
                  </h3>
                  <p className="font-mono text-xs text-black/60 mb-6 line-clamp-2">
                    {projects[1].shortDesc}
                  </p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="flex gap-2 font-mono text-[9px]">
                    {projects[1].tags.map(tag => (
                      <span key={tag} className="border border-black/20 px-2 py-1 rounded-full bg-black/5 group-hover:border-[#FF4500]/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center group-hover:bg-[#FF4500] group-hover:text-white group-hover:border-[#FF4500] transition-all duration-300 -rotate-45 group-hover:rotate-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative z-10 w-full border-t border-black/10 bg-[#FF4500] text-white overflow-hidden">
        <div className="flex whitespace-nowrap py-4 border-b border-white/20">
          <div className="animate-marquee font-mono text-xs tracking-widest uppercase flex items-center gap-4">
            <span>AVAILABLE FOR FREELANCE</span>
            <span>+++</span>
            <span>BASED IN ZURICH</span>
            <span>+++</span>
            <span>AVAILABLE FOR FREELANCE</span>
            <span>+++</span>
            <span>BASED IN ZURICH</span>
            <span>+++</span>
            <span>AVAILABLE FOR FREELANCE</span>
            <span>+++</span>
            <span>BASED IN ZURICH</span>
            <span>+++</span>
            <span>AVAILABLE FOR FREELANCE</span>
            <span>+++</span>
            <span>BASED IN ZURICH</span>
            <span>+++</span>
          </div>
        </div>
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
          <div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-4">LET&apos;S TALK.</h2>
            <a href="mailto:hello@example.com" className="font-mono text-sm border-b border-white pb-1 hover:text-black hover:border-black transition-colors">HELLO@SUTERA.LAB</a>
          </div>
          <div className="font-mono text-[10px] text-right">
            <div>© 2026 SUTÉRA LAB</div>
            <div className="text-white/60 mt-1">ALL RIGHTS RESERVED</div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-white/80 backdrop-blur-md">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-black bg-white shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex justify-between items-center border-b border-black bg-white p-4">
              <div className="font-mono text-xs text-[#FF4500] uppercase">
                [ PROJECT DETAILS: {selectedProject.id} ]
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="border border-black hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex flex-col md:flex-row">
              {/* Visual Area */}
              <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-black bg-black/5 min-h-[300px] flex items-center justify-center relative p-8">
                <Image 
                  src={selectedProject.visual}
                  alt={selectedProject.title}
                  fill
                  className="object-contain p-8"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 border border-[#FF4500] text-[#FF4500] px-2 py-1 text-[10px] font-mono bg-white z-10">
                  STATUS: {selectedProject.status}
                </div>
              </div>
              
              {/* Text Area */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">
                  {selectedProject.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 font-mono text-[10px] mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="border border-black/20 px-2 py-1 rounded-full bg-black/5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="font-mono text-sm leading-relaxed mb-8 flex-1">
                  <p className="font-bold mb-4">{selectedProject.shortDesc}</p>
                  <p className="text-black/70">{selectedProject.longDesc}</p>
                </div>
                
                <div className="flex flex-col gap-3 mt-auto border-t border-black/10 pt-6">
                  {selectedProject.links.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      className="flex items-center justify-between border border-black p-3 font-mono text-xs hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] transition-colors group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
