'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

export default function MealCard({ meal, index = 0 }) {
  const [activeTab, setActiveTab] = useState('macros');
  const [cardRef, cardVisible] = useInView(0.1);

  return (
    <div
      ref={cardRef}
      style={{
        background: 'rgba(13,51,71,0.7)',
        border: '1.5px solid rgba(140,198,63,0.15)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, border-color 0.3s, box-shadow 0.3s`,
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? 'translateY(0)' : 'translateY(36px)',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(140,198,63,0.4)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(140,198,63,0.15)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Meal photo */}
      <div style={{ position:'relative', height:'220px', borderBottom:'1px solid rgba(140,198,63,0.1)', overflow:'hidden' }}>
        <Image
          src={`/meals/meal-${meal.id}.jpg`}
          alt={meal.name}
          fill
          style={{ objectFit:'cover', transition:'transform 0.5s ease' }}
          sizes="(max-width: 768px) 100vw, 400px"
          onMouseEnter={(e) => { e.currentTarget.style.transform='scale(1.05)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform='scale(1)'; }}
        />

        {/* Tags */}
        <div style={{ position:'absolute', top:'12px', left:'12px', display:'flex', gap:'6px' }}>
          {meal.tags.map((tag) => (
            <span key={tag} style={{ fontSize:'10px', fontFamily:'DM Sans, sans-serif', fontWeight:600, letterSpacing:'0.5px', textTransform:'uppercase', padding:'3px 8px', borderRadius:'4px', background: tag==='Veg' ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)', color: tag==='Veg' ? '#4ade80' : '#f87171', border:`1px solid ${tag==='Veg' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}` }}>
              {tag==='Veg' ? '🟢' : '🔴'} {tag}
            </span>
          ))}
        </div>

        {/* Calorie badge */}
        <div style={{ position:'absolute', top:'12px', right:'12px', background:'rgba(140,198,63,0.15)', border:'1px solid rgba(140,198,63,0.35)', borderRadius:'8px', padding:'4px 10px', textAlign:'center' }}>
          <div style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'20px', color:'#8cc63f', lineHeight:1, letterSpacing:'1px' }}>{meal.macros.calories}</div>
          <div style={{ fontSize:'9px', color:'rgba(255,255,255,0.5)', fontFamily:'DM Sans, sans-serif', letterSpacing:'1px', textTransform:'uppercase' }}>kcal</div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding:'20px' }}>
        <h3 style={{ fontFamily:'DM Sans, sans-serif', fontWeight:700, fontSize:'15px', color:'white', lineHeight:1.4, marginBottom:'6px', textTransform:'uppercase', letterSpacing:'0.5px' }}>
          {meal.name}
        </h3>
        <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)', fontFamily:'DM Sans, sans-serif', marginBottom:'16px', lineHeight:1.5 }}>
          {meal.desc}
        </p>

        {/* Tab switcher */}
        <div style={{ display:'flex', background:'rgba(255,255,255,0.05)', borderRadius:'8px', padding:'3px', marginBottom:'16px' }}>
          {['macros','micros'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex:1, padding:'7px', borderRadius:'6px', border:'none', fontSize:'12px', fontFamily:'DM Sans, sans-serif', fontWeight:600, letterSpacing:'0.5px', textTransform:'uppercase', cursor:'pointer', transition:'all 0.2s', background: activeTab===tab ? '#8cc63f' : 'transparent', color: activeTab===tab ? '#071e2b' : 'rgba(255,255,255,0.4)' }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Macros */}
        {activeTab === 'macros' && (
          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {[
              { label:'Protein',       value:meal.macros.protein, unit:'g', color:'#8cc63f', pct:Math.min((meal.macros.protein/60)*100,100) },
              { label:'Carbohydrates', value:meal.macros.carbs,   unit:'g', color:'#b5e04a', pct:Math.min((meal.macros.carbs/100)*100,100) },
              { label:'Fats',          value:meal.macros.fat,     unit:'g', color:'#72a832', pct:Math.min((meal.macros.fat/35)*100,100)   },
              { label:'Fibre',         value:meal.macros.fibre,   unit:'g', color:'#5a8a28', pct:Math.min((meal.macros.fibre/15)*100,100) },
            ].map((item, barIdx) => (
              <div key={item.label}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'5px' }}>
                  <span style={{ fontSize:'12px', color:'rgba(255,255,255,0.55)', fontFamily:'DM Sans, sans-serif' }}>{item.label}</span>
                  <span style={{ fontSize:'12px', color:'white', fontFamily:'DM Sans, sans-serif', fontWeight:600 }}>{item.value}{item.unit}</span>
                </div>
                <div className="macro-bar-bg">
                  <div
                    className="macro-bar-fill"
                    style={{
                      width: cardVisible ? `${item.pct}%` : '0%',
                      background: item.color,
                      transition: `width 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1 + barIdx * 0.1 + 0.3}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Micros */}
        {activeTab === 'micros' && (
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px' }}>
            {meal.micros.map((micro) => (
              <div key={micro.label} style={{ background:'rgba(255,255,255,0.04)', borderRadius:'10px', padding:'10px 12px', border:'1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize:'14px', fontFamily:'DM Sans, sans-serif', fontWeight:700, color:'#8cc63f', lineHeight:1 }}>{micro.value}</div>
                <div style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', fontFamily:'DM Sans, sans-serif', marginTop:'3px' }}>{micro.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
