import React, { useState } from "react";
import { Calculator } from "lucide-react";

export default function FidelityCalculator() {
  const [propertyValue, setPropertyValue] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [transactionType, setTransactionType] = useState("purchase");
  const [estimate, setEstimate] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const value = parseFloat(propertyValue.replace(/,/g, ""));
    const loan = parseFloat(loanAmount.replace(/,/g, "")) || 0;
    if (isNaN(value) || value <= 0) return;

    // A very simplified faux premium calculation for demonstration
    // Base fee + $5 per $1,000
    let premium = 500 + (value / 1000) * 5;
    
    if (transactionType === "refinance") {
      premium = 400 + (loan / 1000) * 3;
    }

    setEstimate(premium.toFixed(2));
  };

  return (
    <section className="bg-white py-20 border-b border-slate-100" id="calculator">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5 justify-center">
          <span className="copper-rule w-8 h-[1px] bg-[#9f6c5c]" />
          <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "#9f6c5c" }}>
            Fidelity Calculator
          </span>
          <span className="copper-rule w-8 h-[1px] bg-[#9f6c5c]" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center mb-4" style={{ color: "#131e3d" }}>
          Estimate Your Title Premium
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          Use our Fidelity National Title premium calculator to get a quick estimate of your title insurance costs before closing.
        </p>

        <div className="max-w-xl mx-auto bg-[#f7f5f1] p-8 sm:p-10 shadow-sm border border-slate-200">
          <form onSubmit={handleCalculate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#131e3d] mb-2">Transaction Type</label>
              <select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#063462] rounded-none"
              >
                <option value="purchase">Purchase</option>
                <option value="refinance">Refinance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#131e3d] mb-2">Property Value (Purchase Price)</label>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(e.target.value)}
                placeholder="e.g. 500000"
                className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#063462] rounded-none"
                required
              />
            </div>

            {transactionType === "refinance" && (
              <div>
                <label className="block text-sm font-medium text-[#131e3d] mb-2">Loan Amount</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="e.g. 400000"
                  className="w-full px-4 py-3 bg-white border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#063462] rounded-none"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-4 flex items-center justify-center gap-2 px-7 py-4 text-sm font-medium tracking-wide text-white transition-colors"
              style={{ backgroundColor: "#063462" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0b4986")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#063462")}
            >
              <Calculator size={18} />
              Calculate Estimate
            </button>
          </form>

          {estimate !== null && (
            <div className="mt-8 p-6 bg-white border-l-4" style={{ borderColor: "#9f6c5c" }}>
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-1">Estimated Premium</p>
              <p className="text-4xl font-serif text-[#131e3d]">${estimate}</p>
              <p className="text-xs text-slate-400 mt-2">*This is a sample estimate for illustration purposes only.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
