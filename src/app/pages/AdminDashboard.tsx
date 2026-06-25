import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users, ShoppingCart, Award, LayoutDashboard, LogOut, Bell, Search,
  ChevronDown, Download, CheckCircle2, Clock, XCircle, Eye, Filter,
  TrendingUp, IndianRupee, FileText, Printer, Sun, Moon, Briefcase,
  Menu, X
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { CertificateMockup } from "../components/CertificateMockup";

// ─── Mock data ───────────────────────────────────────────────────────────────

const students = [
  { id: "WXD-2024-001", name: "Priya Sharma", email: "priya@iimb.ac.in", college: "IIM Bangalore", program: "MBA 2024", domain: "Marketing", project: "Go-to-Market Strategy", enrolled: "Dec 10, 2024", status: "Active", paid: "₹999" },
  { id: "WXD-2024-002", name: "Arjun Mehta", email: "arjun@xlri.ac.in", college: "XLRI Jamshedpur", program: "MBA 2024", domain: "Finance", project: "Financial Modelling", enrolled: "Dec 9, 2024", status: "Completed", paid: "₹999" },
  { id: "WXD-2024-003", name: "Sneha Kapoor", email: "sneha@mdi.ac.in", college: "MDI Gurgaon", program: "MBA 2023", domain: "Business Analytics", project: "Customer Segmentation Dashboard", enrolled: "Dec 8, 2024", status: "Active", paid: "₹2,499" },
  { id: "WXD-2024-004", name: "Rohit Joshi", email: "rohit@sibm.edu", college: "SIBM Pune", program: "MBA 2024", domain: "Consulting", project: "Market Entry Strategy", enrolled: "Dec 7, 2024", status: "Pending", paid: "₹999" },
  { id: "WXD-2024-005", name: "Karan Malhotra", email: "karan@nmims.edu", college: "NMIMS Mumbai", program: "MBA 2024", domain: "HR", project: "Recruitment Strategy", enrolled: "Dec 6, 2024", status: "Completed", paid: "₹999" },
  { id: "WXD-2024-006", name: "Divya Nair", email: "divya@iimk.ac.in", college: "IIM Kozhikode", program: "MBA 2024", domain: "Operations", project: "Supply Chain Optimization", enrolled: "Dec 5, 2024", status: "Active", paid: "₹2,499" },
  { id: "WXD-2024-007", name: "Aditya Rao", email: "aditya@iimb.ac.in", college: "IIM Bangalore", program: "MBA 2025", domain: "Finance", project: "Equity Research Report", enrolled: "Dec 4, 2024", status: "Pending", paid: "₹999" },
  { id: "WXD-2024-008", name: "Meera Singh", email: "meera@fms.ac.in", college: "FMS Delhi", program: "MBA 2024", domain: "Marketing", project: "Brand Positioning Strategy", enrolled: "Dec 3, 2024", status: "Completed", paid: "₹999" },
];

const invoices = [
  { id: "INV-2024-0891", student: "Priya Sharma", email: "priya@iimb.ac.in", plan: "Starter", amount: "₹999", date: "Dec 10, 2024", status: "Paid", project: "Go-to-Market Strategy" },
  { id: "INV-2024-0890", student: "Arjun Mehta", email: "arjun@xlri.ac.in", plan: "Starter", amount: "₹999", date: "Dec 9, 2024", status: "Paid", project: "Financial Modelling" },
  { id: "INV-2024-0889", student: "Sneha Kapoor", email: "sneha@mdi.ac.in", plan: "Pro", amount: "₹2,499", date: "Dec 8, 2024", status: "Paid", project: "Customer Segmentation Dashboard" },
  { id: "INV-2024-0888", student: "Rohit Joshi", email: "rohit@sibm.edu", plan: "Starter", amount: "₹999", date: "Dec 7, 2024", status: "Pending", project: "Market Entry Strategy" },
  { id: "INV-2024-0887", student: "Karan Malhotra", email: "karan@nmims.edu", plan: "Starter", amount: "₹999", date: "Dec 6, 2024", status: "Paid", project: "Recruitment Strategy" },
  { id: "INV-2024-0886", student: "Divya Nair", email: "divya@iimk.ac.in", plan: "Pro", amount: "₹2,499", date: "Dec 5, 2024", status: "Paid", project: "Supply Chain Optimization" },
  { id: "INV-2024-0885", student: "Aditya Rao", email: "aditya@iimb.ac.in", plan: "Starter", amount: "₹999", date: "Dec 4, 2024", status: "Refunded", project: "Equity Research Report" },
];

const domainBrands: Record<string, string> = {
  Marketing: "MarketSpark",
  Finance: "FinEdge",
  HR: "PeopleFirst",
  Operations: "OpsFlow",
  "Business Analytics": "InsightIQ",
  Consulting: "StratLab",
};

const statCards = [
  { label: "Total Students", value: "5,214", change: "+124 this week", icon: <Users className="w-5 h-5" />, color: "var(--workxd-blue)", bg: "#EEF4FF" },
  { label: "Revenue (Dec)", value: "₹4,82,300", change: "+18% vs last month", icon: <IndianRupee className="w-5 h-5" />, color: "#15803D", bg: "#F0FDF4" },
  { label: "Certificates Issued", value: "3,218", change: "+89 this week", icon: <Award className="w-5 h-5" />, color: "#7C3AED", bg: "#F5F3FF" },
  { label: "Active Projects", value: "892", change: "Across 6 domains", icon: <FileText className="w-5 h-5" />, color: "#C2410C", bg: "#FFF7ED" },
];

type Section = "dashboard" | "students" | "invoices" | "certificates";

// ─── Component ───────────────────────────────────────────────────────────────

export function AdminDashboard() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  const [section, setSection] = useState<Section>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [certForm, setCertForm] = useState({
    studentName: "Priya Sharma",
    projectTitle: "Go-to-Market Strategy",
    domain: "Marketing",
    date: "December 2024",
    credentialId: "WXD-2024-MKT-001",
  });


  const navItems: { id: Section; label: string; icon: React.ReactNode }[] = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: "students", label: "Registered Accounts", icon: <Users className="w-4 h-4" /> },
    { id: "invoices", label: "Purchases & Invoices", icon: <ShoppingCart className="w-4 h-4" /> },
    { id: "certificates", label: "Certificate Generator", icon: <Award className="w-4 h-4" /> },
  ];

  const statusBadge = (status: string) => {
    const map: Record<string, { bg: string; text: string }> = {
      Active: { bg: "#F0FDF4", text: "#15803D" },
      Completed: { bg: "#EEF4FF", text: "#0056D2" },
      Pending: { bg: "#FFF7ED", text: "#C2410C" },
      Paid: { bg: "#F0FDF4", text: "#15803D" },
      Refunded: { bg: "#FFF1F2", text: "#BE123C" },
    };
    const s = map[status] || { bg: "#F3F4F6", text: "#6B7280" };
    return (
      <span
        className="text-xs font-semibold px-2 py-0.5 rounded-full"
        style={{ backgroundColor: isDark ? `${s.text}20` : s.bg, color: s.text }}
      >
        {status}
      </span>
    );
  };

  const filteredStudents = students.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.college.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || s.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const filteredInvoices = invoices.filter((inv) =>
    inv.student.toLowerCase().includes(search.toLowerCase()) ||
    inv.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: bg, minHeight: "100vh", display: "flex" }}
    >
      {/* Sidebar */}
      <aside
        className="flex flex-col shrink-0 border-r transition-all"
        style={{
          width: sidebarOpen ? "240px" : "64px",
          backgroundColor: "var(--workxd-card)",
          borderColor: "var(--workxd-border)",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-5 border-b" style={{ borderColor: "var(--workxd-border)" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "#F97316" }}>
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          {sidebarOpen && <span className="font-bold text-sm" style={{ color: "#F97316" }}>WorkXD Admin</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left"
              style={{
                backgroundColor: section === item.id ? "var(--domain-marketing-bg)" : "transparent",
                color: section === item.id ? "var(--workxd-blue)" : "var(--workxd-text-muted)",
              }}
            >
              {item.icon}
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-2 py-4 border-t space-y-1" style={{ borderColor: "var(--workxd-border)" }}>
          <Link
            to="/"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
            style={{ color: "var(--workxd-text-muted)" }}
          >
            <LogOut className="w-4 h-4" />
            {sidebarOpen && <span>Exit Admin</span>}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-10 transition-colors"
          style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--workxd-text-muted)", backgroundColor: "var(--workxd-border-subtle)" }}
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
            <h1 className="font-bold text-base" style={{ color: "var(--workxd-dark)" }}>
              {navItems.find((n) => n.id === section)?.label}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-muted)" }}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className="relative p-2 rounded-lg" style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-muted)" }}>
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ backgroundColor: "#EF4444" }} />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l" style={{ borderColor: "var(--workxd-border)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#F97316" }}>A</div>
              {sidebarOpen && <span className="text-sm font-medium" style={{ color: "var(--workxd-dark)" }}>Admin</span>}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">

          {/* ── DASHBOARD ── */}
          {section === "dashboard" && (
            <div className="space-y-6">
              <p className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>Welcome back! Here's what's happening on WorkXD today.</p>

              {/* Stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((card) => (
                  <div key={card.label} className="rounded-xl border p-5" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: isDark ? `${card.color}20` : card.bg, color: card.color }}>
                        {card.icon}
                      </div>
                      <TrendingUp className="w-4 h-4" style={{ color: "var(--workxd-green)" }} />
                    </div>
                    <div className="text-2xl font-bold mb-0.5" style={{ color: "var(--workxd-dark)" }}>{card.value}</div>
                    <div className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{card.label}</div>
                    <div className="text-xs font-medium mt-1" style={{ color: "var(--workxd-green)" }}>{card.change}</div>
                  </div>
                ))}
              </div>

              {/* Recent students */}
              <div className="rounded-xl border" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
                <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--workxd-border)" }}>
                  <h3 className="font-semibold text-sm" style={{ color: "var(--workxd-dark)" }}>Recent Enrollments</h3>
                  <button onClick={() => setSection("students")} className="text-xs font-semibold" style={{ color: "var(--workxd-blue)" }}>View all →</button>
                </div>
                <div className="divide-y" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
                  {students.slice(0, 5).map((s) => (
                    <div key={s.id} className="flex items-center justify-between px-5 py-3" style={{ borderColor: "var(--workxd-border)" }}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "var(--workxd-blue)" }}>{s.name[0]}</div>
                        <div>
                          <p className="text-sm font-medium" style={{ color: "var(--workxd-dark)" }}>{s.name}</p>
                          <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{s.college} · {s.domain}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{s.enrolled}</span>
                        {statusBadge(s.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent invoices */}
              <div className="rounded-xl border" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
                <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--workxd-border)" }}>
                  <h3 className="font-semibold text-sm" style={{ color: "var(--workxd-dark)" }}>Recent Purchases</h3>
                  <button onClick={() => setSection("invoices")} className="text-xs font-semibold" style={{ color: "var(--workxd-blue)" }}>View all →</button>
                </div>
                {invoices.slice(0, 4).map((inv) => (
                  <div key={inv.id} className="flex items-center justify-between px-5 py-3 border-b last:border-0" style={{ borderColor: "var(--workxd-border)" }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--workxd-dark)" }}>{inv.student}</p>
                      <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{inv.id} · {inv.plan}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold" style={{ color: "var(--workxd-dark)" }}>{inv.amount}</span>
                      {statusBadge(inv.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── STUDENTS ── */}
          {section === "students" && (
            <div className="space-y-4">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-48">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--workxd-text-muted)" }} />
                  <input
                    type="text"
                    placeholder="Search by name, email, or college..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                    style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                  />
                </div>
                <div className="flex gap-2">
                  {["All", "Active", "Completed", "Pending"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatusFilter(s)}
                      className="px-3 py-2 rounded-lg text-xs font-medium border transition-colors"
                      style={{
                        backgroundColor: statusFilter === s ? "var(--workxd-blue)" : "var(--workxd-surface-input)",
                        color: statusFilter === s ? "white" : "var(--workxd-text-muted)",
                        borderColor: statusFilter === s ? "var(--workxd-blue)" : "var(--workxd-border)",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border" style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-text-muted)", backgroundColor: "var(--workxd-surface-input)" }}>
                  <Download className="w-3.5 h-3.5" /> Export CSV
                </button>
              </div>

              {/* Summary */}
              <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>
                Showing <strong style={{ color: "var(--workxd-dark)" }}>{filteredStudents.length}</strong> of {students.length} students
              </p>

              {/* Table */}
              <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: "var(--workxd-surface-input)" }}>
                        {["Student ID", "Name", "College", "Domain / Project", "Enrolled", "Plan", "Status", "Actions"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: "var(--workxd-text-muted)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((s, i) => (
                        <tr
                          key={s.id}
                          className="border-t transition-colors"
                          style={{ borderColor: "var(--workxd-border)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--workxd-surface)")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          <td className="px-4 py-3 text-xs font-mono" style={{ color: "var(--workxd-text-muted)" }}>{s.id}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: "var(--workxd-blue)" }}>{s.name[0]}</div>
                              <div>
                                <p className="font-medium" style={{ color: "var(--workxd-dark)" }}>{s.name}</p>
                                <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{s.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <p style={{ color: "var(--workxd-dark)" }}>{s.college}</p>
                            <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{s.program}</p>
                          </td>
                          <td className="px-4 py-3">
                            <p className="font-medium" style={{ color: "var(--workxd-dark)" }}>{s.domain}</p>
                            <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{s.project}</p>
                          </td>
                          <td className="px-4 py-3 text-xs" style={{ color: "var(--workxd-text-muted)" }}>{s.enrolled}</td>
                          <td className="px-4 py-3 text-xs font-semibold" style={{ color: "var(--workxd-dark)" }}>{s.paid}</td>
                          <td className="px-4 py-3">{statusBadge(s.status)}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <button
                                className="p-1.5 rounded-lg transition-colors"
                                style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-muted)" }}
                                title="View"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                className="p-1.5 rounded-lg transition-colors text-xs font-semibold"
                                style={{ backgroundColor: "var(--domain-marketing-bg)", color: "var(--workxd-blue)" }}
                                title="Issue Certificate"
                                onClick={() => {
                                  setCertForm({ studentName: s.name, projectTitle: s.project, domain: s.domain, date: "December 2024", credentialId: s.id });
                                  setSection("certificates");
                                }}
                              >
                                <Award className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── INVOICES ── */}
          {section === "invoices" && (
            <div className="space-y-4">
              {/* Summary stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Total Revenue", value: "₹4,82,300", sub: "Dec 2024", color: "#15803D" },
                  { label: "Successful Payments", value: `${invoices.filter(i => i.status === "Paid").length}`, sub: "This month", color: "var(--workxd-blue)" },
                  { label: "Pending / Refunded", value: `${invoices.filter(i => i.status !== "Paid").length}`, sub: "Needs attention", color: "#C2410C" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border p-4" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
                    <div className="text-xl font-bold mb-0.5" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-xs font-medium" style={{ color: "var(--workxd-dark)" }}>{s.label}</div>
                    <div className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Search */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--workxd-text-muted)" }} />
                  <input
                    type="text"
                    placeholder="Search by name or invoice ID..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                    style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                  />
                </div>
                <button className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium border" style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-text-muted)", backgroundColor: "var(--workxd-surface-input)" }}>
                  <Download className="w-3.5 h-3.5" /> Export
                </button>
              </div>

              {/* Invoice table */}
              <div className="rounded-xl border overflow-hidden" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: "var(--workxd-surface-input)" }}>
                        {["Invoice ID", "Student", "Project", "Plan", "Amount", "Date", "Status", "Actions"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-xs font-semibold" style={{ color: "var(--workxd-text-muted)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInvoices.map((inv) => (
                        <tr
                          key={inv.id}
                          className="border-t transition-colors"
                          style={{ borderColor: "var(--workxd-border)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--workxd-surface)")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          <td className="px-4 py-3 text-xs font-mono font-semibold" style={{ color: "var(--workxd-blue)" }}>{inv.id}</td>
                          <td className="px-4 py-3">
                            <p className="font-medium" style={{ color: "var(--workxd-dark)" }}>{inv.student}</p>
                            <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{inv.email}</p>
                          </td>
                          <td className="px-4 py-3 text-xs" style={{ color: "var(--workxd-text-muted)" }}>{inv.project}</td>
                          <td className="px-4 py-3">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-dark)" }}>{inv.plan}</span>
                          </td>
                          <td className="px-4 py-3 font-semibold" style={{ color: "var(--workxd-dark)" }}>{inv.amount}</td>
                          <td className="px-4 py-3 text-xs" style={{ color: "var(--workxd-text-muted)" }}>{inv.date}</td>
                          <td className="px-4 py-3">{statusBadge(inv.status)}</td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1.5">
                              <button className="p-1.5 rounded-lg" style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-muted)" }} title="View invoice">
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1.5 rounded-lg" style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-muted)" }} title="Print">
                                <Printer className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1.5 rounded-lg" style={{ backgroundColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-muted)" }} title="Download">
                                <Download className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── CERTIFICATE GENERATOR ── */}
          {section === "certificates" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div>
                <div className="rounded-xl border p-6 space-y-5" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
                  <div>
                    <h2 className="font-bold mb-1" style={{ color: "var(--workxd-dark)", fontSize: "17px" }}>Certificate Generator</h2>
                    <p className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>Fill in the candidate details to generate a co-branded certificate.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-muted)" }}>Student Full Name</label>
                      <input
                        type="text"
                        value={certForm.studentName}
                        onChange={(e) => setCertForm({ ...certForm, studentName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none"
                        style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                        onFocus={(e) => (e.target.style.borderColor = primaryBlue)}
                        onBlur={(e) => (e.target.style.borderColor = border)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-muted)" }}>Project Title</label>
                      <input
                        type="text"
                        value={certForm.projectTitle}
                        onChange={(e) => setCertForm({ ...certForm, projectTitle: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none"
                        style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                        onFocus={(e) => (e.target.style.borderColor = primaryBlue)}
                        onBlur={(e) => (e.target.style.borderColor = border)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-muted)" }}>Domain</label>
                      <select
                        value={certForm.domain}
                        onChange={(e) => setCertForm({ ...certForm, domain: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none"
                        style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                      >
                        {Object.keys(domainBrands).map((d) => (
                          <option key={d} value={d}>{d} — {domainBrands[d]}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-muted)" }}>Completion Month / Year</label>
                      <input
                        type="text"
                        value={certForm.date}
                        onChange={(e) => setCertForm({ ...certForm, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none"
                        style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                        onFocus={(e) => (e.target.style.borderColor = primaryBlue)}
                        onBlur={(e) => (e.target.style.borderColor = border)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-muted)" }}>Credential ID</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={certForm.credentialId}
                          onChange={(e) => setCertForm({ ...certForm, credentialId: e.target.value })}
                          className="flex-1 px-4 py-2.5 rounded-xl border text-sm outline-none font-mono"
                          style={{ backgroundColor: "var(--workxd-surface-input)", borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                          onFocus={(e) => (e.target.style.borderColor = primaryBlue)}
                          onBlur={(e) => (e.target.style.borderColor = border)}
                        />
                        <button
                          className="px-3 py-2 rounded-xl text-xs font-semibold border transition-colors"
                          style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-text-muted)", backgroundColor: "var(--workxd-surface-input)" }}
                          onClick={() => {
                            const id = `WXD-${new Date().getFullYear()}-${certForm.domain.slice(0, 3).toUpperCase()}-${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;
                            setCertForm({ ...certForm, credentialId: id });
                          }}
                        >
                          Auto-generate
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      className="w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "var(--workxd-blue)" }}
                    >
                      <Award className="w-4 h-4" /> Generate Certificate
                    </button>
                    <button
                      className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-colors"
                      style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
                    >
                      <Download className="w-4 h-4" /> Download as PDF
                    </button>
                  </div>
                </div>

                {/* Quick-fill from student list */}
                <div className="mt-4 rounded-xl border p-4" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
                  <p className="text-xs font-semibold mb-3" style={{ color: "var(--workxd-text-muted)" }}>Quick-fill from completed students</p>
                  <div className="space-y-2">
                    {students.filter((s) => s.status === "Completed").map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setCertForm({ studentName: s.name, projectTitle: s.project, domain: s.domain, date: "December 2024", credentialId: s.id })}
                        className="w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-colors border"
                        style={{ borderColor: "var(--workxd-border)", backgroundColor: "transparent" }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--workxd-surface-input)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                      >
                        <div>
                          <p className="text-xs font-semibold" style={{ color: "var(--workxd-dark)" }}>{s.name}</p>
                          <p className="text-xs" style={{ color: "var(--workxd-text-muted)" }}>{s.project}</p>
                        </div>
                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--workxd-green)" }} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Preview */}
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--workxd-text-muted)" }}>Live Preview</p>
                <CertificateMockup
                  studentName={certForm.studentName || "Student Name"}
                  projectTitle={certForm.projectTitle || "Project Title"}
                  brand={domainBrands[certForm.domain] || "WorkXD Brand"}
                  large
                />
                <div className="mt-3 rounded-xl border px-4 py-3 text-xs" style={{ backgroundColor: isDark ? "#1C2128" : "#F0FDF4", borderColor: isDark ? "#30363D" : "#BBF7D0", color: isDark ? "#34D399" : "#15803D" }}>
                  ✓ Certificate will be sent to student's registered email upon generation.
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
