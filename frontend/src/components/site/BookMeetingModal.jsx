import { useEffect, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Calendar } from "../ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

export default function BookMeetingModal({ open, onOpenChange }) {
  const [stage, setStage] = useState("form");
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    notes: "",
  });

  useEffect(() => {
    if (open) {
      setStage("form");
      setDate(undefined);
      setTime("");
      setForm({ name: "", email: "", notes: "" });
    }
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time) {
      alert("Please select a date and time");
      return;
    }
    setStage("loading");
    setTimeout(() => setStage("success"), 1100);
  };

  const handleChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-0" data-testid="book-meeting-modal">
        <div className="px-8 py-6" style={{ backgroundColor: "#063462" }}>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block h-px w-10" style={{ backgroundColor: "#9f6c5c" }} />
            <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: "#9f6c5c" }}>
              Schedule a meeting
            </span>
          </div>
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="font-serif text-white text-2xl">Book a Consultation</DialogTitle>
            <DialogDescription className="text-white/70 text-sm">
              Select a date and time to speak with one of our escrow officers or attorneys.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-8 py-8 bg-white">
          {stage === "form" && (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
              {/* Calendar Section */}
              <div className="flex-1 border-r border-slate-100 pr-4">
                <label className="block text-sm font-medium text-[#131e3d] mb-4">Select a Date</label>
                <div className="border border-slate-200 rounded-md inline-block">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    initialFocus
                  />
                </div>

                {date && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-[#131e3d] mb-2">Available Times</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["09:00 AM", "10:30 AM", "01:00 PM", "03:00 PM"].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTime(t)}
                          className={`py-2 px-3 text-sm border transition-colors ${
                            time === t
                              ? "bg-[#063462] text-white border-[#063462]"
                              : "bg-white text-slate-700 border-slate-300 hover:border-[#063462]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Form Section */}
              <div className="flex-1 space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    className="w-full px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#9f6c5c]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#9f6c5c]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 mb-1">Notes / Topic</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={handleChange("notes")}
                    className="w-full px-3 py-2 border border-slate-300 focus:outline-none focus:border-[#9f6c5c] resize-none"
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="px-4 py-2 text-sm border border-slate-300 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 text-sm text-white"
                    style={{ backgroundColor: "#9f6c5c" }}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </form>
          )}

          {stage === "loading" && (
            <div className="py-12 flex flex-col items-center justify-center">
              <Loader2 className="animate-spin" size={36} style={{ color: "#9f6c5c" }} />
              <p className="mt-5 text-sm text-slate-600">Booking your meeting...</p>
            </div>
          )}

          {stage === "success" && (
            <div className="py-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 animate-fade-in" style={{ backgroundColor: "#9f6c5c" }}>
                <Check size={28} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="font-serif text-2xl mb-2 text-[#131e3d]">Meeting Scheduled</h3>
              <p className="text-sm text-slate-600 max-w-sm">
                Your consultation has been booked. A calendar invite has been sent to {form.email}.
              </p>
              <button
                onClick={() => onOpenChange(false)}
                className="mt-7 px-6 py-3 text-sm border border-slate-300 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
