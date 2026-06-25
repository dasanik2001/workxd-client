import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PricingCard } from "../components/PricingCard";
import { FAQAccordion } from "../components/FAQAccordion";
import { SectionWrapper, SectionHeading } from "../components/SectionWrapper";

const plans = [
  {
    plan: "Starter",
    price: "₹999",
    period: "/project",
    description: "Perfect for trying your first real business project.",
    features: ["Access to 1 project", "Co-branded certificate", "Resume CV bullet points (4 bullets)", "Portfolio deliverable", "Email support", "30-day refund guarantee"],
    cta: "Start for ₹999",
  },
  {
    plan: "Pro",
    price: "₹2,499",
    period: "/month",
    description: "Unlimited projects across all 6 MBA domains.",
    features: ["Unlimited project access", "All co-branded certificates", "Full CV pointer set", "All portfolio deliverables", "Priority email support", "LinkedIn profile tips", "Interview story templates", "New projects added monthly"],
    cta: "Go Pro",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    plan: "Institutional",
    price: "Custom",
    description: "For B-Schools, placement cells, and colleges.",
    features: ["Bulk student access (50+)", "College co-branding option", "Placement cell dashboard", "Dedicated account manager", "Custom project tracks", "Quarterly outcome reports", "Faculty access for monitoring", "Integration with placement portal"],
    cta: "Contact Us",
    href: "/contact",
  },
];

type FeatureValue = boolean | string;

const comparisonFeatures: { feature: string; starter: FeatureValue; pro: FeatureValue; institutional: FeatureValue }[] = [
  { feature: "Number of Projects", starter: "1", pro: "Unlimited", institutional: "Unlimited" },
  { feature: "MBA Domains", starter: "1", pro: "All 6", institutional: "All 6" },
  { feature: "Co-Branded Certificates", starter: true, pro: true, institutional: true },
  { feature: "CV Bullet Points", starter: "4 bullets", pro: "Full set", institutional: "Full set" },
  { feature: "Portfolio Deliverables", starter: true, pro: true, institutional: true },
  { feature: "Expert Review", starter: true, pro: true, institutional: true },
  { feature: "Priority Support", starter: false, pro: true, institutional: true },
  { feature: "LinkedIn Profile Tips", starter: false, pro: true, institutional: true },
  { feature: "Interview Story Templates", starter: false, pro: true, institutional: true },
  { feature: "College Branding", starter: false, pro: false, institutional: true },
  { feature: "Placement Dashboard", starter: false, pro: false, institutional: true },
  { feature: "Account Manager", starter: false, pro: false, institutional: true },
];

const faqs = [
  { question: "Can I switch from Starter to Pro later?", answer: "Yes. If you've already purchased a Starter project, your payment is credited towards your first Pro month when you upgrade." },
  { question: "Is the Pro plan billed monthly or annually?", answer: "Pro is billed monthly at ₹2,499/month. Annual plans with a 20% discount are coming soon." },
  { question: "What is your refund policy?", answer: "All plans come with a 30-day money-back guarantee. If you're not satisfied, email us at support@workxd.com within 30 days of purchase for a full refund." },
  { question: "How does Institutional pricing work?", answer: "Institutional plans are priced based on the number of students and the level of customisation required. Contact us for a custom quote tailored to your institution." },
  { question: "Are new projects added regularly?", answer: "Yes. Pro members get access to new projects as soon as they're launched — typically 4–6 new projects per month across different domains." },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) return <Check className="w-5 h-5 mx-auto" style={{ color: "var(--workxd-green)" }} />;
  if (value === false) return <X className="w-5 h-5 mx-auto" style={{ color: "#D1D5DB" }} />;
  return <span className="text-sm font-medium" style={{ color: "var(--workxd-text-body)" }}>{value}</span>;
}

export function PricingPage() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b" style={{ borderColor: "var(--workxd-border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "var(--workxd-blue)" }}>Pricing</span>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "var(--workxd-dark)" }} className="mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg" style={{ color: "var(--workxd-text-muted)" }}>
            Start with one project for ₹999, or unlock everything with Pro. No hidden fees.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <SectionWrapper bg="gray">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => <PricingCard key={p.plan} {...p} />)}
        </div>
        <p className="text-center mt-6 text-sm" style={{ color: "var(--workxd-text-subtle)" }}>
          All plans include a 30-day money-back guarantee. No questions asked.
        </p>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper bg="white">
        <SectionHeading label="Compare" title="Feature Comparison" subtitle="See exactly what's included in each plan." center />
        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b" style={{ borderColor: "var(--workxd-border)" }}>
                <th className="text-left py-4 px-4 text-sm font-semibold" style={{ color: "var(--workxd-text-muted)", width: "40%" }}>Feature</th>
                {["Starter", "Pro", "Institutional"].map((plan, i) => (
                  <th key={plan} className="py-4 px-4 text-center text-sm font-bold" style={{ color: i === 1 ? "#0056D2" : "#1F1F1F" }}>
                    {plan}
                    {i === 1 && <span className="block text-xs font-medium" style={{ color: "var(--workxd-blue)" }}>Most Popular</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, idx) => (
                <tr key={row.feature} className="border-b" style={{ borderColor: "var(--workxd-border-subtle)", backgroundColor: idx % 2 === 0 ? "white" : "#FAFAFA" }}>
                  <td className="py-3.5 px-4 text-sm" style={{ color: "var(--workxd-text-body)" }}>{row.feature}</td>
                  <td className="py-3.5 px-4 text-center"><FeatureCell value={row.starter} /></td>
                  <td className="py-3.5 px-4 text-center" style={{ backgroundColor: "#F0F6FF" }}><FeatureCell value={row.pro} /></td>
                  <td className="py-3.5 px-4 text-center"><FeatureCell value={row.institutional} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="gray">
        <div className="max-w-2xl mx-auto">
          <SectionHeading label="FAQs" title="Pricing Questions" center />
          <div className="space-y-3">
            {faqs.map((f) => <FAQAccordion key={f.question} {...f} />)}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--workxd-blue)" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white" }} className="mb-3">
            Start Building Your MBA Portfolio Today
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
            Your first project for ₹999. Real certificate. Real CV points. Real impact.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/projects" className="px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#F97316", color: "white" }}>
              Browse Projects
            </Link>
            <Link to="/contact" className="px-7 py-4 rounded-xl font-semibold border" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              Contact for Institutional
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
