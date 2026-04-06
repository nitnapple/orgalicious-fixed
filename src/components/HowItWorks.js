'use client';
import { useInView } from '@/hooks/useInView';

export default function HowItWorks() {
  const [headerRef, headerVisible] = useInView();
  const [stepsRef,  stepsVisible]  = useInView(0.08);

  const steps = [
    {
      number: '01', title: 'Assigned Nutritionist',
      desc: 'A dedicated nutritionist takes your basic medical details: height, weight, food allergies (if any), and fitness goals upon sign-up.',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="7" r="4" stroke="#8cc63f" strokeWidth="1.8" /><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" /></svg>),
    },
    {
      number: '02', title: 'Menu Design',
      desc: 'Your nutritionist designs a personalised weekly menu tailored specifically to your fitness requirements and taste preferences.',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#8cc63f" strokeWidth="1.8" /><path d="M8 12h8M8 8h8M8 16h5" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" /></svg>),
    },
    {
      number: '03', title: 'Client Review & Finalization',
      desc: 'You review your custom menu and finalize it from your end — making any changes to suit your preferences perfectly.',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="#8cc63f" strokeWidth="1.8" /></svg>),
    },
    {
      number: '04', title: 'Meal Delivery',
      desc: 'Orgalicious delivers flavor-packed meals straight to your door the next day — ready to fuel your fitness goals.',
      icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" /><rect x="9" y="11" width="14" height="10" rx="2" stroke="#8cc63f" strokeWidth="1.8" /><circle cx="12" cy="21" r="1" fill="#8cc63f" /><circle cx="20" cy="21" r="1" fill="#8cc63f" /></svg>),
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{ padding:'clamp(48px, 10vw, 100px) clamp(16px, 4vw, 24px)', background:'linear-gradient(180deg, #071e2b 0%, #0a2636 100%)', position:'relative', overflow:'hidden' }}
    >
      {/* Background grid */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(140,198,63,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(140,198,63,0.03) 1px, transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />

      <div style={{ maxWidth:'900px', margin:'0 auto', position:'relative', zIndex:2 }}>

        {/* Section header */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom:'clamp(40px, 8vw, 64px)' }}>
          <span style={{ display:'inline-block', fontSize:'11px', letterSpacing:'4px', color:'#8cc63f', fontFamily:'DM Sans, sans-serif', fontWeight:600, textTransform:'uppercase', marginBottom:'12px', transition:'opacity 0.6s ease, transform 0.6s ease', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            — THE PROCESS —
          </span>
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(42px, 10vw, 68px)', color:'white', lineHeight:1, letterSpacing:'2px', transition:'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            HOW IT{' '}<span style={{ color:'#8cc63f' }}>WORKS</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.45)', fontFamily:'DM Sans, sans-serif', fontSize:'14px', marginTop:'12px', maxWidth:'400px', margin:'12px auto 0', transition:'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            Four simple steps to get nutrition-optimised meals on your doorstep.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} style={{ display:'flex', flexDirection:'column', gap:'0' }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                position: 'relative',
                paddingBottom: i < steps.length - 1 ? '0' : '0',
                transition: `opacity 0.65s ease ${i * 0.14}s, transform 0.65s ease ${i * 0.14}s`,
                opacity: stepsVisible ? 1 : 0,
                transform: stepsVisible ? 'none' : 'translateX(-36px)',
              }}
            >
              {/* Left: icon + connector */}
              <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0, width:'56px' }}>
                <div style={{ width:'56px', height:'56px', borderRadius:'14px', background:'rgba(140,198,63,0.1)', border:'1.5px solid rgba(140,198,63,0.3)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:`box-shadow 0.3s ease ${i * 0.14}s`, boxShadow: stepsVisible ? '0 0 18px rgba(140,198,63,0.15)' : 'none' }}>
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div style={{
                    width: '2px',
                    height: '60px',
                    background: 'repeating-linear-gradient(to bottom, rgba(140,198,63,0.4) 0px, rgba(140,198,63,0.4) 6px, transparent 6px, transparent 12px)',
                    marginTop: '8px',
                    marginBottom: '8px',
                    transformOrigin: 'top',
                    transition: `transform 0.6s ease ${i * 0.14 + 0.3}s`,
                    transform: stepsVisible ? 'scaleY(1)' : 'scaleY(0)',
                  }} />
                )}
              </div>

              {/* Right: content */}
              <div style={{ flex:1, paddingBottom: i < steps.length - 1 ? '16px' : '0', paddingTop:'10px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'8px' }}>
                  <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'13px', color:'#8cc63f', letterSpacing:'2px' }}>STEP {step.number}</span>
                  <div style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.06)' }} />
                </div>
                <h3 style={{ fontFamily:'DM Sans, sans-serif', fontWeight:700, fontSize:'clamp(16px, 4vw, 20px)', color:'white', marginBottom:'8px' }}>{step.title}</h3>
                <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'14px', color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
