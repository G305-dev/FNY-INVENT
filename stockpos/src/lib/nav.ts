/** Section A public routes — mockup screens 1–11 */
export const publicNav = [
  { href: "/", label: "Home", screen: 1 },
  { href: "/features", label: "Features", screen: 2 },
  { href: "/pricing", label: "Pricing", screen: 3 },
  { href: "/how-it-works", label: "How it works", screen: 4 },
  { href: "/industries", label: "Industries", screen: 5 },
  { href: "/about", label: "About", screen: 6 },
  { href: "/help", label: "Help", screen: 8 },
] as const;

export const publicFooter = [
  { href: "/contact", label: "Contact", screen: 7 },
  { href: "/help", label: "Help centre", screen: 8 },
  { href: "/faq", label: "FAQ", screen: 9 },
  { href: "/terms", label: "Terms", screen: 10 },
  { href: "/privacy", label: "Privacy", screen: 11 },
] as const;

export const site = {
  name: "StockPOS",
  tagline: "Inventory and point of sale for every shop on the street.",
  email: "hello@stockpos.app",
  phone: "+234 800 000 0000",
};
