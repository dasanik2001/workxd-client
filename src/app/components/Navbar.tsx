import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Briefcase, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const exploreLinks = [
  { label: "Marketing Projects", href: "/domain/marketing" },
  { label: "Finance Projects", href: "/domain/marketing" },
  { label: "HR Projects", href: "/domain/marketing" },
  { label: "Operations Projects", href: "/domain/marketing" },
  { label: "Business Analytics Projects", href: "/domain/marketing" },
  { label: "Consulting Projects", href: "/domain/marketing" },
];

const outcomesLinks = [
  { label: "Certificates", href: "/certificates" },
  { label: "CV Pointers", href: "/cv-pointers" },
  { label: "Student Outcomes", href: "/outcomes" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [outcomesOpen, setOutcomesOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <header
      className="border-b sticky top-0 z-50 transition-colors"
      style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "var(--workxd-blue)" }}
            >
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl" style={{ color: "var(--workxd-blue)", fontWeight: 700 }}>
              WorkXD
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm py-2 transition-colors"
                style={{ color: "var(--workxd-dark)" }}
              >
                Explore <ChevronDown className="w-4 h-4" />
              </button>
              {exploreOpen && (
                <div
                  className="absolute top-full left-0 rounded-xl shadow-xl border py-2 min-w-52 z-50 transition-colors"
                  style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
                >
                  {exploreLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-4 py-2 text-sm transition-colors"
                      style={{ color: "var(--workxd-text-muted)" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "var(--domain-marketing-bg)";
                        (e.target as HTMLElement).style.color = "var(--workxd-blue)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "transparent";
                        (e.target as HTMLElement).style.color = "var(--workxd-text-muted)";
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div style={{ borderTop: "1px solid var(--workxd-border)" }} className="my-1" />
                  <Link
                    to="/projects"
                    className="block px-4 py-2 text-sm font-semibold"
                    style={{ color: "var(--workxd-blue)" }}
                  >
                    View All Projects →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/how-it-works"
              className="text-sm transition-colors"
              style={{ color: location.pathname === "/how-it-works" ? "var(--workxd-blue)" : "var(--workxd-dark)" }}
            >
              How It Works
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOutcomesOpen(true)}
              onMouseLeave={() => setOutcomesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm py-2 transition-colors" style={{ color: "var(--workxd-dark)" }}>
                Outcomes <ChevronDown className="w-4 h-4" />
              </button>
              {outcomesOpen && (
                <div
                  className="absolute top-full left-0 rounded-xl shadow-xl border py-2 min-w-44 z-50"
                  style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
                >
                  {outcomesLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-4 py-2 text-sm transition-colors"
                      style={{ color: "var(--workxd-text-muted)" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "var(--domain-marketing-bg)";
                        (e.target as HTMLElement).style.color = "var(--workxd-blue)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = "transparent";
                        (e.target as HTMLElement).style.color = "var(--workxd-text-muted)";
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="text-sm transition-colors"
              style={{ color: location.pathname === "/blog" ? "var(--workxd-blue)" : "var(--workxd-dark)" }}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-muted)" }}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <Link
              to="/login"
              className="text-sm px-4 py-2 rounded-lg transition-colors"
              style={{ color: "var(--workxd-dark)" }}
            >
              Login
            </Link>
            <Link
              to="/login"
              className="text-sm px-4 py-2 rounded-lg border transition-colors"
              style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
            >
              Sign Up
            </Link>
            <Link
              to="/projects"
              className="text-sm px-5 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--workxd-orange)" }}
            >
              Browse Projects
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-muted)" }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className="p-2" style={{ color: "var(--workxd-dark)" }} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 py-4 space-y-2 transition-colors"
          style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
        >
          <div className="font-semibold text-sm mb-2" style={{ color: "var(--workxd-blue)" }}>Explore</div>
          {exploreLinks.map((l) => (
            <Link key={l.label} to={l.href} className="block py-1.5 text-sm pl-2" style={{ color: "var(--workxd-text-muted)" }} onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div style={{ borderTop: "1px solid var(--workxd-border)" }} className="pt-2 mt-2 space-y-1">
            <Link to="/how-it-works" className="block py-1.5 text-sm" style={{ color: "var(--workxd-dark)" }} onClick={() => setMobileOpen(false)}>How It Works</Link>
            {outcomesLinks.map((l) => (
              <Link key={l.label} to={l.href} className="block py-1.5 text-sm" style={{ color: "var(--workxd-dark)" }} onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
            <Link to="/blog" className="block py-1.5 text-sm" style={{ color: "var(--workxd-dark)" }} onClick={() => setMobileOpen(false)}>Blog</Link>
          </div>
          <div className="pt-3 flex flex-col gap-2">
            <Link to="/login" className="py-2 text-center text-sm border rounded-lg" style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }} onClick={() => setMobileOpen(false)}>Login</Link>
            <Link to="/projects" className="py-2 text-center text-sm rounded-lg text-white" style={{ backgroundColor: "var(--workxd-orange)" }} onClick={() => setMobileOpen(false)}>Browse Projects</Link>
          </div>
        </div>
      )}
    </header>
  );
}
