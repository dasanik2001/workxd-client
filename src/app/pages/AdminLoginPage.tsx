import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Eye, EyeOff, Briefcase, ArrowLeft, Lock } from "lucide-react";

export function AdminLoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "", otp: "" });
  const [showPass, setShowPass] = useState(false);
  const [step, setStep] = useState<"credentials" | "otp">("credentials");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter your credentials.");
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 900);
  };

  const handleOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.otp.length < 6) {
      setError("Enter the 6-digit OTP sent to your email.");
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      navigate("/admin");
    }, 1000);
  };

  return (
    <div
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)", minHeight: "100vh" }}
      className="flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-md">
        <Link to="/login" className="flex items-center gap-1.5 text-sm mb-8 transition-colors" style={{ color: "var(--workxd-text-muted)" }}>
          <ArrowLeft className="w-4 h-4" /> Back to login options
        </Link>

        <div className="rounded-2xl border p-8" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F97316" }}>
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold" style={{ color: "#F97316" }}>WorkXD Admin</span>
          </div>

          {/* Header */}
          <div className="flex items-start gap-3 mb-7">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--domain-hr-bg)" }}>
              <ShieldCheck className="w-6 h-6" style={{ color: "#F97316" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: "var(--workxd-dark)" }}>
                {step === "credentials" ? "Admin Login" : "Two-Factor Auth"}
              </h1>
              <p className="text-sm mt-0.5" style={{ color: "var(--workxd-text-muted)" }}>
                {step === "credentials" ? "Secure access to the admin portal" : `OTP sent to ${form.email}`}
              </p>
            </div>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            {["Credentials", "Verify OTP"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: i <= (step === "otp" ? 1 : 0) ? "#F97316" : "var(--workxd-border-subtle)",
                    color: i <= (step === "otp" ? 1 : 0) ? "white" : "var(--workxd-text-muted)",
                  }}
                >
                  {i + 1}
                </div>
                <span className="text-xs" style={{ color: i <= (step === "otp" ? 1 : 0) ? "#F97316" : "var(--workxd-text-muted)" }}>{s}</span>
                {i === 0 && <div className="w-8 h-px" style={{ backgroundColor: "var(--workxd-border)" }} />}
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "var(--domain-analytics-bg)", color: "var(--domain-analytics-text)", border: "1px solid var(--workxd-border)" }}>
              {error}
            </div>
          )}

          {step === "credentials" ? (
            <form onSubmit={handleStep1} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Admin Email</label>
                <input
                  type="email"
                  placeholder="admin@workxd.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                  style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                  onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--workxd-border)")}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Admin password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full px-4 py-3 pr-11 rounded-xl border text-sm outline-none"
                    style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--workxd-border)")}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "var(--workxd-text-muted)" }}>
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity"
                style={{ backgroundColor: "#F97316", opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Verifying..." : "Continue"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleOTP} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>-Digit OTP</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--workxd-text-muted)" }} />
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="123456"
                    value={form.otp}
                    onChange={(e) => setForm({ ...form, otp: e.target.value.replace(/\D/g, "") })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none tracking-widest font-mono"
                    style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#F97316")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--workxd-border)")}
                  />
                </div>
                <p className="text-xs mt-1.5" style={{ color: "var(--workxd-text-muted)" }}>
                  Check your admin email inbox. OTP expires in 5 minutes.
                </p>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity"
                style={{ backgroundColor: "#F97316", opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Verifying OTP..." : "Verify & Sign In"}
              </button>
              <button type="button" onClick={() => setStep("credentials")} className="w-full py-2 text-sm" style={{ color: "var(--workxd-text-muted)" }}>
                ← Go back
              </button>
            </form>
          )}
        </div>

        <div
          className="mt-4 rounded-xl border px-4 py-3 flex items-center gap-2 text-xs"
          style={{ backgroundColor: "var(--domain-consulting-bg)", borderColor: "var(--workxd-border)", color: "var(--domain-consulting-text)" }}
        >
          <ShieldCheck className="w-4 h-4 shrink-0" />
          This is a secure admin portal. All access is logged and monitored.
        </div>
      </div>
    </div>
  );
}
