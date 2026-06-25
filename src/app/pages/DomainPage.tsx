import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight, CheckCircle2, Award } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard, type ProjectCardProps } from "../components/ProjectCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { CertificateMockup } from "../components/CertificateMockup";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const marketingProjects: ProjectCardProps[] = [
  { title: "Go-to-Market Strategy for D2C Brand", domain: "Marketing", brand: "MarketSpark", duration: "3 weeks", difficulty: "Intermediate", skills: ["GTM Strategy", "Market Research", "Brand Positioning", "Competitor Analysis"] },
  { title: "Digital Marketing Audit & Recommendations", domain: "Marketing", brand: "MarketSpark", duration: "2 weeks", difficulty: "Beginner", skills: ["Google Analytics", "SEO", "Paid Media", "Content Strategy"] },
  { title: "Customer Persona Development", domain: "Marketing", brand: "MarketSpark", duration: "2 weeks", difficulty: "Beginner", skills: ["Customer Research", "Persona Mapping", "Survey Design", "Insights"] },
  { title: "Brand Positioning Strategy", domain: "Marketing", brand: "MarketSpark", duration: "3 weeks", difficulty: "Intermediate", skills: ["Brand Strategy", "Competitor Analysis", "Positioning", "Messaging"] },
];

const skills = [
  "Go-to-Market Strategy", "Competitor Analysis", "Brand Positioning", "Customer Persona Development",
  "Digital Marketing Audit", "SEO & Content Strategy", "Paid Media Planning", "Market Sizing",
  "Consumer Insights", "Influencer Marketing", "Performance Marketing", "Marketing Analytics",
];

const testimonials = [
  {
    name: "Priya Sharma",
    program: "MBA 2024",
    college: "IIM Bangalore",
    project: "Go-to-Market Strategy",
    outcome: "The MarketSpark project gave me a real GTM deck I could show recruiters. I landed a marketing role at a top FMCG in 3 months.",
    initials: "PS",
    avatarColor: "#0056D2",
  },
  {
    name: "Rahul Verma",
    program: "MBA 2024",
    college: "FMS Delhi",
    project: "Brand Positioning Strategy",
    outcome: "My interviewer at Unilever specifically asked about my MarketSpark project. The co-branded certificate gave my CV instant credibility.",
    initials: "RV",
    avatarColor: "#C2410C",
  },
];

const learningOutcomes = [
  "Design a full go-to-market strategy for a real brand",
  "Conduct market research and competitive analysis",
  "Develop data-driven customer personas",
  "Build a digital marketing audit and recommendations deck",
  "Create brand positioning frameworks used by professionals",
];

export function DomainPage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className=" border-b" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--workxd-blue)" }}
                >
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--workxd-blue)" }}>
                  MarketSpark — Marketing Projects
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: "var(--workxd-dark)", lineHeight: 1.2 }} className="mb-4">
                Marketing Projects for MBA Students
              </h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--workxd-text-muted)" }}>
                Work on real marketing challenges from MarketSpark — our in-house brand for marketing projects.
                Build a portfolio of GTM strategies, brand decks, and campaign plans that recruiters at FMCG, tech, and D2C brands actively look for.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  to="/projects"
                  className="px-5 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#F97316" }}
                >
                  Browse Marketing Projects
                </Link>
                <Link
                  to="/project/go-to-market"
                  className="px-5 py-3 rounded-xl font-semibold border hover:transition-colors flex items-center gap-2"
                  style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                >
                  See a Sample Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Available", value: "42" },
                { label: "Average Duration", value: "2–3 wks" },
                { label: "Students Enrolled", value: "1,800+" },
                { label: "Certificates Issued", value: "1,200+" },
              ].map((s) => (
                <div key={s.label} className=" border rounded-xl p-5 text-center" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
                  <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--workxd-blue)" }}>{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--workxd-text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <SectionWrapper bg="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Curriculum" title="What You'll Learn" subtitle="Practical marketing skills that employers actually ask for." />
            <ul className="space-y-3">
              {learningOutcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--workxd-text-body)" }}>
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "var(--workxd-green)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading label="Skills" title="Skills You'll Develop" />
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-full font-medium"
                  style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--workxd-blue)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper bg="white">
        <SectionHeading label="Projects" title="Marketing Projects" subtitle="Handpicked projects from MarketSpark — all with certificates and CV points." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {marketingProjects.map((p) => (
            <ProjectCard key={p.title} {...p} compact />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--workxd-blue)" }}
          >
            View All Marketing Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Student Outcomes */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Outcomes" title="Where Marketing Students End Up" center subtitle="Real placement outcomes from students who completed MarketSpark projects." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {[
            { value: "84%", label: "Got marketing-related roles" },
            { value: "3x", label: "More interview shortlists" },
            { value: "₹8.5L", label: "Average first salary" },
            { value: "90 days", label: "Average time to placement" },
          ].map((s) => (
            <div key={s.label} className=" border rounded-xl p-5 text-center" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "var(--workxd-blue)" }}>{s.value}</div>
              <div className="text-xs mt-1" style={{ color: "var(--workxd-text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Certificate Preview */}
      <SectionWrapper bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading label="Certificate" title="Your Co-Branded Certificate" subtitle="Every marketing project earns you a WorkXD × MarketSpark certificate — verified, shareable, and recruiter-trusted." />
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5" style={{ color: "var(--workxd-green)" }} />
              <span className="text-sm font-medium" style={{ color: "var(--workxd-green)" }}>Includes recruiter-ready CV bullet points</span>
            </div>
            <Link
              to="/certificates"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--workxd-blue)" }}
            >
              Learn more about certificates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <CertificateMockup studentName="Your Name" projectTitle="Go-to-Market Strategy" brand="MarketSpark" />
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Success Stories" title="What Marketing Students Say" center />
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">
            Start Your First Marketing Project
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            Join 1,800+ MBA students who've already built marketing portfolios with WorkXD.
          </p>
          <Link
            to="/projects"
            className="inline-block px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#F97316", color: "white" }}
          >
            Browse Marketing Projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
