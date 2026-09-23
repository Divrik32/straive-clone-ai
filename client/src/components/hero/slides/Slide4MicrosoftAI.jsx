import { ArrowRight, Award } from "lucide-react";

const MS_COLORS = ["#f25022", "#7fba00", "#00a4ef", "#ffb900"];

export default function Slide4MicrosoftAI() {
  return (
    <section
      className="relative w-full h-full overflow-hidden text-white"
      style={{
        background: "linear-gradient(135deg, #0a1030 0%, #131b4a 45%, #1c2a6b 75%, #253a8f 100%)",
      }}
    >
      {/* faint medal watermarks */}
      {[
        { top: "8%", left: "2%", size: 90 },
        { top: "55%", left: "10%", size: 70 },
        { top: "18%", right: "8%", size: 130 },
        { top: "62%", right: "4%", size: 100 },
      ].map((pos, i) => (
        <Award
          key={i}
          className="absolute text-white/5"
          style={{ top: pos.top, left: pos.left, right: pos.right, width: pos.size, height: pos.size }}
        />
      ))}

      <div className="relative section-container h-full flex items-center py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start w-full">
          <div className="md:col-span-2">
            <p className="text-lg md:text-xl text-white/70 mb-1">Straive Achieves</p>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-1 flex flex-wrap gap-1">
              {"Microsoft".split("").map((ch, i) => (
                <span key={i} style={{ color: MS_COLORS[i % MS_COLORS.length] }}>
                  {ch}
                </span>
              ))}
              <span className="text-sky-300 ml-2">AI</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6">Platform Specialization</h2>
            <p className="text-sm md:text-base text-white/80 mb-8 max-w-xl">
              Recognized for <span className="font-bold text-white">Customer Success</span> and{" "}
              <span className="font-bold text-white">Production Grade AI Solutions</span>
            </p>
            <button className="btn-pill btn-orange text-xs px-6 py-3 uppercase inline-flex items-center gap-2">
              How it benefits
              <span className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          <div className="hidden md:flex justify-end items-start">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="grid grid-cols-2 gap-0.5 w-6 h-6">
                <span className="bg-[#f25022]" />
                <span className="bg-[#7fba00]" />
                <span className="bg-[#00a4ef]" />
                <span className="bg-[#ffb900]" />
              </div>
              <span className="text-lg font-semibold">Microsoft AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
