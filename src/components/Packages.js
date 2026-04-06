'use client';
import { useInView } from '@/hooks/useInView';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Packages() {
  const isMobile = useIsMobile();
  const [headerRef, headerVisible] = useInView();
  const [cardsRef,  cardsVisible]  = useInView(0.05);

  const packages = [
    { name:'Starter Pack',  tagline:'Kickstart your fitness journey.', meals:10, price:'₹350', highlight:false, perks:['Nutritionist consultation','Custom weekly menu','Morning OR evening delivery','Full macro tracking'] },
    { name:'Active Pack',   tagline:'Maintain your balance with this versatile option.', meals:30, price:'₹300', highlight:true, badge:'Most Popular', perks:['Nutritionist consultation','Custom weekly menu','Morning & evening delivery','Full macro tracking','Priority support'] },
    { name:'Fitness Pack',  tagline:'Elevate your game with this powerhouse package.', meals:60, price:'₹250', highlight:false, badge:'Best Value', perks:['Nutritionist consultation','Custom weekly menu','Morning & evening delivery','Full macro tracking','Priority support','Monthly fitness review'] },
  ];

  return (
    <section id="packages" style={{ padding:'clamp(64px, 10vw, 100px) clamp(16px, 4vw, 24px)', background:'linear-gradient(180deg, #071e2b 0%, #0d3347 100%)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(140,198,63,0.04) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:2 }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom:'clamp(32px, 8vw, 64px)' }}>
          <span style={{ display:'inline-block', fontSize:'11px', letterSpacing:'4px', color:'#8cc63f', fontFamily:'DM Sans, sans-serif', fontWeight:600, textTransform:'uppercase', marginBottom:'12px', transition:'opacity 0.6s ease, transform 0.6s ease', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>— PRICING —</span>
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(38px, 10vw, 68px)', color:'white', lineHeight:1, letterSpacing:'2px', marginBottom:'8px', transition:'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            MEAL <span style={{ color:'#8cc63f' }}>PACKAGES</span>
          </h2>
          <div style={{ display:'flex', justifyContent:'center', gap:'12px', marginTop:'16px', flexWrap:'wrap', transition:'opacity 0.6s ease 0.2s', opacity: headerVisible ? 1 : 0 }}>
            {['MORNING','EVENING'].map((slot) => (
              <div key={slot} style={{ background:'#8cc63f', color:'#071e2b', padding:'5px 14px', borderRadius:'6px', fontSize:'11px', fontFamily:'DM Sans, sans-serif', fontWeight:700, letterSpacing:'2px' }}>{slot}</div>
            ))}
          </div>
          <p style={{ color:'rgba(255,255,255,0.4)', fontSize:'12px', fontFamily:'DM Sans, sans-serif', marginTop:'8px', transition:'opacity 0.6s ease 0.25s', opacity: headerVisible ? 1 : 0 }}>Delivery slots available</p>
        </div>

        {/* Package cards */}
        <div ref={cardsRef} style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px', alignItems:'start' }}>
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              style={{
                background: pkg.highlight ? 'linear-gradient(160deg, #0e4a2a 0%, #124260 100%)' : 'rgba(13,51,71,0.6)',
                border: pkg.highlight ? '2px solid rgba(140,198,63,0.6)' : '1.5px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: isMobile ? '24px 20px 28px' : '28px 24px 32px',
                position: 'relative',
                marginTop: pkg.highlight && !isMobile ? '0' : '0',
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s, box-shadow 0.2s`,
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'scale(1)' : 'scale(0.9) translateY(24px)',
                animation: cardsVisible && pkg.highlight ? 'glowPulse 3s ease-in-out infinite' : 'none',
              }}
              onMouseEnter={(e) => { if (!isMobile) { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 40px rgba(0,0,0,0.3)'; }}}
              onMouseLeave={(e) => { if (!isMobile) { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='none'; }}}
            >
              {pkg.badge && (
                <div style={{ position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)', background:'#8cc63f', color:'#071e2b', padding:'4px 16px', borderRadius:'20px', fontSize:'11px', fontFamily:'DM Sans, sans-serif', fontWeight:700, whiteSpace:'nowrap' }}>{pkg.badge}</div>
              )}
              <div style={{ display:'inline-block', background: pkg.highlight ? 'rgba(140,198,63,0.2)' : 'rgba(255,255,255,0.06)', color: pkg.highlight ? '#8cc63f' : 'rgba(255,255,255,0.5)', padding:'4px 12px', borderRadius:'6px', fontSize:'11px', fontFamily:'DM Sans, sans-serif', fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', marginBottom:'16px' }}>{pkg.name}</div>
              <div style={{ marginBottom:'10px' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:'8px' }}>
                  <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize: isMobile ? '48px' : '56px', color:'#8cc63f', lineHeight:1 }}>{pkg.meals}</span>
                  <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'15px', color:'rgba(255,255,255,0.6)', fontWeight:500 }}>Meals</span>
                </div>
                <div style={{ display:'flex', alignItems:'baseline', gap:'6px', marginTop:'2px' }}>
                  <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'28px', color:'white' }}>{pkg.price}</span>
                  <span style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)', fontFamily:'DM Sans, sans-serif' }}>per meal</span>
                </div>
              </div>
              <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', fontFamily:'DM Sans, sans-serif', lineHeight:1.6, marginBottom:'16px' }}>{pkg.tagline}</p>
              <div style={{ height:'1px', background:'rgba(255,255,255,0.07)', marginBottom:'16px' }} />
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'9px', marginBottom:'24px' }}>
                {pkg.perks.map((perk) => (
                  <li key={perk} style={{ display:'flex', alignItems:'center', gap:'10px', fontSize:'13px', color:'rgba(255,255,255,0.65)', fontFamily:'DM Sans, sans-serif' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink:0 }}><path d="M5 13l4 4L19 7" stroke="#8cc63f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {perk}
                  </li>
                ))}
              </ul>
              <a href="#contact"
                style={{ display:'block', textAlign:'center', padding:'13px', borderRadius:'10px', fontSize:'14px', fontFamily:'DM Sans, sans-serif', fontWeight:700, textDecoration:'none', transition:'all 0.2s', background: pkg.highlight ? '#8cc63f' : 'transparent', color: pkg.highlight ? '#071e2b' : '#8cc63f', border: pkg.highlight ? 'none' : '1.5px solid rgba(140,198,63,0.4)' }}
                onMouseEnter={(e) => { if(pkg.highlight){e.currentTarget.style.background='#b5e04a';}else{e.currentTarget.style.background='rgba(140,198,63,0.1)';e.currentTarget.style.borderColor='#8cc63f';} }}
                onMouseLeave={(e) => { if(pkg.highlight){e.currentTarget.style.background='#8cc63f';}else{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='rgba(140,198,63,0.4)';} }}
              >Subscribe Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
