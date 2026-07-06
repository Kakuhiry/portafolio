import Image from "next/image";

const skillGroups = [
  { label: "Clouds", skills: ["Azure", "AWS", "GCP", "DigitalOcean"] },
  { label: "Languages", skills: ["Golang", "Python", "JavaScript", "TypeScript", "SQL"] },
  { label: "Orchestration & IaC", skills: ["Kubernetes", "Helm", "Terraform", "ArgoCD", "FluxCD"] },
  { label: "CI/CD & Tools", skills: ["Azure DevOps", "GitHub Actions", "Entra ID", "Docker", "Linux", "Git", "HashiCorp Vault", "Cloudflare", "Traefik"] },
  { label: "Observability", skills: ["Azure Monitor", "Prometheus", "Grafana", "Loki"] },
];

const socials = [
  { img: "/logo--linkedin.svg", label: "linkedin.com/in/egbpk", href: "https://www.linkedin.com/in/egbpk/" },
  { img: "/logo--github.svg", label: "Kakuhiry", href: "https://www.github.com/Kakuhiry" },
  { img: "/email.svg", label: "gilbertbatista.k@gmail.com", href: "mailto:gilbertbatista.k@gmail.com" },
  { img: "/phone.svg", label: "+1 (849) 621-8895", href: "tel:+18496218895" },
];

export default function AboutMe() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-16">
      {/* Header */}
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black mb-6 animate-slide-up" style={{ animationDelay: "0ms" }}>
        &lt;/&gt; DevOps Engineer
      </h2>

      {/* Two-column: bio left, socials right */}
      <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-10 animate-slide-up" style={{ animationDelay: "60ms" }}>
        <div className="md:w-5/12 mb-8 md:mb-0">
          <h3 className="text-xl md:text-3xl font-bold text-black mb-4 md:mb-6">Hi, I&apos;m Gilbert!</h3>
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6">
            DevOps engineer with 5+ years building and operating cloud-native infrastructure.
            Deep expertise in Kubernetes, Terraform, and GitOps across multiple cloud providers.
            Focused on scalable platforms, CI/CD automation, and keeping systems reliable and cost-efficient.
          </p>
          <div className="flex gap-3">
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-black text-black text-sm font-medium rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Resume ↓
            </a>
            <a
              href="/cover-letter"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-zinc-300 text-zinc-600 text-sm font-medium rounded-full hover:border-black hover:text-black transition-colors"
            >
              Cover Letter ↓
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6 md:w-5/12 md:items-end">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center gap-4 text-black hover:text-zinc-500 transition-colors group w-full md:w-auto justify-between md:justify-start"
            >
              <span className="text-sm md:text-base font-medium">{s.label}</span>
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black rounded-lg shrink-0 group-hover:bg-zinc-700 transition-colors">
                <Image src={s.img} alt="" width={20} height={20} className="invert" />
              </div>
            </a>
          ))}

        </div>
      </div>

      {/* Skills */}
      <div className="animate-slide-up" style={{ animationDelay: "120ms" }}>
        <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">Tools / Skills</p>
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs text-zinc-400 mb-2 font-mono">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white text-zinc-600 text-sm border border-zinc-300 rounded-full hover:border-black hover:text-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
