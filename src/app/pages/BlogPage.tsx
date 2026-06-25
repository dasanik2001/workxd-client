import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BlogCard } from "../components/BlogCard";
import { SectionWrapper } from "../components/SectionWrapper";

const articles = [
  { title: "How to Turn Your MBA Projects Into Interview Weapons", excerpt: "Most MBA students underestimate how powerful project-based experience can be in interviews. Here's how to frame your WorkXD projects to land roles at FMCG, consulting, and finance firms.", category: "Career Tips", date: "Dec 12, 2024", readTime: "7 min read", featured: true },
  { title: "The 5 CV Mistakes MBA Students Make (And How to Fix Them)", excerpt: "After reviewing 2,000+ MBA resumes, these are the most common mistakes we see — and the fixes that make a real difference to shortlisting rates.", category: "Career Tips", date: "Dec 8, 2024", readTime: "6 min read" },
  { title: "What Recruiters Actually Look For in an MBA Resume in 2025", excerpt: "We interviewed 12 senior HR managers and recruitment leads across FMCG, consulting, and finance to understand what they scan for in the first 6 seconds.", category: "MBA Insights", date: "Dec 5, 2024", readTime: "9 min read" },
  { title: "Go-to-Market Strategy: A Step-by-Step Guide for MBA Students", excerpt: "GTM is one of the most commonly asked topics in marketing interviews. This guide walks through every step of building a GTM strategy like a professional consultant.", category: "Project Guides", date: "Nov 28, 2024", readTime: "12 min read" },
  { title: "How Priya Got Placed at Hindustan Unilever Using Her WorkXD Project", excerpt: "Priya was competing with 800 candidates for a brand management role. Her MarketSpark GTM project became the anchor of her entire interview. This is her story.", category: "Student Stories", date: "Nov 22, 2024", readTime: "5 min read" },
  { title: "The Rise of Practical MBA: Why B-Schools Are Rethinking Placement Preparation", excerpt: "India's top MBA programs are under pressure to produce placement-ready graduates. We explore how practical project experience is filling the gap.", category: "Industry Trends", date: "Nov 18, 2024", readTime: "8 min read" },
  { title: "Financial Modelling for Non-Finance MBA Students: Where to Start", excerpt: "You don't need a CA background to build a financial model that impresses. This beginner's guide covers the essentials every MBA student should know.", category: "Project Guides", date: "Nov 14, 2024", readTime: "10 min read" },
];

const categories = ["All", "Career Tips", "MBA Insights", "Project Guides", "Student Stories", "Industry Trends"];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  const featured = articles[0];
  const filtered = articles.slice(1).filter((a) => activeCategory === "All" || a.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className=" border-b" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: "var(--workxd-blue)" }}>WorkXD Blog</span>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "var(--workxd-dark)" }} className="mb-2">
            Career Insights for MBA Students
          </h1>
          <p style={{ color: "var(--workxd-text-muted)" }}>Practical advice on projects, CVs, interviews, and MBA career strategy.</p>
        </div>
      </div>

      {/* Featured Article */}
      <SectionWrapper bg="gray">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--workxd-blue)" }}>Featured Article</p>
          <BlogCard {...featured} featured />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors"
              style={{
                backgroundColor: activeCategory === cat ? "#0056D2" : "white",
                color: activeCategory === cat ? "white" : "#374151",
                borderColor: activeCategory === cat ? "#0056D2" : "#E5E7EB",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((article) => (
            <BlogCard key={article.title} {...article} />
          ))}
        </div>
      </SectionWrapper>

      {/* Newsletter */}
      <SectionWrapper bg="white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-3xl mb-4">📬</div>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "var(--workxd-dark)" }} className="mb-3">
            Get MBA Career Tips Every Week
          </h2>
          <p className="mb-6" style={{ color: "var(--workxd-text-muted)" }}>
            Join 8,000+ MBA students getting weekly insights on projects, CV strategy, and interview prep.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border outline-none focus:ring-2 text-sm"
              style={{ borderColor: "var(--workxd-border)" }}
            />
            <button
              className="px-5 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity text-sm"
              style={{ backgroundColor: "#F97316" }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-3" style={{ color: "var(--workxd-text-subtle)" }}>No spam. Unsubscribe anytime.</p>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
