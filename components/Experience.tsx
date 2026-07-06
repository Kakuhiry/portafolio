import JobCard from "./jobs/JobCard";

const jobs = [
  {
    logo: "/wird_ai_logo.jpeg",
    company: "Wird AI",
    position: "DevOps Engineer · Contract",
    date: "Dec 2024 – May 2026",
    description: "Chile · Remote",
    bullets: [
      "Owned multi-environment AKS infrastructure, managing cluster lifecycle and GitOps delivery via ArgoCD app-of-apps across dev, staging, and production.",
      "Built end-to-end CI/CD pipelines in Azure DevOps and GitHub Actions covering build, test, security scanning, and automated deployment.",
      "Codified all Azure infrastructure with Terraform, eliminating manual provisioning and enabling consistent, repeatable environment delivery.",
      "Established observability stack with Azure Monitor and Log Analytics, reducing mean time to detection for production incidents.",
    ],
    technologies: ["AKS", "ArgoCD", "Azure DevOps", "GitHub Actions", "Terraform", "ACR", "Azure Monitor"],
  },
  {
    logo: "/chicksgroup_logo.jpeg",
    company: "ChicksGroup",
    position: "DevOps Engineer · Contract",
    date: "Jan 2025 – Feb 2026",
    description: "Canada · Remote",
    bullets: [
      "Designed multi-regional infrastructure with Cloudflare geo-steering and database read/write splitting across NA and EU regions, significantly reducing latency for European users.",
      "Built a full observability stack (Grafana, Loki, Tempo) and instrumented a C# application with OpenTelemetry auto-instrumentation, capturing distributed traces, per-request metrics, and full DB query telemetry including query content and duration — enabling identification and elimination of long-running queries.",
      "Hardened ingress with Traefik and built automated DDoS cost-protection to prevent runaway cloud spend during traffic spikes.",
      "Automated user onboarding via ChatOps bots, provisioning role-based access, credentials, and internal resource permissions automatically on new team member arrival.",
      "Managed secrets lifecycle with HashiCorp Vault, enforcing per-user policies and least-privilege access across all environments.",
    ],
    technologies: ["DOKS", "Cloudflare", "Traefik", "Grafana", "Loki", "Tempo", "OpenTelemetry", "HashiCorp Vault", "ExternalDNS"],
  },
  {
    logo: "/naxmek.png",
    company: "Naxmek Business S.R.L.",
    position: "DevOps Engineer",
    date: "Nov 2024 – Feb 2026",
    description: "Santo Domingo, Dominican Republic · Remote",
    bullets: [
      "Led zero-downtime Kubernetes API version upgrades across multiple clusters, maintaining SLA for production workloads throughout.",
      "Monitored and resolved incidents across hundreds of serverless functions, improving reliability and reducing alert noise.",
      "Authored reusable Terraform modules covering all deployment stages, cutting provisioning time and enforcing infrastructure consistency.",
    ],
    technologies: ["Kubernetes", "Serverless", "Terraform", "AWS", "Python", "Bash"],
  },
  {
    logo: "/lemontech1.png",
    company: "Lemontech",
    position: "DevOps Engineer · Full-time",
    date: "Nov 2022 – May 2024",
    description: "Las Condes, Chile · Remote",
    bullets: [
      "Migrated thousands of manually provisioned AWS resources to Terraform IaC across multiple accounts, dramatically reducing drift and audit risk.",
      "Standardized Kubernetes delivery by converting all workloads to Helm charts and introducing GitOps workflows with ArgoCD.",
      "Built ChatOps-driven permissions automation for sensitive resources, replacing manual access requests with auditable self-service.",
      "Optimized EKS clusters and integrated CircleCI pipelines, cutting deployment times and improving developer feedback loops.",
    ],
    technologies: ["AWS", "EKS", "Terraform", "Helm", "ArgoCD", "CircleCI", "ChatOps"],
  },
  {
    logo: "/digitalhuman_ai_logo.jpeg",
    company: "Digital Human",
    position: "DevOps Engineer / Back-End Developer · Part-time",
    date: "Jan 2021 – Oct 2024",
    description: "Santo Domingo, Dominican Republic · Remote",
    bullets: [
      "Operated production Kubernetes workloads across Azure and GCP, managing AKS clusters and Azure DevOps pipelines for multiple products.",
      "Built parameterized CI/CD pipelines for dozens of microservices, enforcing quality gates and automated security scanning before every release.",
      "Deployed and scaled GKE clusters with Helm, configuring HPA and automated rollback to maintain availability under variable load.",
      "Implemented Prometheus and Grafana monitoring with alerting, enabling proactive incident response for auto-scaling infrastructure.",
    ],
    technologies: ["AKS", "GKE", "Azure DevOps", "Entra ID", "Helm", "Prometheus", "Grafana", "Golang"],
  },
  {
    logo: "/MediaRevolution1.jpeg",
    company: "Media Revolution SRL",
    position: "Back End Developer · Full-time",
    date: "Jan 2021 – Sep 2022",
    description: "Santo Domingo, Dominican Republic · On-site",
    bullets: [
      "Developed core backend features for an enterprise platform handling HR, planning, inventory, and logistics for one of the largest plant suppliers in North America.",
    ],
    technologies: ["TypeScript", "Type-GraphQL", "Apollo Server", "TypeORM", "Express", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-mono text-zinc-400 text-sm mb-4 tracking-widest">// work history</p>
      <h1 className="text-4xl font-black tracking-tighter text-black mb-10">Experience</h1>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-100" />
        {jobs.map((job, i) => (
          <JobCard key={job.company + job.date} {...job} index={i} />
        ))}
      </div>
    </div>
  );
}
