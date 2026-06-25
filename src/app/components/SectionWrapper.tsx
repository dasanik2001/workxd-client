import type { ReactNode } from "react";

export function SectionWrapper({
  children,
  bg = "white",
  className = "",
}: {
  children: ReactNode;
  bg?: "white" | "gray" | "blue";
  className?: string;
}) {
  const bgMap = {
    white: "var(--workxd-card)",
    gray: "var(--workxd-bg)",
    blue: "var(--workxd-blue)",
  };

  return (
    <section style={{ backgroundColor: bgMap[bg] }} className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  center = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <span
          className="text-xs font-semibold uppercase tracking-widest mb-3 block"
          style={{ color: "var(--workxd-blue)" }}
        >
          {label}
        </span>
      )}
      <h2 style={{ color: "var(--workxd-dark)", fontSize: "36px", fontWeight: 700, lineHeight: 1.25 }}>{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: "var(--workxd-text-muted)", marginLeft: center ? "auto" : "0", marginRight: center ? "auto" : "0" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
