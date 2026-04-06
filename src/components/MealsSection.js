'use client';
import { useInView } from '@/hooks/useInView';
import MealCard from './MealCard';

const MEALS = [
  { id:1, name:'Brown Rice with Sautéed Vegetables & Grilled Chicken in Tomato Basil Sauce', desc:'Wholesome brown rice paired with colourful sautéed veggies and tender grilled chicken in a house-made tomato basil sauce.', tags:['Non-Veg'], macros:{calories:480,protein:42,carbs:52,fat:11,fibre:8}, micros:[{label:'Vitamin A',value:'320 µg'},{label:'Vitamin C',value:'28 mg'},{label:'Iron',value:'4.2 mg'},{label:'Calcium',value:'85 mg'},{label:'Potassium',value:'620 mg'},{label:'Magnesium',value:'72 mg'}] },
  { id:2, name:'Moong Dal Chilla with Paneer & Soya Bhurji and Mint Dip', desc:'Crispy moong dal crepes stuffed with spiced paneer and soya bhurji, served with a refreshing homemade mint dip.', tags:['Veg'], macros:{calories:390,protein:32,carbs:38,fat:13,fibre:7}, micros:[{label:'Vitamin B12',value:'1.8 µg'},{label:'Vitamin D',value:'12 µg'},{label:'Iron',value:'5.1 mg'},{label:'Calcium',value:'290 mg'},{label:'Zinc',value:'3.8 mg'},{label:'Folate',value:'145 µg'}] },
  { id:3, name:'Brown Rice Paneer Biriyani', desc:'Aromatic brown rice biriyani loaded with golden paneer cubes, whole spices, and fresh herbs — a protein-rich classic reinvented.', tags:['Veg'], macros:{calories:510,protein:28,carbs:68,fat:14,fibre:6}, micros:[{label:'Vitamin K',value:'55 µg'},{label:'Vitamin C',value:'18 mg'},{label:'Iron',value:'3.6 mg'},{label:'Calcium',value:'310 mg'},{label:'Phosphorus',value:'420 mg'},{label:'Manganese',value:'2.1 mg'}] },
  { id:4, name:'Multigrain Falafel Sub', desc:'Crispy air-fried falafel nestled in a multigrain sub with lettuce, corn, fresh vegetables, and a tangy house sauce.', tags:['Veg'], macros:{calories:360,protein:18,carbs:55,fat:9,fibre:10}, micros:[{label:'Vitamin B6',value:'0.6 mg'},{label:'Vitamin E',value:'3.2 mg'},{label:'Iron',value:'4.8 mg'},{label:'Selenium',value:'18 µg'},{label:'Copper',value:'0.4 mg'},{label:'Folate',value:'180 µg'}] },
  { id:5, name:'Paneer Tikka & Soya Chaap Tikka in a Box with Onion Rings & Mint Dip', desc:'A flavour-packed tikka box featuring marinated paneer and soya chaap, char-grilled to perfection with crispy onion rings.', tags:['Veg'], macros:{calories:420,protein:38,carbs:24,fat:18,fibre:5}, micros:[{label:'Vitamin B12',value:'2.1 µg'},{label:'Vitamin C',value:'22 mg'},{label:'Calcium',value:'380 mg'},{label:'Iron',value:'4.0 mg'},{label:'Zinc',value:'5.2 mg'},{label:'Omega-3',value:'180 mg'}] },
];

export default function MealsSection() {
  const [headerRef, headerVisible] = useInView();

  return (
    <section id="menu" style={{ padding:'clamp(64px, 10vw, 100px) 24px', background:'linear-gradient(180deg, #0d3347 0%, #071e2b 100%)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(140,198,63,0.06) 1px, transparent 1px)', backgroundSize:'32px 32px', pointerEvents:'none' }} />

      <div style={{ maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:2 }}>
        {/* Header */}
        <div ref={headerRef} style={{ textAlign:'center', marginBottom:'clamp(40px, 8vw, 64px)' }}>
          <span style={{ display:'inline-block', fontSize:'11px', letterSpacing:'4px', color:'#8cc63f', fontFamily:'DM Sans, sans-serif', fontWeight:600, textTransform:'uppercase', marginBottom:'12px', transition:'opacity 0.6s ease, transform 0.6s ease', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            — DEMO MENU —
          </span>
          <h2 style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'clamp(42px, 10vw, 68px)', color:'white', lineHeight:1, letterSpacing:'2px', marginBottom:'8px', transition:'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            FEATURED{' '}<span style={{ color:'#8cc63f' }}>MEALS</span>
          </h2>
          <p style={{ color:'rgba(255,255,255,0.45)', fontFamily:'DM Sans, sans-serif', fontSize:'14px', maxWidth:'420px', margin:'0 auto', lineHeight:1.7, transition:'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s', opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'none' : 'translateY(24px)' }}>
            A preview of our rotating menu — every meal calorie counted with full macro &amp; micro nutritional details.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display:'flex', gap:'16px', justifyContent:'center', marginBottom:'32px', transition:'opacity 0.6s ease 0.3s', opacity: headerVisible ? 1 : 0 }}>
          {[{dot:'#4ade80',label:'Vegetarian',border:'rgba(34,197,94,0.3)'},{dot:'#f87171',label:'Non-Vegetarian',border:'rgba(239,68,68,0.3)'}].map((item) => (
            <div key={item.label} style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'12px', color:'rgba(255,255,255,0.5)', fontFamily:'DM Sans, sans-serif' }}>
              <div style={{ width:'10px', height:'10px', borderRadius:'50%', background:item.dot, border:`1.5px solid ${item.border}` }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Cards grid — index passed for stagger */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap:'20px' }}>
          {MEALS.map((meal, i) => (
            <MealCard key={meal.id} meal={meal} index={i} />
          ))}
        </div>

        {/* More meals note */}
        <div style={{ textAlign:'center', marginTop:'48px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'12px', background:'rgba(140,198,63,0.06)', border:'1.5px dashed rgba(140,198,63,0.3)', borderRadius:'12px', padding:'14px 28px' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#8cc63f" strokeWidth="1.8" /><path d="M12 8v4l3 3" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" /></svg>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'14px', color:'rgba(255,255,255,0.6)' }}>
              And <span style={{ color:'#8cc63f', fontWeight:700 }}>many more</span> — your nutritionist designs a custom weekly menu just for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
