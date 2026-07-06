"use client";

type Tab = "about" | "experience" | "education";

interface NavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "about_me" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
];

export default function Nav({ active, onChange }: NavProps) {
  return (
    <nav className="flex gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 font-mono text-sm rounded-lg transition-colors cursor-pointer ${
            active === tab.id
              ? "text-white bg-zinc-900"
              : "text-zinc-600 hover:text-zinc-300"
          }`}
        >
          {active === tab.id ? `[${tab.label}]` : tab.label}
        </button>
      ))}
    </nav>
  );
}
