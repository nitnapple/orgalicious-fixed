'use client';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

const fadeUp = (delay = 0) => ({
  animation: `fadeInUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) both`,
  animationDelay: `${delay}s`,
});

export default function Hero() {
  const isMobile = useIsMobile();
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [2018, 5000, 0, 2];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const duration = 1800;
      function tick(now) {
        const p = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCounts(targets.map((t) => Math.floor(t * eased)));
        if (p < 1) requestAnimationFrame(tick);
        else setCounts(targets);
      }
      requestAnimationFrame(tick);
    }, 950);
    return () => clearTimeout(timeout);
  }, []);

  const stats = [
    { value: counts[0], suffix: '',  label: 'Est. Year'      },
    { value: counts[1], suffix: '+', label: 'Happy Clients'  },
    { value: 0,         suffix: '',  label: 'Preservatives', fixed: true },
    { value: counts[3], suffix: '',  label: 'Delivery Slots' },
  ];

  return (
    <section id="hero" style={{ minHeight:'100vh', background:'linear-gradient(160deg, #071e2b 0%, #0d3347 50%, #071e2b 100%)', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', paddingTop:'80px', paddingBottom:'40px' }}>
      <div style={{ position:'absolute', top:'-100px', right:'-100px', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(140,198,63,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'0', left:'-150px', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(140,198,63,0.06) 0%, transparent 70%)', pointerEvents:'none' }} />
      <div className="animate-[float1_6s_ease-in-out_infinite]" style={{ position:'absolute', top:'15%', left:'5%', width:'60px', height:'60px', opacity:0.15, pointerEvents:'none' }}>
        <svg viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="30" rx="20" ry="28" fill="#8cc63f" transform="rotate(-30 30 30)" /></svg>
      </div>
      <div className="animate-[float2_8s_ease-in-out_infinite]" style={{ position:'absolute', top:'25%', right:'8%', width:'45px', height:'45px', opacity:0.12, pointerEvents:'none' }}>
        <svg viewBox="0 0 60 60" fill="none"><ellipse cx="30" cy="30" rx="18" ry="26" fill="#8cc63f" transform="rotate(20 30 30)" /></svg>
      </div>

      <div style={{ maxWidth:'680px', width:'100%', padding: isMobile ? '0 16px' : '0 24px', textAlign:'center', position:'relative', zIndex:10 }}>
        {/* Badge */}
        <div style={{ ...fadeUp(0.1), display:'inline-flex', alignItems:'center', gap:'8px', marginBottom:'16px', background:'rgba(140,198,63,0.08)', border:'1px solid rgba(140,198,63,0.2)', borderRadius:'999px', padding:'6px 14px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="4" fill="#8cc63f" /><circle cx="16" cy="8" r="4" fill="#8cc63f" /><circle cx="12" cy="16" r="4" fill="#8cc63f" /></svg>
          <span style={{ fontSize:'9px', letterSpacing:'3px', color:'rgba(255,255,255,0.6)', fontFamily:'DM Sans, sans-serif', fontWeight:400, textTransform:'uppercase' }}>WHOLE FOODS</span>
        </div>

        <h1 style={{ ...fadeUp(0.25), fontFamily:"'Poppins', sans-serif", fontWeight:900, fontSize:'clamp(52px, 16vw, 96px)', color:'#8cc63f', lineHeight:0.9, letterSpacing:'1px', marginBottom:'0' }}>
          orgalicious
        </h1>
        <p style={{ ...fadeUp(0.38), fontFamily:"'Poppins', sans-serif", fontWeight:700, fontSize:'clamp(22px, 7vw, 42px)', color:'rgba(255,255,255,0.85)', letterSpacing: isMobile ? '4px' : '8px', marginTop:'4px', marginBottom:'24px' }}>
          mealprep
        </p>

        <p style={{ ...fadeUp(0.52), fontSize:'clamp(15px, 4vw, 22px)', fontFamily:'DM Sans, sans-serif', fontWeight:600, color:'white', lineHeight:1.5, marginBottom:'10px' }}>
          Where <span style={{ color:'#8cc63f' }}>health meets flavor</span> &amp; <span style={{ color:'#8cc63f' }}>convenience meets nutrition.</span>
        </p>
        <p style={{ ...fadeUp(0.62), fontSize:'13px', fontFamily:'DM Sans, sans-serif', color:'rgba(255,255,255,0.55)', lineHeight:1.7, maxWidth:'500px', margin:'0 auto 28px' }}>
          Since July 2018, Orgalicious has revolutionized meal preparation — fresh, flavor-packed meals designed to fuel your fitness goals.
        </p>

        {/* CTA Buttons */}
        <div style={{ ...fadeUp(0.76), display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap' }}>
          <a href="#menu" style={{ display:'inline-flex', alignItems:'center', gap:'8px', backgroundColor:'#8cc63f', color:'#071e2b', padding: isMobile ? '12px 22px' : '14px 28px', borderRadius:'8px', fontSize:'14px', fontFamily:'DM Sans, sans-serif', fontWeight:700, textDecoration:'none', transition:'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor='#b5e04a'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor='#8cc63f'; e.currentTarget.style.transform='none'; }}>
            <span>Explore Menu</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a href="#packages" style={{ display:'inline-flex', alignItems:'center', gap:'8px', backgroundColor:'transparent', color:'white', padding: isMobile ? '12px 22px' : '14px 28px', borderRadius:'8px', border:'1.5px solid rgba(255,255,255,0.25)', fontSize:'14px', fontFamily:'DM Sans, sans-serif', fontWeight:600, textDecoration:'none', transition:'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor='#8cc63f'; e.currentTarget.style.color='#8cc63f'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor='rgba(255,255,255,0.25)'; e.currentTarget.style.color='white'; }}>
            View Packages
          </a>
        </div>

        {/* Stats strip */}
        <div className="hero-stats" style={{ ...fadeUp(0.9), display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: isMobile ? '8px' : '24px', marginTop:'40px', padding: isMobile ? '16px 12px' : '24px', background:'rgba(255,255,255,0.03)', borderRadius:'16px', border:'1px solid rgba(255,255,255,0.06)' }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'Bebas Neue, sans-serif', fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : 'clamp(26px, 6vw, 36px)', color:'#8cc63f', lineHeight:1, letterSpacing:'1px' }}>
                {stat.fixed ? '0' : `${stat.value}${stat.suffix}`}
              </div>
              <div style={{ fontSize: isMobile ? '9px' : '11px', color:'rgba(255,255,255,0.45)', fontFamily:'DM Sans, sans-serif', letterSpacing:'0.3px', marginTop:'4px', lineHeight:1.3 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:'absolute', bottom:'20px', left:'50%', animation:'bounceY 2.2s ease-in-out infinite', display:'flex', flexDirection:'column', alignItems:'center', gap:'6px', opacity:0.4 }}>
        <span style={{ fontSize:'9px', letterSpacing:'2px', color:'white', fontFamily:'DM Sans' }}>SCROLL</span>
        <div style={{ width:'1px', height:'32px', background:'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)' }} />
      </div>
    </section>
  );
}
