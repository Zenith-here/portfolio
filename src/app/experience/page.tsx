import { portfolioData } from "@/data/portfolio";

export default function ExperiencePage() {
  const { experience } = portfolioData;

  return (
    <main className="min-h-screen p-6 pt-32 max-w-5xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-3 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Experience & Leadership
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Roles where I've led teams, shipped software, and taken ownership
          beyond the classroom.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-8 pl-8 border-l border-zinc-800">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-zinc-700 border border-zinc-600" />

            <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-zinc-400 text-sm">{exp.company}</p>
                </div>
                <p className="text-zinc-500 text-sm font-mono whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {exp.description.map((point, i) => (
                  <li
                    key={i}
                    className="text-zinc-400 text-sm flex gap-2 items-start"
                  >
                    <span className="text-zinc-600 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
