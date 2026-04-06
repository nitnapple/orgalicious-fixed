'use client';
import React from 'react';
import { useInView } from '@/hooks/useInView';

const REVIEWS = [
  {
    name: 'Ashwini Koul',
    handle: 'Actor, Article 370',
    text: 'Orgalicious meal-prep balances my macros and delivers food as per my fitness goals. Must try!',
    rating: 5,
    avatar: 'AK',
    color: '#1a3a4a',
  },
  {
    name: 'Vyomesh Kaul',
    handle: '@vyomesh_koul',
    text: 'I really love their variety — their meals are macro-friendly and absolutely delicious.',
    rating: 5,
    avatar: 'VK',
    color: '#0e3328',
  },
  {
    name: 'Pallavi Yadav',
    handle: '@pallaviyadav_',
    text: 'Orgalicious prepares the meals as per my goals and requirements and provides meals that are delicious along with being healthy.',
    rating: 5,
    avatar: 'PY',
    color: '#1a2e4a',
  },
  {
    name: 'Shanya Verma',
    handle: '@thestudypie',
    text: 'Orgalicious food is really tasty and extremely hygienic. Cannot recommend enough!',
    rating: 5,
    avatar: 'SV',
    color: '#0e3328',
  },
  {
    name: 'Umang Katiyal',
    handle: '@umangkatyal',
    text: 'Thank you Orgalicious for keeping me fit and providing me with customized, healthy and tasty diet.',
    rating: 5,
    avatar: 'UK',
    color: '#1a3a4a',
  },
  {
    name: 'Allen Chowdhary',
    handle: '@allen_choudhary',
    text: "I don't compromise on my health and diet and Orgalicious meal-prep delivers the meals on point.",
    rating: 5,
    avatar: 'AC',
    color: '#1a2e4a',
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#8cc63f">
          <path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 18l-6.1 3 1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, animClass }) {
  const [liked,   setLiked]   = React.useState(false);
  const [hearted, setHearted] = React.useState(false);

  return (
    <div
      className={animClass}
      style={{
        background: `linear-gradient(135deg, ${review.color} 0%, rgba(7,30,43,0.9) 100%)`,
        border: '1.5px solid rgba(140,198,63,0.15)',
        borderRadius: '18px',
        padding: '22px',
        backdropFilter: 'blur(12px)',
        width: '280px',
        flexShrink: 0,
      }}
    >
      {/* Quote mark */}
      <div
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '48px',
          color: '#8cc63f',
          lineHeight: 0.7,
          marginBottom: '12px',
          opacity: 0.4,
        }}
      >
        "
      </div>

      <p
        style={{
          fontSize: '13px',
          color: 'rgba(255,255,255,0.8)',
          fontFamily: 'DM Sans, sans-serif',
          lineHeight: 1.7,
          marginBottom: '18px',
          fontStyle: 'italic',
        }}
      >
        {review.text}
      </p>

      <StarRating count={review.rating} />

      {/* 👍 ❤️ reaction row */}
      <div style={{ display:'flex', gap:'8px', marginTop:'14px' }}>
        <button
          onClick={() => setLiked(!liked)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: liked ? 'rgba(96,165,250,0.2)' : 'rgba(255,255,255,0.06)',
            border: liked ? '1px solid rgba(96,165,250,0.5)' : '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '5px 12px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            transform: liked ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          <span style={{ fontSize:'16px', lineHeight:1, filter: liked ? 'none' : 'grayscale(0.4)' }}>👍</span>
          <span style={{ fontSize:'11px', fontFamily:'DM Sans, sans-serif', fontWeight:600, color: liked ? 'rgba(96,165,250,1)' : 'rgba(255,255,255,0.45)' }}>
            Helpful
          </span>
        </button>
        <button
          onClick={() => setHearted(!hearted)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: hearted ? 'rgba(251,113,133,0.2)' : 'rgba(255,255,255,0.06)',
            border: hearted ? '1px solid rgba(251,113,133,0.5)' : '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            padding: '5px 12px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            transform: hearted ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          <span style={{ fontSize:'16px', lineHeight:1, filter: hearted ? 'none' : 'grayscale(0.4)' }}>❤️</span>
          <span style={{ fontSize:'11px', fontFamily:'DM Sans, sans-serif', fontWeight:600, color: hearted ? 'rgba(251,113,133,1)' : 'rgba(255,255,255,0.45)' }}>
            Love it
          </span>
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '14px',
          paddingTop: '14px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8cc63f, #4a9e1a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 700,
            color: '#071e2b',
            flexShrink: 0,
          }}
        >
          {review.avatar}
        </div>
        <div>
          <div
            style={{
              fontSize: '13px',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.2,
            }}
          >
            {review.name}
          </div>
          <div
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'DM Sans, sans-serif',
              marginTop: '2px',
            }}
          >
            {review.handle}
          </div>
        </div>
        {/* Verified */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginLeft: 'auto', flexShrink: 0 }}
        >
          <circle cx="12" cy="12" r="10" fill="#8cc63f" />
          <path d="M8 12l3 3 5-5" stroke="#071e2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [headerRef, headerVisible] = useInView();
  // Duplicate for infinite scroll
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      style={{
        padding: 'clamp(48px, 10vw, 100px) 0',
        background: 'linear-gradient(180deg, #0d3347 0%, #071e2b 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Left fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(90deg, #0d3347, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(270deg, #071e2b, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Section header */}
      <div ref={headerRef} style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 56px)', padding: '0 clamp(16px, 4vw, 24px)' }}>
        <span
          style={{
            display: 'inline-block',
            fontSize: '11px',
            letterSpacing: '4px',
            color: '#8cc63f',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase',
            marginBottom: '12px',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
          }}
        >
          — TESTIMONIALS —
        </span>
        <h2
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(42px, 10vw, 68px)',
            color: 'white',
            lineHeight: 1,
            letterSpacing: '2px',
            transition: 'opacity 0.6s ease 0.12s, transform 0.6s ease 0.12s',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'none' : 'translateY(24px)',
          }}
        >
          LET'S HEAR FROM OUR{' '}
          <span style={{ color: '#8cc63f' }}>EXPERTS</span>
        </h2>
      </div>

      {/* Scrolling row 1 — left to right */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '16px',
          animation: 'scrollLeft 40s linear infinite',
          width: 'max-content',
        }}
      >
        {doubled.map((review, i) => (
          <ReviewCard
            key={`row1-${i}`}
            review={review}
            animClass={`review-card animate-[float${(i % 6) + 1}_${6 + (i % 3)}s_ease-in-out_infinite]`}
          />
        ))}
      </div>

      {/* Scrolling row 2 — right to left */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          animation: 'scrollLeft 48s linear infinite reverse',
          width: 'max-content',
        }}
      >
        {[...doubled].reverse().map((review, i) => (
          <ReviewCard
            key={`row2-${i}`}
            review={review}
            animClass=""
          />
        ))}
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        section#reviews > div:nth-child(3):hover,
        section#reviews > div:nth-child(4):hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
