import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

export default function SubmitDealModal({ open, onOpenChange }) {
  const [stage, setStage] = useState("form"); // form | loading | success
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Residential",
    notes: "",
  });

  // Reset when re-opened
  useEffect(() => {
    if (open) {
      setStage("form");
      setForm({
        name: "",
        email: "",
        phone: "",
        propertyType: "Residential",
        notes: "",
      });
    }
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStage("loading");
    setTimeout(() => setStage("success"), 1100);
  };

  const handleChange = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-xl p-0 overflow-hidden border-0"
        data-testid="submit-deal-modal"
      >
        {/* Header bar */}
        <div
          className="px-8 py-6"
          style={{ backgroundColor: "#131e3d" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className="inline-block h-px w-10"
              style={{ backgroundColor: "#9f6c5c" }}
            />
            <span
              className="text-[11px] uppercase tracking-[0.3em]"
              style={{ color: "#9f6c5c" }}
            >
              Submit a Deal
            </span>
          </div>
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="font-serif text-white text-2xl">
              Tell us about your transaction
            </DialogTitle>
            <DialogDescription className="text-white/70 text-sm">
              Share a few details and our team will reach out within one
              business day.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="px-8 py-8 bg-white">
          {stage === "form" && (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-testid="submit-deal-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full name" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    data-testid="form-name"
                    className="form-input"
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    data-testid="form-email"
                    className="form-input"
                    placeholder="jane@firm.com"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    data-testid="form-phone"
                    className="form-input"
                    placeholder="(832) 000-0000"
                  />
                </Field>
                <Field label="Property type">
                  <select
                    value={form.propertyType}
                    onChange={handleChange("propertyType")}
                    data-testid="form-property-type"
                    className="form-input bg-white"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Refinancing</option>
                  </select>
                </Field>
              </div>

              <Field label="Deal details">
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={handleChange("notes")}
                  data-testid="form-notes"
                  className="form-input resize-none"
                  placeholder="Address, parties, timeline, anything we should know…"
                />
              </Field>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  data-testid="form-cancel"
                  className="px-6 py-3 text-sm font-medium border border-slate-300 text-slate-700 hover:border-slate-500 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  data-testid="form-submit"
                  className="px-6 py-3 text-sm font-medium text-white transition-colors"
                  style={{ backgroundColor: "#9f6c5c" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#8b5c4d")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#9f6c5c")
                  }
                >
                  Submit deal
                </button>
              </div>
            </form>
          )}

          {stage === "loading" && (
            <div
              className="py-12 flex flex-col items-center justify-center"
              data-testid="submit-deal-loading"
            >
              <Loader2
                className="animate-spin"
                size={36}
                style={{ color: "#9f6c5c" }}
              />
              <p className="mt-5 text-sm text-slate-600">
                Submitting your details…
              </p>
            </div>
          )}

          {stage === "success" && (
            <div
              className="py-10 flex flex-col items-center text-center"
              data-testid="submit-deal-success"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 animate-fade-in"
                style={{
                  backgroundColor: "#9f6c5c",
                }}
              >
                <Check size={28} className="text-white" strokeWidth={2.5} />
              </div>
              <h3
                className="font-serif text-2xl mb-2"
                style={{ color: "#131e3d" }}
              >
                Deal received.
              </h3>
              <p className="text-sm text-slate-600 max-w-sm">
                Thank you — we've logged your submission and a member of our
                team will reach out shortly.
              </p>
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                data-testid="success-close"
                className="mt-7 px-6 py-3 text-sm font-medium border border-slate-300 hover:border-slate-500 transition-colors"
                style={{ color: "#131e3d" }}
              >
                Close
              </button>
            </div>
          )}
        </div>

        <style>{`
          .form-input {
            width: 100%;
            padding: 0.65rem 0.85rem;
            border: 1px solid #cbd5e1;
            background-color: #fff;
            color: #131e3d;
            font-size: 0.9rem;
            font-family: 'Public Sans', sans-serif;
            outline: none;
            transition: border-color 0.2s ease;
          }
          .form-input:focus {
            border-color: #9f6c5c;
            box-shadow: 0 0 0 1px #9f6c5c;
          }
          .form-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.18em;
            color: #475569;
            margin-bottom: 0.4rem;
            display: block;
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="form-label">
        {label}
        {required && <span style={{ color: "#9f6c5c" }}> *</span>}
      </span>
      {children}
    </label>
  );
}
