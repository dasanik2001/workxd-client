import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const team = [
  { name: "Aditya Sharma", role: "Co-founder & CEO", initials: "AS", color: "var(--workxd-blue)", bio: "Former BCG consultant, IIM Ahmedabad alumnus. 8 years advising Fortune 500 brands on strategy and operations." },
  { name: "Neha Kapoor", role: "Co-founder & Head of Product", initials: "NK", color: "#15803D", bio: "Ex-Amazon product manager, MBA from IIM Bangalore. Passionate about building education products that create real outcomes." },
  { name: "Rohan Malhotra", role: "Head of Projects & Content", initials: "RM", color: "#7C3AED", bio: "Former marketing director with 10 years in FMCG. Designs all WorkXD project briefs and curriculum." },
  { name: "Preethi Nair", role: "Head of Student Success", initials: "PN", color: "#C2410C", bio: "Ex-HR director, IIM Kozhikode alumna. Oversees all certificate reviews, CV support, and student outcomes." },
];

const roadmap = [
  { year: "2023", milestone: "WorkXD Founded", desc: "Launched with 10 projects across Marketing and Finance domains. First 200 students enrolled within 3 months." },
  { year: "2024", milestone: "6 Domains Live", desc: "Expanded to all 6 MBA domains. Crossed 5,000 students and 3,000+ certificates issued." },
  { year: "2025", milestone: "Institutional Partnerships", desc: "Launching B-School partnerships, placement cell dashboards, and co-branded college tracks." },
  { year: "2026", milestone: "Global Expansion", desc: "Expanding to international MBA students in the US, UK, and Singapore with localised project tracks." },
];

export function AboutPage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div style={{ backgroundColor: "var(--workxd-blue)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>About WorkXD</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white" }} className="mb-4">
            We Built WorkXD Because MBA Grads Deserved Better
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
            Great theory, but no proof of practice. We're here to change that.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <SectionWrapper bg="white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className=" border rounded-2xl p-8" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
            <div className="text-3xl mb-4">🎯</div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--workxd-dark)" }} className="mb-3">Our Mission</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--workxd-text-body)" }}>
              To bridge the gap between MBA education and industry expectations — by giving students access
              to real business projects, co-branded certificates, and portfolio-worthy proof of skills before they graduate.
            </p>
          </div>
          <div className=" border rounded-2xl p-8" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
            <div className="text-3xl mb-4">🔭</div>
            <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--workxd-dark)" }} className="mb-3">Our Vision</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--workxd-text-body)" }}>
              A world where every MBA student graduates with a portfolio of real work experience — making
              theoretical knowledge irrelevant as the primary measure of a business school graduate's value.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Why WorkXD Exists */}
      <SectionWrapper bg="gray">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading label="The Problem" title="Why WorkXD Exists" />
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--workxd-text-body)" }}>
              <p>
                Every year, 100,000+ MBA students graduate from Indian business schools with solid theoretical foundations —
                but when they walk into placement interviews, recruiters ask for proof.
              </p>
              <p>
                <strong style={{ color: "var(--workxd-dark)" }}>Proof that they can build a financial model. Proof that they've run a go-to-market analysis.
                Proof that they understand how to solve real business problems — not just case studies.</strong>
              </p>
              <p>
                The traditional MBA doesn't provide this proof. Internships are scarce, competitive, and often unrelated to the
                student's target domain. Case competitions are theoretical. Coursework isn't the same as deliverables.
              </p>
              <p>
                WorkXD was built to fill this gap — by creating a structured, certificate-backed way for MBA students
                to do real project work before they need to prove it in an interview.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "5,000+", label: "Students helped" },
              { value: "3,200+", label: "Certificates issued" },
              { value: "200+", label: "Projects available" },
              { value: "84%", label: "Placement improvement" },
            ].map((s) => (
              <div key={s.label} className=" border rounded-xl p-5 text-center" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "var(--workxd-blue)" }}>{s.value}</div>
                <div className="text-xs mt-1" style={{ color: "var(--workxd-text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper bg="white">
        <SectionHeading label="The Team" title="Who's Behind WorkXD" center subtitle="A team of MBAs, consultants, and product builders who've lived the problem firsthand." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <div key={member.name} className=" border rounded-xl p-5 text-center flex flex-col items-center gap-3" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold"
                style={{ backgroundColor: member.color }}
              >
                {member.initials}
              </div>
              <div>
                <h3 className="font-semibold" style={{ color: "var(--workxd-dark)" }}>{member.name}</h3>
                <p className="text-xs mb-2" style={{ color: "var(--workxd-blue)" }}>{member.role}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Roadmap */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Roadmap" title="Where We're Headed" center />
        <div className="relative max-w-3xl mx-auto">
          <div className="space-y-6">
            {roadmap.map((item, i) => (
              <div key={item.year} className="flex gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: i <= 1 ? "#0056D2" : "#D1D5DB" }}
                  >
                    {item.year}
                  </div>
                  {i < roadmap.length - 1 && <div className="w-0.5 h-10 mt-2" style={{ backgroundColor: "var(--workxd-border)" }} />}
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold mb-1" style={{ color: "var(--workxd-dark)", fontSize: "16px" }}>{item.milestone}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">Join the WorkXD Community</h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Start your first real business project and become part of a generation of MBA students who prove their skills before they're asked to.</p>
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
