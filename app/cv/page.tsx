"use client";

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12 print:py-0 print:px-0 font-sans text-black bg-white">

      {/* Actions — hidden when printing */}
      <div className="flex justify-between items-center mb-6 print:hidden">
        <a href="/" className="text-sm text-zinc-400 hover:text-black transition-colors">← Back</a>
        <button
          onClick={() => window.print()}
          className="px-5 py-2 border border-black text-sm font-medium rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          Print / Save as PDF
        </button>
      </div>

      {/* Header */}
      <div className="mb-6 border-b border-zinc-200 pb-6">
        <h1 className="text-3xl font-black tracking-tight mb-1">Gilbert Batista</h1>
        <p className="text-zinc-500 text-sm mb-3">DevOps Engineer</p>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
          <a href="mailto:gilbertbatista.k@gmail.com" className="hover:text-black">gilbertbatista.k@gmail.com</a>
          <span>+1 (849) 621-8895</span>
          <a href="https://www.linkedin.com/in/egbpk/" className="hover:text-black">linkedin.com/in/egbpk</a>
          <a href="https://gbklabs.com" className="hover:text-black">gbklabs.com</a>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">Summary</h2>
        <p className="text-sm text-zinc-600 leading-relaxed">
          DevOps engineer with 5+ years building and operating cloud-native infrastructure.
          Deep expertise in Kubernetes, Terraform, and GitOps across multiple cloud providers.
          Focused on scalable platforms, CI/CD automation, and keeping systems reliable and cost-efficient.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Experience</h2>
        <div className="space-y-5">

          {[
            {
              company: "Wird AI", location: "Chile · Remote",
              position: "DevOps Engineer · Contract", date: "Dec 2024 – May 2026",
              bullets: [
                "Owned multi-environment AKS infrastructure, managing cluster lifecycle and GitOps delivery via ArgoCD app-of-apps across dev, staging, and production.",
                "Built end-to-end CI/CD pipelines in Azure DevOps and GitHub Actions covering build, test, security scanning, and automated deployment.",
                "Codified all Azure infrastructure with Terraform, eliminating manual provisioning and enabling consistent, repeatable environment delivery.",
                "Established observability stack with Azure Monitor and Log Analytics, reducing mean time to detection for production incidents.",
              ],
            },
            {
              company: "ChicksGroup", location: "Canada · Remote",
              position: "DevOps Engineer · Contract", date: "Jan 2025 – Feb 2026",
              bullets: [
                "Designed multi-regional infrastructure with Cloudflare geo-steering and database read/write splitting across NA and EU regions, significantly reducing latency for European users.",
                "Built a full observability stack (Grafana, Loki, Tempo) and instrumented a C# application with OpenTelemetry auto-instrumentation, capturing distributed traces, per-request metrics, and full DB query telemetry.",
                "Hardened ingress with Traefik and built automated DDoS cost-protection to prevent runaway cloud spend during traffic spikes.",
                "Automated user onboarding via ChatOps bots, provisioning role-based access, credentials, and internal resource permissions automatically on new team member arrival.",
                "Managed secrets lifecycle with HashiCorp Vault, enforcing per-user policies and least-privilege access across all environments.",
              ],
            },
            {
              company: "Naxmek Business S.R.L.", location: "Santo Domingo, Dominican Republic · Remote",
              position: "DevOps Engineer", date: "Nov 2024 – Feb 2026",
              bullets: [
                "Led zero-downtime Kubernetes API version upgrades across multiple clusters, maintaining SLA for production workloads throughout.",
                "Monitored and resolved incidents across hundreds of serverless functions, improving reliability and reducing alert noise.",
                "Authored reusable Terraform modules covering all deployment stages, cutting provisioning time and enforcing infrastructure consistency.",
              ],
            },
            {
              company: "Lemontech", location: "Las Condes, Chile · Remote",
              position: "DevOps Engineer · Full-time", date: "Nov 2022 – May 2024",
              bullets: [
                "Migrated thousands of manually provisioned AWS resources to Terraform IaC across multiple accounts, dramatically reducing drift and audit risk.",
                "Standardized Kubernetes delivery by converting all workloads to Helm charts and introducing GitOps workflows with ArgoCD.",
                "Built ChatOps-driven permissions automation for sensitive resources, replacing manual access requests with auditable self-service.",
                "Optimized EKS clusters and integrated CircleCI pipelines, cutting deployment times and improving developer feedback loops.",
              ],
            },
            {
              company: "Digital Human", location: "Santo Domingo, Dominican Republic · Remote",
              position: "DevOps Engineer / Back-End Developer · Part-time", date: "Jan 2021 – Oct 2024",
              bullets: [
                "Operated production Kubernetes workloads across Azure and GCP, managing AKS clusters and Azure DevOps pipelines for multiple products.",
                "Built parameterized CI/CD pipelines for dozens of microservices, enforcing quality gates and automated security scanning before every release.",
                "Deployed and scaled GKE clusters with Helm, configuring HPA and automated rollback to maintain availability under variable load.",
                "Implemented Prometheus and Grafana monitoring with alerting, enabling proactive incident response for auto-scaling infrastructure.",
              ],
            },
            {
              company: "Media Revolution SRL", location: "Santo Domingo, Dominican Republic · On-site",
              position: "Back End Developer · Full-time", date: "Jan 2021 – Sep 2022",
              bullets: [
                "Developed core backend features for an enterprise platform handling HR, planning, inventory, and logistics for one of the largest plant suppliers in North America.",
              ],
            },
          ].map((job) => (
            <div key={job.company + job.date}>
              <div className="flex justify-between items-start mb-0.5">
                <div>
                  <span className="font-semibold text-sm">{job.company}</span>
                  <span className="text-zinc-400 text-xs ml-2">{job.location}</span>
                </div>
                <span className="text-xs text-zinc-400 font-mono shrink-0 ml-4">{job.date}</span>
              </div>
              <p className="text-xs text-zinc-500 mb-1.5">{job.position}</p>
              <ul className="space-y-0.5">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-xs text-zinc-600 leading-relaxed">
                    <span className="text-zinc-300 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Education</h2>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-semibold text-sm">INTEC University</p>
            <p className="text-xs text-zinc-500">Bachelor&apos;s Degree in Software Engineering</p>
            <p className="text-xs text-zinc-400">Instituto Tecnológico de Santo Domingo — leading technology university in the Dominican Republic.</p>
          </div>
          <span className="text-xs text-zinc-400 font-mono shrink-0 ml-4">Nov 2017 – Jul 2022</span>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">Skills</h2>
        <div className="space-y-1.5 text-xs text-zinc-600">
          <div><span className="text-zinc-400">Clouds: </span>Azure, AWS, GCP, DigitalOcean</div>
          <div><span className="text-zinc-400">Languages: </span>Golang, Python, JavaScript, TypeScript, SQL</div>
          <div><span className="text-zinc-400">Orchestration & IaC: </span>Kubernetes, Helm, Terraform, ArgoCD, FluxCD</div>
          <div><span className="text-zinc-400">CI/CD & Tools: </span>Azure DevOps, GitHub Actions, Entra ID, Docker, Linux, Git, HashiCorp Vault, Cloudflare, Traefik</div>
          <div><span className="text-zinc-400">Observability: </span>Azure Monitor, Prometheus, Grafana, Loki, Tempo, OpenTelemetry</div>
        </div>
      </section>

    </div>
  );
}
