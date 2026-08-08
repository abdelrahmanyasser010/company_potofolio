import Image from "next/image";
import { BarChart3, BookOpen, Box, FileText, PackageCheck, Route, ScanLine, Truck, UserRound, WalletCards } from "lucide-react";
import type { PortfolioItem } from "@/lib/data/initialData";

const miniBars = [62, 88, 49, 74, 92, 66, 81];

export function ProjectVisual({ project, compact = false }: { project: PortfolioItem; compact?: boolean }) {
  const common = "rounded-xl border border-white/10 bg-white/[.045]";

  if (project.coverImage) {
    return (
      <div className={`relative overflow-hidden bg-[#17191b] ${compact ? "h-64" : "min-h-[400px]"}`}>
        <Image
          src={project.coverImage}
          alt={project.title_en}
          fill
          sizes={compact ? "(max-width: 1024px) 100vw, 33vw" : "(max-width: 1024px) 100vw, 55vw"}
          className="object-contain"
          priority={!compact}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060817]/55 via-transparent to-transparent" />
        <div className="absolute bottom-4 start-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.16em] text-white/85 backdrop-blur-md">
          Product case study
        </div>
      </div>
    );
  }

  if (project.visual === "shipping") {
    return (
      <div className={`relative overflow-hidden ${compact ? "h-64" : "min-h-[360px]"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(46,220,255,.12),transparent_35%)]" />
        <div className="absolute inset-x-5 top-6 rounded-2xl border border-white/10 bg-[#080e28]/95 p-4 shadow-2xl">
          <div className="mb-4 flex items-center justify-between"><div className="flex items-center gap-2 text-xs font-bold text-slate-300"><Truck className="h-4 w-4 text-codely-cyan"/> Operations</div><span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[10px] text-cyan-200">Live flow</span></div>
          <div className="grid grid-cols-3 gap-2">
            {[['148','Shipments'],['23','On route'],['11','Exceptions']].map(([n,l])=><div key={l} className={`${common} p-3`}><div className="text-xl font-black text-white">{n}</div><div className="mt-1 text-[9px] uppercase tracking-wider text-slate-500">{l}</div></div>)}
          </div>
          <div className="mt-3 space-y-2">
            {[['#DL-2039','Out for delivery'],['#DL-2038','Collected'],['#DL-2037','Partial delivery']].map(([id,s],i)=><div key={id} className={`${common} flex items-center justify-between px-3 py-2.5`}><div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-300/10 text-codely-cyan">{i===2?<PackageCheck className="h-3.5 w-3.5"/>:<Route className="h-3.5 w-3.5"/>}</span><span className="text-[11px] font-bold text-slate-200">{id}</span></div><span className="text-[9px] text-slate-400">{s}</span></div>)}
          </div>
        </div>
        <div className="absolute bottom-5 end-4 w-28 rounded-[24px] border border-white/15 bg-[#0a1130] p-2 shadow-2xl">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/15"/><div className="rounded-2xl bg-cyan-400/8 p-3"><ScanLine className="mb-8 h-5 w-5 text-codely-cyan"/><div className="h-1.5 w-full rounded bg-white/15"/><div className="mt-2 h-1.5 w-2/3 rounded bg-white/10"/></div>
        </div>
      </div>
    );
  }

  if (project.visual === "pos") {
    return <div className={`relative overflow-hidden ${compact ? "h-64" : "min-h-[360px]"}`}><div className="absolute inset-x-5 top-6 bottom-5 rounded-2xl border border-white/10 bg-[#090d23] p-4 shadow-2xl"><div className="flex h-full gap-3"><div className="w-[68%] rounded-xl border border-white/8 bg-white/[.025] p-3"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold text-white">Point of Sale</span><span className="text-[9px] text-violet-200">Shift open</span></div><div className="grid grid-cols-2 gap-2">{['Espresso','Latte','Croissant','Sandwich'].map((x,i)=><div key={x} className={`${common} p-3`}><div className="mb-5 grid h-7 w-7 place-items-center rounded-lg bg-violet-400/10 text-violet-200"><Box className="h-3.5 w-3.5"/></div><div className="text-[10px] font-bold text-slate-200">{x}</div><div className="mt-1 text-[9px] text-slate-500">Item {i+1}</div></div>)}</div></div><div className="flex-1 rounded-xl border border-white/8 bg-violet-400/[.035] p-3"><div className="text-[10px] font-bold text-slate-300">Current sale</div><div className="mt-4 space-y-2">{[1,2,3].map(i=><div key={i} className="flex justify-between border-b border-white/8 pb-2 text-[9px] text-slate-400"><span>Item {i}</span><span>{(i*32).toFixed(2)}</span></div>)}</div><div className="mt-5 rounded-lg bg-violet-400/10 p-3"><div className="text-[9px] text-slate-400">Total</div><div className="mt-1 text-xl font-black text-white">192.00</div></div></div></div></div></div>;
  }

  if (project.visual === "education") {
    return <div className={`relative overflow-hidden ${compact ? "h-64" : "min-h-[360px]"}`}><div className="absolute inset-x-5 top-6 rounded-2xl border border-white/10 bg-[#09112d] p-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2 text-xs font-bold"><BookOpen className="h-4 w-4 text-blue-300"/> School workspace</div><span className="rounded-full bg-blue-400/10 px-2 py-1 text-[9px] text-blue-200">Tenant isolated</span></div><div className="mt-4 grid grid-cols-4 gap-2">{['Students','Classes','Staff','Alerts'].map((x,i)=><div className={`${common} p-2.5`} key={x}><div className="text-base font-black">{[824,38,71,6][i]}</div><div className="text-[8px] uppercase text-slate-500">{x}</div></div>)}</div><div className="mt-3 grid grid-cols-[1fr_.72fr] gap-3"><div className={`${common} p-3`}><div className="mb-3 text-[9px] font-bold text-slate-400">Activity</div><div className="flex h-28 items-end gap-2">{miniBars.map((h,i)=><div key={i} className="flex-1 rounded-t bg-blue-400/40" style={{height:`${h}%`}}/>)}</div></div><div className={`${common} p-3`}><div className="text-[9px] font-bold text-slate-400">API modules</div><div className="mt-4 space-y-2">{['Auth','Tenants','Users','Notifications'].map(x=><div key={x} className="flex items-center justify-between rounded-lg bg-white/[.03] px-2 py-2 text-[9px]"><span>{x}</span><span className="h-1.5 w-1.5 rounded-full bg-blue-300"/></div>)}</div></div></div></div></div>;
  }

  if (project.visual === "legal") {
    return <div className={`relative overflow-hidden ${compact ? "h-64" : "min-h-[360px]"}`}><div className="absolute start-6 top-6 w-[62%] rounded-2xl border border-white/10 bg-[#0a102b] p-4 shadow-2xl"><div className="flex items-center gap-2 text-xs font-bold"><FileText className="h-4 w-4 text-indigo-300"/> Contract workspace</div><div className="mt-4 space-y-2">{['Client information','Contract clauses','Payment status','Review & approval'].map((x,i)=><div key={x} className={`${common} flex items-center gap-3 px-3 py-3 text-[10px] text-slate-300`}><span className="grid h-5 w-5 place-items-center rounded-full bg-indigo-400/10 text-[9px] text-indigo-200">{i+1}</span>{x}</div>)}</div></div><div className="absolute bottom-5 end-5 w-[44%] rounded-2xl border border-indigo-300/20 bg-[#101536] p-4 shadow-2xl"><WalletCards className="h-5 w-5 text-indigo-300"/><div className="mt-8 text-[9px] text-slate-500">Payment record</div><div className="mt-1 text-lg font-black">Ready for review</div><div className="mt-4 h-2 rounded-full bg-white/8"><div className="h-full w-3/4 rounded-full bg-indigo-400/60"/></div></div></div>;
  }

  return <div className={`relative overflow-hidden ${compact ? "h-64" : "min-h-[360px]"}`}><div className="absolute inset-x-5 top-6 bottom-5 rounded-2xl border border-white/10 bg-[#081126] p-4"><div className="flex items-center justify-between"><div className="flex items-center gap-2 text-xs font-bold"><UserRound className="h-4 w-4 text-sky-300"/> Resume editor</div><span className="text-[9px] text-sky-200">ATS + Coach</span></div><div className="mt-4 grid h-[78%] grid-cols-[.72fr_1.28fr] gap-3"><div className={`${common} p-3`}><div className="h-8 w-8 rounded-full bg-sky-300/15"/><div className="mt-4 h-2 w-2/3 rounded bg-white/15"/><div className="mt-2 h-1.5 w-full rounded bg-white/8"/><div className="mt-1.5 h-1.5 w-5/6 rounded bg-white/8"/><div className="mt-5 space-y-2">{[1,2,3].map(i=><div key={i} className="h-7 rounded-lg bg-white/[.03]"/>)}</div></div><div className={`${common} p-4`}><div className="flex items-center justify-between"><span className="text-[10px] font-black">Professional Summary</span><span className="rounded-full bg-sky-300/10 px-2 py-1 text-[8px] text-sky-200">Improve</span></div><div className="mt-5 space-y-2">{[100,92,96,75].map((w,i)=><div key={i} className="h-1.5 rounded bg-white/10" style={{width:`${w}%`}}/>)}</div><div className="mt-6 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-sky-300"/><span className="text-[9px] text-slate-400">ATS review based on the target role</span></div></div></div></div></div>;
}
