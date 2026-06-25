import type { ReactNode } from "react";

export interface OutcomeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export function OutcomeCard({ icon, title, description, iconBg, iconColor }: OutcomeCardProps) {
  return (
    <div className="rounded-xl border p-6 flex flex-col gap-4 hover:shadow-md transition-shadow" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-2" style={{ color: "var(--workxd-dark)", fontSize: "17px" }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--workxd-text-muted)" }}>{description}</p>
      </div>
    </div>
  );
}
