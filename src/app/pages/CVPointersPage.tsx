import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, FileText } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";
import { FAQAccordion } from "../components/FAQAccordion";

const domainBullets: Record<string, { before: string; after: string }[]> = {
  Marketing: [
    { before: "Worked on a marketing project for a consumer brand.", after: "Developed a go-to-market strategy for a D2C skincare brand, identifying 3 high-value customer segments across 4 metros and designing a phased launch roadmap." },
    { before: "Did a competitor analysis for a project.", after: "Conducted competitor analysis across 10 D2C brands using Porter's 5 Forces, identifying 4 strategic gaps and recommending a differentiated positioning strategy." },
  ],
  Finance: [
    { before: "Built a financial model during coursework.", after: "Built a 5-year financial model for a SaaS startup using DCF methodology, stress-testing 3 growth scenarios and arriving at a ₹28Cr base-case valuation." },
    { before: "Prepared an equity research report.", after: "Produced an equity research report on a mid-cap FMCG company, analysing 3 years of P&L, balance sheet, and cash flow statements to deliver a Buy recommendation with 22% upside." },
  ],
  HR: [
    { before: "Created a recruitment plan for a company.", after: "Designed a full-cycle recruitment strategy for a 50-person engineering team, reducing average time-to-hire by 40% and improving offer-acceptance rate to 78%." },
    { before: "Worked on an employer branding project.", after: "Developed an employer branding campaign including EVP framework, 3-month content calendar, and LinkedIn posting strategy that increased follower engagement by 60%." },
  ],
  Operations: [
    { before: "Analysed supply chain for a company.", after: "Mapped end-to-end supply chain for a consumer goods company, identifying 3 critical bottlenecks and recommending solutions projected to reduce lead time by 25%." },
    { before: "Did an inventory management project.", after: "Conducted an ABC analysis of 200+ SKUs, recommending a 15% reduction in slow-moving inventory that would free up ₹1.2Cr in working capital annually." },
  ],
};

const tabs = Object.keys(domainBullets);

const whyRecruiters = [
  { title: "Specificity Proves Capability", desc: "Generic claims like 'worked on marketing projects' don't impress. Specific, quantified bullets prove you've done real work at a professional level." },
  { title: "ATS Screening", desc: "Modern hiring uses ATS software to scan CVs for keywords. WorkXD bullet points are written with ATS optimisation in mind — using the exact keywords recruiters search for." },
  { title: "Interview Anchors", desc: "Strong CV bullet points give interviewers something concrete to ask about — which is your opportunity to tell a structured story from a real project." },
  { title: "Differentiation at Scale", desc: "When 300 MBA students apply for the same role, specific project experience with a named brand stands out from generic academic or internship bullet points." },
];

const faqs = [
  { question: "Are the CV bullet points generic or project-specific?", answer: "Every project has 4 unique bullet points written specifically for that project's scope. They reference real deliverables, frameworks, and metrics from the project brief." },
  { question: "Can I customise the bullet points?", answer: "Yes. The bullet points are a starting point. You can personalise them to reflect the specific angle or outcome most relevant to the role you're applying for." },
  { question: "Are these ATS-friendly?", answer: "Yes. WorkXD's HR team writes bullet points in standard recruiter language with keyword density that passes common ATS screening systems." },
  { question: "How many bullet points do I get per project?", answer: "Every project includes exactly 4 bullet points — one for each major deliverable. Pro members also receive a LinkedIn summary blurb for each project completed." },
];

export function CVPointersPage() {
  const [activeTab, setActiveTab] = useState("Marketing");

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className=" border-b" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "var(--workxd-blue)" }}>CV Pointers</span>
              <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "var(--workxd-dark)" }} className="mb-4">
                Resume Bullets That Get You Interviews
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--workxd-text-muted)" }}>
                Every WorkXD project comes with 4 professionally-written, quantified CV bullet points —
                written in recruiter language, ATS-optimised, and ready to drop directly onto your MBA resume.
              </p>
              <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#F97316" }}>
                Start Earning CV Points <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Sample bullet card */}
            <div className=" border rounded-xl p-6" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5" style={{ color: "var(--workxd-blue)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--workxd-blue)" }}>Sample CV Section</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--workxd-text-subtle)" }}>WorkXD × MarketSpark — Marketing Project</p>
              <div className="space-y-2.5">
                {[
                  "Developed a comprehensive go-to-market strategy for a D2C skincare brand targeting urban millennials, identifying 3 high-value customer segments across 15 Indian cities.",
                  "Conducted competitor analysis across 10 D2C brands, surfacing 4 strategic gaps and recommending a differentiated positioning strategy.",
                  "Built a GTM roadmap with phased channel strategy, projected to achieve ₹50L revenue in Year 1 with a 12-month payback period.",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--workxd-text-body)" }}>
                    <span className="mt-1 shrink-0" style={{ color: "var(--workxd-green)" }}>•</span>
                    {b}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t flex items-center gap-2" style={{ borderColor: "var(--workxd-border-subtle)" }}>
                <CheckCircle2 className="w-4 h-4" style={{ color: "var(--workxd-green)" }} />
                <span className="text-xs font-medium" style={{ color: "var(--workxd-green)" }}>ATS-optimised · Recruiter-validated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why recruiters care */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Recruiter Perspective" title="Why Recruiters Care About These Bullet Points" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyRecruiters.map((w) => (
            <div key={w.title} className=" border rounded-xl p-5" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
              <h3 className="font-semibold mb-2" style={{ color: "var(--workxd-dark)", fontSize: "15px" }}>{w.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Before / After by domain */}
      <SectionWrapper bg="white">
        <SectionHeading label="Before vs After" title="See the Transformation" center subtitle="Compare generic MBA resume lines with WorkXD-powered bullet points." />

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

        <div className="space-y-5 max-w-4xl mx-auto">
          {domainBullets[activeTab].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-xl p-4" style={{ borderColor: "#FCA5A5", backgroundColor: "#FFF5F5" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: "#EF4444" }}>✗ Before WorkXD</p>
                <p className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>• {item.before}</p>
              </div>
              <div className="border rounded-xl p-4" style={{ borderColor: "#86EFAC", backgroundColor: "var(--domain-finance-bg)" }}>
                <p className="text-xs font-semibold mb-2" style={{ color: "#15803D" }}>✓ After WorkXD</p>
                <p className="text-sm" style={{ color: "var(--workxd-text-body)" }}>• {item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto">
          <SectionHeading label="FAQs" title="CV Points Questions" center />
          <div className="space-y-3">
            {faqs.map((f) => <FAQAccordion key={f.question} {...f} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">Start Building Your MBA Resume</h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Every project you complete adds 4 recruiter-ready bullet points to your resume. Start today.</p>
          <Link to="/projects" className="inline-block px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#F97316", color: "white" }}>
            Browse Projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
