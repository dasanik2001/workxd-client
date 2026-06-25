import { Link } from "react-router-dom";
import { GraduationCap, ShieldCheck, ArrowRight, Briefcase } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function LoginPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "#0D1117" : "#F8F9FB";
  const cardBg = isDark ? "#161B22" : "#ffffff";
  const border = isDark ? "#30363D" : "#E5E7EB";
  const heading = isDark ? "#E6EDF3" : "#1F1F1F";
  const muted = isDark ? "#8B949E" : "#6B7280";
  const primaryBlue = isDark ? "#3B82F6" : "#0056D2";

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: bg, minHeight: "100vh" }}>
      <Navbar />

      <div className="flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: primaryBlue }}>
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold" style={{ color: primaryBlue }}>WorkXD</span>
            </div>
            <h1 style={{ fontSize: "32px", fontWeight: 800, color: heading }} className="mb-2">
              Welcome Back
            </h1>
            <p style={{ color: muted }}>Choose your login type to continue.</p>
          </div>

          {/* Two login cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Academic */}
            <Link
              to="/login/academic"
              className="group rounded-2xl border p-8 flex flex-col items-center text-center gap-5 transition-all hover:shadow-xl"
              style={{
                backgroundColor: cardBg,
                borderColor: border,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = primaryBlue;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 2px ${primaryBlue}20`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = border;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ backgroundColor: isDark ? "#1D4ED820" : "#EEF4FF" }}
              >
                <GraduationCap className="w-10 h-10" style={{ color: primaryBlue }} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: heading }}>Academic Login</h2>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>
                  For MBA students enrolled in WorkXD programs. Access your active projects, certificates, and portfolio.
                </p>
              </div>
              <div
                className="flex items-center gap-2 text-sm font-semibold mt-auto group-hover:gap-3 transition-all"
                style={{ color: primaryBlue }}
              >
                Student Login <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Admin */}
            <Link
              to="/login/admin"
              className="group rounded-2xl border p-8 flex flex-col items-center text-center gap-5 transition-all hover:shadow-xl"
              style={{
                backgroundColor: cardBg,
                borderColor: border,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#F97316";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 2px #F9731620";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = border;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ backgroundColor: isDark ? "#F9731615" : "#FFF7ED" }}
              >
                <ShieldCheck className="w-10 h-10" style={{ color: "#F97316" }} />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2" style={{ color: heading }}>Admin Login</h2>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>
                  For WorkXD administrators. Manage enrollments, issue certificates, and track purchases and invoices.
                </p>
              </div>
              <div
                className="flex items-center gap-2 text-sm font-semibold mt-auto group-hover:gap-3 transition-all"
                style={{ color: "#F97316" }}
              >
                Admin Portal <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <p className="text-center mt-8 text-sm" style={{ color: muted }}>
            New to WorkXD?{" "}
            <Link to="/projects" className="font-semibold" style={{ color: primaryBlue }}>
              Browse projects to get started →
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
