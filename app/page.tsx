import Image from 'next/image';
import { Globe, X } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white text-black selection:bg-black selection:text-white">
      {/* Background Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Horizontal Lines */}
        <div className="absolute top-[35%] left-0 w-full h-[1px] bg-black/10" />
        <div className="absolute top-[65%] left-0 w-full h-[1px] bg-black/10" />
        
        {/* Vertical Lines */}
        <div className="absolute top-0 left-[25%] w-[1px] h-full bg-black/10" />
        <div className="absolute top-0 left-[75%] w-[1px] h-full bg-black/10" />
        
        {/* Crosshairs */}
        <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 text-black/20 text-xs font-mono">+</div>
        <div className="absolute top-[35%] left-[75%] -translate-x-1/2 -translate-y-1/2 text-black/20 text-xs font-mono">+</div>
        <div className="absolute top-[65%] left-[25%] -translate-x-1/2 -translate-y-1/2 text-black/20 text-xs font-mono">+</div>
        <div className="absolute top-[65%] left-[75%] -translate-x-1/2 -translate-y-1/2 text-black/20 text-xs font-mono">+</div>
      </div>

      {/* Top Navigation */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10 font-mono text-xs uppercase tracking-wider">
        <div className="font-sans font-medium text-sm tracking-normal">SUTÉRA</div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="border border-black px-2 py-1 bg-white">
            CHANGE REALITY
          </div>
          <Globe className="w-5 h-5 stroke-[1.5]" />
        </div>
        
        <div className="text-right leading-tight">
          <div className="text-black/50">LOCAL TIME</div>
          <div>ZUR 10:22 PM</div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full h-screen flex flex-col justify-between p-6 pt-24 pb-12">
        
        {/* Top Left: Huge Heading */}
        <div className="relative max-w-3xl">
          <h1 className="text-[10vw] leading-[0.85] font-medium tracking-tighter">
            REALITY<span className="relative">,
              <div className="absolute top-0 left-full ml-2 -mt-4 border border-black px-1.5 py-0.5 text-[10px] font-mono whitespace-nowrap bg-white">
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
              src="https://picsum.photos/seed/floatingisland/800/600" 
              alt="Floating Island" 
              fill 
              className="object-cover rounded-[100px] opacity-90 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            {/* Fake red flower */}
            <div className="absolute top-[-30px] md:top-[-40px] left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 bg-red-500 rounded-full blur-md opacity-80" />
            <div className="absolute top-[-20px] md:top-[-30px] left-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full" />
            
            {/* Overlay squares on the image as seen in the design */}
            <div className="absolute top-1/4 left-1/2 w-10 h-10 md:w-16 md:h-16 border border-white/50 bg-white/10 backdrop-blur-sm" />
            <div className="absolute top-1/2 left-1/2 w-10 h-10 md:w-16 md:h-16 border border-white/50 bg-white/10 backdrop-blur-sm" />
            <div className="absolute top-1/2 left-[calc(50%+2.5rem)] md:left-[calc(50%+4rem)] w-10 h-10 md:w-16 md:h-16 border border-white/50 bg-white/10 backdrop-blur-sm" />
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
              <rect x="-4" y="56" width="8" height="8" fill="white" stroke="black" strokeWidth="1" />
              <rect x="-2" y="58" width="4" height="4" fill="black" />
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
              <rect x="156" y="56" width="8" height="8" fill="white" stroke="black" strokeWidth="1" />
              <rect x="158" y="58" width="4" height="4" fill="black" />
            </svg>
          </div>

          {/* Callout 3: Bottom Right */}
          <div className="absolute bottom-[15%] md:bottom-[10%] right-[10%] md:right-[20%] lg:right-[25%] w-24 md:w-32 z-30">
            {/* Line connecting to bottom */}
            <svg className="absolute bottom-full left-0 w-[120px] h-[100px] overflow-visible hidden lg:block" style={{ transform: 'translate(-100%, 0)' }}>
              <path d="M 120 100 L 60 100 L 20 20 L 0 20" fill="none" stroke="black" strokeWidth="1" />
              <rect x="-4" y="16" width="8" height="8" fill="white" stroke="black" strokeWidth="1" />
              <rect x="-2" y="18" width="4" height="4" fill="black" />
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
              <rect x="-4" y="76" width="8" height="8" fill="white" stroke="black" strokeWidth="1" />
              <rect x="-2" y="78" width="4" height="4" fill="black" />
            </svg>
            <div className="border border-black bg-white p-2 md:p-3 font-mono text-[8px] md:text-[10px] uppercase shadow-sm">
              <div className="flex justify-between items-center border-b border-black pb-1 md:pb-2 mb-1 md:mb-2 bg-black/5 p-1">
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
                    <div key={i} className={`bg-white ${[2, 5, 7, 11, 14, 18, 21, 23].includes(i) ? 'bg-black/20' : ''}`} />
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
              <div className="bg-black text-white text-[10px] font-mono px-2 py-1 flex justify-between items-center uppercase">
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
              <button className="border border-black rounded-full px-3 py-1 hover:bg-black hover:text-white transition-colors">LINKEDIN</button>
              <button className="border border-black rounded-full px-3 py-1 hover:bg-black hover:text-white transition-colors">MEDIUM</button>
              <button className="border border-black rounded-full px-3 py-1 hover:bg-black hover:text-white transition-colors">INSTAGRAM</button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
