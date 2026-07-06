import JobCard from "./jobs/JobCard";

const jobs = [
  {
    logo: "/wird_ai_logo.jpeg",
    company: "Wird AI",
    position: "DevOps Engineer · Contract · Full-time",
    date: "Dec 2024 – Present",
    description: "Remote",
    bullets: [
      "Managed multiple AKS clusters across environments using ArgoCD and app-of-apps pattern for GitOps-based deployment.",
      "Built and maintained CI/CD pipelines in Azure DevOps and GitHub Actions, automating build, test, security scanning, and deployment.",
      "Provisioned and managed Azure infrastructure as code with Terraform, standardizing environments and enabling consistent delivery.",
      "Implemented observability and cost controls using Azure Monitor and Log Analytics.",
    ],
    technologies: ["AKS", "ArgoCD", "Azure DevOps", "GitHub Actions", "Terraform", "ACR", "Azure Monitor"],
  },
  {
    logo: "/chicksgroup_logo.jpeg",
    company: "ChicksGroup",
    position: "DevOps Engineer · Contract",
    date: "Jan 2025 – Present",
    description: "Remote",
    bullets: [
      "Led a phased Kubernetes migration from EKS → AKS → DOKS with minimal downtime, landing on multi-regional DOKS with Cloudflare geo-steering.",
      "Implemented database read/write splitting with geographic routing to NA and EU read replicas.",
      "Configured Traefik ingress and built DDoS cost-protection automation.",
      "Administered HashiCorp Vault policies for per-user secret paths and UI access.",
    ],
    technologies: ["EKS", "AKS", "DOKS", "Cloudflare", "Traefik", "ExternalDNS", "Azure DevOps", "HashiCorp Vault"],
  },
  {
    logo: "/naxmek.png",
    company: "Naxmek Business S.R.L.",
    position: "DevOps Engineer",
    date: "Nov 2024 – Feb 2026",
    description: "Santo Domingo, Dominican Republic · Remote",
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
    position: "DevOps Engineer · Full-time",
    date: "Nov 2022 – May 2024",
    description: "Las Condes, Chile · Remote",
    bullets: [
      "Transitioned thousands of manually created AWS resources into IaC with Terraform across multiple accounts.",
      "Migrated Kubernetes apps to Helm charts and adopted GitOps with ArgoCD.",
      "Automated permissions management for sensitive resources via ChatOps.",
      "Managed and optimized EKS clusters; integrated CircleCI to streamline CI/CD pipelines.",
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
    position: "Back End Developer · Full-time",
    date: "Jan 2021 – Sep 2022",
    description: "Santo Domingo, Dominican Republic · On-site",
    bullets: [
      "Implemented functionalities for a system supporting HR, planning, inventory, and shipping for one of the largest plant suppliers in North America.",
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
