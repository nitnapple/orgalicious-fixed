'use client';
import { useInView } from '@/hooks/useInView';

export default function Features() {
  const [headerRef, headerVisible] = useInView();
  const [gridRef,   gridVisible]   = useInView(0.05);

  const features = [
    { title:'Extensive Variety',  desc:'Rotating weekly menus with diverse cuisines — never eat the same meal twice.',
      icon:(<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#8cc63f" strokeWidth="1.8" /><path d="M8 21h8M12 17v4" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" /><path d="M7 8l3 3 5-5" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
    { title:'Doorstep Delivery',  desc:'Morning & evening delivery slots so your meal arrives exactly when you need it.',
      icon:(<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#8cc63f" strokeWidth="1.8" /><circle cx="12" cy="9" r="2.5" stroke="#8cc63f" strokeWidth="1.8" /><path d="M3 20h18" stroke="#8cc63f" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2" /></svg>) },
    { title:'Freshly Prepared',   desc:'Every order is cooked fresh — no batch-cooking, no freezing, no compromise.',
      icon:(<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
    { title:'Calorie Counted',    desc:'Each meal comes with precise calorie and macro counts — track your intake effortlessly.',
      icon:(<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#8cc63f" strokeWidth="1.8" /><path d="M12 6v6l4 2" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" /><text x="6" y="20" fill="#8cc63f" fontSize="5" fontWeight="700">KCAL</text></svg>) },
    { title:'Chef-Crafted',       desc:'Designed by seasoned chefs and nutritionists who know how to make healthy taste incredible.',
      icon:(<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 18l-6.1 3 1.2-6.8-5-4.9 6.9-1z" stroke="#8cc63f" strokeWidth="1.8" strokeLinejoin="round" /></svg>) },
    { title:'No Preservatives',   desc:'Pure, clean ingredients — zero artificial preservatives or hidden additives. Ever.',
      icon:(<svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
  ];

  return (
    <section
      id="features"
      style={{ padding:'clamp(64px, 10vw, 96px) 24px', background:'linear-gradient(180deg, #0a2636 0%, #8cc63f 100%)', position:'relative', overflow:'hidden' }}
    >
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'8px', background:'#071e2b', clipPath:'polygon(0 0, 100% 0, 98% 55%, 94% 100%, 90% 55%, 86% 100%, 82% 55%, 78% 100%, 74% 55%, 70% 100%, 66% 55%, 62% 100%, 58% 55%, 54% 100%, 50% 55%, 46% 100%, 42% 55%, 38% 100%, 34% 55%, 30% 100%, 26% 55%, 22% 100%, 18% 55%, 14% 100%, 10% 55%, 6% 100%, 2% 55%, 0 100%)' }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'8px', background:'#0d3347', clipPath:'polygon(0 100%, 100% 100%, 98% 45%, 94% 0%, 90% 45%, 86% 0%, 82% 45%, 78% 0%, 74% 45%, 70% 0%, 66% 45%, 62% 0%, 58% 45%, 54% 0%, 50% 45%, 46% 0%, 42% 45%, 38% 0%, 34% 45%, 30% 0%, 26% 45%, 22% 0%, 18% 45%, 14% 0%, 10% 45%, 6% 0%, 2% 45%, 0 0%)' }} />

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:2 }}>

        {/* Header */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom:'clamp(40px, 8vw, 60px)' }}>
          <span style={{ display:'inline-block', fontSize:'11px', letterSpacing:'4px', color:'#071e2b', fontFamily:'DM Sans, sans-serif', fontWeight:700, textTransform:'uppercase', marginBottom:'12px', transition:'opacity 0.6s ease, transform 0.6s ease', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            — WHY CHOOSE US —
          </span>
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(40px, 10vw, 64px)', color:'#071e2b', lineHeight:1, letterSpacing:'2px', transition:'opacity 0.6s ease 0.12s, transform 0.6s ease 0.12s', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            GET A TASTE OF THE{' '}<span style={{ color:'white' }}>ORGALICIOUS</span><br />SUBSCRIPTION
          </h2>
        </div>

        {/* Feature grid */}
        <div ref={gridRef} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap:'16px' }}>
          {features.map((feat, i) => (
            <div
              key={feat.title}
              style={{
                background: 'rgba(7,30,43,0.65)',
                backdropFilter: 'blur(10px)',
                border: '1.5px solid rgba(140,198,63,0.2)',
                borderRadius: '16px',
                padding: '28px 24px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                transition: `opacity 0.55s ease ${i * 0.09}s, transform 0.55s ease ${i * 0.09}s, border-color 0.2s`,
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'none' : 'translateY(32px)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor='rgba(140,198,63,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor='rgba(140,198,63,0.2)'; }}
            >
              <div
                style={{ width:'52px', height:'52px', background:'rgba(140,198,63,0.1)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'transform 0.4s ease, background 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform='rotate(12deg) scale(1.1)'; e.currentTarget.style.background='rgba(140,198,63,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform='none'; e.currentTarget.style.background='rgba(140,198,63,0.1)'; }}
              >
                {feat.icon}
              </div>
              <div>
                <h3 style={{ fontFamily:'DM Sans, sans-serif', fontWeight:700, fontSize:'16px', color:'white', marginBottom:'6px', letterSpacing:'0.3px', textTransform:'uppercase' }}>{feat.title}</h3>
                <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'13px', color:'rgba(255,255,255,0.55)', lineHeight:1.65 }}>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
