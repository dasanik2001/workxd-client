import { useState } from "react";
import { Link } from "react-router-dom";
import { Award, FileText, Briefcase, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TestimonialCard } from "../components/TestimonialCard";
import { CertificateMockup } from "../components/CertificateMockup";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const domainBullets: Record<string, string[]> = {
  Marketing: [
    "Developed a go-to-market strategy for a D2C skincare brand targeting 3 urban customer segments, mapping channel mix across digital and offline.",
    "Conducted competitor analysis across 10 brands, identifying 4 strategic whitespace opportunities in a ₹500Cr D2C market.",
    "Built a brand positioning framework using Jobs-to-be-Done and STP models, resulting in a differentiated value proposition for product launch.",
    "Created a digital marketing audit identifying 6 underperforming channels, with recommendations to improve CAC by 30%.",
  ],
  Finance: [
    "Built a 5-year financial model for a SaaS startup with revenue, cost, and profitability projections using DCF valuation methodology.",
    "Conducted equity research on a mid-cap FMCG company, analysing 3 years of financials and delivering a Buy/Hold/Sell recommendation.",
    "Developed a credit analysis framework for an NBFC, assessing borrower risk across 8 financial ratio parameters.",
    "Designed a budget planning model for a retail chain, identifying ₹2.4Cr in cost optimisation opportunities.",
  ],
  HR: [
    "Designed a full-cycle recruitment strategy for a 50-person engineering team, reducing average time-to-hire by 40%.",
    "Created an employer branding campaign including EVP, content calendar, and LinkedIn strategy for a fintech company.",
    "Built an HR analytics dashboard tracking 12 KPIs including attrition, engagement, and DEI metrics using Excel and Power BI.",
    "Developed an employee engagement framework benchmarked against 5 industry-leading companies, with 8 actionable recommendations.",
  ],
  Operations: [
    "Analysed a supply chain for a consumer goods company, identifying 3 bottlenecks and recommending solutions to reduce lead time by 25%.",
    "Conducted an inventory optimisation study using ABC analysis, recommending a 15% reduction in slow-moving stock.",
    "Mapped end-to-end operational processes for a logistics company and developed SOPs to standardise 6 key workflows.",
    "Designed a process improvement roadmap using Lean methodology, projecting ₹80L in annual cost savings.",
  ],
  "Business Analytics": [
    "Built a customer segmentation dashboard in Power BI, identifying 4 high-value customer clusters from a dataset of 50,000 users.",
    "Designed a KPI framework with 15 business metrics across sales, marketing, and operations, implemented in a live Excel dashboard.",
    "Conducted a cohort analysis to identify churn patterns, recommending 3 retention interventions with projected 12% reduction in monthly churn.",
    "Built a sales forecasting model using historical trend analysis, achieving 89% accuracy over a 6-month backtest period.",
  ],
  Consulting: [
    "Developed a market entry strategy for an FMCG brand entering the Northeast India market, sizing a ₹320Cr addressable market.",
    "Conducted industry research across 5 competing firms in the EdTech sector, identifying growth opportunities and strategic threats.",
    "Built a growth strategy framework for a D2C brand, recommending 4 initiatives projected to double revenue in 24 months.",
    "Performed business due diligence on a Series A startup, assessing market sizing, competitive positioning, and team capability.",
  ],
};

const tabs = Object.keys(domainBullets);

const testimonials = [
  {
    name: "Priya Sharma",
    program: "MBA 2024",
    college: "IIM Bangalore",
    project: "Go-to-Market Strategy",
    outcome: "The GTM project gave me a real deliverable. My interviewer at Hindustan Unilever asked about it for 10 minutes. I got the offer the next day.",
    initials: "PS",
    avatarColor: "#0056D2",
  },
  {
    name: "Arjun Mehta",
    program: "MBA 2024",
    college: "XLRI Jamshedpur",
    project: "Financial Modelling",
    outcome: "The FinEdge certificate was the first thing my Goldman Sachs interviewer mentioned. The CV bullet points were specific enough to anchor a 15-minute conversation.",
    initials: "AM",
    avatarColor: "#15803D",
  },
  {
    name: "Sneha Kapoor",
    program: "MBA 2023",
    college: "MDI Gurgaon",
    project: "Customer Segmentation Dashboard",
    outcome: "I pivoted from HR to analytics after doing the InsightIQ project. The portfolio dashboard proved I could do the job before I had the title.",
    initials: "SK",
    avatarColor: "#7C3AED",
  },
  {
    name: "Rohit Joshi",
    program: "MBA 2024",
    college: "SIBM Pune",
    project: "Market Entry Strategy",
    outcome: "The consulting project taught me how to structure a problem like a McKinsey analyst. My case interviews improved dramatically after completing the StratLab project.",
    initials: "RJ",
    avatarColor: "#C2410C",
  },
];

const portfolioItems = [
  { icon: "📊", label: "Research Report", desc: "20-page professional market research document" },
  { icon: "💰", label: "Financial Model", desc: "Live Excel model with 5-year projections" },
  { icon: "📈", label: "Analytics Dashboard", desc: "Power BI or Excel dashboard with real data" },
  { icon: "📋", label: "Strategy Presentation", desc: "12-slide board-ready strategy deck" },
  { icon: "🔍", label: "Consulting Report", desc: "Structured consulting deliverable with recommendations" },
];

export function StudentOutcomes() {
  const [activeTab, setActiveTab] = useState("Marketing");

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ backgroundColor: "var(--workxd-blue)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Student Outcomes</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white" }} className="mb-4">
            Turn Projects Into Placement-Ready Proof
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            See exactly what you'll walk away with after completing a WorkXD project.
          </p>
        </div>
      </div>

      {/* Outcome cards */}
      <SectionWrapper bg="gray">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <Award className="w-6 h-6" />, title: "Co-Branded Certificate", desc: "A dual-signed certificate from WorkXD and the project brand — trusted by 50+ recruiters.", iconBg: "#EEF4FF", iconColor: "#0056D2" },
            { icon: <FileText className="w-6 h-6" />, title: "4 CV Bullet Points", desc: "Specific, quantified, ATS-optimised bullet points written in recruiter language — ready to paste.", iconBg: "#F0FDF4", iconColor: "#15803D" },
            { icon: <Briefcase className="w-6 h-6" />, title: "Portfolio Deliverable", desc: "A professional-grade output you can share on LinkedIn, in applications, or during interviews.", iconBg: "#FFF7ED", iconColor: "#C2410C" },
            { icon: <MessageSquare className="w-6 h-6" />, title: "Interview Story", desc: "A structured STAR-format story from real project experience to answer competency questions.", iconBg: "#F5F3FF", iconColor: "#7C3AED" },
          ].map((o) => (
            <div key={o.title} className="bg-white border rounded-xl p-6 flex flex-col gap-4" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: o.iconBg, color: o.iconColor }}>{o.icon}</div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: "var(--workxd-dark)", fontSize: "16px" }}>{o.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{o.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Before / After Resume */}
      <SectionWrapper bg="white">
        <SectionHeading label="Resume Impact" title="Before vs After WorkXD" subtitle="See how a WorkXD project transforms a typical MBA resume." center />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Before */}
          <div className="bg-white border rounded-xl p-6" style={{ borderColor: "#FCA5A5", backgroundColor: "#FFF5F5" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold">✗</div>
              <h3 className="font-semibold" style={{ color: "var(--workxd-dark)" }}>Before WorkXD</h3>
            </div>
            <div className="space-y-3">
              {[
                "Internship: General management intern (3 months)",
                "Project: College case competition (team of 4)",
                "Coursework: Marketing Management, Strategic Management",
                "Skills: MS Office, basic Excel, PowerPoint",
              ].map((item) => (
                <div key={item} className="text-sm p-3 bg-white rounded-lg border" style={{ borderColor: "#FCA5A5", color: "var(--workxd-text-muted)" }}>
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "#EF4444" }}>⚠ No proof of domain-specific skills or real deliverables</p>
          </div>

          {/* After */}
          <div className="bg-white border rounded-xl p-6" style={{ borderColor: "#86EFAC", backgroundColor: "var(--domain-finance-bg)" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center" style={{ color: "var(--workxd-green)" }}>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h3 className="font-semibold" style={{ color: "var(--workxd-dark)" }}>After WorkXD</h3>
            </div>
            <div className="space-y-3">
              {[
                "WorkXD × MarketSpark — Go-to-Market Strategy Project",
                "Developed GTM strategy for D2C brand across 3 customer segments",
                "Analysed 10 competitors, identifying 4 strategic whitespace opportunities",
                "Built ₹50L Year 1 revenue model with CAC/LTV projections",
              ].map((item) => (
                <div key={item} className="text-sm p-3 bg-white rounded-lg border flex items-start gap-2" style={{ borderColor: "#86EFAC", color: "var(--workxd-text-body)" }}>
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--workxd-green)" }} />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: "#15803D" }}>✓ Specific, quantified, recruiter-ready proof of real skills</p>
          </div>
        </div>
      </SectionWrapper>

      {/* CV Bullets by Domain */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Sample CV Points" title="Domain-Specific CV Bullet Points" subtitle="See the exact type of bullet points you'll receive for each MBA domain." center />

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-colors"
              style={{
                backgroundColor: activeTab === tab ? "#0056D2" : "white",
                color: activeTab === tab ? "white" : "#374151",
                borderColor: activeTab === tab ? "#0056D2" : "#E5E7EB",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {domainBullets[activeTab].map((bullet, i) => (
            <div key={i} className="bg-white border rounded-xl p-4 flex items-start gap-3" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: "var(--workxd-green)" }}>✓</div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-body)" }}>{bullet}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Portfolio Deliverables */}
      <SectionWrapper bg="white">
        <SectionHeading label="Portfolio" title="What's In Your Portfolio" subtitle="Every WorkXD project produces professional-grade deliverables you can share anywhere." center />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {portfolioItems.map((item) => (
            <div key={item.label} className="bg-gray-50 border rounded-xl p-4 flex flex-col items-center text-center gap-2" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="text-3xl">{item.icon}</div>
              <p className="text-sm font-semibold" style={{ color: "var(--workxd-dark)" }}>{item.label}</p>
              <p className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Certificate */}
      <SectionWrapper bg="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <SectionHeading label="Certificate" title="Your Co-Branded Certificate" subtitle="A premium, verifiable certificate co-signed by WorkXD and the project brand." />
            <ul className="space-y-3">
              {["Issued within 3–5 business days of approval", "Unique credential ID for verification", "Shareable on LinkedIn and job portals", "Trusted by recruiters at top companies", "Co-signed by WorkXD and the brand"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--workxd-text-body)" }}>
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--workxd-green)" }} /> {f}
                </li>
              ))}
            </ul>
          </div>
          <CertificateMockup large />
        </div>
      </SectionWrapper>

      {/* Interview Readiness */}
      <SectionWrapper bg="white">
        <SectionHeading label="Interviews" title="Be Ready for Interview Questions" center subtitle="See how WorkXD project experience helps you answer common interview questions." />
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Tell me about a time you worked on a strategic project.",
              a: "In my WorkXD project with MarketSpark, I developed a full go-to-market strategy for a D2C skincare brand entering 3 Indian cities. I analysed 10 competitors, identified 4 market gaps, and presented a phased GTM roadmap with Year 1 revenue projections.",
            },
            {
              q: "Give an example of working with data to drive a business decision.",
              a: "In my InsightIQ analytics project, I built a customer segmentation model from 50,000 user records, identifying 4 high-value clusters. My analysis informed a recommendation to concentrate acquisition spend on 2 segments — projected to improve marketing ROI by 35%.",
            },
            {
              q: "How have you demonstrated analytical problem-solving?",
              a: "My FinEdge financial modelling project required me to build a 5-year DCF model for a SaaS company. I validated assumptions using industry benchmarks and presented my valuation to a panel, defending my methodology under scrutiny.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-white border rounded-xl p-6" style={{ borderColor: "var(--workxd-border)" }}>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--workxd-blue)" }}>Q: {q}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-body)" }}>A: {a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Success Stories" title="Hear from Students" center />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">
            Ready to Build Your MBA Portfolio?
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            Join 5,000+ students already earning certificates, CV points, and placement-ready proof.
          </p>
          <Link to="/projects" className="inline-block px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#F97316", color: "white" }}>
            Browse Projects <ArrowRight className="w-4 h-4 inline ml-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
