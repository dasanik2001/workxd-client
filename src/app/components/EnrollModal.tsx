import { useState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface EnrollModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    id: string;
    title: string;
    price: number;
    brand: string;
  };
}

type Step = "form" | "processing" | "success" | "error";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function EnrollModal({ open, onClose, project }: EnrollModalProps) {
  const [step, setStep] = useState<Step>("form");
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [enrollmentData, setEnrollmentData] = useState<{
    paymentId: string;
    enrolledAt: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Reset on open
  useEffect(() => {
    if (open) {
      setStep("form");
      setErrors({ name: "", email: "" });
      setErrorMsg("");
      setEnrollmentData(null);
    }
  }, [open]);

  // Trap focus and handle Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  function validate() {
    const e = { name: "", email: "" };
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    setErrors(e);
    return !e.name && !e.email;
  }

  async function handleEnroll(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStep("processing");

    try {
      // 1. Load Razorpay SDK
      const loaded = await loadRazorpayScript();
      if (!loaded) throw new Error("Failed to load payment gateway");

      // 2. Create order on backend
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: project.price,
          projectId: project.id,
          projectTitle: project.title,
          email: form.email,
          name: form.name,
        }),
      });

      if (!orderRes.ok) {
        const err = await orderRes.json();
        throw new Error(err.error || "Order creation failed");
      }

      const { orderId, amount, currency, keyId } = await orderRes.json();

      // 3. Open Razorpay checkout
      await new Promise<void>((resolve, reject) => {
        const rzp = new window.Razorpay({
          key: keyId,
          amount,
          currency,
          name: "WorkXD",
          description: project.title,
          order_id: orderId,
          prefill: { name: form.name, email: form.email },
          theme: { color: "#0056D2" },
          modal: {
            ondismiss: () => reject(new Error("Payment cancelled by user")),
          },
          handler: async (response: {
            razorpay_order_id: string;
            razorpay_payment_id: string;
            razorpay_signature: string;
          }) => {
            try {
              // 4. Verify payment & register enrollment
              const verifyRes = await fetch("/api/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  ...response,
                  email: form.email,
                  name: form.name,
                  projectId: project.id,
                  projectTitle: project.title,
                  amount: project.price,
                }),
              });

              if (!verifyRes.ok) {
                const err = await verifyRes.json();
                throw new Error(err.error || "Payment verification failed");
              }

              const { enrollment } = await verifyRes.json();
              setEnrollmentData({
                paymentId: enrollment.id,
                enrolledAt: enrollment.enrolledAt,
              });
              setStep("success");
              resolve();
            } catch (err) {
              reject(err);
            }
          },
        });

        rzp.on("payment.failed", (response: { error: { description: string } }) => {
          reject(new Error(response.error.description || "Payment failed"));
        });

        rzp.open();
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      if (msg === "Payment cancelled by user") {
        setStep("form");
      } else {
        setErrorMsg(msg);
        setStep("error");
      }
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md rounded-2xl border shadow-2xl"
        style={{
          backgroundColor: "var(--workxd-card)",
          borderColor: "var(--workxd-border)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b" style={{ borderColor: "var(--workxd-border)" }}>
          <div>
            <h2 className="font-bold text-base" style={{ color: "var(--workxd-dark)" }}>
              Enroll in Project
            </h2>
            <p className="text-xs mt-0.5" style={{ color: "var(--workxd-text-muted)" }}>
              {project.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg transition-colors"
            style={{ color: "var(--workxd-text-muted)", backgroundColor: "var(--workxd-border-subtle)" }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-6 py-5">
          {/* FORM STEP */}
          {step === "form" && (
            <form onSubmit={handleEnroll} className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-4" style={{ color: "var(--workxd-dark)" }}>
                  Enter your details to continue
                </p>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-muted)" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Priya Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none"
                  style={{
                    backgroundColor: "var(--workxd-surface-input)",
                    borderColor: errors.name ? "#EF4444" : "var(--workxd-border)",
                    color: "var(--workxd-dark)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--workxd-blue)")}
                  onBlur={(e) => (e.target.style.borderColor = errors.name ? "#EF4444" : "var(--workxd-border)")}
                />
                {errors.name && <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--workxd-text-muted)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="priya@academic.ac.in"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none"
                  style={{
                    backgroundColor: "var(--workxd-surface-input)",
                    borderColor: errors.email ? "#EF4444" : "var(--workxd-border)",
                    color: "var(--workxd-dark)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--workxd-blue)")}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? "#EF4444" : "var(--workxd-border)")}
                />
                {errors.email && <p className="text-xs mt-1" style={{ color: "#EF4444" }}>{errors.email}</p>}
                <p className="text-xs mt-1.5" style={{ color: "var(--workxd-text-subtle)" }}>
                  Your certificate and CV bullet points will be sent to this email.
                </p>
              </div>

              {/* Order summary */}
              <div className="rounded-xl p-4 border" style={{ backgroundColor: "var(--workxd-surface)", borderColor: "var(--workxd-border)" }}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span style={{ color: "var(--workxd-text-body)" }}>Project access</span>
                  <span style={{ color: "var(--workxd-dark)" }}>₹{project.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span style={{ color: "var(--workxd-text-body)" }}>Certificate + CV points</span>
                  <span style={{ color: "var(--workxd-green)" }}>Included</span>
                </div>
                <div className="border-t pt-2 mt-2 flex items-center justify-between font-bold" style={{ borderColor: "var(--workxd-border)" }}>
                  <span style={{ color: "var(--workxd-dark)" }}>Total</span>
                  <span style={{ color: "var(--workxd-dark)" }}>₹{project.price}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#F97316" }}
              >
                Pay ₹{project.price} & Enroll
              </button>

              <p className="text-center text-xs" style={{ color: "var(--workxd-text-subtle)" }}>
                Secured by Razorpay · 256-bit SSL encryption
              </p>
            </form>
          )}

          {/* PROCESSING STEP */}
          {step === "processing" && (
            <div className="flex flex-col items-center py-8 gap-4">
              <Loader2 className="w-10 h-10 animate-spin" style={{ color: "var(--workxd-blue)" }} />
              <p className="font-semibold text-sm" style={{ color: "var(--workxd-dark)" }}>
                Opening payment gateway…
              </p>
              <p className="text-xs text-center" style={{ color: "var(--workxd-text-muted)" }}>
                Complete the payment in the Razorpay window. Do not close this tab.
              </p>
            </div>
          )}

          {/* SUCCESS STEP */}
          {step === "success" && (
            <div className="flex flex-col items-center py-6 gap-4 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--domain-finance-bg)" }}>
                <CheckCircle2 className="w-8 h-8" style={{ color: "var(--workxd-green)" }} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "var(--workxd-dark)" }}>
                  You're enrolled!
                </h3>
                <p className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>
                  Welcome, {form.name}. Your project access and receipt have been sent to{" "}
                  <strong style={{ color: "var(--workxd-dark)" }}>{form.email}</strong>.
                </p>
              </div>
              {enrollmentData && (
                <div className="w-full rounded-xl border p-4 text-left text-xs space-y-1" style={{ backgroundColor: "var(--workxd-surface)", borderColor: "var(--workxd-border)" }}>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--workxd-text-muted)" }}>Payment ID</span>
                    <span className="font-mono" style={{ color: "var(--workxd-dark)" }}>{enrollmentData.paymentId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--workxd-text-muted)" }}>Project</span>
                    <span style={{ color: "var(--workxd-dark)" }}>{project.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "var(--workxd-text-muted)" }}>Enrolled at</span>
                    <span style={{ color: "var(--workxd-dark)" }}>
                      {new Date(enrollmentData.enrolledAt).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl text-white font-semibold text-sm"
                style={{ backgroundColor: "var(--workxd-blue)" }}
              >
                Go to Dashboard
              </button>
            </div>
          )}

          {/* ERROR STEP */}
          {step === "error" && (
            <div className="flex flex-col items-center py-6 gap-4 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--domain-analytics-bg)" }}>
                <AlertCircle className="w-8 h-8" style={{ color: "var(--domain-analytics-text)" }} />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: "var(--workxd-dark)" }}>
                  Payment Failed
                </h3>
                <p className="text-sm" style={{ color: "var(--workxd-text-muted)" }}>{errorMsg}</p>
              </div>
              <button
                onClick={() => setStep("form")}
                className="w-full py-3 rounded-xl font-semibold text-sm border"
                style={{ borderColor: "var(--workxd-border)", color: "var(--workxd-text-body)" }}
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
