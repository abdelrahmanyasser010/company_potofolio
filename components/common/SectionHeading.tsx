import React from "react";

export function SectionHeading({ eyebrow, title, body, align = "start" }: { eyebrow: string; title: string; body?: string; align?: "start" | "center" }) {
  const isCenter = align === "center";
  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div className={`eyebrow ${isCenter ? "justify-center" : ""}`}>
        <span className="glow-dot h-1.5 w-1.5 rounded-full bg-codely-cyan" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.38] text-white md:text-5xl md:leading-[1.35]">
        {title}
      </h2>
      {body && <p className="mt-5 text-sm leading-8 text-slate-400 md:text-base">{body}</p>}
    </div>
  );
}
