import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SectionWrapper } from "../components/SectionWrapper";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [partnerForm, setPartnerForm] = useState({ org: "", name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 bg-white";
  const inputStyle = { borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="bg-white border-b" style={{ borderColor: "var(--workxd-border)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: "var(--workxd-blue)" }}>Contact</span>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "var(--workxd-dark)" }} className="mb-3">
            Get in Touch
          </h1>
          <p style={{ color: "var(--workxd-text-muted)" }}>We respond to all queries within 24 business hours.</p>
        </div>
      </div>

      <SectionWrapper bg="gray">
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-5">
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--workxd-dark)" }}>Contact Details</h2>
            {[
              { icon: <Mail className="w-5 h-5" />, label: "Email", value: "support@workxd.com", note: "Replies within 24 hours" },
              { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91 98765 43210", note: "Mon–Fri, 10am–6pm IST" },
              { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", value: "+91 98765 43210", note: "For quick queries" },
            ].map((item) => (
              <div key={item.label} className="bg-white border rounded-xl p-4 flex gap-3" style={{ borderColor: "var(--workxd-border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--workxd-blue)" }}>{item.icon}</div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "var(--workxd-text-subtle)" }}>{item.label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--workxd-dark)" }}>{item.value}</p>
                  <p className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* General contact form */}
          <div className="bg-white border rounded-2xl p-6" style={{ borderColor: "var(--workxd-border)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--workxd-dark)" }} className="mb-5">Send a Message</h2>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-semibold" style={{ color: "var(--workxd-dark)" }}>Message Sent!</p>
                <p className="text-sm mt-2" style={{ color: "var(--workxd-text-muted)" }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Full Name</label>
                  <input type="text" placeholder="Your full name" className={inputClass} style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Email</label>
                  <input type="email" placeholder="your@email.com" className={inputClass} style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Subject</label>
                  <select className={inputClass} style={inputStyle} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required>
                    <option value="">Select a subject</option>
                    <option>Project inquiry</option>
                    <option>Certificate issue</option>
                    <option>Pricing question</option>
                    <option>Technical support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Message</label>
                  <textarea placeholder="How can we help?" className={inputClass} style={{ ...inputStyle, resize: "none" }} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#F97316" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Partnership form */}
          <div className="bg-white border rounded-2xl p-6" style={{ borderColor: "var(--workxd-border)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "var(--workxd-dark)" }} className="mb-1">Partnership Inquiry</h2>
            <p className="text-xs mb-5" style={{ color: "var(--workxd-text-muted)" }}>For B-Schools, colleges, or brands interested in partnering with WorkXD.</p>
            {partnerSubmitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">🤝</div>
                <p className="font-semibold" style={{ color: "var(--workxd-dark)" }}>Inquiry Received!</p>
                <p className="text-sm mt-2" style={{ color: "var(--workxd-text-muted)" }}>Our partnerships team will be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Organisation Name</label>
                  <input type="text" placeholder="e.g. IIM Bangalore" className={inputClass} style={inputStyle} value={partnerForm.org} onChange={(e) => setPartnerForm({ ...partnerForm, org: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Your Name</label>
                  <input type="text" placeholder="Contact person's name" className={inputClass} style={inputStyle} value={partnerForm.name} onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Email</label>
                  <input type="email" placeholder="official@institution.edu" className={inputClass} style={inputStyle} value={partnerForm.email} onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Partnership Type</label>
                  <select className={inputClass} style={inputStyle} value={partnerForm.type} onChange={(e) => setPartnerForm({ ...partnerForm, type: e.target.value })} required>
                    <option value="">Select type</option>
                    <option>B-School / College</option>
                    <option>Placement Cell</option>
                    <option>Corporate Brand</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Message</label>
                  <textarea placeholder="Tell us about your institution and what you're looking for..." className={inputClass} style={{ ...inputStyle, resize: "none" }} rows={3} value={partnerForm.message} onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })} />
                </div>
                <button type="submit" className="w-full py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--workxd-blue)" }}>
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
