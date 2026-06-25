import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, BarChart2, Award, CheckCircle2, Star, FileText, Presentation } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CertificateMockup } from "../components/CertificateMockup";
import { FAQAccordion } from "../components/FAQAccordion";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const skills = ["Market Research", "GTM Strategy", "Competitor Analysis", "Brand Positioning", "Consumer Insights", "Presentation Design", "Strategic Thinking", "Data Synthesis"];
const tools = ["Google Analytics", "SimilarWeb", "Canva", "PowerPoint", "Excel", "Google Trends", "Meta Ads Library"];

const deliverables = [
  { icon: <FileText className="w-5 h-5" />, label: "Market Research Report", desc: "20-page research on the D2C market, customer segments, and trends." },
  { icon: <BarChart2 className="w-5 h-5" />, label: "Competitor Analysis Matrix", desc: "Side-by-side comparison of 10 competitors with strategic gaps identified." },
  { icon: <Presentation className="w-5 h-5" />, label: "GTM Strategy Deck", desc: "12-slide go-to-market strategy presentation ready for brand review." },
  { icon: <FileText className="w-5 h-5" />, label: "Strategic Recommendations", desc: "Executive summary with prioritized recommendations and KPIs." },
];

const cvBullets = [
  "Developed a comprehensive go-to-market strategy for a D2C skincare brand targeting millennials, identifying 3 key customer segments across 15 Indian cities.",
  "Conducted competitor analysis across 10 D2C brands, surfacing 4 strategic gaps and recommending a differentiated positioning strategy.",
  "Built a GTM roadmap with phased channel strategy (D2C website, Instagram, quick commerce), projected to achieve ₹50L revenue in Year 1.",
  "Presented final recommendations to senior brand stakeholders with projected CAC, LTV ratios, and payback period assumptions.",
];

const faqs = [
  { question: "Do I need prior marketing experience?", answer: "No. This project is designed for MBA students with basic business knowledge. All background materials are provided to get you up to speed before you begin." },
  { question: "How long does the project take?", answer: "The project is designed to be completed in 3 weeks, with approximately 8–10 hours of work per week. You can work at your own pace." },
  { question: "Will I get feedback on my work?", answer: "Yes. WorkXD's project review team will review your deliverables and provide structured feedback before issuing your certificate." },
  { question: "Can I add this to my LinkedIn?", answer: "Absolutely. We provide a verified credential ID you can add to your LinkedIn certifications section, plus a shareable link." },
  { question: "What happens after I submit?", answer: "Your submission is reviewed within 3–5 business days. Once approved, you'll receive your co-branded certificate and CV bullet points via email." },
];

const reviews = [
  { name: "Priya Sharma", college: "IIM Bangalore", rating: 5, review: "Best ₹999 I've spent. The GTM project helped me crack my Unilever interview. The reviewer's feedback was incredibly specific." },
  { name: "Karan Malhotra", college: "NMIMS Mumbai", rating: 5, review: "I was skeptical at first, but the quality of the brief and the real-brand context made this feel genuinely professional. Got my certificate in 4 weeks." },
  { name: "Divya Nair", college: "SIBM Pune", rating: 5, review: "The CV bullet points they provided are exactly what I needed. My recruiter at Hindustan Unilever highlighted the project on my resume." },
];

export function ProjectPage() {
  const [enrolling, setEnrolling] = useState(false);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b" style={{ borderColor: "var(--workxd-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--workxd-blue)" }}>Marketing</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: "var(--domain-operations-bg)", color: "#7C3AED" }}>Intermediate</span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: "var(--domain-finance-bg)", color: "#15803D" }}>Certificate Included</span>
              </div>

              <h1 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "var(--workxd-dark)", lineHeight: 1.2 }} className="mb-4">
                Go-to-Market Strategy for a D2C Brand
              </h1>

              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--workxd-text-muted)" }}>
                Work directly with MarketSpark to develop a complete go-to-market strategy for a real D2C skincare brand entering the Indian market.
                You'll conduct real market research, analyse competitors, and deliver a presentation-ready GTM deck.
              </p>

              <div className="flex flex-wrap gap-5 text-sm" style={{ color: "var(--workxd-text-body)" }}>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" style={{ color: "var(--workxd-blue)" }} /> 3 weeks</span>
                <span className="flex items-center gap-1.5"><BarChart2 className="w-4 h-4" style={{ color: "#F97316" }} /> Intermediate</span>
                <span className="flex items-center gap-1.5"><Award className="w-4 h-4" style={{ color: "var(--workxd-green)" }} /> Co-Branded Certificate</span>
                <span className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  <span style={{ color: "var(--workxd-text-subtle)" }}>(128 reviews)</span>
                </span>
              </div>
            </div>

            {/* Sticky enrollment card */}
            <div className="bg-white border rounded-2xl p-6 shadow-lg sticky top-20" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="flex items-baseline gap-1 mb-1">
                <span style={{ fontSize: "32px", fontWeight: 800, color: "var(--workxd-dark)" }}>₹999</span>
                <span className="text-sm" style={{ color: "var(--workxd-text-subtle)" }}>one-time</span>
              </div>
              <p className="text-xs mb-4" style={{ color: "var(--workxd-green)" }}>✓ Full access · Certificate included · CV points included</p>
              <button
                onClick={() => setEnrolling(true)}
                className="w-full py-3.5 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity mb-3"
                style={{ backgroundColor: "#F97316" }}
              >
                {enrolling ? "Enrolling..." : "Enroll Now — ₹999"}
              </button>
              <button className="w-full py-3 rounded-xl font-semibold border hover:bg-gray-50 transition-colors text-sm" style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-text-body)" }}>
                Preview Project Brief
              </button>
              <div className="mt-4 space-y-2">
                {["3-week self-paced project", "Real brand context & data", "Co-branded certificate", "4 CV-ready bullet points", "Reviewed by WorkXD team", "LinkedIn-verified credential"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--workxd-text-body)" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--workxd-green)" }} /> {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl">
          <SectionHeading label="The Challenge" title="Problem Statement" />
          <div className="bg-white border rounded-xl p-6" style={{ borderColor: "var(--workxd-border)" }}>
            <p className="text-base leading-relaxed" style={{ color: "var(--workxd-text-body)" }}>
              <strong style={{ color: "var(--workxd-dark)" }}>MarketSpark</strong> is launching a new D2C skincare brand targeting urban Indian millennials aged 22–34.
              The brand has a product line ready but lacks a clear go-to-market strategy. Your challenge is to research the market,
              understand the competitive landscape, and develop a go-to-market plan that gives the brand the best chance of success in its first year.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Project Objective */}
      <SectionWrapper bg="white">
        <div className="max-w-3xl">
          <SectionHeading label="Objective" title="What You'll Achieve" />
          <div className="grid sm:grid-cols-2 gap-4">
            {["Understand the Indian D2C skincare market size and trends", "Identify the 3 most attractive customer segments", "Analyse 10 competing brands using strategic frameworks", "Recommend a differentiated positioning strategy", "Design a phased go-to-market roadmap", "Project Year 1 revenue targets and key metrics"].map((o, i) => (
              <div key={o} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ backgroundColor: "var(--workxd-blue)" }}>{i + 1}</div>
                <p className="text-sm" style={{ color: "var(--workxd-text-body)" }}>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Deliverables */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Deliverables" title="What You'll Build" subtitle="Four professional-grade deliverables you can add to your portfolio." />
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {deliverables.map((d) => (
            <div key={d.label} className="bg-white border rounded-xl p-5 flex gap-4" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--workxd-blue)" }}>
                {d.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-1" style={{ color: "var(--workxd-dark)" }}>{d.label}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Skills + Tools */}
      <SectionWrapper bg="white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading label="Skills" title="Skills You'll Build" />
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="text-sm px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--workxd-blue)" }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading label="Tools" title="Tools Used" />
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-sm px-3 py-1.5 rounded-full border font-medium" style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-text-body)", backgroundColor: "var(--workxd-card)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CV Bullets */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Resume Impact" title="What Goes On Your CV" subtitle="WorkXD provides 4 specific, quantified bullet points you can add directly to your resume." />
        <div className="space-y-3 max-w-3xl">
          {cvBullets.map((bullet, i) => (
            <div key={i} className="bg-white border rounded-xl p-4 flex items-start gap-3" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5" style={{ backgroundColor: "var(--workxd-green)" }}>✓</div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-body)" }}>{bullet}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Certificate */}
      <SectionWrapper bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading label="Certificate" title="Your Co-Branded Certificate" subtitle="Upon successful completion, receive a WorkXD × MarketSpark certificate — co-signed and shareable." />
            <div className="space-y-3">
              {["Issued by WorkXD & MarketSpark", "Includes a unique verification ID", "Shareable on LinkedIn", "Trusted by recruiters at 50+ companies"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--workxd-text-body)" }}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: "var(--workxd-green)" }} /> {f}
                </div>
              ))}
            </div>
          </div>
          <CertificateMockup studentName="Your Name" projectTitle="Go-to-Market Strategy" brand="MarketSpark" large />
        </div>
      </SectionWrapper>

      {/* About the Brand */}
      <SectionWrapper bg="gray">
        <div className="max-w-2xl">
          <SectionHeading label="Brand" title="About MarketSpark" />
          <div className="bg-white border rounded-xl p-6" style={{ borderColor: "var(--workxd-border)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: "var(--workxd-blue)" }}>M</div>
              <div>
                <p className="font-semibold" style={{ color: "var(--workxd-dark)" }}>MarketSpark</p>
                <p className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>WorkXD's Marketing Projects Brand</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-body)" }}>
              MarketSpark is WorkXD's in-house marketing brand. We create real-world marketing challenges based on actual business problems
              faced by D2C, FMCG, and digital-first brands in India. Every project brief is written by marketing professionals with 5+ years of industry experience,
              ensuring students gain truly relevant and practical knowledge.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Reviews */}
      <SectionWrapper bg="white">
        <SectionHeading label="Reviews" title="What Students Say" />
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border rounded-xl p-5" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--workxd-text-body)" }}>"{r.review}"</p>
              <div className="flex items-center gap-2 border-t pt-3" style={{ borderColor: "var(--workxd-border-subtle)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "var(--workxd-blue)" }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "var(--workxd-dark)" }}>{r.name}</p>
                  <p className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>{r.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto">
          <SectionHeading label="FAQs" title="Frequently Asked Questions" center />
          <div className="space-y-3">
            {faqs.map((faq) => <FAQAccordion key={faq.question} {...faq} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">
            Start This Project Today
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            Join 128 students who've completed this project and earned their MarketSpark certificate.
          </p>
          <button
            className="px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#F97316", color: "white" }}
          >
            Enroll Now — ₹999
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
