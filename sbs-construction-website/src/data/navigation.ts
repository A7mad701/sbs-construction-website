export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerData = {
  address: {
    line1: "Amman, Jordan",
    line2: "Building Solutions District",
  },
  phone: "+962 6 123 4567",
  email: "info@sbsco.jo",
  social: [
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "Facebook", href: "#", icon: "facebook" },
  ] as const,
};
