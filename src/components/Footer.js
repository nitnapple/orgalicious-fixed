'use client';
import React from 'react';
import { useInView } from '@/hooks/useInView';
import { useIsMobile } from '@/hooks/useIsMobile';
import FooterLinks from './FooterModal';

export default function Footer() {
  const [ctaRef, ctaVisible] = useInView();
  const isMobile = useIsMobile();

  const WA_MSG = encodeURIComponent('Hi! I am interested in learning more about the Orgalicious Mealprep subscription plans. Could you please share the details?');

  return (
    <footer id="contact" style={{ background:'linear-gradient(180deg, #071e2b 0%, #040f16 100%)', position:'relative', overflow:'hidden' }}>

      {/* CTA Banner */}
      <div ref={ctaRef} style={{ background:'linear-gradient(135deg, #0e4a2a 0%, #124260 100%)', padding:'clamp(40px, 8vw, 72px) clamp(16px, 5vw, 24px)', borderTop:'1px solid rgba(140,198,63,0.15)', borderBottom:'1px solid rgba(140,198,63,0.1)', textAlign:'center', position:'relative', overflow:'hidden', transition:'opacity 0.7s ease, transform 0.7s ease', opacity: ctaVisible ? 1 : 0, transform: ctaVisible ? 'none' : 'translateY(32px)' }}>
        <div style={{ position:'absolute', top:'-60px', left:'-60px', width:'240px', height:'240px', borderRadius:'50%', border:'1px solid rgba(140,198,63,0.08)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-80px', right:'-80px', width:'320px', height:'320px', borderRadius:'50%', border:'1px solid rgba(140,198,63,0.06)', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:2 }}>
          <h2 style={{ fontFamily:'DM Sans, sans-serif', fontWeight:600, fontSize:'clamp(18px, 5vw, 32px)', color:'white', lineHeight:1.4, marginBottom:'12px' }}>
            Are you ready to start your path to become a{' '}
            <span style={{ color:'#8cc63f' }}>better, happier version</span> of{' '}
            <span style={{ color:'#8cc63f' }}>yourself?</span>
          </h2>
          <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.6)', fontFamily:'DM Sans, sans-serif', marginBottom:'28px' }}>
            <strong style={{ color:'#8cc63f' }}>Contact us now</strong> to experience the Orgalicious difference.
          </p>
          <p style={{ fontSize:'11px', letterSpacing:'2px', color:'rgba(255,255,255,0.35)', fontFamily:'DM Sans, sans-serif', textTransform:'uppercase', marginBottom:'14px' }}>To subscribe now:</p>

          {/* Phone numbers */}
          <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', gap:'10px', justifyContent:'center', alignItems: isMobile ? 'stretch' : 'center', marginBottom:'12px', padding: isMobile ? '0 4px' : '0' }}>
            {['+91 7291068353', '+91 8510026005'].map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`}
                style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'10px', background:'rgba(140,198,63,0.1)', border:'1.5px solid rgba(140,198,63,0.3)', borderRadius:'12px', padding:'12px 18px', textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background='rgba(140,198,63,0.2)'; e.currentTarget.style.borderColor='#8cc63f'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background='rgba(140,198,63,0.1)'; e.currentTarget.style.borderColor='rgba(140,198,63,0.3)'; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="rgba(140,198,63,0.2)" /><path d="M8.4 11.6c.8 1.6 2 2.8 3.6 3.6l1.2-1.2c.2-.2.4-.2.6-.1 1 .3 2 .5 3.2.5.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5C9.4 18.5 5.5 14.6 5.5 9.5c0-.3.2-.5.5-.5H9c.3 0 .5.2.5.5 0 1.2.2 2.2.5 3.2.1.2 0 .4-.1.6L8.4 11.6z" fill="#8cc63f" /></svg>
                <span style={{ fontFamily:'Bebas Neue, sans-serif', fontSize: isMobile ? '18px' : '22px', color:'white', letterSpacing:'1px' }}>{phone}</span>
              </a>
            ))}
          </div>

          {/* WhatsApp */}
          <div style={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', gap:'10px', justifyContent:'center', alignItems: isMobile ? 'stretch' : 'center', marginBottom:'28px', padding: isMobile ? '0 4px' : '0' }}>
            {['+91 7291068353', '+91 8510026005'].map((wa) => (
              <a key={wa}
                href={`https://wa.me/${wa.replace(/\s|\+/g, '')}?text=${WA_MSG}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'10px', background:'rgba(37,211,102,0.1)', border:'1.5px solid rgba(37,211,102,0.3)', borderRadius:'12px', padding:'10px 18px', textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background='rgba(37,211,102,0.2)'; e.currentTarget.style.borderColor='#25d366'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background='rgba(37,211,102,0.1)'; e.currentTarget.style.borderColor='rgba(37,211,102,0.3)'; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52z" fill="#25d366"/><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07a8.17 8.17 0 0 1-2.4-1.48 9.04 9.04 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H8c-.17 0-.45.07-.69.32-.23.25-.9.88-.9 2.14s.92 2.49 1.05 2.66c.13.17 1.82 2.78 4.4 3.9.62.27 1.1.43 1.47.55.62.2 1.18.17 1.63.1.5-.07 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.07-.1-.27-.17-.57-.32z" fill="white"/></svg>
                <span style={{ fontFamily:'DM Sans, sans-serif', fontSize: isMobile ? '13px' : '14px', color:'white', fontWeight:600 }}>WhatsApp {wa}</span>
              </a>
            ))}
          </div>

          {/* Social row */}
          <div style={{ display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', alignItems:'center' }}>
            <a href="https://instagram.com/orgaliciousfoods" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'8px', textDecoration:'none', color:'rgba(255,255,255,0.7)', fontSize:'13px', fontFamily:'DM Sans, sans-serif', fontWeight:500, transition:'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color='#8cc63f')}
              onMouseLeave={(e) => (e.currentTarget.style.color='rgba(255,255,255,0.7)')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#8cc63f" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="#8cc63f" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1" fill="#8cc63f" /></svg>
              @orgaliciousfoods
            </a>
            <div style={{ width:'1px', height:'18px', background:'rgba(255,255,255,0.1)' }} />
            <a href={`https://wa.me/917291068353?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-flex', alignItems:'center', gap:'8px', textDecoration:'none', color:'rgba(255,255,255,0.7)', fontSize:'13px', fontFamily:'DM Sans, sans-serif', fontWeight:500, transition:'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color='#25d366')}
              onMouseLeave={(e) => (e.currentTarget.style.color='rgba(255,255,255,0.7)')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.95 11.95 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52z" fill="#25d366"/><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07a8.17 8.17 0 0 1-2.4-1.48 9.04 9.04 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H8c-.17 0-.45.07-.69.32-.23.25-.9.88-.9 2.14s.92 2.49 1.05 2.66c.13.17 1.82 2.78 4.4 3.9.62.27 1.1.43 1.47.55.62.2 1.18.17 1.63.1.5-.07 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.07-.1-.27-.17-.57-.32z" fill="white"/></svg>
              WhatsApp Us
            </a>
            <div style={{ width:'1px', height:'18px', background:'rgba(255,255,255,0.1)' }} />
            <a href="mailto:orgaliciousfoods@gmail.com"
              style={{ display:'inline-flex', alignItems:'center', gap:'8px', textDecoration:'none', color:'rgba(255,255,255,0.7)', fontSize:'13px', fontFamily:'DM Sans, sans-serif', fontWeight:500, transition:'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color='#8cc63f')}
              onMouseLeave={(e) => (e.currentTarget.style.color='rgba(255,255,255,0.7)')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="#8cc63f" strokeWidth="1.8" /><path d="M2 8l10 7 10-7" stroke="#8cc63f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              orgaliciousfoods@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <FooterLinks />

      {/* Bottom bar */}
      <div style={{ padding:'20px clamp(16px, 4vw, 24px)', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'10px', borderTop:'1px solid rgba(255,255,255,0.04)', maxWidth:'1200px', margin:'0 auto' }}>
        <div>
          <div style={{ fontFamily:'Bebas Neue, sans-serif', fontSize:'20px', color:'#8cc63f', letterSpacing:'1px', lineHeight:1 }}>orgalicious</div>
          <div style={{ fontSize:'9px', letterSpacing:'3px', color:'rgba(255,255,255,0.3)', fontFamily:'DM Sans, sans-serif', textTransform:'uppercase' }}>mealprep</div>
        </div>
        <p style={{ fontSize:'11px', color:'rgba(255,255,255,0.2)', fontFamily:'DM Sans, sans-serif', textAlign:'center' }}>
          © {new Date().getFullYear()} Orgalicious Mealprep. All rights reserved.
        </p>
        <div style={{ fontSize:'10px', color:'rgba(255,255,255,0.2)', fontFamily:'DM Sans, sans-serif', textAlign:'right' }}>
          Est. July 2018 · Whole Foods
        </div>
      </div>
    </footer>
  );
}
