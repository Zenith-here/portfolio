import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function FreelancePage() {
  const { freelance } = portfolioData;
  const completedProjects = freelance.filter((project) => project.liveLink);

  return (
    <main className="min-h-screen p-6 pt-32 max-w-5xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-3 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Freelance & Client Work
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Delivering production-ready software that drives measurable business
          outcomes for clients.
        </p>
      </div>

      {completedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono whitespace-nowrap mt-1">
                    {project.duration}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-full border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.liveLink && (
                <div className="flex gap-4 pt-2 border-t border-zinc-800">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white hover:underline mt-3"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center gap-6 bg-zinc-900/30 border border-zinc-800 rounded-3xl py-24 px-6">
          <p className="text-zinc-300 text-xl md:text-2xl font-medium max-w-xl">
            Available for freelance opportunities. Let&apos;s build something
            that drives business value.
          </p>
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </main>
  );
}
