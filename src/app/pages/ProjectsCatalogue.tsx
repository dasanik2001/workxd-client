import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard, type ProjectCardProps } from "../components/ProjectCard";

const allProjects: ProjectCardProps[] = [
  { title: "Go-to-Market Strategy for D2C Brand", domain: "Marketing", brand: "MarketSpark", duration: "3 weeks", difficulty: "Intermediate", skills: ["GTM Strategy", "Market Research", "Brand Positioning", "Competitor Analysis"] },
  { title: "Digital Marketing Audit & Recommendations", domain: "Marketing", brand: "MarketSpark", duration: "2 weeks", difficulty: "Beginner", skills: ["Google Analytics", "SEO", "Paid Media", "Content Strategy"] },
  { title: "Customer Persona Development", domain: "Marketing", brand: "MarketSpark", duration: "2 weeks", difficulty: "Beginner", skills: ["Customer Research", "Persona Mapping", "Survey Design", "Insights"] },
  { title: "Brand Positioning Strategy", domain: "Marketing", brand: "MarketSpark", duration: "3 weeks", difficulty: "Intermediate", skills: ["Brand Strategy", "Competitor Analysis", "Positioning", "Messaging"] },
  { title: "Financial Modelling for SaaS Startup", domain: "Finance", brand: "FinEdge", duration: "4 weeks", difficulty: "Advanced", skills: ["Excel Modelling", "DCF", "Valuation", "Financial Forecasting"] },
  { title: "Equity Research Report", domain: "Finance", brand: "FinEdge", duration: "3 weeks", difficulty: "Advanced", skills: ["Equity Research", "Stock Analysis", "Financial Statements", "Valuation"] },
  { title: "Credit Analysis for NBFC", domain: "Finance", brand: "FinEdge", duration: "3 weeks", difficulty: "Intermediate", skills: ["Credit Analysis", "Risk Assessment", "Financial Ratios", "Lending"] },
  { title: "Recruitment Strategy Design", domain: "HR", brand: "PeopleFirst", duration: "2 weeks", difficulty: "Beginner", skills: ["Talent Acquisition", "JD Writing", "Recruitment Funnel", "Hiring Strategy"] },
  { title: "Employer Branding Campaign", domain: "HR", brand: "PeopleFirst", duration: "3 weeks", difficulty: "Intermediate", skills: ["Employer Branding", "Content", "LinkedIn Strategy", "EVP"] },
  { title: "HR Analytics Dashboard", domain: "HR", brand: "PeopleFirst", duration: "3 weeks", difficulty: "Intermediate", skills: ["HR Analytics", "Excel", "Power BI", "KPI Design"] },
  { title: "Supply Chain Optimization Analysis", domain: "Operations", brand: "OpsFlow", duration: "3 weeks", difficulty: "Intermediate", skills: ["Supply Chain", "Process Mapping", "Inventory", "Cost Reduction"] },
  { title: "Process Improvement Project", domain: "Operations", brand: "OpsFlow", duration: "2 weeks", difficulty: "Beginner", skills: ["Process Improvement", "Lean", "Workflow Analysis", "SOP Writing"] },
  { title: "Customer Segmentation Dashboard", domain: "Business Analytics", brand: "InsightIQ", duration: "3 weeks", difficulty: "Intermediate", skills: ["SQL", "Power BI", "Segmentation", "Data Visualization"] },
  { title: "KPI Framework Design", domain: "Business Analytics", brand: "InsightIQ", duration: "2 weeks", difficulty: "Beginner", skills: ["KPI Design", "Excel", "Dashboards", "Business Metrics"] },
  { title: "Market Entry Strategy", domain: "Consulting", brand: "StratLab", duration: "4 weeks", difficulty: "Advanced", skills: ["Market Entry", "Industry Research", "Strategic Analysis", "Consulting Frameworks"] },
  { title: "Growth Strategy for D2C Brand", domain: "Consulting", brand: "StratLab", duration: "3 weeks", difficulty: "Intermediate", skills: ["Growth Strategy", "Market Analysis", "Strategic Recommendations", "Business Planning"] },
];

const domains = ["All", "Marketing", "Finance", "HR", "Operations", "Business Analytics", "Consulting"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const durations = ["All", "2 weeks", "3 weeks", "4 weeks"];

export function ProjectsCatalogue() {
  const [search, setSearch] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = allProjects.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.domain.toLowerCase().includes(search.toLowerCase());
    const matchDomain = selectedDomain === "All" || p.domain === selectedDomain;
    const matchDiff = selectedDifficulty === "All" || p.difficulty === selectedDifficulty;
    const matchDur = selectedDuration === "All" || p.duration === selectedDuration;
    return matchSearch && matchDomain && matchDiff && matchDur;
  });

  const clearFilters = () => {
    setSelectedDomain("All");
    setSelectedDifficulty("All");
    setSelectedDuration("All");
    setSearch("");
  };

  const hasFilters = selectedDomain !== "All" || selectedDifficulty !== "All" || selectedDuration !== "All" || search;

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "var(--workxd-bg)" }}>
      <Navbar />

      {/* Page header */}
      <div className="bg-white border-b" style={{ borderColor: "var(--workxd-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 style={{ fontSize: "36px", fontWeight: 800, color: "var(--workxd-dark)" }} className="mb-2">
            Browse All Projects
          </h1>
          <p style={{ color: "var(--workxd-text-muted)" }} className="text-base mb-6">
            {allProjects.length} real business projects across 6 MBA domains. Every project includes a certificate and CV points.
          </p>

          {/* Search */}
          <div className="flex gap-3">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--workxd-text-subtle)" }} />
              <input
                type="text"
                placeholder="Search projects by title, domain, or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white text-sm outline-none focus:ring-2"
                style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-dark)" }}
              />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-text-body)" }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium"
                style={{ color: "#EF4444", backgroundColor: "var(--domain-analytics-bg)" }}
              >
                <X className="w-4 h-4" /> Clear
              </button>
            )}
          </div>

          {/* Filters row */}
          {filtersOpen && (
            <div className="mt-4 flex flex-wrap gap-6">
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: "var(--workxd-text-muted)" }}>Domain</p>
                <div className="flex flex-wrap gap-2">
                  {domains.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDomain(d)}
                      className="px-3 py-1 rounded-full text-xs font-medium border transition-colors"
                      style={{
                        backgroundColor: selectedDomain === d ? "#0056D2" : "white",
                        color: selectedDomain === d ? "white" : "#374151",
                        borderColor: selectedDomain === d ? "#0056D2" : "#E5E7EB",
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: "var(--workxd-text-muted)" }}>Difficulty</p>
                <div className="flex gap-2">
                  {difficulties.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDifficulty(d)}
                      className="px-3 py-1 rounded-full text-xs font-medium border transition-colors"
                      style={{
                        backgroundColor: selectedDifficulty === d ? "#0056D2" : "white",
                        color: selectedDifficulty === d ? "white" : "#374151",
                        borderColor: selectedDifficulty === d ? "#0056D2" : "#E5E7EB",
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: "var(--workxd-text-muted)" }}>Duration</p>
                <div className="flex gap-2">
                  {durations.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDuration(d)}
                      className="px-3 py-1 rounded-full text-xs font-medium border transition-colors"
                      style={{
                        backgroundColor: selectedDuration === d ? "#0056D2" : "white",
                        color: selectedDuration === d ? "white" : "#374151",
                        borderColor: selectedDuration === d ? "#0056D2" : "#E5E7EB",
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>
            Showing <span style={{ fontWeight: 600, color: "var(--workxd-dark)" }}>{filtered.length}</span> projects
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p style={{ fontSize: "48px" }}>🔍</p>
            <p className="text-lg font-semibold mt-4" style={{ color: "var(--workxd-dark)" }}>No projects found</p>
            <p className="text-sm mt-2" style={{ color: "var(--workxd-text-muted)" }}>Try adjusting your search or filters</p>
            <button onClick={clearFilters} className="mt-4 text-sm font-semibold" style={{ color: "var(--workxd-blue)" }}>
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
