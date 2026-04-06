'use client';
import React, { useEffect } from 'react';
/* ─── Content definitions ───────────────────────────────────────── */

const CONTENT = {
  delivery: {
    title: 'Delivery Schedule',
    icon: '🚚',
    sections: [
      {
        heading: 'Daily Delivery Slots',
        body: null,
        cards: [
          { label: '🌅 Morning Slot', value: '7:00 AM – 9:00 AM', note: 'Fresh breakfast & lunch prep delivered before your day begins.' },
          { label: '🌆 Evening Slot', value: '6:00 PM – 8:00 PM', note: 'Dinner & next-day meal prep delivered at the end of your day.' },
        ],
      },
      {
        heading: 'Delivery Days',
        body: 'We deliver 6 days a week — Monday through Saturday. Sunday is our kitchen prep day to ensure maximum freshness for the week ahead.',
      },
      {
        heading: 'Coverage Areas',
        body: 'Currently delivering across major areas in Delhi NCR including Noida, Ghaziabad, Faridabad, Gurugram, and central Delhi. Contact us to check if your pincode is covered.',
      },
      {
        heading: 'How It Works',
        list: [
          'Finalize your menu with your nutritionist by 8:00 PM the previous night.',
          'Meals are freshly prepared starting at 5:00 AM each morning.',
          'Packed in tamper-proof, eco-friendly containers with calorie labels.',
          'Delivered to your doorstep within your chosen slot.',
          'Tracking updates sent via WhatsApp.',
        ],
      },
      {
        heading: 'Important Notes',
        list: [
          'No delivery on national holidays — advance notice provided.',
          'Delivery charges may apply based on location.',
          'Minimum 24-hour notice required to change or pause a delivery.',
          'Contact us on WhatsApp for real-time delivery updates.',
        ],
      },
    ],
  },

  blogs: {
    title: 'Blogs',
    icon: '📝',
    posts: [
      {
        tag: 'Nutrition',
        date: 'March 2025',
        title: 'Why Meal Prepping is the Secret Weapon for Fat Loss',
        excerpt: 'Most people fail at fat loss not because of a lack of willpower — it\'s because they don\'t have a system. Meal prepping eliminates decision fatigue, controls portion sizes, and keeps your macros on track every single day. Here\'s how to use it like a pro.',
        read: '5 min read',
      },
      {
        tag: 'Fitness',
        date: 'February 2025',
        title: 'Protein Myths Busted: How Much Do You Really Need?',
        excerpt: 'The fitness world is full of conflicting advice on protein. 1g per pound? 2g per kg? Plant vs. animal? We break down the science so you can fuel muscle gain without overthinking your plate. Spoiler: most people are already eating enough — they\'re just eating it wrong.',
        read: '7 min read',
      },
      {
        tag: 'Meal Prep',
        date: 'January 2025',
        title: 'The Orgalicious Approach: How We Build Your Weekly Menu',
        excerpt: 'Every Orgalicious menu starts with a conversation, not a template. Your nutritionist analyses your goals, lifestyle, food preferences, and medical history before designing a menu that works specifically for your body — not a generic calorie target.',
        read: '4 min read',
      },
      {
        tag: 'Wellness',
        date: 'December 2024',
        title: 'Brown Rice vs. White Rice: Which One Should You Eat?',
        excerpt: 'We\'ve been using brown rice since day one — but why? The answer goes beyond fibre. From glycaemic index to micronutrient density, we explain why the choice of grain matters more than most people realise, and when white rice might actually be the better option.',
        read: '6 min read',
      },
      {
        tag: 'Recipes',
        date: 'November 2024',
        title: 'High-Protein Vegetarian Meals That Actually Taste Good',
        excerpt: 'Paneer, soya chaap, moong dal, chickpeas — India has an incredible arsenal of plant proteins that most vegetarians aren\'t using to their full potential. We\'ve compiled our top five high-protein veg meals along with why they work nutritionally.',
        read: '8 min read',
      },
    ],
  },

  faqs: {
    title: 'FAQs',
    icon: '💬',
    items: [
      {
        q: 'How do I get started with Orgalicious?',
        a: 'Simply reach out via WhatsApp or call us on +91 7291068353 / +91 8510026005. A dedicated nutritionist will be assigned to you who will collect your health details, goals, and food preferences, and design a personalised weekly menu for you.',
      },
      {
        q: 'Do you cater to vegetarians and non-vegetarians both?',
        a: 'Yes, absolutely. We offer both vegetarian and non-vegetarian meal plans. Every card in our menu is clearly marked — green for veg, red for non-veg — and your nutritionist will customise accordingly.',
      },
      {
        q: 'Can I change my menu mid-week?',
        a: 'Yes, with 24-hour advance notice you can request changes to your upcoming meals. Our nutritionist will work with you to adjust the menu while keeping your daily macros and calorie targets intact.',
      },
      {
        q: 'Are the meals fresh or frozen?',
        a: 'Every meal is cooked fresh each morning. We do not batch-cook, freeze, or use preservatives. Meals are packed immediately after cooking and dispatched within 2–3 hours.',
      },
      {
        q: 'What areas do you deliver to?',
        a: 'We currently deliver across Delhi NCR — including Noida, Ghaziabad, Faridabad, Gurugram, and central Delhi. Contact us to confirm delivery availability for your specific pincode.',
      },
      {
        q: 'What is included in a subscription plan?',
        a: 'All plans include a nutritionist consultation, a custom weekly menu, macro tracking details on every meal, and doorstep delivery. Higher-tier plans add morning + evening delivery slots and priority support.',
      },
      {
        q: 'Can I pause or cancel my subscription?',
        a: 'You can pause your subscription with 24-hour notice and resume anytime. Cancellation is available at the end of any subscription cycle. Please contact us via WhatsApp to manage your plan.',
      },
      {
        q: 'What are the delivery timings?',
        a: 'We offer two daily slots: Morning (7:00 AM – 9:00 AM) and Evening (6:00 PM – 8:00 PM). The Active and Fitness packs include both slots; the Starter Pack offers one slot of your choice.',
      },
      {
        q: 'How is the food packaged?',
        a: 'Meals are packed in tamper-proof, BPA-free containers with calorie and macro labels printed on each box. We use eco-friendly packaging wherever possible.',
      },
      {
        q: 'Do you accommodate food allergies?',
        a: 'Yes. During onboarding, your nutritionist will ask about any food allergies or intolerances and build your menu around them. Please always keep your nutritionist updated if anything changes.',
      },
    ],
  },

  about: {
    title: 'About Us',
    icon: '🌿',
    sections: [
      {
        heading: 'Our Story',
        body: 'Orgalicious Mealprep was founded in July 2018 with a single belief: eating healthy should never mean eating bland. We started as a small kitchen with a big mission — to make genuinely nutritious, chef-crafted meals accessible to fitness-conscious people across Delhi NCR.',
      },
      {
        heading: 'Where Health Meets Flavor',
        body: 'Over 5,000 clients later, our core philosophy hasn\'t changed. Every meal that leaves our kitchen is calorie-counted, macro-tracked, freshly cooked, and — most importantly — actually delicious. We work at the intersection of culinary craft and nutritional science.',
      },
      {
        heading: 'The Orgalicious Difference',
        list: [
          '🧑‍⚕️ Dedicated nutritionist assigned to every client',
          '👨‍🍳 Chef-crafted menus with rotating weekly variety',
          '🌱 Zero preservatives — ever',
          '📦 Fresh-cooked daily, not batch-frozen',
          '📊 Full macro + micro nutritional breakdown per meal',
          '🚪 Doorstep delivery with WhatsApp updates',
        ],
      },
      {
        heading: 'Our Mission',
        body: 'To make personalised nutrition effortless. We believe the best diet is the one you can actually stick to — and that starts with food that tastes good, fits your goals, and shows up at your door without hassle.',
      },
      {
        heading: 'Get In Touch',
        body: 'We\'re a team that genuinely cares about your health journey. Reach us any time on WhatsApp at +91 7291068353 or +91 8510026005, or drop us a line at orgaliciousfoods@gmail.com.',
      },
    ],
  },

  terms: {
    title: 'Terms & Conditions',
    icon: '📋',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By subscribing to or using any Orgalicious Mealprep service, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.',
      },
      {
        heading: '2. Subscription & Payments',
        list: [
          'All subscription plans are prepaid and non-transferable.',
          'Payments must be completed before meal preparation begins.',
          'Prices are subject to change with 7 days\' advance notice.',
          'GST and delivery charges (if applicable) are additional.',
        ],
      },
      {
        heading: '3. Cancellation & Refunds',
        list: [
          'Cancellations requested before meal preparation begins are eligible for a full refund.',
          'Once meals are prepared and dispatched, no refunds are applicable.',
          'Subscription pauses require 24-hour advance notice.',
          'Orgalicious reserves the right to refuse service in cases of misuse.',
        ],
      },
      {
        heading: '4. Delivery',
        list: [
          'Orgalicious is not responsible for delays caused by incorrect delivery addresses.',
          'Missed deliveries due to recipient unavailability will not be refunded.',
          'Delivery schedules are subject to change on national holidays.',
        ],
      },
      {
        heading: '5. Health Disclaimer',
        body: 'Our meal plans are designed by qualified nutritionists based on information provided by you. They are not a substitute for medical advice. Consult a doctor before beginning any new diet plan, especially if you have a pre-existing medical condition.',
      },
      {
        heading: '6. Intellectual Property',
        body: 'All content on this website — including menus, recipes, branding, and imagery — is the intellectual property of Orgalicious Mealprep and may not be reproduced without written consent.',
      },
      {
        heading: '7. Amendments',
        body: 'Orgalicious reserves the right to update these Terms at any time. Continued use of our services following any changes constitutes acceptance of the revised Terms.',
      },
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    icon: '🔒',
    sections: [
      {
        heading: '1. Information We Collect',
        list: [
          'Name, phone number, and email address provided during registration.',
          'Health details (height, weight, allergies, fitness goals) shared with your nutritionist.',
          'Delivery address and payment information.',
          'Usage data from website interactions.',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        list: [
          'To design and deliver your personalised meal plan.',
          'To contact you regarding your subscription, deliveries, and menu updates.',
          'To improve our services and website experience.',
          'To send promotional content — only with your consent.',
        ],
      },
      {
        heading: '3. Data Sharing',
        body: 'We do not sell, rent, or trade your personal information to third parties. Health data shared with your nutritionist is kept strictly confidential and used solely for meal planning purposes.',
      },
      {
        heading: '4. Data Security',
        body: 'We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      },
      {
        heading: '5. WhatsApp & Communication',
        body: 'By providing your phone number, you consent to receiving service-related messages via WhatsApp and SMS. You may opt out at any time by contacting us.',
      },
      {
        heading: '6. Cookies',
        body: 'Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, though this may affect some functionality.',
      },
      {
        heading: '7. Your Rights',
        list: [
          'Request access to the personal data we hold about you.',
          'Request correction or deletion of your data.',
          'Withdraw consent for marketing communications at any time.',
          'Raise a complaint by contacting orgaliciousfoods@gmail.com.',
        ],
      },
      {
        heading: '8. Contact',
        body: 'For any privacy-related queries, reach us at orgaliciousfoods@gmail.com or WhatsApp +91 7291068353.',
      },
    ],
  },
};

/* ─── Modal shell ────────────────────────────────────────────────── */

function Modal({ pageKey, onClose }) {
  const data = CONTENT[pageKey];

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!data) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(4,15,22,0.88)',
        backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(8px, 3vw, 20px)',
        animation: 'fadeInUp 0.25s ease both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(160deg, #0d3347 0%, #071e2b 100%)',
          border: '1.5px solid rgba(140,198,63,0.2)',
          borderRadius: '24px',
          width: '100%', maxWidth: '680px',
          maxHeight: '90vh',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: 'clamp(14px, 4vw, 22px) clamp(16px, 5vw, 28px)',
          borderBottom: '1px solid rgba(140,198,63,0.12)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }}>{data.icon}</span>
            <h2 style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(20px, 5vw, 28px)', color: 'white', letterSpacing: '2px', margin: 0,
            }}>{data.title}</h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'rgba(255,255,255,0.6)', fontSize: '18px',
              transition: 'all 0.2s', flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background='rgba(140,198,63,0.15)'; e.currentTarget.style.color='#8cc63f'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background='rgba(255,255,255,0.06)'; e.currentTarget.style.color='rgba(255,255,255,0.6)'; }}
          >✕</button>
        </div>

        {/* Scrollable body */}
        <div style={{ overflowY: 'auto', padding: 'clamp(16px, 4vw, 28px)', flex: 1 }}>
          <ModalBody data={data} />
        </div>
      </div>
    </div>
  );
}

/* ─── Body renderers ─────────────────────────────────────────────── */

function ModalBody({ data }) {
  if (data.posts) return <BlogBody posts={data.posts} />;
  if (data.items) return <FaqBody items={data.items} />;
  return <SectionsBody sections={data.sections} cards={data.cards} />;
}

function SectionsBody({ sections }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {sections.map((sec, i) => (
        <div key={i}>
          <h3 style={{
            fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '15px',
            color: '#8cc63f', marginBottom: '10px', letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}>{sec.heading}</h3>

          {sec.cards && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '8px' }}>
              {sec.cards.map((card, ci) => (
                <div key={ci} style={{ background: 'rgba(140,198,63,0.07)', border: '1px solid rgba(140,198,63,0.2)', borderRadius: '14px', padding: '16px 18px' }}>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '14px', color: 'white', marginBottom: '4px' }}>{card.label}</div>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '22px', color: '#8cc63f', letterSpacing: '1px', marginBottom: '6px' }}>{card.value}</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{card.note}</div>
                </div>
              ))}
            </div>
          )}

          {sec.body && (
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>{sec.body}</p>
          )}

          {sec.list && (
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sec.list.map((item, li) => (
                <li key={li} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  {!item.startsWith('🧑') && !item.startsWith('👨') && !item.startsWith('🌱') && !item.startsWith('📦') && !item.startsWith('📊') && !item.startsWith('🚪') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '4px' }}>
                      <path d="M5 13l4 4L19 7" stroke="#8cc63f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function BlogBody({ posts }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {posts.map((post, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(140,198,63,0.1)', borderRadius: '16px', padding: '20px 22px', transition: 'border-color 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor='rgba(140,198,63,0.3)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor='rgba(140,198,63,0.1)'}
        >
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ background: 'rgba(140,198,63,0.15)', color: '#8cc63f', fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', letterSpacing: '0.5px' }}>{post.tag}</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans, sans-serif' }}>{post.date}</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans, sans-serif', marginLeft: 'auto' }}>{post.read}</span>
          </div>
          <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '8px', lineHeight: 1.4 }}>{post.title}</h3>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

function FaqBody({ items }) {
  const [open, setOpen] = React.useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: open===i ? 'rgba(140,198,63,0.07)' : 'rgba(255,255,255,0.03)', border: `1px solid ${open===i ? 'rgba(140,198,63,0.3)' : 'rgba(255,255,255,0.07)'}`, borderRadius: '14px', overflow: 'hidden', transition: 'all 0.2s' }}>
          <button
            onClick={() => setOpen(open===i ? null : i)}
            style={{ width: '100%', background: 'none', border: 'none', padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', cursor: 'pointer', textAlign: 'left' }}
          >
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: '14px', color: open===i ? '#8cc63f' : 'white', lineHeight: 1.4 }}>{item.q}</span>
            <span style={{ color: '#8cc63f', fontSize: '18px', flexShrink: 0, transform: open===i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 18px 16px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Export: link bar + modal manager ──────────────────────────── */

const LINKS = [
  { key: 'delivery', label: 'Delivery Schedule' },
  { key: 'blogs',    label: 'Blogs'             },
  { key: 'faqs',     label: 'FAQs'              },
  { key: 'about',    label: 'About'             },
  { key: 'terms',    label: 'Terms'             },
  { key: 'privacy',  label: 'Privacy Policy'    },
];

export default function FooterLinks() {
  const [active, setActive] = React.useState(null);

  return (
    <>
      {/* Link row */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        gap: '6px 20px', padding: '20px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        maxWidth: '1200px', margin: '0 auto',
      }}>
        {LINKS.map((link, i) => (
          <React.Fragment key={link.key}>
            <button
              onClick={() => setActive(link.key)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif', fontSize: '12px',
                color: 'rgba(255,255,255,0.35)', fontWeight: 500,
                transition: 'color 0.2s', padding: '2px 0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8cc63f')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              {link.label}
            </button>
            {i < LINKS.length - 1 && (
              <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '12px', userSelect: 'none' }}>·</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Modal */}
      {active && <Modal pageKey={active} onClose={() => setActive(null)} />}
    </>
  );
}
