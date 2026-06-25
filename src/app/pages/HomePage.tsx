import { Link } from "react-router-dom";
import { Award, FileText, Briefcase, MessageSquare, ArrowRight, CheckCircle2, Users, BookOpen, Star } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard, type ProjectCardProps } from "../components/ProjectCard";
import { DomainCard } from "../components/DomainCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { PricingCard } from "../components/PricingCard";
import { OutcomeCard } from "../components/OutcomeCard";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const featuredProjects: ProjectCardProps[] = [
  {
    title: "Go-to-Market Strategy for D2C Brand",
    domain: "Marketing",
    brand: "MarketSpark",
    duration: "3 weeks",
    difficulty: "Intermediate",
    skills: ["Market Research", "GTM Strategy", "Brand Positioning", "Competitor Analysis"],
  },
  {
    title: "Financial Modelling for a SaaS Startup",
    domain: "Finance",
    brand: "FinEdge",
    duration: "4 weeks",
    difficulty: "Advanced",
    skills: ["Excel Modelling", "Valuation", "DCF Analysis", "Financial Forecasting"],
  },
  {
    title: "Recruitment Strategy & Employer Branding",
    domain: "HR",
    brand: "PeopleFirst",
    duration: "2 weeks",
    difficulty: "Beginner",
    skills: ["Talent Acquisition", "Employer Branding", "JD Writing", "HR Analytics"],
  },
  {
    title: "Supply Chain Optimization Analysis",
    domain: "Operations",
    brand: "OpsFlow",
    duration: "3 weeks",
    difficulty: "Intermediate",
    skills: ["Supply Chain", "Process Mapping", "Inventory", "Logistics"],
  },
  {
    title: "Customer Segmentation Dashboard",
    domain: "Business Analytics",
    brand: "InsightIQ",
    duration: "3 weeks",
    difficulty: "Intermediate",
    skills: ["SQL", "Power BI", "Customer Segmentation", "Data Visualization"],
  },
  {
    title: "Market Entry Strategy for FMCG Brand",
    domain: "Consulting",
    brand: "StratLab",
    duration: "4 weeks",
    difficulty: "Advanced",
    skills: ["Market Entry", "Industry Research", "Strategic Recommendations", "Consulting Frameworks"],
  },
];

const domains = [
  { domain: "Marketing", description: "Go-to-market strategies, brand positioning, and digital marketing audits for real brands.", projectCount: 42 },
  { domain: "Finance", description: "Financial modelling, valuation, equity research, and credit analysis projects.", projectCount: 38 },
  { domain: "HR", description: "Recruitment strategy, employer branding, employee engagement, and HR analytics.", projectCount: 24 },
  { domain: "Operations", description: "Supply chain analysis, inventory optimization, and process improvement.", projectCount: 29 },
  { domain: "Business Analytics", description: "Dashboard building, KPI analysis, customer segmentation, and forecasting.", projectCount: 33 },
  { domain: "Consulting", description: "Market entry strategy, industry research, growth strategy, and business due diligence.", projectCount: 35 },
];

const testimonials = [
  {
    name: "Priya Sharma",
    program: "MBA 2024",
    college: "IIM Bangalore",
    project: "Go-to-Market Strategy",
    outcome: "The MarketSpark project gave me a real deliverable I could show recruiters. I landed a marketing role at a top FMCG within 3 months of graduating. This is better than any internship I could have applied for.",
    initials: "PS",
    avatarColor: "#0056D2",
  },
  {
    name: "Arjun Mehta",
    program: "MBA 2024",
    college: "XLRI Jamshedpur",
    project: "Financial Modelling",
    outcome: "WorkXD's finance project with FinEdge was exactly what I needed. The CV bullet points I got were specific enough that my interviewer at Goldman Sachs asked about them first. That's when I knew this platform was different.",
    initials: "AM",
    avatarColor: "#15803D",
  },
  {
    name: "Sneha Kapoor",
    program: "MBA 2023",
    college: "MDI Gurgaon",
    project: "Customer Segmentation Dashboard",
    outcome: "I had zero analytics experience before WorkXD. The InsightIQ project taught me Power BI from scratch, and the co-branded certificate gave me the credibility to apply for data roles confidently.",
    initials: "SK",
    avatarColor: "#7C3AED",
  },
];

const stats = [
  { value: "200+", label: "Projects Available" },
  { value: "6", label: "MBA Domains" },
  { value: "5,000+", label: "Students Enrolled" },
  { value: "3,200+", label: "Certificates Issued" },
];

const inHouseBrands = [
  { name: "MarketSpark", domain: "Marketing", color: "var(--workxd-blue)" },
  { name: "FinEdge", domain: "Finance", color: "#15803D" },
  { name: "PeopleFirst", domain: "HR", color: "#C2410C" },
  { name: "OpsFlow", domain: "Operations", color: "#7C3AED" },
  { name: "InsightIQ", domain: "Business Analytics", color: "#BE123C" },
  { name: "StratLab", domain: "Consulting", color: "#047857" },
];

const pricingPlans = [
  {
    plan: "Starter",
    price: "₹999",
    period: "/project",
    description: "Perfect for trying your first real business project.",
    features: [
      "Access to 1 project",
      "Co-branded certificate",
      "Resume CV bullet points",
      "Portfolio deliverable",
      "Email support",
    ],
    cta: "Start for ₹999",
  },
  {
    plan: "Pro",
    price: "₹2,499",
    period: "/month",
    description: "Unlimited projects across all 6 MBA domains.",
    features: [
      "Unlimited project access",
      "All co-branded certificates",
      "Full CV pointer set",
      "Portfolio deliverables",
      "Priority support",
      "LinkedIn profile tips",
    ],
    cta: "Go Pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    plan: "Institutional",
    price: "Custom",
    description: "For B-Schools and placement cells.",
    features: [
      "Bulk student access",
      "College co-branding",
      "Placement cell dashboard",
      "Dedicated account manager",
      "Custom project tracks",
    ],
    cta: "Contact Us",
    href: "/contact",
  },
];

export function HomePage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: "var(--workxd-card)" }} className="pt-16 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center pb-16">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--domain-marketing-text)" }}
              >
                <Star className="w-3.5 h-3.5 fill-current" />
                Trusted by 5,000+ MBA students
              </div>
              <h1
                style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "var(--workxd-dark)", lineHeight: 1.15 }}
                className="mb-6"
              >
                Get Real MBA Experience{" "}
                <span style={{ color: "var(--workxd-blue)" }}>Before You Graduate</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--workxd-text-muted)" }}>
                Work on live business projects, earn co-branded certificates, and build recruiter-ready
                resume points that prove your skills.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/projects"
                  className="px-6 py-3 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--workxd-orange)" }}
                >
                  Browse Projects
                </Link>
                <Link
                  to="/certificates"
                  className="px-6 py-3 rounded-xl font-semibold border transition-colors flex items-center gap-2"
                  style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                >
                  <Award className="w-4 h-4" style={{ color: "var(--workxd-blue)" }} />
                  View Sample Certificate
                </Link>
              </div>
              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 text-sm" style={{ color: "var(--workxd-text-muted)" }}>
                {["No experience required", "Real deliverables", "Recruiter-loved CV points"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" style={{ color: "var(--workxd-green)" }} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="relative">
              <div
                className="rounded-2xl border p-5 shadow-xl"
                style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
              >
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "var(--workxd-text-subtle)" }}>My Dashboard</p>
                    <p className="text-base font-bold" style={{ color: "var(--workxd-dark)" }}>Welcome back, Priya 👋</p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: "var(--workxd-blue)" }}
                  >
                    P
                  </div>
                </div>

                {/* Active project card */}
                <div
                  className="rounded-xl p-4 mb-3"
                  style={{ backgroundColor: "var(--domain-marketing-bg)" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--workxd-card)", color: "var(--workxd-blue)" }}>Marketing</span>
                    <span className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>Week 2 of 3</span>
                  </div>
                  <p className="text-sm font-semibold mb-2" style={{ color: "var(--workxd-dark)" }}>Go-to-Market Strategy for D2C Brand</p>
                  <div className="w-full rounded-full h-1.5" style={{ backgroundColor: "var(--workxd-border)" }}>
                    <div className="h-1.5 rounded-full" style={{ width: "65%", backgroundColor: "var(--workxd-blue)" }} />
                  </div>
                  <p className="text-xs mt-1" style={{ color: "var(--workxd-text-muted)" }}>65% complete</p>
                </div>

                {/* Deliverables */}
                <div className="space-y-2 mb-3">
                  {["Market Research", "Competitor Analysis", "Brand Positioning"].map((item, i) => (
                    <div key={item} className="flex items-center gap-2 text-xs" style={{ color: "var(--workxd-text-body)" }}>
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: i < 2 ? "var(--workxd-green)" : "var(--workxd-border)" }}
                      >
                        {i < 2 ? <CheckCircle2 className="w-3 h-3 text-white" /> : null}
                      </div>
                      {item} {i < 2 ? "(Done)" : "(In progress)"}
                    </div>
                  ))}
                </div>

                {/* Certificate preview */}
                <div
                  className="rounded-xl p-3 flex items-center gap-3 border"
                  style={{ borderColor: "var(--workxd-green)", backgroundColor: "var(--domain-finance-bg)" }}
                >
                  <Award className="w-8 h-8" style={{ color: "var(--workxd-green)" }} />
                  <div>
                    <p className="text-xs font-semibold" style={{ color: "var(--domain-finance-text)" }}>Certificate Unlocking Soon</p>
                    <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>WorkXD × MarketSpark</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 rounded-xl border shadow-lg p-3 flex items-center gap-2"
                style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--domain-finance-bg)" }}>
                  <Users className="w-4 h-4" style={{ color: "var(--workxd-green)" }} />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: "var(--workxd-dark)" }}>5,000+</p>
                  <p className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>Students enrolled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats + Trusted By */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--workxd-blue)" }}>{s.value}</div>
              <div className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--workxd-text-subtle)" }}>
            Projects powered by our in-house brands
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {inHouseBrands.map((brand) => (
            <div
              key={brand.name}
              className="border rounded-xl px-5 py-3 flex items-center gap-2 hover:shadow-sm transition-shadow"
              style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: brand.color }}
              />
              <span className="text-sm font-semibold" style={{ color: "var(--workxd-dark)" }}>{brand.name}</span>
              <span className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>{brand.domain}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper bg="white">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            label="Featured Projects"
            title="Work on Real Business Challenges"
            subtitle="Handpicked projects across 6 MBA domains — all with certificates and CV points."
          />
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
            style={{ color: "var(--workxd-blue)" }}
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--workxd-blue)" }}
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Explore By Domain */}
      <SectionWrapper bg="gray">
        <SectionHeading
          label="MBA Domains"
          title="Explore By Domain"
          subtitle="Every project maps to a core MBA specialization — giving you focused, role-ready experience."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((d) => (
            <DomainCard key={d.domain} {...d} />
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper bg="white">
        <SectionHeading
          label="Process"
          title="How WorkXD Works"
          subtitle="From enrollment to a certificate-ready portfolio — in just 2–4 weeks."
          center
        />
        <div className="relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-8 left-0 right-0 h-0.5"
            style={{ backgroundColor: "var(--workxd-border)", marginLeft: "10%", marginRight: "10%" }}
          />
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", label: "Choose a Project", desc: "Browse 200+ projects across 6 MBA domains." },
              { step: "02", label: "Enroll", desc: "Pay once and get instant access to all materials." },
              { step: "03", label: "Work on Challenges", desc: "Complete real business deliverables at your pace." },
              { step: "04", label: "Submit Deliverables", desc: "Submit your work through our review platform." },
              { step: "05", label: "Get Certificate + CV", desc: "Receive your co-branded cert and CV bullet points." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white relative z-10"
                  style={{ backgroundColor: "var(--workxd-blue)", fontSize: "20px", fontWeight: 700 }}
                >
                  {item.step}
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "var(--workxd-dark)", fontSize: "15px" }}>{item.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--workxd-blue)" }}
          >
            Learn more about the process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* What You'll Get */}
      <SectionWrapper bg="gray">
        <SectionHeading
          label="Outcomes"
          title="What You'll Get"
          subtitle="Every WorkXD project comes with tangible, recruiter-valued proof of your skills."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <OutcomeCard
            icon={<Award className="w-6 h-6" />}
            title="Co-Branded Certificate"
            description="A co-branded certificate from WorkXD and the project brand — designed to impress recruiters and hiring managers."
            iconBg="var(--domain-marketing-bg)"
            iconColor="var(--domain-marketing-text)"
          />
          <OutcomeCard
            icon={<FileText className="w-6 h-6" />}
            title="Resume-Ready CV Points"
            description="Specific, quantified bullet points written in recruiter language — ready to drop directly onto your CV."
            iconBg="var(--domain-finance-bg)"
            iconColor="var(--domain-finance-text)"
          />
          <OutcomeCard
            icon={<Briefcase className="w-6 h-6" />}
            title="Portfolio Deliverables"
            description="Real outputs like reports, dashboards, and presentations you can share on LinkedIn or in interviews."
            iconBg="var(--domain-hr-bg)"
            iconColor="var(--domain-hr-text)"
          />
          <OutcomeCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Interview-Ready Stories"
            description="Structured STAR-method stories from real projects — so you never blank out when asked 'Tell me about a time...'"
            iconBg="var(--domain-operations-bg)"
            iconColor="var(--domain-operations-text)"
          />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/outcomes"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border transition-colors"
            style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
          >
            See student outcomes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="white">
        <SectionHeading
          label="Student Success"
          title="What MBA Students Say"
          subtitle="Real feedback from students who used WorkXD to land their dream roles."
          center
        />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/outcomes"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--workxd-blue)" }}
          >
            Read more success stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Partner Brands */}
      <SectionWrapper bg="gray">
        <SectionHeading
          label="Our Brands"
          title="Meet The Brands Behind The Projects"
          subtitle="Six specialized in-house brands — each dedicated to a specific MBA domain."
          center
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {inHouseBrands.map((brand) => (
            <div
              key={brand.name}
              className="border rounded-xl p-4 flex flex-col items-center gap-2 text-center hover:shadow-md transition-shadow"
              style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-bold"
                style={{ backgroundColor: brand.color }}
              >
                {brand.name[0]}
              </div>
              <p className="text-sm font-semibold" style={{ color: "var(--workxd-dark)" }}>{brand.name}</p>
              <p className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>{brand.domain}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/brands"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--workxd-blue)" }}
          >
            Learn about co-branding <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Pricing Preview */}
      <SectionWrapper bg="white">
        <SectionHeading
          label="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="Start with a single project or unlock everything with Pro."
          center
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((p) => (
            <PricingCard key={p.plan} {...p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--workxd-blue)" }}
          >
            View full pricing details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white" }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Join 5,000+ MBA students on WorkXD
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "white", lineHeight: 1.2 }} className="mb-4">
            Build Experience Before<br />Recruiters Ask For It
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Start with any project today. Earn a certificate. Add it to your CV. Land the role.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/projects"
              className="px-7 py-3.5 rounded-xl font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--workxd-orange)", color: "white" }}
            >
              Browse Projects
            </Link>
            <Link
              to="/how-it-works"
              className="px-7 py-3.5 rounded-xl font-semibold border transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
