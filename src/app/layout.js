import './globals.css';

export const metadata = {
  title: 'Orgalicious Mealprep | Brochure-Faithful Landing Page',
  description:
    'A brochure-driven Orgalicious meal prep site with brand-matched sections for subscriptions, weekly menus, meal packages, and contact.',
  keywords: 'orgalicious, meal prep, healthy subscription meals, weekly menu, fitness food',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#082433" />
      </head>
      <body>{children}</body>
    </html>
  );
}
