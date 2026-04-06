'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Menu', href: '#menu' },
    { label: 'Packages', href: '#packages' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(7, 30, 43, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(140, 198, 63, 0.15)' : 'none',
        padding: '0 1rem',
        animation: mounted ? 'slideDown 0.6s cubic-bezier(0.22, 1, 0.36, 1) both' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span
              style={{
                fontSize: '7px',
                letterSpacing: '4px',
                color: 'white',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              WHOLE &nbsp;&nbsp;&nbsp; FOODS
            </span>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
              <span
                style={{
                  fontSize: '26px',
                  fontFamily: 'Bebas Neue, sans-serif',
                  color: '#8cc63f',
                  lineHeight: 1,
                  letterSpacing: '1px',
                }}
              >
                orgalicious
              </span>
            </div>
            <span
              style={{
                fontSize: '11px',
                color: '#8cc63f',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                letterSpacing: '3px',
                marginLeft: 'auto',
                alignSelf: 'flex-end',
              }}
            >
              mealprep
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'none',
            gap: '32px',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontSize: '13px',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.5px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#8cc63f')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.75)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              backgroundColor: '#8cc63f',
              color: '#071e2b',
              padding: '8px 20px',
              borderRadius: '6px',
              fontSize: '13px',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.5px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#b5e04a')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#8cc63f')}
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              backgroundColor: '#8cc63f',
              transition: 'transform 0.3s',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              backgroundColor: '#8cc63f',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              backgroundColor: '#8cc63f',
              transition: 'transform 0.3s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(7, 30, 43, 0.98)',
            backdropFilter: 'blur(12px)',
            padding: '20px 24px 28px',
            borderTop: '1px solid rgba(140, 198, 63, 0.15)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 500,
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: '#8cc63f',
              color: '#071e2b',
              padding: '12px 20px',
              borderRadius: '8px',
              fontSize: '15px',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              textDecoration: 'none',
              marginTop: '16px',
            }}
          >
            Order Now
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          nav button { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
