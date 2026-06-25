import { Link } from "react-router-dom";
import { Briefcase, Twitter, Linkedin, Instagram } from "lucide-react";

const footerSections = [
  {
    title: "Explore",
    links: [
      { label: "Marketing", href: "/domain/marketing" },
      { label: "Finance", href: "/domain/marketing" },
      { label: "HR", href: "/domain/marketing" },
      { label: "Operations", href: "/domain/marketing" },
      { label: "Business Analytics", href: "/domain/marketing" },
      { label: "Consulting", href: "/domain/marketing" },
    ],
  },
  {
    title: "Outcomes",
    links: [
      { label: "Certificates", href: "/certificates" },
      { label: "CV Pointers", href: "/cv-pointers" },
      { label: "Student Outcomes", href: "/outcomes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Partnerships",
    links: [
      { label: "Brands & Co-Branding", href: "/brands" },
      { label: "For Colleges (Coming Soon)", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--workxd-footer-bg)" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0056D2" }}>
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">WorkXD</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Real MBA Projects. Real Brands. Real Proof.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            © 2024 WorkXD.com. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Helping MBA students build careers through real experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
