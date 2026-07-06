const projects = [
  {
    name: "Homelab",
    status: "Active",
    repo: "https://github.com/Kakuhiry/homelab-charts",
    description:
      "Production-grade multi-node k3s cluster managed entirely through GitOps. Every workload, configuration, and infrastructure change is a pull request against a single Helm charts repository tracked in ArgoCD.",
    nodes: [
      { name: "Raspberry Pi", role: "Control Plane", detail: "Tainted · scheduling restricted" },
      { name: "Raspberry Pi", role: "Storage Node", detail: "2× 2TB NVMe · Longhorn" },
      { name: "Intel NUC", role: "Primary Worker", detail: "2TB · GPU · heavy workloads" },
      { name: "Lenovo ThinkPad", role: "Secondary Worker", detail: "General compute" },
    ],
    highlights: [
      "All cluster state lives in the homelab-charts Git repository — ArgoCD reconciles any drift automatically.",
      "Longhorn distributed storage across 2TB on the NUC and 4TB (2× NVMe) on the dedicated storage Pi.",
      "GPU workloads (Jellyfin) scheduled on the NUC via node-feature-discovery and device plugin controllers.",
      "Public services exposed through Cloudflare Tunnels with Zero Trust auth — Google SSO is validated by Cloudflare before traffic reaches the cluster, with per-device whitelisting for trusted clients.",
      "Full internal PKI via cert-manager — all services, internal or external, get valid TLS certificates issued from the cluster.",
      "Sensitive services kept off the public internet entirely via VPN-only access.",
    ],
    technologies: ["k3s", "ArgoCD", "Longhorn", "Helm", "Cloudflare Tunnels", "Zero Trust", "cert-manager", "node-feature-discovery", "Syncthing", "Jellyfin"],
  },
];

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-mono text-zinc-400 text-sm mb-4 tracking-widest">// personal projects</p>
      <h1 className="text-4xl font-black tracking-tighter text-black mb-10">Projects</h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.name}>
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-black tracking-tight text-black">{project.name}</h2>
              <span className="px-2 py-0.5 text-xs font-mono border border-black rounded-full text-black">
                {project.status}
              </span>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto font-mono text-xs text-zinc-400 hover:text-black transition-colors"
              >
                homelab-charts ↗
              </a>
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed mb-6">{project.description}</p>

            {/* Node grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {project.nodes.map((node) => (
                <div key={node.role} className="border border-zinc-200 rounded-lg p-3">
                  <p className="text-xs font-mono text-zinc-400 mb-1">{node.role}</p>
                  <p className="text-sm font-semibold text-black leading-tight">{node.name}</p>
                  <p className="text-xs text-zinc-400 mt-1 leading-tight">{node.detail}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-zinc-500 text-sm leading-relaxed">
                  <span className="text-zinc-300 shrink-0 mt-1">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-white text-zinc-400 text-xs font-mono border border-zinc-200 rounded">
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
