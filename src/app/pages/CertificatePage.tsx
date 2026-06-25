import { Link } from "react-router-dom";
import { Award, CheckCircle2, Shield, Share2, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CertificateMockup } from "../components/CertificateMockup";
import { FAQAccordion } from "../components/FAQAccordion";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const faqs = [
  { question: "Is the certificate industry-recognised?", answer: "WorkXD certificates are co-branded with our in-house brands (MarketSpark, FinEdge, etc.) and are increasingly being recognised by recruiters at top companies. While not a government-accredited qualification, the co-branded format and real project context give it strong credibility in job applications and interviews." },
  { question: "How long does it take to receive the certificate?", answer: "Once your deliverables are reviewed and approved by our team (3–5 business days), your certificate is generated and sent to your email within 24 hours." },
  { question: "Can I verify my certificate online?", answer: "Yes. Every certificate has a unique credential ID that can be verified on the WorkXD website. The verification link works similarly to Coursera or LinkedIn Learning certificates." },
  { question: "Can I add this to my LinkedIn profile?", answer: "Absolutely. We provide a LinkedIn-compatible format with a verification URL so you can add it to your Certifications section just like any online course certificate." },
  { question: "What if my submission is rejected?", answer: "You get one free resubmission. If the second attempt also doesn't meet quality standards, you receive a full refund. Our goal is for every student to earn their certificate." },
];

const verificationSteps = [
  { step: "01", title: "Visit verify.workxd.com", desc: "Go to our credential verification portal." },
  { step: "02", title: "Enter Credential ID", desc: "Input the unique ID printed on the certificate." },
  { step: "03", title: "Confirm Details", desc: "The portal shows the student name, project, and issue date." },
  { step: "04", title: "Share Confidence", desc: "Recruiters and employers can verify any WorkXD certificate in 30 seconds." },
];

export function CertificatePage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className=" border-b" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--domain-marketing-bg)" }}>
            <Award className="w-8 h-8" style={{ color: "var(--workxd-blue)" }} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "var(--workxd-blue)" }}>Certificates</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "var(--workxd-dark)" }} className="mb-4">
            Certificates That Mean Something
          </h1>
          <p className="text-lg" style={{ color: "var(--workxd-text-muted)" }}>
            Every WorkXD project earns a co-branded certificate from WorkXD and the project brand —
            verifiable, shareable, and built to impress recruiters who ask for proof.
          </p>
        </div>
      </div>

      {/* Certificate mockup */}
      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto">
          <CertificateMockup studentName="Priya Sharma" projectTitle="Go-to-Market Strategy" brand="MarketSpark" large />
        </div>
      </SectionWrapper>

      {/* What makes it special */}
      <SectionWrapper bg="white">
        <SectionHeading label="Co-Branding" title="What Makes WorkXD Certificates Different" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: <Award className="w-6 h-6" />, title: "Co-Branded with Real Brands", desc: "Unlike solo certificates, every WorkXD cert is co-signed by both WorkXD and the project brand — adding a second layer of credibility.", bg: "#EEF4FF", color: "var(--workxd-blue)" },
            { icon: <Shield className="w-6 h-6" />, title: "Verifiable Credentials", desc: "Every certificate has a unique credential ID. Recruiters can verify authenticity in 30 seconds at verify.workxd.com.", bg: "#F0FDF4", color: "#15803D" },
            { icon: <CheckCircle2 className="w-6 h-6" />, title: "Based on Real Deliverables", desc: "You earn the certificate by completing and submitting reviewed work — not just watching videos. It proves you can do, not just listen.", bg: "#FFF7ED", color: "#C2410C" },
            { icon: <Share2 className="w-6 h-6" />, title: "LinkedIn-Ready Format", desc: "Download as PDF, add to LinkedIn Certifications with a verification link, and share with the exact format recruiters expect.", bg: "#F5F3FF", color: "#7C3AED" },
            { icon: <Award className="w-6 h-6" />, title: "Domain-Specific Branding", desc: "Each certificate clearly shows the domain (Marketing, Finance, etc.) and the specific project — so recruiters instantly understand your specialisation.", bg: "#FFF1F2", color: "#BE123C" },
            { icon: <CheckCircle2 className="w-6 h-6" />, title: "Accompanied by CV Points", desc: "The certificate always comes with 4 professionally-written CV bullet points — turning a document into actual placement ammunition.", bg: "#ECFDF5", color: "#047857" },
          ].map((item) => (
            <div key={item.title} className=" border rounded-xl p-6 flex flex-col gap-3" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.bg, color: item.color }}>{item.icon}</div>
              <h3 className="font-semibold" style={{ color: "var(--workxd-dark)", fontSize: "16px" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Verification Process */}
      <SectionWrapper bg="gray">
        <SectionHeading label="Verification" title="How Certificate Verification Works" center subtitle="Recruiters can verify any WorkXD certificate in under a minute." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {verificationSteps.map((s) => (
            <div key={s.step} className=" border rounded-xl p-5 text-center" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold" style={{ backgroundColor: "var(--workxd-blue)" }}>{s.step}</div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--workxd-dark)", fontSize: "15px" }}>{s.title}</h3>
              <p className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading label="FAQs" title="Certificate Questions" center />
          <div className="space-y-3">
            {faqs.map((f) => <FAQAccordion key={f.question} {...f} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">Earn Your First Certificate</h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Start a project today and earn a co-branded certificate that actually proves you can do the work.</p>
          <Link to="/projects" className="inline-block px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#F97316", color: "white" }}>
            Browse Projects <ArrowRight className="w-4 h-4 inline ml-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
