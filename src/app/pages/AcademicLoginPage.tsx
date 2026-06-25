import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Eye, EyeOff, Briefcase, ArrowLeft } from "lucide-react";

export function AcademicLoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1200);
  };

  return (
    <div
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)", minHeight: "100vh" }}
      className="flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-md">
        {/* Back */}
        <Link
          to="/login"
          className="flex items-center gap-1.5 text-sm mb-8 transition-colors"
          style={{ color: "var(--workxd-text-muted)" }}
        >
          <ArrowLeft className="w-4 h-4" /> Back to login options
        </Link>

        {/* Card */}
        <div className="rounded-2xl border p-8" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--workxd-blue)" }}>
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold" style={{ color: "var(--workxd-blue)" }}>WorkXD</span>
          </div>

          {/* Header */}
          <div className="flex items-start gap-3 mb-7">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--domain-marketing-bg)" }}>
              <GraduationCap className="w-6 h-6" style={{ color: "var(--workxd-blue)" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: "var(--workxd-dark)" }}>Student Login</h1>
              <p className="text-sm mt-0.5" style={{ color: "var(--workxd-text-muted)" }}>Access your projects and certificates</p>
            </div>
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "var(--domain-analytics-bg)", color: "var(--domain-analytics-text)", border: "1px solid var(--workxd-border)" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-body)" }}>
                College / Institute Email
              </label>
              <input
                type="email"
                placeholder="priya@academic.ac.in"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--workxd-blue)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--workxd-border)")}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold" style={{ color: "var(--workxd-text-body)" }}>Password</label>
                <button type="button" className="text-xs font-medium" style={{ color: "var(--workxd-blue)" }}>
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 pr-11 rounded-xl border text-sm outline-none transition-all"
                  style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--workxd-blue)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--workxd-border)")}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--workxd-text-muted)" }}
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                className="w-4 h-4 rounded"
                style={{ accentColor: "var(--workxd-blue)" }}
              />
              <label htmlFor="remember" className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>Remember me for 30 days</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-opacity"
              style={{ backgroundColor: "var(--workxd-blue)", opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--workxd-border)" }} />
            <span className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>OR</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--workxd-border)" }} />
          </div>

          {/* Google sign in mock */}
          <button
            className="w-full py-3 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-dark)", backgroundColor: "var(--workxd-surface-input)" }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center mt-5 text-sm" style={{ color: "var(--workxd-text-muted)" }}>
            Don't have an account?{" "}
            <Link to="/projects" className="font-semibold" style={{ color: "var(--workxd-blue)" }}>
              Enroll in a project
            </Link>
          </p>
        </div>

        {/* Info note */}
        <p className="text-center mt-4 text-xs" style={{ color: "var(--workxd-text-muted)" }}>
          Your account is created automatically when you enroll in your first WorkXD project.
        </p>
      </div>
    </div>
  );
}
