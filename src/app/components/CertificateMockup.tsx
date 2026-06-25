import { Award } from "lucide-react";

export function CertificateMockup({ studentName = "Priya Sharma", projectTitle = "Go-to-Market Strategy", brand = "MarketSpark", large = false }) {
  return (
    <div
      className={`rounded-2xl border-2 ${large ? "p-10" : "p-6"} text-center relative overflow-hidden`}
      style={{ backgroundColor: "var(--workxd-card)", borderColor: "var(--workxd-blue)" }}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 opacity-10" style={{ background: "linear-gradient(135deg, var(--workxd-blue), transparent)" }} />
      <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10" style={{ background: "linear-gradient(315deg, var(--workxd-blue), transparent)" }} />

      {/* Header */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--workxd-blue)" }}>
          <Award className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold" style={{ color: "var(--workxd-blue)", fontSize: "18px" }}>WorkXD</span>
        <span style={{ color: "var(--workxd-text-subtle)" }}>×</span>
        <span className="font-bold" style={{ color: "var(--workxd-dark)", fontSize: "16px" }}>{brand}</span>
      </div>

      <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--workxd-text-subtle)" }}>
        Certificate of Completion
      </div>

      <div className="w-16 h-0.5 mx-auto mb-4" style={{ backgroundColor: "var(--workxd-border)" }} />

      <p className="text-sm mb-2" style={{ color: "var(--workxd-text-muted)" }}>This certifies that</p>
      <h2 className={`font-bold mb-2 ${large ? "text-3xl" : "text-xl"}`} style={{ color: "var(--workxd-dark)" }}>{studentName}</h2>
      <p className="text-sm mb-1" style={{ color: "var(--workxd-text-muted)" }}>has successfully completed the project</p>
      <h3 className={`font-semibold mb-4 ${large ? "text-xl" : "text-base"}`} style={{ color: "var(--workxd-blue)" }}>{projectTitle}</h3>

      <div className="w-16 h-0.5 mx-auto mb-4" style={{ backgroundColor: "var(--workxd-border)" }} />

      <div className="flex items-center justify-center gap-8 text-xs" style={{ color: "var(--workxd-text-subtle)" }}>
        <div>
          <div className="w-20 h-0.5 mx-auto mb-1" style={{ backgroundColor: "var(--workxd-border)" }} />
          <span>WorkXD CEO</span>
        </div>
        <div
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: "var(--workxd-blue)" }}
        >
          <Award className="w-5 h-5" style={{ color: "var(--workxd-blue)" }} />
        </div>
        <div>
          <div className="w-20 h-0.5 mx-auto mb-1" style={{ backgroundColor: "var(--workxd-border)" }} />
          <span>{brand} Director</span>
        </div>
      </div>

      <div className="mt-4 text-xs" style={{ color: "var(--workxd-text-subtle)" }}>
        Credential ID: WXD-2024-{Math.random().toString(36).substring(2, 8).toUpperCase()}
      </div>
    </div>
  );
}
