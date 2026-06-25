import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Career Tips": { bg: "var(--domain-marketing-bg)", text: "var(--domain-marketing-text)" },
  "MBA Insights": { bg: "var(--domain-finance-bg)", text: "var(--domain-finance-text)" },
  "Project Guides": { bg: "var(--domain-hr-bg)", text: "var(--domain-hr-text)" },
  "Student Stories": { bg: "var(--domain-operations-bg)", text: "var(--domain-operations-text)" },
  "Industry Trends": { bg: "var(--domain-analytics-bg)", text: "var(--domain-analytics-text)" },
};

export function BlogCard({ title, excerpt, category, date, readTime, featured = false }: BlogCardProps) {
  const catStyle = categoryColors[category] || { bg: "var(--domain-marketing-bg)", text: "var(--domain-marketing-text)" };

  return (
    <Link
      to="/blog"
      className={`rounded-xl border flex flex-col hover:shadow-md transition-shadow ${featured ? "md:flex-row" : ""}`}
      style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
    >
      {/* Placeholder image area */}
      <div
        className={`rounded-t-xl flex-shrink-0 flex items-center justify-center ${
          featured ? "md:rounded-l-xl md:rounded-tr-none md:w-80 h-48 md:h-auto" : "h-40"
        }`}
        style={{ backgroundColor: "var(--domain-marketing-bg)" }}
      >
        <div className="text-4xl">📊</div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: catStyle.bg, color: catStyle.text }}
          >
            {category}
          </span>
        </div>

        <h3
          className={`font-semibold leading-snug ${featured ? "text-xl" : "text-base"}`}
          style={{ color: "var(--workxd-dark)" }}
        >
          {title}
        </h3>

        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--workxd-text-muted)" }}>{excerpt}</p>

        <div className="flex items-center gap-4 text-xs pt-2 border-t" style={{ borderColor: "var(--workxd-border-subtle)", color: "var(--workxd-text-subtle)" }}>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
