import Image from "next/image";

interface JobCardProps {
  logo?: string;
  initials?: string;
  company: string;
  position: string;
  date: string;
  description: string;
  bullets: string[];
  technologies: string[];
  index?: number;
}

export default function JobCard({
  logo,
  initials,
  company,
  position,
  date,
  description,
  bullets,
  technologies,
  index = 0,
}: JobCardProps) {
  return (
    <div className="relative pl-16 pb-12 animate-slide-up" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="absolute left-0 top-1">
        <div className="w-12 h-12 shrink-0 bg-zinc-50 rounded-lg overflow-hidden border border-zinc-200 flex items-center justify-center">
          {logo ? (
            <div className="relative w-full h-full">
              <Image src={logo} alt={company} fill className="object-contain p-1" />
            </div>
          ) : (
            <span className="text-zinc-500 font-mono font-bold text-sm">{initials ?? company.slice(0, 2).toUpperCase()}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h2 className="text-black font-bold text-lg leading-tight">{company}</h2>
          <p className="text-zinc-500 text-sm">{position}</p>
          <p className="text-zinc-400 text-xs font-mono">{description}</p>
        </div>
        <span className="font-mono text-xs text-zinc-400 shrink-0 mt-0.5">{date}</span>
      </div>

      <ul className="space-y-1.5 mb-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-zinc-500 text-sm leading-relaxed">
            <span className="text-zinc-300 shrink-0 mt-1">▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span key={tech} className="px-2 py-0.5 bg-white text-zinc-400 text-xs font-mono border border-zinc-200 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
