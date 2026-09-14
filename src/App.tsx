import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from 'motion/react';
import { Globe2, Mail, ExternalLink, Linkedin, Link as LinkIcon, ChevronRight, Contact } from 'lucide-react';

// Procedural Twinkling Stars Component
const Stars = () => {
  const [stars, setStars] = useState<{x:number, y:number, s:number, d:number, delay:number, op:number}[]>([]);
  
  useEffect(() => {
    setStars(Array.from({length: 350}).map(() => {
      const isLarge = Math.random() > 0.85;
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: isLarge ? Math.random() * 1.5 + 1.2 : Math.random() * 1 + 0.3,
        d: Math.random() * 5 + 3,
        delay: Math.random() * 5,
        op: isLarge ? Math.random() * 0.5 + 0.5 : Math.random() * 0.4 + 0.2
      };
    }));
  }, []);
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated Ambient Nebulas */}
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/[0.12] blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-500/[0.10] blur-[100px]"
        animate={{ x: [0, -30, 0], y: [0, -40, 0], scale: [1, 1.1, 1], opacity: [1, 0.4, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      <motion.div 
        className="absolute top-[40%] left-[60%] w-[40vw] h-[40vw] rounded-full bg-amber-500/[0.08] blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.9, 0.2] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />

      {/* Starfield */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{ 
            left: `${star.x}%`, 
            top: `${star.y}%`, 
            width: star.s, 
            height: star.s,
            boxShadow: star.s > 1.5 ? '0 0 8px 1px rgba(255,255,255,0.4)' : 'none'
          }}
          animate={{ opacity: [star.op * 0.2, star.op, star.op * 0.2] }}
          transition={{ duration: star.d, delay: star.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const downloadVCard = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Gupta;Achal;Kumar;;
FN:Achal Kumar Gupta
EMAIL:achal@zasdc.org
URL:https://achalgpt.github.io
END:VCARD`;
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Achal_Gupta.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

type LinkColor = 'blue' | 'emerald' | 'amber' | 'fuchsia' | 'cyan' | 'purple' | 'rose' | 'slate';

const getLinkStyles = (color: LinkColor) => {
  switch (color) {
    case 'amber': return {
      border: 'group-hover:border-amber-500/30',
      gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
      iconHover: 'group-hover:text-amber-400',
      bgHover: 'group-hover:bg-amber-500/10'
    };
    case 'emerald': return {
      border: 'group-hover:border-emerald-500/30',
      gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      iconHover: 'group-hover:text-emerald-400',
      bgHover: 'group-hover:bg-emerald-500/10'
    };
    case 'blue': return {
      border: 'group-hover:border-blue-500/30',
      gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
      iconHover: 'group-hover:text-blue-400',
      bgHover: 'group-hover:bg-blue-500/10'
    };
    case 'fuchsia': return {
      border: 'group-hover:border-fuchsia-500/30',
      gradient: 'from-fuchsia-500/20 via-fuchsia-500/5 to-transparent',
      iconHover: 'group-hover:text-fuchsia-400',
      bgHover: 'group-hover:bg-fuchsia-500/10'
    };
    case 'cyan': return {
      border: 'group-hover:border-cyan-500/30',
      gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
      iconHover: 'group-hover:text-cyan-400',
      bgHover: 'group-hover:bg-cyan-500/10'
    };
    case 'purple': return {
      border: 'group-hover:border-purple-500/30',
      gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
      iconHover: 'group-hover:text-purple-400',
      bgHover: 'group-hover:bg-purple-500/10'
    };
    case 'rose': return {
      border: 'group-hover:border-rose-500/30',
      gradient: 'from-rose-500/20 via-rose-500/5 to-transparent',
      iconHover: 'group-hover:text-rose-400',
      bgHover: 'group-hover:bg-rose-500/10'
    };
    default: return {
      border: 'group-hover:border-slate-500/30',
      gradient: 'from-slate-500/20 via-slate-500/5 to-transparent',
      iconHover: 'group-hover:text-slate-400',
      bgHover: 'group-hover:bg-slate-500/10'
    };
  }
};

const LINKS: { id: number; title: string; url: string; icon: React.ElementType; desc: string; action?: string; color: LinkColor }[] = [
  { id: 0, title: 'Save Contact', url: '#vcard', icon: Contact, desc: 'Download vCard', action: 'vcard', color: 'amber' },
  { id: 1, title: 'Main Website', url: 'https://achalgpt.github.io', icon: Globe2, desc: 'Portfolio & Projects', color: 'emerald' },
  { id: 2, title: 'Email', url: 'mailto:achal@zasdc.org', icon: Mail, desc: 'Let\'s connect', color: 'blue' },
  { id: 3, title: 'ZASDC Website', url: 'https://zasdc.org', icon: ExternalLink, desc: 'Organization', color: 'fuchsia' },
  { id: 4, title: 'LinkedIn', url: 'https://linkedin.com/in/achalkumargupta', icon: Linkedin, desc: 'Professional Network', color: 'cyan' },
];

export default function App() {
  const { scrollY } = useScroll();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const updateDims = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateDims();
    
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    window.addEventListener('resize', updateDims);
    return () => {
      window.removeEventListener('resize', updateDims);
      clearTimeout(timer);
    };
  }, []);

  const isMobile = dimensions.width > 0 && dimensions.width < 768;

  // Map scroll progress over a defined scroll range (400px or 60% of viewport height)
  const scrollRange = Math.min(dimensions.height * 0.6, 400); 
  const rawProgress = useTransform(scrollY, [0, scrollRange], [0, 1]);
  
  // Clamp progress strictly to [0, 1]
  const clampedProgress = useTransform(rawProgress, v => Math.min(Math.max(v, 0), 1));
  const smoothProgress = useSpring(clampedProgress, { damping: 30, stiffness: 100, mass: 0.8 });

  const [isScrolledPastThreshold, setIsScrolledPastThreshold] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolledPastThreshold(latest > 50);
  });

  // --- DESKTOP TRANSFORMS ---
  // Shifts the card from center (50vw) to the center of the left 60% (30vw).
  // Net movement: -20% of viewport width.
  const desktopX = useTransform(smoothProgress, [0, 1], [0, -(dimensions.width * 0.2)]);
  const desktopStyle = { x: desktopX, y: 0, scale: 1 };

  // --- CARD SIZING & SCALING LOGIC ---
  // Apply dynamic scaling based on resolution, with strict lower and upper limits.
  const desktopCardW = Math.max(350, Math.min(480, dimensions.width * 0.35));
  const mobileCardW = Math.max(280, Math.min(380, dimensions.width * 0.85));
  const cardW = isMobile ? mobileCardW : desktopCardW;
  const cardH = cardW / 1.75; 
  
  // Calculate top-bar scale target to ensure the card fits comfortably in a mobile header (e.g. ~45px tall)
  const mobileScaleTarget = Math.max(0.15, Math.min(0.25, 45 / cardH));
  const mobileMargin = 16;

  // Calculate pixel translations needed to position the scaled card at the top-left (mobileMargin, mobileMargin)
  const targetXMobile = -(dimensions.width / 2) + ((cardW * mobileScaleTarget) / 2) + mobileMargin;
  const targetYMobile = -(dimensions.height / 2) + ((cardH * mobileScaleTarget) / 2) + mobileMargin;

  const mobileX = useTransform(smoothProgress, [0, 1], [0, targetXMobile]);
  const mobileY = useTransform(smoothProgress, [0, 1], [0, targetYMobile]);
  const mobileScale = useTransform(smoothProgress, [0, 1], [1, mobileScaleTarget]);
  
  const mobileStyle = { x: mobileX, y: mobileY, scale: mobileScale };

  return (
    <div className="bg-[#050505] min-h-screen w-full relative">
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            key="splash" 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
            exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-heading text-sm md:text-base tracking-[0.5em] uppercase text-white font-light opacity-70">
                Achal Gupta
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showSplash && (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="relative bg-transparent text-white font-sans selection:bg-white/20 min-h-screen overflow-x-hidden">
            
            <Stars />

            {/* Sticky Header Background (Mobile Only - Completes the Top-Bar Look) */}
            {isMobile && (
              <motion.div 
                className="fixed top-0 left-0 w-full z-40 flex items-center pointer-events-none bg-[#050505]/60 backdrop-blur-xl border-b border-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: isScrolledPastThreshold ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  height: (cardH * mobileScaleTarget) + (mobileMargin * 2),
                  paddingLeft: (cardW * mobileScaleTarget) + mobileMargin + 16,
                }}
              >
                <h1 className="font-heading font-bold text-xl tracking-[0.2em] uppercase text-white opacity-90 drop-shadow-md">
                  ACHAL GUPTA
                </h1>
              </motion.div>
            )}

            {/* Fixed Business Card Container */}
            <motion.div 
              style={isMobile ? mobileStyle : desktopStyle}
              className="fixed inset-0 m-auto flex items-center justify-center z-50 pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, filter: 'blur(20px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
              <div 
                className="relative cursor-pointer pointer-events-auto interactive-card" 
                style={{ width: cardW, height: cardH, perspective: 1500 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="w-full h-full relative"
                >
                  {/* Front Face */}
                  <div 
                    className="absolute inset-0 w-full h-full shadow-2xl border border-white/10 overflow-hidden frosted-glass" 
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                  >
                    <img src="/front.jpg" alt="Business Card Front" className="w-full h-full object-cover" 
                         onError={(e) => { e.currentTarget.src = "front.png"; }} />
                  </div>
                  
                  {/* Back Face */}
                  <div 
                    className="absolute inset-0 w-full h-full shadow-2xl border border-white/10 overflow-hidden frosted-glass" 
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <img src="/back.jpg" alt="Business Card Back" className="w-full h-full object-cover"
                         onError={(e) => { e.currentTarget.src = "back.png"; }} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Hint */}
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: isScrolledPastThreshold ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 left-0 w-full flex flex-col items-center justify-center gap-2 z-30 pointer-events-none"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
              Scroll or Tap Card
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>

          {/* Scrollable Links Container */}
          <div className="w-full relative z-10 pt-[100vh] pb-[20vh]">
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row">
              {/* Left spacer for desktop 60% split */}
              <div className="hidden md:block w-[60%]" />
              
              {/* Right container for links (40% split) */}
              <div className="w-full md:w-[40%] px-6 md:px-12 flex flex-col gap-4 pointer-events-auto">
                {LINKS.map((link, i) => {
                  const styles = getLinkStyles(link.color);
                  return (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target={link.action === 'vcard' ? undefined : "_blank"}
                      rel={link.action === 'vcard' ? undefined : "noopener noreferrer"}
                      onClick={(e) => {
                        if (link.action === 'vcard') {
                          e.preventDefault();
                          downloadVCard();
                        }
                      }}
                      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`group relative flex items-center gap-6 p-5 frosted-glass transition-all duration-500 overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_32px_rgba(255,255,255,0.05)] ${styles.border}`}
                    >
                      {/* Background Gradient on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                      <div className={`relative flex-shrink-0 bg-white/[0.03] backdrop-blur-sm border border-white/10 p-4 transition-all duration-500 rounded-lg ${styles.bgHover} ${styles.border}`}>
                        <link.icon className={`w-5 h-5 text-white/80 transition-colors stroke-[1.5px] ${styles.iconHover}`} />
                      </div>
                      
                      <div className="flex flex-col flex-grow relative z-10">
                        <span className="font-heading font-bold text-lg text-white/90 group-hover:text-white transition-colors tracking-widest uppercase">
                          {link.title}
                        </span>
                        <span className="font-mono text-[0.65rem] text-white/40 group-hover:text-white/60 uppercase tracking-[0.2em] mt-1 transition-colors">
                          {link.desc}
                        </span>
                      </div>
                      
                      <div className={`opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white/40 relative z-10 ${styles.iconHover}`}>
                        <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}
