import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FAQAccordion } from "../components/FAQAccordion";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const faqGroups = [
  {
    category: "Projects",
    faqs: [
      { question: "What types of projects are available on WorkXD?", answer: "WorkXD offers real business projects across 6 MBA domains: Marketing, Finance, HR, Operations, Business Analytics, and Consulting. All projects are based on real business challenges from our in-house brands." },
      { question: "How long does a typical project take?", answer: "Projects range from 2 to 4 weeks, with most requiring 8–10 hours of work per week. You work at your own pace — there are no live sessions or fixed deadlines." },
      { question: "Do I need prior experience to attempt these projects?", answer: "No. All projects include background materials, data, and context. You need basic MBA-level business knowledge, but no prior industry experience is required." },
      { question: "Can I work on multiple projects at the same time?", answer: "Yes. With a Pro subscription, you can enroll in multiple projects simultaneously. We recommend completing one before starting another to maintain quality." },
      { question: "Are the projects based on real companies?", answer: "Projects are created by WorkXD's in-house brands (MarketSpark, FinEdge, PeopleFirst, OpsFlow, InsightIQ, StratLab) and based on real business problems faced by brands in those sectors." },
    ],
  },
  {
    category: "Certificates",
    faqs: [
      { question: "What is a co-branded certificate?", answer: "A co-branded certificate is issued jointly by WorkXD and the project brand (e.g., WorkXD × MarketSpark). This dual-brand credibility makes the certificate more meaningful to recruiters than a solo-issuer certificate." },
      { question: "How long does it take to receive a certificate?", answer: "After your submission is reviewed and approved (3–5 business days), your certificate is generated and emailed within 24 hours." },
      { question: "Can I verify my certificate online?", answer: "Yes. Every certificate has a unique credential ID that can be verified at verify.workxd.com. The verification page confirms the student name, project, and issue date." },
      { question: "Is the certificate recognised by employers?", answer: "WorkXD certificates are increasingly recognised by recruiters, especially when accompanied by specific CV bullet points and portfolio deliverables. They're not government-accredited but are accepted widely in private sector recruitment." },
    ],
  },
  {
    category: "Pricing",
    faqs: [
      { question: "What is the cost of a single project?", answer: "Individual projects are priced at ₹999 each. This includes full project access, co-branded certificate, 4 CV bullet points, and a portfolio deliverable." },
      { question: "What does the Pro plan include?", answer: "Pro is ₹2,499/month and includes unlimited project access across all 6 domains, all certificates, full CV pointer set, priority support, LinkedIn tips, and interview story templates." },
      { question: "Is there an annual plan?", answer: "Annual plans with a 20% discount are coming soon. Pro is currently billed monthly at ₹2,499." },
      { question: "Does WorkXD offer institutional pricing for colleges?", answer: "Yes. The Institutional plan is custom-priced for B-Schools and placement cells. It includes bulk student access, college branding options, placement dashboards, and a dedicated account manager. Contact us for a quote." },
    ],
  },
  {
    category: "Refunds",
    faqs: [
      { question: "What is WorkXD's refund policy?", answer: "All plans come with a 30-day money-back guarantee. If you're not satisfied within 30 days of purchase, email support@workxd.com for a full refund — no questions asked." },
      { question: "What if my submission is rejected?", answer: "You receive one free resubmission attempt after feedback. If the second attempt is also unsuccessful, you receive a full refund." },
      { question: "Can I get a refund after I've completed a project?", answer: "If you've submitted and received your certificate, refunds are not available. The 30-day guarantee applies to project access where no submission has been completed." },
    ],
  },
  {
    category: "Eligibility",
    faqs: [
      { question: "Who can use WorkXD?", answer: "WorkXD is designed for MBA students and MBA aspirants. It's particularly useful for first-year MBA students building their profile before summer placements, and second-year students preparing for final placements." },
      { question: "Can undergraduates or working professionals use WorkXD?", answer: "Yes. While our primary audience is MBA students, ambitious undergraduates and early-career professionals seeking MBA-level project experience are also welcome." },
      { question: "Is WorkXD available outside India?", answer: "Currently, WorkXD is focused on the Indian MBA market. International students can access projects, but certificates and CV points are optimised for Indian job market formats." },
    ],
  },
  {
    category: "Support",
    faqs: [
      { question: "How can I contact WorkXD support?", answer: "Email us at support@workxd.com. Pro members get priority support with a 4-hour response time. Starter plan users receive responses within 24 business hours." },
      { question: "Is there a community or peer group for WorkXD students?", answer: "A WorkXD student community is in development. Currently, students can connect via our LinkedIn newsletter and blog." },
      { question: "Can I get mentorship or guidance during my project?", answer: "WorkXD projects are self-paced with all materials provided. Dedicated mentorship is available as an add-on for Pro members, coming in early 2025." },
    ],
  },
];

export function FAQPage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className=" border-b" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)"}}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="text-4xl mb-4">❓</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "var(--workxd-dark)" }} className="mb-4">
            Frequently Asked Questions
          </h1>
          <p style={{ color: "var(--workxd-text-muted)" }}>
            Everything you need to know about WorkXD projects, certificates, pricing, and more.
          </p>
        </div>
      </div>

      {/* FAQ groups */}
      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqGroups.map((group) => (
            <div key={group.category}>
              <h2 className="text-xl font-bold mb-5" style={{ color: "var(--workxd-dark)" }}>{group.category}</h2>
              <div className="space-y-3">
                {group.faqs.map((faq) => <FAQAccordion key={faq.question} {...faq} />)}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Still have questions */}
      <SectionWrapper bg="white">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-3xl mb-4">💬</div>
          <h2 style={{ fontSize: "24px", fontWeight: 700, color: "var(--workxd-dark)" }} className="mb-3">Still Have Questions?</h2>
          <p className="mb-6" style={{ color: "var(--workxd-text-muted)" }}>Our team responds within 24 hours. We're always happy to help.</p>
          <Link to="/contact" className="inline-block px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--workxd-blue)" }}>
            Contact Us
          </Link>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
