import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export interface PricingCardProps {
  plan: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href?: string;
  highlighted?: boolean;
  badge?: string;
}

export function PricingCard({
  plan,
  price,
  period = "/month",
  description,
  features,
  cta,
  href = "/pricing",
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className="rounded-xl border flex flex-col relative"
      style={{
        borderColor: highlighted ? "var(--workxd-blue)" : "var(--workxd-border)",
        backgroundColor: "var(--workxd-card)",
        boxShadow: highlighted ? "0 0 0 2px var(--workxd-blue)" : "none",
      }}
    >
      {badge && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: "var(--workxd-blue)" }}
        >
          {badge}
        </div>
      )}

      <div className="p-6 border-b" style={{ borderColor: "var(--workxd-border-subtle)" }}>
        <h3 className="font-semibold mb-1" style={{ color: "var(--workxd-dark)", fontSize: "18px" }}>{plan}</h3>
        <p className="text-sm mb-4" style={{ color: "var(--workxd-text-muted)" }}>{description}</p>
        <div className="flex items-end gap-1">
          <span style={{ fontSize: "36px", fontWeight: 700, color: "var(--workxd-dark)" }}>{price}</span>
          {price !== "Custom" && (
            <span className="mb-1 text-sm" style={{ color: "var(--workxd-text-subtle)" }}>{period}</span>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-4">
        <ul className="space-y-3 flex-1">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--workxd-text-body)" }}>
              <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "var(--workxd-green)" }} />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to={href}
          className="block text-center py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: highlighted ? "var(--workxd-blue)" : "var(--workxd-surface)",
            color: highlighted ? "white" : "var(--workxd-dark)",
            border: highlighted ? "none" : "1px solid var(--workxd-border)",
          }}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
