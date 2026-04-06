'use client';

import Image from 'next/image';
import { useState } from 'react';
import FooterLinks from '@/components/FooterModal';
import styles from './page.module.css';

const steps = [
  {
    title: 'Assigned nutritionist',
    body: 'A dedicated nutritionist takes your basic medical details, height, weight, food allergies (if any), and fitness goals upon sign-up.',
  },
  {
    title: 'Menu design',
    body: 'Nutritionist designs your weekly menu as per your needs.',
  },
  {
    title: 'Client review & finalization',
    body: 'Client review and menu finalization happens from your end before the plan is locked.',
  },
  {
    title: 'Meal delivery',
    body: 'Orgalicious delivers flavor-packed meals straight to you the next day, ready to fuel your fitness goal.',
  },
];

const benefits = [
  { icon: 'variety', label: 'Extensive variety' },
  { icon: 'fresh', label: 'Freshly prepared for every order' },
  { icon: 'delivery', label: 'Doorstep delivery' },
  { icon: 'calories', label: 'Calorie counted meals' },
  { icon: 'chef', label: 'Crafted by seasoned chefs & nutritionists' },
  { icon: 'clean', label: 'No added preservatives' },
];

const weeklyMenu = [
  {
    day: 'Monday',
    items: [
      'Multigrain paneer grilled sandwiches served with salsa dip',
      'Farmfresh mexican salad topped with portion of fruit and served with a pack of doritos',
    ],
  },
  {
    day: 'Tuesday',
    items: [
      'Soya chunks gravy with whole wheat kulcha served with onion rings and mint dip',
      'Achari paneer tikka served with onion rings and mint dip',
    ],
  },
  {
    day: 'Wednesday',
    items: [
      'Quinoa couscous upma topped with pomegranate and peanut served with yogurt',
      'Spinach stuffed soya chaap roulade served with corn cob cooked in orange juice and mint dip',
    ],
  },
  {
    day: 'Thursday',
    items: [
      'Multigrain falafel wrap served with airfried nuggets and salsa dip',
      'Chickpeas and green sprouts salad chaat topped with peanut and pomegranate',
    ],
  },
  {
    day: 'Friday',
    items: [
      'Amritsari veg keema served with focaccia bread and mint dip',
      'Saute vegetables malabar salad topped with peanut',
    ],
  },
  {
    day: 'Saturday',
    items: [
      'Brown rice served with saute vegetable and cottage cheese in tomato basil sauce',
      'Soya chaap tikka served with mint dip and onion rings',
    ],
  },
];

const menuHighlights = [
  {
    title: 'Nutritionist curated',
    body: 'Designed around your goals, allergies, food preferences, and activity level.',
  },
  {
    title: '6-day fresh rotation',
    body: 'A Monday-to-Saturday menu that feels varied instead of repetitive or boxed-in.',
  },
  {
    title: 'Lean-muscle focused',
    body: 'Balanced portions, calorie awareness, and protein-forward choices across the week.',
  },
];

const heroHighlights = [
  '5000+ happy clients',
  'Nutritionist-designed menus',
  'Morning & evening delivery',
];

const brochurePages = [
  '/brochure-pages/page-05.png',
  '/brochure-pages/page-06.png',
  '/brochure-pages/page-07.png',
  '/brochure-pages/page-08.png',
  '/brochure-pages/page-09.png',
];

const reviews = [
  {
    name: 'Ashwini Koul',
    handle: 'Actor, Article 370',
    quote: 'Orgalicious meal-prep balances my macros and delivers food as per my fitness goals. Must try!',
  },
  {
    name: 'Vyomesh Kaul',
    handle: '@vyomesh_kaul',
    quote: 'I really love their variety, their meals are macro-friendly and delicious.',
  },
  {
    name: 'Pallavi Yadav',
    handle: '@pallaviyada_',
    quote: 'Orgalicious prepares the meals as per my goals and requirements and provides meals that are delicious along with being healthy.',
  },
  {
    name: 'Allen Chowdhary',
    handle: '@allen_choudhary',
    quote: "I don't compromise on my health and diet and Orgalicious meal-prep delivers the meals on point.",
  },
];

const packages = [
  {
    name: 'Starter Pack',
    tagline: 'Kickstart your fitness journey.',
    meals: '10',
    price: '₹350',
  },
  {
    name: 'Active Pack',
    tagline: 'Maintain your balance with this versatile option.',
    meals: '30',
    price: '₹300',
    featured: true,
  },
  {
    name: 'Fitness Pack',
    tagline: 'Elevate your game with this powerhouse package.',
    meals: '60',
    price: '₹250',
  },
];

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Subscription', href: '#subscription' },
  { label: 'Menu', href: '#menu' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
];

function CloverMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={styles.clover}>
      <circle cx="20" cy="9" r="6" />
      <circle cx="10" cy="20" r="6" />
      <circle cx="30" cy="20" r="6" />
      <circle cx="20" cy="30" r="6" />
    </svg>
  );
}

function BrandLogo({ compact = false }) {
  return (
    <div className={`${styles.brand} ${compact ? styles.brandCompact : ''}`}>
      <div className={styles.brandTopline}>
        <span>Whole</span>
        <CloverMark />
        <span>Foods</span>
      </div>
      <div className={styles.brandWordmark}>orgalicious</div>
      <div className={styles.brandSubmark}>mealprep</div>
    </div>
  );
}

function BenefitIcon({ type }) {
  if (type === 'variety') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h8v6H3zM13 4h8v9h-8zM7 15h14v6H7z" />
      </svg>
    );
  }

  if (type === 'fresh') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3c4 2 7 5.4 7 9.2A6.8 6.8 0 0 1 12 19a6.8 6.8 0 0 1-7-6.8C5 8.4 8 5 12 3Zm0 4.2c-2.7 2.5-3.6 4-3.6 5.2A3.4 3.4 0 0 0 12 15.8a3.4 3.4 0 0 0 3.6-3.4c0-1.2-.9-2.7-3.6-5.2Z" />
      </svg>
    );
  }

  if (type === 'delivery') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 8h11v8H3zM14 10h3l4 3v3h-7zM7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm11 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      </svg>
    );
  }

  if (type === 'calories') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 10a7 7 0 1 1 14 0v8H5Zm3.2 8h7.6M12 3v4M8 6.2 9.7 8M16 6.2 14.3 8" />
      </svg>
    );
  }

  if (type === 'chef') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 11V7.8A4.8 4.8 0 0 1 12 3a4.8 4.8 0 0 1 5 4.8V11M5 11h14v10H5zM9 16h6M12 13v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4.5 6v5.5C4.5 16.3 7.7 20 12 21c4.3-1 7.5-4.7 7.5-9.5V6L12 3Zm-2 6h4v6h-4Zm0 7.5h4V18h-4Z" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerShell}>
          <a href="#top" className={styles.brandLink} aria-label="Orgalicious home">
            <BrandLogo compact />
          </a>

          <div className={styles.headerActions}>
            <nav className={styles.nav}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            <a href="#contact" className={`${styles.headerCta} ${styles.desktopCta}`}>
              Subscribe now
            </a>

            <button
              type="button"
              className={styles.mobileMenuButton}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span className={`${styles.mobileMenuLine} ${mobileMenuOpen ? styles.mobileMenuLineTopOpen : ''}`} />
              <span className={`${styles.mobileMenuLine} ${mobileMenuOpen ? styles.mobileMenuLineMiddleOpen : ''}`} />
              <span className={`${styles.mobileMenuLine} ${mobileMenuOpen ? styles.mobileMenuLineBottomOpen : ''}`} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobileMenuPanel}>
            <nav className={styles.mobileMenuNav}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className={styles.headerCta}
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe now
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="top" className={`${styles.hero} ${styles.anchor}`}>
          <span className={`${styles.leaf} ${styles.leafOne}`} />
          <span className={`${styles.leaf} ${styles.leafTwo}`} />
          <span className={`${styles.leaf} ${styles.leafThree}`} />

          <div className={styles.heroShell}>
            <div className={styles.heroPanel}>
              <div className={styles.heroContent}>
                <BrandLogo />

                <p className={styles.heroCopy}>
                  Welcome to Orgalicious, where health meets flavor &amp; convenience meets nutrition.
                </p>

                <div className={styles.heroRule} />

                <p className={styles.heroLead}>
                  Since our debut in July 2018, Orgalicious has revolutionized meal preparation by serving
                  you fresh, flavor-packed meals designed to fuel your fitness goals.
                </p>

                <div className={styles.heroActions}>
                  <a href="#menu" className={styles.primaryButton}>
                    Explore weekly menu
                  </a>
                  <a href="#packages" className={styles.secondaryButton}>
                    View meal packages
                  </a>
                </div>

                <div className={styles.heroHighlights}>
                  {heroHighlights.map((item) => (
                    <span key={item} className={styles.heroHighlight}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.heroMeals}>
                <div className={`${styles.heroMeal} ${styles.heroMealLeft}`}>
                  <Image
                    src="/meals/meal-1.jpg"
                    alt="Grilled multigrain wrap meal"
                    fill
                    sizes="(max-width: 780px) 30vw, 20vw"
                    className={styles.coverImage}
                  />
                </div>
                <div className={`${styles.heroMeal} ${styles.heroMealCenter}`}>
                  <Image
                    src="/meals/meal-4.jpg"
                    alt="Signature Orgalicious bowl"
                    fill
                    sizes="(max-width: 780px) 34vw, 24vw"
                    className={styles.coverImage}
                  />
                </div>
                <div className={`${styles.heroMeal} ${styles.heroMealRight}`}>
                  <Image
                    src="/meals/meal-2.jpg"
                    alt="Grilled chicken meal"
                    fill
                    sizes="(max-width: 780px) 30vw, 20vw"
                    className={styles.coverImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className={`${styles.section} ${styles.anchor}`}>
          <div className={styles.sectionShell}>
            <div className={styles.howBanner}>
              <div className={styles.howTile}>
                <Image src="/meals/meal-4.jpg" alt="Meal collage" fill sizes="33vw" className={styles.coverImage} />
              </div>
              <div className={styles.howTile}>
                <Image src="/meals/meal-2.jpg" alt="Meal box" fill sizes="33vw" className={styles.coverImage} />
              </div>
              <div className={styles.howTile}>
                <Image src="/meals/meal-1.jpg" alt="Wrap and sides" fill sizes="33vw" className={styles.coverImage} />
              </div>

              <div className={styles.howOverlay} />
              <div className={styles.howTitleBlock}>
                <BrandLogo compact />
                <h2 className={styles.howTitle}>How it works</h2>
              </div>
            </div>

            <div className={styles.howCard}>
              <div className={styles.howSteps}>
                {steps.map((step, index) => (
                  <article key={step.title} className={styles.stepCard}>
                    <div className={styles.stepBadge}>Step {index + 1}</div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className={styles.contactBar}>
                <a href="tel:+917291068353" className={styles.contactPill}>
                  +91 7291068353
                </a>
                <a href="tel:+918510026005" className={styles.contactPill}>
                  +91 8510026005
                </a>
                <a href="https://instagram.com/orgaliciousfoods" className={styles.contactPill}>
                  @orgaliciousfoods
                </a>
                <a href="mailto:orgaliciousfoods@gmail.com" className={styles.contactPill}>
                  orgaliciousfoods@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="subscription" className={`${styles.section} ${styles.anchor}`}>
          <div className={`${styles.sectionShell} ${styles.benefitsShell}`}>
            <div className={styles.benefitsCopy}>
              <BrandLogo compact />
              <p className={styles.eyebrow}>Get a taste of the Orgalicious subscription</p>
              <h2 className={styles.sectionTitle}>A brochure-faithful meal prep experience</h2>
              <p className={styles.sectionText}>
                Crafted to feel close to the printed brochure: bold lime accents, dark textured panels,
                plated dishes, and a clear subscription story built around convenience, nutrition, and taste.
              </p>

              <div className={styles.benefitsList}>
                {benefits.map((benefit) => (
                  <article key={benefit.label} className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>
                      <BenefitIcon type={benefit.icon} />
                    </span>
                    <span className={styles.benefitLabel}>{benefit.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.benefitMedia}>
              <div className={`${styles.benefitDish} ${styles.benefitDishTop}`}>
                <Image
                  src="/meals/meal-5.jpg"
                  alt="Healthy bowl with paneer and vegetables"
                  fill
                  sizes="(max-width: 1100px) 50vw, 28vw"
                  className={styles.coverImage}
                />
              </div>
              <div className={`${styles.benefitDish} ${styles.benefitDishBottom}`}>
                <Image
                  src="/meals/meal-4.jpg"
                  alt="Fruit and protein salad bowl"
                  fill
                  sizes="(max-width: 1100px) 50vw, 24vw"
                  className={styles.coverImage}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className={`${styles.section} ${styles.anchor}`}>
          <div className={`${styles.sectionShell} ${styles.menuShell}`}>
            <div className={styles.menuOverlay}>
              <div className={styles.menuHeader}>
                <div>
                  <p className={styles.eyebrow}>Sample weekly menu</p>
                  <h2 className={styles.sectionTitle}>Orgalicious meal plan for lean muscle gain</h2>
                </div>
                <p className={styles.menuNote}>
                  Cleaner on the web, but still grounded in the brochure copy and structure.
                </p>
              </div>

              <div className={styles.menuHighlightRow}>
                {menuHighlights.map((item) => (
                  <article key={item.title} className={styles.menuHighlight}>
                    <div className={styles.menuHighlightTitle}>{item.title}</div>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>

              <div className={styles.menuGrid}>
                {weeklyMenu.map((entry, index) => (
                  <article key={entry.day} className={styles.menuDay}>
                    <div className={styles.menuDayTop}>
                      <span className={styles.menuDayNumber}>{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{entry.day}</h3>
                        <p className={styles.menuDayMeta}>2 curated meals</p>
                      </div>
                    </div>
                    <ul>
                      {entry.items.map((item) => (
                        <li key={item}>
                          <span className={styles.menuBullet} />
                          <span className={styles.menuItemText}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className={styles.menuFooter}>
                <span>Morning and evening delivery slots available</span>
                <a href="#packages">See meal packages</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Brochure menu spreads</p>
              <h2 className={styles.sectionTitle}>Direct brochure visuals for maximum accuracy</h2>
              <p className={styles.sectionText}>
                These pages from the original brochure are included directly so the website keeps the same
                dish compositions, white callout capsules, and page-by-page art direction.
              </p>
            </div>

            <div className={styles.posterGrid}>
              {brochurePages.map((src, index) => (
                <figure key={src} className={styles.posterCard}>
                  <div className={styles.posterFrame}>
                    <Image
                      src={src}
                      alt={`Orgalicious brochure menu spread ${index + 1}`}
                      width={720}
                      height={1018}
                      className={styles.posterImage}
                    />
                  </div>
                  <figcaption>Menu spread 0{index + 5}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className={`${styles.section} ${styles.anchor}`}>
          <div className={`${styles.sectionShell} ${styles.reviewsShell}`}>
            <div>
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>Let&apos;s hear from our experts</p>
                <h2 className={styles.sectionTitle}>Social proof pulled straight from the brochure</h2>
              </div>

              <div className={styles.reviewGrid}>
                {reviews.map((review) => (
                  <article key={review.name} className={styles.reviewCard}>
                    <div className={styles.reviewQuoteMark}>&ldquo;</div>
                    <div>
                      <div className={styles.reviewName}>{review.name}</div>
                      <div className={styles.reviewHandle}>{review.handle}</div>
                    </div>
                    <p>{review.quote}</p>
                  </article>
                ))}
              </div>
            </div>

            <figure className={styles.posterCard}>
              <div className={styles.posterFrame}>
                <Image
                  src="/brochure-pages/page-10.png"
                  alt="Expert testimonials brochure page"
                  width={720}
                  height={1018}
                  className={styles.posterImage}
                />
              </div>
              <figcaption>Expert voices brochure page</figcaption>
            </figure>
          </div>
        </section>

        <section id="packages" className={`${styles.section} ${styles.anchor}`}>
          <div className={`${styles.sectionShell} ${styles.packagesShell}`}>
            <div>
              <div className={styles.sectionHeader}>
                <p className={styles.eyebrow}>Introducing our meal packages</p>
                <h2 className={styles.sectionTitle}>Structured pricing with the brochure layout beside it</h2>
                <p className={styles.sectionText}>
                  The cards below keep the package details readable on the web, while the original package
                  artwork is preserved on the right for visual fidelity.
                </p>
              </div>

              <div className={styles.packageList}>
                {packages.map((item) => (
                  <article
                    key={item.name}
                    className={`${styles.packageCard} ${item.featured ? styles.packageCardFeatured : ''}`}
                  >
                    <div className={styles.packageChip}>{item.name}</div>
                    <h3>{item.tagline}</h3>

                    <div className={styles.packageMeta}>
                      <div>
                        <div className={styles.packageBig}>{item.meals}</div>
                        <div className={styles.packageLabel}>Meals</div>
                      </div>
                      <div>
                        <div className={styles.packageRate}>{item.price}</div>
                        <div className={styles.packageLabel}>Per meal</div>
                      </div>
                    </div>

                    <div className={styles.packageSlots}>
                      <span>Morning</span>
                      <span>Evening</span>
                    </div>

                    <a href="#contact" className={styles.packageButton}>
                      Start subscription
                    </a>
                  </article>
                ))}
              </div>
            </div>

            <figure className={`${styles.posterCard} ${styles.packagePoster}`}>
              <div className={styles.posterFrame}>
                <Image
                  src="/brochure-pages/page-11.png"
                  alt="Meal packages brochure page"
                  width={720}
                  height={1018}
                  className={styles.posterImage}
                />
              </div>
              <figcaption>Original brochure package artwork</figcaption>
            </figure>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.anchor}`}>
          <div className={`${styles.sectionShell} ${styles.contactShell}`}>
            <div className={styles.contactCard}>
              <BrandLogo compact />

              <h2 className={styles.contactTitle}>
                Are you ready to start your path to become a better, happier <span>version of yourself?</span>
              </h2>

              <div className={styles.contactBand}>Contact us now to experience the Orgalicious difference.</div>

              <p className={styles.contactLabel}>To subscribe now:</p>

              <div className={styles.contactLinks}>
                <a href="tel:+917291068353" className={styles.contactLink}>
                  <span className={styles.contactIcon}>Call</span>
                  <span>+91 7291068353</span>
                </a>
                <a href="tel:+918510026005" className={styles.contactLink}>
                  <span className={styles.contactIcon}>Call</span>
                  <span>+91 8510026005</span>
                </a>
                <a href="https://instagram.com/orgaliciousfoods" className={styles.contactLink}>
                  <span className={styles.contactIcon}>Insta</span>
                  <span>@orgaliciousfoods</span>
                </a>
                <a href="mailto:orgaliciousfoods@gmail.com" className={styles.contactLink}>
                  <span className={styles.contactIcon}>Mail</span>
                  <span>orgaliciousfoods@gmail.com</span>
                </a>
              </div>
            </div>

            <figure className={styles.posterCard}>
              <div className={styles.posterFrame}>
                <Image
                  src="/brochure-pages/page-12.png"
                  alt="Contact brochure page"
                  width={720}
                  height={1018}
                  className={styles.posterImage}
                />
              </div>
              <figcaption>Brochure closing page</figcaption>
            </figure>
          </div>
        </section>

        <footer className={styles.siteFooter}>
          <div className={styles.footerShell}>
            <div className={styles.footerTop}>
              <div className={styles.footerIntro}>
                <BrandLogo compact />
                <p className={styles.footerBlurb}>
                  Fresh, flavor-packed, nutritionist-guided meal prep inspired directly by the brochure and
                  shaped for a cleaner mobile web experience.
                </p>
              </div>

              <div className={styles.footerMini}>
                <span>Delhi NCR delivery</span>
                <span>Morning + evening slots</span>
                <span>No added preservatives</span>
              </div>
            </div>

            <FooterLinks />

            <p className={styles.footerNote}>
              Orgalicious Mealprep. Whole foods, customised menus, doorstep delivery, and brochure-matched
              brand storytelling.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
