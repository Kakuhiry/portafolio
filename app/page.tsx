"use client";

import { useState } from "react";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

type Tab = "about" | "experience" | "projects" | "education";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export default function Home() {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex justify-center pt-6 pb-2 px-4">
        <div className="flex border border-zinc-200 rounded-full shadow-sm overflow-hidden">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 text-xs sm:px-8 sm:py-2.5 sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                tab === t.id
                  ? "bg-black text-white"
                  : "bg-white text-zinc-500 hover:text-black"
              } ${i > 0 ? "border-l border-zinc-200" : ""}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      <div key={tab} className="animate-fade-in">
        {tab === "about" && <AboutMe />}
        {tab === "experience" && <Experience />}
        {tab === "projects" && <Projects />}
        {tab === "education" && <Education />}
      </div>
    </main>
  );
}
