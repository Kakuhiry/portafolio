"use client";

export default function CoverLetter() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-12 print:py-0 print:px-0 font-sans text-black bg-white">

      {/* Actions — hidden when printing */}
      <div className="flex justify-between items-center mb-8 print:hidden">
        <a href="/" className="text-sm text-zinc-400 hover:text-black transition-colors">← Back</a>
        <button
          onClick={() => window.print()}
          className="px-5 py-2 border border-black text-sm font-medium rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          Print / Save as PDF
        </button>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-black tracking-tight mb-1">Gilbert Batista</h1>
        <p className="text-zinc-500 text-sm mb-3">DevOps Engineer</p>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
          <a href="mailto:gilbertbatista.k@gmail.com" className="hover:text-black">gilbertbatista.k@gmail.com</a>
          <span>+1 (849) 621-8895</span>
          <a href="https://www.linkedin.com/in/egbpk/" className="hover:text-black">linkedin.com/in/egbpk</a>
          <a href="https://gbklabs.com" className="hover:text-black">gbklabs.com</a>
        </div>
      </div>

      {/* Letter */}
      <div className="space-y-5 text-zinc-700 leading-relaxed text-sm">
        <p>Dear Hiring Manager,</p>

        <p>
          I&apos;m a DevOps engineer with over five years of experience building and operating
          cloud-native infrastructure at scale. I&apos;m reaching out because I&apos;m looking for
          my next contract or full-time role — ideally one where the infrastructure problems are
          real, the team moves fast, and reliability actually matters.
        </p>

        <p>
          Most recently I ran parallel contracts at Wird AI and ChicksGroup. At ChicksGroup I
          designed a multi-regional architecture with Cloudflare geo-steering, implemented
          database read/write splitting across NA and EU regions, and built a full observability
          stack — Grafana, Loki, Tempo, and OpenTelemetry auto-instrumentation on a C# application
          that captured distributed traces and DB query-level telemetry. That last part is the kind
          of depth that actually helps you find and fix performance problems rather than just know
          they exist. At Wird AI I owned the full AKS cluster lifecycle, codified all Azure
          infrastructure in Terraform, and established end-to-end GitOps delivery via ArgoCD across
          dev, staging, and production environments.
        </p>

        <p>
          Before that, at Lemontech I migrated thousands of manually provisioned AWS resources into
          Terraform IaC and introduced Helm-based GitOps with ArgoCD — both from scratch, across a
          live multi-account production environment. I also built ChatOps-driven access automation
          that replaced manual permissions requests with an auditable self-service workflow.
        </p>

        <p>
          I&apos;ve worked remotely across time zones for my entire career. I care about async
          communication, clear documentation, and the kind of operational hygiene that makes on-call
          less painful for everyone on the team.
        </p>

        <p>
          Outside of work I run a production-grade k3s homelab — multiple nodes including a
          Raspberry Pi control plane, a dedicated Longhorn storage node, and an Intel NUC handling
          GPU workloads. Everything is managed through ArgoCD and version-controlled in a Helm
          charts repository. Public services are exposed via Cloudflare Tunnels with Zero Trust
          authentication. It keeps me close to the infrastructure problems that matter and gives me
          a real environment to experiment in before bringing ideas to production.
        </p>

        <p>
          I&apos;d welcome a conversation about how I can contribute to your team.
        </p>

        <div className="pt-4">
          <p>Gilbert Batista</p>
          <p className="text-zinc-400 text-xs mt-1">
            gilbertbatista.k@gmail.com · +1 (849) 621-8895 · linkedin.com/in/egbpk · gbklabs.com
          </p>
        </div>
      </div>

    </div>
  );
}
