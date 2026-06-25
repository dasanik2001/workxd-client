import { Link } from "react-router-dom";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CertificateMockup } from "../components/CertificateMockup";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const brands = [
  {
    name: "MarketSpark",
    domain: "Marketing",
    color: "var(--workxd-blue)",
    bg: "#EEF4FF",
    description: "WorkXD's marketing brand. Creates real go-to-market challenges, competitor analyses, and brand strategy projects for MBA students targeting FMCG, D2C, and digital marketing roles.",
    projects: 42,
    students: 1800,
    examples: ["Go-to-Market Strategy", "Brand Positioning", "Digital Marketing Audit", "Customer Persona Development"],
  },
  {
    name: "FinEdge",
    domain: "Finance",
    color: "#15803D",
    bg: "#F0FDF4",
    description: "WorkXD's finance brand. Provides real financial modelling, equity research, and credit analysis projects for students pursuing investment banking, consulting, and corporate finance roles.",
    projects: 38,
    students: 1500,
    examples: ["Financial Modelling", "Equity Research", "Credit Analysis", "Valuation"],
  },
  {
    name: "PeopleFirst",
    domain: "HR",
    color: "#C2410C",
    bg: "#FFF7ED",
    description: "WorkXD's HR brand. Delivers real recruitment strategy, employer branding, and HR analytics projects for students targeting HR business partner and talent acquisition roles.",
    projects: 24,
    students: 800,
    examples: ["Recruitment Strategy", "Employer Branding", "HR Analytics", "Employee Engagement"],
  },
  {
    name: "OpsFlow",
    domain: "Operations",
    color: "#7C3AED",
    bg: "#F5F3FF",
    description: "WorkXD's operations brand. Creates supply chain, process improvement, and logistics projects for students targeting operations management and consulting roles.",
    projects: 29,
    students: 900,
    examples: ["Supply Chain Analysis", "Process Improvement", "Inventory Optimisation", "Logistics Planning"],
  },
  {
    name: "InsightIQ",
    domain: "Business Analytics",
    color: "#BE123C",
    bg: "#FFF1F2",
    description: "WorkXD's analytics brand. Offers dashboard building, customer segmentation, and forecasting projects for students moving into data and analytics roles.",
    projects: 33,
    students: 1100,
    examples: ["Customer Segmentation", "KPI Dashboard", "Forecasting Model", "Cohort Analysis"],
  },
  {
    name: "StratLab",
    domain: "Consulting",
    color: "#047857",
    bg: "#ECFDF5",
    description: "WorkXD's consulting brand. Simulates real market entry, growth strategy, and due diligence engagements — exactly the type of work done at top consulting firms.",
    projects: 35,
    students: 1200,
    examples: ["Market Entry Strategy", "Growth Strategy", "Industry Research", "Business Due Diligence"],
  },
];

const howCoBrandingWorks = [
  { step: "01", title: "Students Choose a Project", desc: "Students browse and select a project from one of WorkXD's in-house brands." },
  { step: "02", title: "Complete Real Deliverables", desc: "Students complete the project working within the brand's brief and context." },
  { step: "03", title: "WorkXD Reviews the Work", desc: "Our team of industry experts reviews every submission against professional standards." },
  { step: "04", title: "Co-Branded Certificate Issued", desc: "Upon approval, the student receives a certificate jointly signed by WorkXD and the brand." },
];

const partnerBenefits = [
  "Brand visibility among 5,000+ MBA students", "Association with quality project outcomes", "Access to top talent for future hiring", "Co-branded certificate lends dual credibility", "New projects added regularly across domains",
];

export function BrandsPage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ backgroundColor: "#1F1F1F" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>Brands & Co-Branding</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white" }} className="mb-4">
            The Brands Behind WorkXD
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
            Six in-house brands. Six MBA domains. Thousands of real business projects.
            Every certificate carries two names — WorkXD and the project brand.
          </p>
        </div>
      </div>

      {/* Brand cards */}
      <SectionWrapper bg="gray">
        <SectionHeading label="In-House Brands" title="Our Brand Portfolio" center />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map((brand) => (
            <div key={brand.name} className="bg-white border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow" style={{ borderColor: "var(--workxd-border)" }}>
              {/* Brand header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.name[0]}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "var(--workxd-dark)", fontSize: "18px" }}>{brand.name}</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: brand.bg, color: brand.color }}>{brand.domain}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{brand.description}</p>

              {/* Example projects */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--workxd-text-subtle)" }}>Sample Projects</p>
                <div className="flex flex-wrap gap-1.5">
                  {brand.examples.map((ex) => (
                    <span key={ex} className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: brand.bg, color: brand.color }}>{ex}</span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-2 border-t" style={{ borderColor: "var(--workxd-border-subtle)" }}>
                <div>
                  <p className="text-lg font-bold" style={{ color: brand.color }}>{brand.projects}</p>
                  <p className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>Projects</p>
                </div>
                <div>
                  <p className="text-lg font-bold" style={{ color: brand.color }}>{brand.students.toLocaleString()}+</p>
                  <p className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>Students</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Certificate Examples */}
      <SectionWrapper bg="white">
        <SectionHeading label="Co-Branded Certificates" title="What a Co-Branded Certificate Looks Like" center subtitle="Every brand produces its own co-branded certificate — here are two examples." />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <CertificateMockup studentName="Arjun Mehta" projectTitle="Financial Modelling" brand="FinEdge" />
          <CertificateMockup studentName="Sneha Kapoor" projectTitle="Go-to-Market Strategy" brand="MarketSpark" />
        </div>
      </SectionWrapper>

      {/* How Co-Branding Works */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Process" title="How Co-Branding Works" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {howCoBrandingWorks.map((step) => (
            <div key={step.step} className="bg-white border rounded-xl p-5 text-center" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold" style={{ backgroundColor: "var(--workxd-blue)" }}>{step.step}</div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--workxd-dark)", fontSize: "14px" }}>{step.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Partner Benefits */}
      <SectionWrapper bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <SectionHeading label="For Partners" title="Benefits of Partnering with WorkXD" />
            <ul className="space-y-3">
              {partnerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm" style={{ color: "var(--workxd-text-body)" }}>
                  <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "var(--workxd-green)" }} />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--workxd-blue)" }}
              >
                Become a Partner <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 border rounded-2xl p-6" style={{ borderColor: "var(--workxd-border)" }}>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5" style={{ color: "var(--workxd-blue)" }} />
              <h3 className="font-semibold" style={{ color: "var(--workxd-dark)" }}>For Colleges (Coming Soon)</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--workxd-text-muted)" }}>
              WorkXD is building a dedicated institutional track for B-Schools and placement cells.
              Express your interest to be among the first institutions to offer WorkXD projects to your students.
            </p>
            <div className="space-y-2">
              {["Dedicated placement cell dashboard", "Bulk student access at discounted rates", "Optional college co-branding on certificates", "Quarterly student outcome reports"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--workxd-text-body)" }}>
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--workxd-green)" }} /> {f}
                </div>
              ))}
            </div>
            <Link to="/contact" className="mt-4 block text-center py-2.5 rounded-xl text-sm font-semibold border hover:bg-gray-100 transition-colors" style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-blue)" }}>
              Express Interest
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">Work with Our Brands</h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Start a project from any of our 6 brands and earn a co-branded certificate that recruiters recognise.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/projects" className="px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#F97316", color: "white" }}>
              Browse Projects
            </Link>
            <Link to="/contact" className="px-7 py-4 rounded-xl font-semibold border" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
