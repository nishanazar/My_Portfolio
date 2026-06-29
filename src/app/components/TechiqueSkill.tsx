import React from 'react'

export default function TechnicalSkill(){
    return (
<section id="skill" className="py-16 px-6">
       
<div className="container mx-auto animate-fade-in-up delay-400">
  <h3 className="text-2xl md:text-3xl font-semibold text-[#1e3a8a] mb-8 text-center md:text-left">Technical Skills</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { name: "TypeScript", icon: "TS", pct: 90, color: "bg-blue-500", iconBg: "bg-blue-100 text-blue-700", label: "Type-safe React & Next.js" },
      { name: "JavaScript", icon: "JS", pct: 90, color: "bg-yellow-400", iconBg: "bg-yellow-100 text-yellow-800", label: "ES6+, DOM, async/await" },
      { name: "Python",     icon: "Py", pct: 85, color: "bg-green-500", iconBg: "bg-green-100 text-green-800", label: "Scripting & AI integrations" },
      { name: "Next.js",    icon: "▲",  pct: 95, color: "bg-purple-500", iconBg: "bg-purple-100 text-purple-700", label: "App Router, SSR, SSG" },
      { name: "Tailwind",   icon: "TW", pct: 95, color: "bg-cyan-500", iconBg: "bg-cyan-100 text-cyan-700", label: "Responsive, pixel-perfect UI" },
      { name: "OpenAI SDK", icon: "AI", pct: 85, color: "bg-red-400", iconBg: "bg-red-100 text-red-700", label: "Agents, GPT integrations" },
    ].map(({ name, icon, pct, color, iconBg, label }) => (
      <div key={name} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${iconBg}`}>{icon}</span>
            <span className="text-lg font-semibold text-slate-800">{name}</span>
          </div>
          <span className="text-sm font-semibold text-slate-400">{pct}%</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
        </div>
        <p className="text-sm text-slate-500 mt-3">{label}</p>
      </div>
    ))}
  </div>
</div>
</section>
    )

}