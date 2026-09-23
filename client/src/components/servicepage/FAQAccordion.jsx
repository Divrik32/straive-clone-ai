import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-black/10 border-y border-black/10">
      {faqs.map((faq, i) => (
        <div key={faq.q}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between py-4 text-left text-sm font-medium text-[#10162B]"
          >
            {faq.q}
            <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${open === i ? "rotate-180 text-brand-orange" : ""}`} />
          </button>
          {open === i && <p className="text-[13px] text-[#4a4a5a] leading-relaxed pb-4 pr-8">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
