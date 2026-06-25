import { Link } from "react-router-dom";
import { Search, CreditCard, Laptop, Upload, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";
import { FAQAccordion } from "../components/FAQAccordion";

const steps = [
  {
    step: "01",
    icon: <Search className="w-8 h-8" />,
    title: "Choose a Project",
    description: "Browse 200+ real business projects across 6 MBA domains — Marketing, Finance, HR, Operations, Business Analytics, and Consulting. Filter by difficulty, duration, and domain to find the perfect fit.",
    details: ["Organised by domain, difficulty, and duration", "Each project has a detailed brief before you enroll", "Preview the deliverables and CV points before committing"],
  },
  {
    step: "02",
    icon: <CreditCard className="w-8 h-8" />,
    title: "Enroll",
    description: "Pay once and get instant access to all project materials — brief, data sets, reference resources, and the submission portal. No subscriptions required for individual projects.",
    details: ["Instant access after payment", "Full brief, data, and resources unlocked", "30-day money-back guarantee"],
  },
  {
    step: "03",
    icon: <Laptop className="w-8 h-8" />,
    title: "Work on Real Challenges",
    description: "Dive into a genuine business challenge. Use the provided brief, background data, and industry context to build professional-grade deliverables. Work at your own pace within the project timeline.",
    details: ["Self-paced — complete in 2–4 weeks", "All background materials and data provided", "Work whenever, wherever — no live sessions required"],
  },
  {
    step: "04",
    icon: <Upload className="w-8 h-8" />,
    title: "Submit Your Deliverables",
    description: "Upload your completed deliverables through our submission portal. WorkXD's expert reviewers will assess your work against professional standards and provide structured feedback within 3–5 business days.",
    details: ["Submit PDFs, decks, or Excel files", "Reviewed by industry professionals", "Structured feedback on each deliverable"],
  },
  {
    step: "05",
    icon: <Award className="w-8 h-8" />,
    title: "Receive Certificate & CV Points",
    description: "Once approved, receive your co-branded certificate from WorkXD and the project brand, along with 4 professionally-written, quantified CV bullet points — ready to paste directly into your resume.",
    details: ["Co-branded certificate (PDF + digital)", "4 recruiter-ready CV bullet points", "LinkedIn verification credential"],
  },
];

const faqs = [
  { question: "How long does a typical project take?", answer: "Projects range from 2 to 4 weeks depending on complexity. Most MBA students complete them in about 8–10 hours of work per week, fitting easily around lectures and internship prep." },
  { question: "Do I need prior industry experience?", answer: "No. Projects include all background materials, industry context, and data needed to complete the work. You need basic business knowledge from your MBA, but no industry-specific experience is required." },
  { question: "What happens if my submission is rejected?", answer: "If your submission doesn't meet the quality standards, you'll receive detailed feedback and one free resubmission attempt. If the second attempt is also unsuccessful, you'll receive a full refund." },
  { question: "Can I work on multiple projects at once?", answer: "Yes, especially with a Pro subscription. With individual project access, you can enroll in multiple projects but we recommend completing one before starting another to maintain quality." },
  { question: "How are CV bullet points created?", answer: "WorkXD's team creates 4 project-specific CV bullet points in standard recruiter language. They're quantified based on the scope of the project brief and written to pass ATS screening." },
];

export function HowItWorks() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className=" border-b" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "var(--workxd-blue)" }}>The Process</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "var(--workxd-dark)" }} className="mb-4">
            From Enrollment to Certificate in 5 Steps
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>
            WorkXD is designed to be the fastest, most practical way for MBA students to gain real business experience —
            without waiting for internships, placements, or corporate referrals.
          </p>
        </div>
      </div>

      {/* Steps */}
      <SectionWrapper bg="gray">
        <div className="space-y-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className=" border rounded-2xl p-8 flex flex-col md:flex-row gap-8" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
              {/* Step number + icon */}
              <div className="flex flex-col items-center gap-4 md:w-24 shrink-0">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                  style={{ backgroundColor: "var(--workxd-blue)" }}
                >
                  {step.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--workxd-text-subtle)" }}>Step {step.step}</span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-0.5 h-8 mt-2" style={{ backgroundColor: "var(--workxd-border)" }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="mb-3" style={{ fontSize: "22px", fontWeight: 700, color: "var(--workxd-dark)" }}>{step.title}</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "var(--workxd-text-muted)" }}>{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm" style={{ color: "var(--workxd-text-body)" }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--workxd-green)" }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#F97316" }}
          >
            Browse Projects & Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper bg="white">
        <SectionHeading label="Why WorkXD" title="Why MBA Students Choose WorkXD" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Real Brand Context", desc: "Every project is set in a real business context with actual industry data — not hypothetical cases.", emoji: "🏢" },
            { title: "Recruiter-Validated CV Points", desc: "Our CV bullet points are written by HR professionals and tested against ATS screening systems.", emoji: "📄" },
            { title: "Co-Branded Certificate", desc: "Certificates are co-signed by WorkXD and the project brand, giving them dual credibility.", emoji: "🏆" },
            { title: "Self-Paced", desc: "No live sessions, no fixed schedules. Complete projects when it works for your MBA calendar.", emoji: "⏰" },
            { title: "Expert Review", desc: "Every submission is reviewed by industry professionals — not AI or automation.", emoji: "👨‍💼" },
            { title: "Interview Stories", desc: "Build specific STAR-format stories that answer 'Tell me about a time when...' with confidence.", emoji: "🎯" },
          ].map((b) => (
            <div key={b.title} className="rounded-xl p-5 border" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="text-3xl mb-3">{b.emoji}</div>
              <h3 className="font-semibold mb-2" style={{ color: "var(--workxd-dark)", fontSize: "16px" }}>{b.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto">
          <SectionHeading label="Questions" title="Frequently Asked Questions" center />
          <div className="space-y-3">
            {faqs.map((faq) => <FAQAccordion key={faq.question} {...faq} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">
            Ready to Start Your First Project?
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            Join 5,000+ MBA students already building recruiter-ready experience on WorkXD.
          </p>
          <Link to="/projects" className="inline-block px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#F97316", color: "white" }}>
            Browse Projects
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
