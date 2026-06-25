import { Star } from "lucide-react";

export interface TestimonialCardProps {
  name: string;
  program: string;
  college: string;
  project: string;
  outcome: string;
  initials: string;
  avatarColor: string;
}

export function TestimonialCard({ name, program, college, project, outcome, initials, avatarColor }: TestimonialCardProps) {
  return (
    <div className="rounded-xl border p-6 flex flex-col gap-4 hover:shadow-md transition-shadow" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border)" }}>
      {/* Stars */}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--workxd-text-body)" }}>
        "{outcome}"
      </p>

      {/* Meta */}
      <div className="text-xs mb-1" style={{ color: "var(--workxd-text-subtle)" }}>
        Project: <span style={{ color: "var(--workxd-blue)" }}>{project}</span>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "var(--workxd-border-subtle)" }}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--workxd-dark)" }}>{name}</p>
          <p className="text-xs" style={{ color: "var(--workxd-text-subtle)" }}>{program} · {college}</p>
        </div>
      </div>
    </div>
  );
}
