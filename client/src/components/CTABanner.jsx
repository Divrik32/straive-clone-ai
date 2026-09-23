import { ChevronRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-white pb-16">
      <div className="section-container">
        <div className="relative bg-brand-orange rounded-2xl text-center py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-semibold text-white max-w-2xl mx-auto mb-8">
              We Partner to Operationalize Data Analytics & AI for Your Enterprise
            </h2>
            <button className="btn-pill bg-white text-brand-orange text-[11px] px-6 py-3 uppercase inline-flex items-center gap-1">
              Contact Us <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
