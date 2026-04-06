# Orgalicious Mealprep — Website

A mobile-first Next.js 14 website for **Orgalicious Mealprep**, built from the brochure theme.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, fonts, animations
│   ├── layout.js         # Root layout with metadata
│   └── page.js           # Main page
└── components/
    ├── Navbar.js          # Sticky nav with mobile hamburger
    ├── Hero.js            # Hero section with stats
    ├── HowItWorks.js      # 4-step process
    ├── Features.js        # 6 subscription benefits
    ├── MealsSection.js    # 5 demo meals grid
    ├── MealCard.js        # Individual meal card with macros/micros tabs
    ├── Packages.js        # 3 pricing tiers
    ├── Reviews.js         # Auto-scrolling testimonials
    └── Footer.js          # Contact + social links
```

---

## 🖼️ Adding Meal Photos

Each meal card has a photo placeholder. To add real photos:

1. Add your images to `public/meals/` (e.g., `public/meals/meal-1.jpg`)
2. In `src/components/MealCard.js`, replace the placeholder `<div>` with a Next.js `<Image>`:

```jsx
import Image from 'next/image';

// Replace the placeholder div with:
<Image
  src={`/meals/meal-${meal.id}.jpg`}
  alt={meal.name}
  fill
  style={{ objectFit: 'cover' }}
/>
```

Recommended image size: **600×440px** (2:1.47 ratio), JPEG, < 200kb.

---

## 🎨 Theme & Colors

| Token | Value | Usage |
|-------|-------|-------|
| Dark teal | `#071e2b` | Background |
| Teal 900 | `#0d3347` | Cards, sections |
| Lime green | `#8cc63f` | Accents, CTA |
| Light lime | `#b5e04a` | Hover states |

---

## 📞 Contact Info (from brochure)

- **Phone**: +91 7291068353 · +91 8510026005
- **Instagram**: @orgaliciousfoods
- **Email**: orgaliciousfoods@gmail.com

---

## 🍽️ 5 Demo Meals

1. Brown Rice with Sautéed Vegetables & Grilled Chicken in Tomato Basil Sauce
2. Moong Dal Chilla with Paneer & Soya Bhurji and Mint Dip
3. Brown Rice Paneer Biriyani
4. Multigrain Falafel Sub
5. Paneer Tikka & Soya Chaap Tikka in a Box with Onion Rings & Mint Dip

Each card shows **Macros** (Protein, Carbs, Fats, Fibre) and **Micros** (vitamins & minerals) via a tab switcher.

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + inline styles
- **Fonts**: Bebas Neue (headings) + DM Sans (body) via Google Fonts
- **Animations**: CSS keyframes, auto-scrolling reviews
- **Mobile-first**: Responsive from 320px up
