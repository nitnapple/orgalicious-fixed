'use client';
import { useInView } from '@/hooks/useInView';

const MENU = [
  {
    day: 'Monday',
    meals: [
      'Multigrain paneer grilled sandwiches served with salsa dip',
      'Farmfresh mexican salad topped with portion of fruit and served with a pack of doritos',
    ],
  },
  {
    day: 'Tuesday',
    meals: [
      'Soya chunks gravy with whole wheat kulcha served with onion rings and mint dip',
      'Achaari paneer tikka served with onion rings and mint dip',
    ],
  },
  {
    day: 'Wednesday',
    meals: [
      'Quinoa couscous upma topped with pomegranate and peanut served with yogurt',
      'Spinach stuffed soya chaap roulade served with corn cob cooked in orange juice and mint dip',
    ],
  },
  {
    day: 'Thursday',
    meals: [
      'Multigrain falafel wrap served with airfried nuggets and salsa dip',
      'Chickpeas and green sprouts salad chaat topped with peanut and pomegranate',
    ],
  },
  {
    day: 'Friday',
    meals: [
      'Amritsari veg keema served with focaccia bread and mint dip',
      'Saute vegetables malabar salad topped with peanut',
    ],
  },
  {
    day: 'Saturday',
    meals: [
      'Brown rice served with sauté vegetable and cottage cheese in tomato basil',
      'Soya chaap tikka served with mint dip and onion rings',
    ],
  },
];

export default function WeeklyMenu() {
  const [headerRef, headerVisible] = useInView();
  const [gridRef,   gridVisible]   = useInView(0.05);

  return (
    <section
      id="weekly-menu"
      style={{
        padding: 'clamp(64px, 10vw, 100px) 24px',
        background: 'linear-gradient(180deg, #0a2636 0%, #071e2b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative dot grid */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(140,198,63,0.05) 1px, transparent 1px)', backgroundSize:'28px 28px', pointerEvents:'none' }} />

      {/* Decorative glow orbs */}
      <div style={{ position:'absolute', top:'10%', right:'-80px', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle, rgba(140,198,63,0.06) 0%, transparent 65%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', left:'-80px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle, rgba(140,198,63,0.05) 0%, transparent 65%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:2 }}>

        {/* Header */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom:'clamp(40px, 8vw, 64px)' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '11px', letterSpacing: '4px', color: '#8cc63f',
            fontFamily: 'DM Sans, sans-serif', fontWeight: 600,
            textTransform: 'uppercase', marginBottom: '12px',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
          }}>
            — SAMPLE MENU —
          </span>
          <h2 style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(42px, 10vw, 68px)',
            color: 'white', lineHeight: 1, letterSpacing: '2px', marginBottom: '8px',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
          }}>
            WEEKLY MEAL{' '}<span style={{ color: '#8cc63f' }}>PLAN</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.45)', fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7,
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
          }}>
            Lean Muscle Gain plan — a taste of what your nutritionist crafts just for you every week.
          </p>
        </div>

        {/* Day cards grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
            gap: '20px',
          }}
        >
          {MENU.map((entry, i) => (
            <DayCard key={entry.day} entry={entry} index={i} visible={gridVisible} />
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          textAlign: 'center', marginTop: '52px',
          transition: 'opacity 0.7s ease 0.4s',
          opacity: gridVisible ? 1 : 0,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: 'rgba(140,198,63,0.06)',
            border: '1.5px dashed rgba(140,198,63,0.3)',
            borderRadius: '12px', padding: '14px 28px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 18l-6.1 3 1.2-6.8-5-4.9 6.9-1z" stroke="#8cc63f" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'14px', color:'rgba(255,255,255,0.6)' }}>
              Menu rotates weekly — your nutritionist tailors it to your{' '}
              <span style={{ color:'#8cc63f', fontWeight:700 }}>personal fitness goals.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DayCard({ entry, index, visible }) {
  return (
    <div
      style={{
        background: 'rgba(13,51,71,0.6)',
        border: '1.5px solid rgba(140,198,63,0.12)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, border-color 0.25s, box-shadow 0.25s`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(36px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(140,198,63,0.4)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)';
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(140,198,63,0.12)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Day header strip */}
      <div style={{
        background: 'linear-gradient(90deg, rgba(140,198,63,0.18) 0%, rgba(140,198,63,0.04) 100%)',
        borderBottom: '1px solid rgba(140,198,63,0.15)',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        {/* Day number dot */}
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: 'rgba(140,198,63,0.15)',
          border: '1px solid rgba(140,198,63,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'15px', color:'#8cc63f', letterSpacing:'1px' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '22px',
          color: 'white',
          letterSpacing: '6px',
          lineHeight: 1,
        }}>
          {entry.day.toUpperCase()}
        </h3>
      </div>

      {/* Meals list */}
      <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {entry.meals.map((meal, mi) => (
          <div key={mi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            {/* Green asterisk icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#8cc63f" style={{ flexShrink:0, marginTop:'3px' }}>
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {meal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
