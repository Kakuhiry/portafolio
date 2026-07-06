import Image from "next/image";

export default function Education() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-mono text-zinc-400 text-sm mb-4 tracking-widest">// academic background</p>
      <h1 className="text-4xl font-black tracking-tighter text-black mb-10">Education</h1>

      <div className="relative pl-16">
        <div className="absolute left-0 top-1">
          <div className="w-12 h-12 bg-zinc-50 rounded-lg border border-zinc-200 overflow-hidden flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image src="/logo-intec-primario.jpg" alt="INTEC" fill className="object-contain p-1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h2 className="text-black font-bold text-lg">INTEC University</h2>
            <p className="text-zinc-500 text-sm">Bachelor&apos;s Degree in Software Engineering</p>
          </div>
          <span className="font-mono text-xs text-zinc-400 shrink-0">Nov 2017 – Jul 2022</span>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Instituto Tecnológico de Santo Domingo — considered the best institute of technology
          in the Dominican Republic.
        </p>
      </div>
    </div>
  );
}
