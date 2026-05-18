import { ExternalLink, Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";

const platforms = [
  {
    name: "Google",
    description: "Share your experience on Google.",
    href: "https://www.google.com/search?q=Powerhouse+Title+LLC+Stafford+TX",
    testId: "review-google",
  },
  {
    name: "Yelp",
    description: "Leave a review on Yelp.",
    href: "https://www.yelp.com/search?find_desc=Powerhouse+Title&find_loc=Stafford%2C+TX",
    testId: "review-yelp",
  },
];

export default function LeaveReviewModal({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-lg p-0 overflow-hidden border-0"
        data-testid="leave-review-modal"
      >
        <div className="px-8 py-6" style={{ backgroundColor: "#131e3d" }}>
          <div className="flex items-center gap-3 mb-3">
            <span
              className="inline-block h-px w-10"
              style={{ backgroundColor: "#9f6c5c" }}
            />
            <span
              className="text-[11px] uppercase tracking-[0.3em]"
              style={{ color: "#9f6c5c" }}
            >
              Leave a Review
            </span>
          </div>
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="font-serif text-white text-2xl">
              Share your experience
            </DialogTitle>
            <DialogDescription className="text-white/70 text-sm">
              Your feedback helps fellow buyers, sellers, and partners find
              trustworthy title services.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-8 py-8 bg-white space-y-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={p.testId}
              className="group flex items-center justify-between border border-slate-200 px-5 py-4 hover:border-[#9f6c5c] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 flex items-center justify-center font-serif"
                  style={{
                    backgroundColor: "#131e3d",
                    color: "#ffffff",
                  }}
                >
                  {p.name[0]}
                </div>
                <div>
                  <div
                    className="font-serif text-base"
                    style={{ color: "#131e3d" }}
                  >
                    Review on {p.name}
                  </div>
                  <div className="text-sm text-slate-500 mt-0.5">
                    {p.description}
                  </div>
                </div>
              </div>
              <ExternalLink
                size={18}
                className="text-slate-400 group-hover:text-[#9f6c5c] transition-colors"
              />
            </a>
          ))}

          <div className="pt-2 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                fill="#9f6c5c"
                style={{ color: "#9f6c5c" }}
              />
            ))}
          </div>
          <p className="text-center text-xs text-slate-500">
            Thank you for trusting Powerhouse Title with your transaction.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
