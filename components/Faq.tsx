"use client";

import { useState } from "react";

export default function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col">
      {items.map(([q, a], i) => (
        <div key={q} className="border-t border-cafe/20">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-0 py-[22px] text-left font-serif text-[22px] leading-[1.25] text-cafe"
          >
            <span>{q}</span>
            <span className="font-sans text-[26px] leading-none font-light">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p className="m-0 mb-[22px] max-w-[680px] text-[16px] leading-[1.6] font-light">{a}</p>}
        </div>
      ))}
    </div>
  );
}
