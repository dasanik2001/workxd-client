import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl overflow-hidden" style={{ borderColor: "var(--workxd-border)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
        style={{ backgroundColor: "var(--workxd-card)" }}
      >
        <span className="text-sm font-semibold pr-4" style={{ color: "var(--workxd-dark)" }}>
          {question}
        </span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform"
          style={{ color: "var(--workxd-text-muted)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 border-t" style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-border-subtle)" }}>
          <p className="text-sm leading-relaxed pt-3" style={{ color: "var(--workxd-text-muted)" }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
