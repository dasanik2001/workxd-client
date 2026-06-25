import { Link } from "react-router-dom";
import { TrendingUp, DollarSign, Users, Settings, BarChart2, Lightbulb, ArrowRight } from "lucide-react";

export interface DomainCardProps {
  domain: string;
  description: string;
  projectCount: number;
  href?: string;
}

const domainConfig: Record<string, { icon: React.ReactNode; bg: string; text: string }> = {
  Marketing: {
    icon: <TrendingUp className="w-6 h-6" />,
    bg: "var(--domain-marketing-bg)",
    text: "var(--domain-marketing-text)",
  },
  Finance: {
    icon: <DollarSign className="w-6 h-6" />,
    bg: "var(--domain-finance-bg)",
    text: "var(--domain-finance-text)",
  },
  HR: {
    icon: <Users className="w-6 h-6" />,
    bg: "var(--domain-hr-bg)",
    text: "var(--domain-hr-text)",
  },
  Operations: {
    icon: <Settings className="w-6 h-6" />,
    bg: "var(--domain-operations-bg)",
    text: "var(--domain-operations-text)",
  },
  "Business Analytics": {
    icon: <BarChart2 className="w-6 h-6" />,
    bg: "var(--domain-analytics-bg)",
    text: "var(--domain-analytics-text)",
  },
  Consulting: {
    icon: <Lightbulb className="w-6 h-6" />,
    bg: "var(--domain-consulting-bg)",
    text: "var(--domain-consulting-text)",
  },
};

export function DomainCard({ domain, description, projectCount, href = "/domain/marketing" }: DomainCardProps) {
  const config = domainConfig[domain] || { icon: <Lightbulb className="w-6 h-6" />, bg: "var(--domain-consulting-bg)", text: "var(--domain-consulting-text)" };

  return (
    <Link
      to={href}
      className="rounded-xl border p-6 flex flex-col gap-4 hover:shadow-md hover:border-blue-200 transition-all group"
      style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: config.bg, color: config.text }}
      >
        {config.icon}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold mb-1" style={{ color: "var(--workxd-dark)", fontSize: "17px" }}>
          {domain}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: "var(--workxd-text-subtle)" }}>
          {projectCount} projects
        </span>
        <span
          className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
          style={{ color: config.text }}
        >
          Explore <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
