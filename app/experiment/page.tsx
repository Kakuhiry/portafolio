"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Tab = "about" | "experience" | "education";

const skillGroups = [
  { label: "Clouds", skills: ["Azure", "AWS", "GCP", "DigitalOcean"] },
  { label: "Languages", skills: ["Golang", "Python", "JavaScript", "TypeScript", "SQL"] },
  { label: "Orchestration & IaC", skills: ["Kubernetes (AKS, EKS, GKE, DOKS, k3s)", "Helm", "Terraform", "ArgoCD", "FluxCD"] },
  { label: "CI/CD & Tools", skills: ["Azure DevOps", "GitHub Actions", "Entra ID", "Docker", "Linux", "Git", "HashiCorp Vault", "Cloudflare", "Traefik"] },
  { label: "Observability", skills: ["Azure Monitor", "Prometheus", "Grafana", "Loki"] },
];

const socials = [
  { img: "/logo--linkedin.svg", label: "linkedin.com/in/egbpk", href: "https://www.linkedin.com/in/egbpk/" },
  { img: "/logo--github.svg", label: "Kakuhiry", href: "https://www.github.com/Kakuhiry" },
  { img: "/email.svg", label: "gilbertbatista.k@gmail.com", href: "mailto:gilbertbatista.k@gmail.com" },
  { img: "/phone.svg", label: "+1 (849) 621-8895", href: "tel:+18496218895" },
];

const jobs = [
  {
    initials: "WA",
    company: "Wird AI",
    position: "DevOps Engineer · Contract",
    date: "Dec 2024 – Present",
    location: "Remote",
    bullets: [
      "Managed multiple AKS clusters using ArgoCD and app-of-apps pattern for GitOps-based deployment.",
      "Built and maintained CI/CD pipelines in Azure DevOps and GitHub Actions with security scanning.",
      "Provisioned Azure infrastructure as code with Terraform, standardizing environments.",
      "Implemented observability and cost controls using Azure Monitor and Log Analytics.",
    ],
    technologies: ["AKS", "ArgoCD", "Azure DevOps", "GitHub Actions", "Terraform", "ACR", "Azure Monitor"],
  },
  {
    initials: "CG",
    company: "ChicksGroup",
    position: "DevOps Engineer · Contract",
    date: "Jan 2025 – Present",
    location: "Remote",
    bullets: [
      "Led a phased Kubernetes migration from EKS → AKS → DOKS with minimal downtime, landing on multi-regional DOKS with Cloudflare geo-steering.",
      "Implemented database read/write splitting with geographic routing to NA and EU read replicas.",
      "Configured Traefik ingress and built DDoS cost-protection automation.",
      "Administered HashiCorp Vault policies for per-user secret paths and UI access.",
    ],
    technologies: ["EKS", "AKS", "DOKS", "Cloudflare", "Traefik", "HashiCorp Vault", "GitHub Actions"],
  },
  {
    logo: "/naxmek.png",
    company: "Naxmek Business S.R.L.",
    position: "DevOps Engineer",
    date: "Nov 2024 – Feb 2026",
    location: "Santo Domingo · Remote",
    bullets: [
      "Upgraded API versions across multiple Kubernetes clusters while maintaining uptime of critical applications.",
      "Monitored and resolved issues across hundreds of serverless functions.",
      "Built multiple Terraform modules to manage resources at each stage of development.",
    ],
    technologies: ["Kubernetes", "Serverless", "Terraform", "AWS", "Python", "Bash"],
  },
  {
    logo: "/lemontech1.png",
    company: "Lemontech",
    position: "DevOps Engineer",
    date: "Nov 2022 – May 2024",
    location: "Las Condes, Chile · Remote",
    bullets: [
      "Transitioned thousands of manually created AWS resources into IaC with Terraform across multiple accounts.",
      "Migrated Kubernetes apps to Helm charts and adopted GitOps with ArgoCD.",
      "Automated permissions management for sensitive resources via ChatOps.",
      "Managed and optimized EKS clusters; integrated CircleCI to reduce deployment times.",
    ],
    technologies: ["AWS", "EKS", "Terraform", "Helm", "ArgoCD", "CircleCI", "ChatOps"],
  },
  {
    logo: "/digitalhuman_ai_logo.jpeg",
    company: "Digital Human",
    position: "DevOps Engineer / Back-End Developer",
    date: "Jan 2021 – Oct 2024",
    location: "Santo Domingo · Remote",
    bullets: [
      "Operated multi-cloud Kubernetes workloads across Azure and GCP, running AKS clusters and Azure DevOps pipelines.",
      "Developed dynamic CI/CD pipelines for dozens of microservices with quality gates and security scanning.",
      "Deployed scalable GKE clusters using Helm charts with automated scaling and rollback.",
      "Implemented Prometheus and Grafana monitoring for fault-tolerant auto-scaling infrastructure.",
    ],
    technologies: ["AKS", "GKE", "Azure DevOps", "Entra ID", "Helm", "Prometheus", "Grafana", "Golang"],
  },
  {
    logo: "/MediaRevolution1.jpeg",
    company: "Media Revolution SRL",
    position: "Back End Developer",
    date: "Jan 2021 – Sep 2022",
    location: "Santo Domingo · On-site",
    bullets: [
      "Implemented functionalities for a system supporting HR, planning, inventory, and shipping operations for one of the largest plant suppliers in North America.",
    ],
    technologies: ["TypeScript", "Type-GraphQL", "Apollo Server", "TypeORM", "Express", "PostgreSQL"],
  },
];

function LogoBox({ logo, initials, company }: { logo?: string; initials?: string; company: string }) {
  return (
    <div className="w-12 h-12 shrink-0 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 flex items-center justify-center">
      {logo ? (
        <div className="relative w-full h-full">
          <Image src={logo} alt={company} fill className="object-contain p-1" />
        </div>
      ) : (
        <span className="text-cyan-400 font-mono font-bold text-sm">{initials ?? company.slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
}

function AboutTab() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-mono text-cyan-400 text-sm mb-4 tracking-widest">// devops engineer</p>
      <h1 className="text-7xl font-black tracking-tighter text-white mb-1 leading-none">
        Gilbert
      </h1>
      <h1 className="text-7xl font-black tracking-tighter text-zinc-600 mb-10 leading-none">
        Batista.
      </h1>

      <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl border-l-2 border-cyan-400 pl-4">
        DevOps engineer with 5+ years building and operating cloud-native infrastructure.
        Deep Kubernetes, Terraform, and GitOps expertise spanning Azure, AWS, GCP, and
        DigitalOcean. Strong track record in multi-cluster operations, CI/CD automation,
        and building cost-efficient, highly available platforms.
      </p>

      <div className="flex flex-col gap-3 mb-16">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="flex items-center gap-3 text-zinc-500 hover:text-cyan-400 transition-colors group w-fit"
          >
            <Image src={s.img} alt="" width={16} height={16} className="invert opacity-40 group-hover:opacity-100 transition-opacity" />
            <span className="font-mono text-sm">{s.label}</span>
          </a>
        ))}
      </div>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="font-mono text-xs text-cyan-400 mb-3 tracking-widest">// {group.label.toLowerCase()}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-zinc-900 text-zinc-300 text-xs font-mono border border-zinc-800 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceTab() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-mono text-cyan-400 text-sm mb-4 tracking-widest">// work history</p>
      <h1 className="text-4xl font-black tracking-tighter text-white mb-10">Experience</h1>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800" />
        {jobs.map((job) => (
          <div key={job.company + job.date} className="relative pl-16 pb-10">
            <div className="absolute left-0 top-1">
              <LogoBox {...job} />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h2 className="text-white font-bold text-lg leading-tight">{job.company}</h2>
                <p className="text-zinc-500 text-sm">{job.position}</p>
                <p className="text-zinc-600 text-xs font-mono">{job.location}</p>
              </div>
              <span className="font-mono text-xs text-cyan-400 shrink-0 mt-0.5">{job.date}</span>
            </div>
            <ul className="space-y-1.5 mb-4">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-zinc-400 text-sm leading-relaxed">
                  <span className="text-zinc-700 shrink-0 mt-1">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {job.technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-zinc-900 text-zinc-500 text-xs font-mono border border-zinc-800 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationTab() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-mono text-cyan-400 text-sm mb-4 tracking-widest">// academic background</p>
      <h1 className="text-4xl font-black tracking-tighter text-white mb-10">Education</h1>

      <div className="relative pl-16">
        <div className="absolute left-0 top-1">
          <div className="w-12 h-12 bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image src="/logo-intec-primario.jpg" alt="INTEC" fill className="object-contain p-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h2 className="text-white font-bold text-lg">INTEC University</h2>
            <p className="text-zinc-500 text-sm">Bachelor&apos;s Degree in Software Engineering</p>
          </div>
          <span className="font-mono text-xs text-cyan-400 shrink-0">Nov 2017 – Jul 2022</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Instituto Tecnológico de Santo Domingo — considered the best institute of technology
          in the Dominican Republic.
        </p>
      </div>
    </div>
  );
}

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "about_me" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
];

export default function Experiment() {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-0 flex items-center justify-between">
        <nav className="flex gap-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 font-mono text-sm rounded-lg transition-colors cursor-pointer ${
                tab === t.id
                  ? "text-cyan-400 bg-zinc-900"
                  : "text-zinc-600 hover:text-zinc-300"
              }`}
            >
              {tab === t.id ? `[${t.label}]` : t.label}
            </button>
          ))}
        </nav>
        <Link href="/" className="font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors">
          ← back to current
        </Link>
      </div>

      {tab === "about" && <AboutTab />}
      {tab === "experience" && <ExperienceTab />}
      {tab === "education" && <EducationTab />}
    </main>
  );
}
