import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <main className="min-h-screen p-6 pt-32 max-w-5xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-3 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Engineering Projects
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          A collection of full-stack apps, AI/ML pipelines, and tools I've built
          — from idea to deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
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
            <div className="flex gap-4 pt-2 border-t border-zinc-800">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white hover:underline mt-3"
                >
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white hover:underline mt-3"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
