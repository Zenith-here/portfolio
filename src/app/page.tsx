import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import CopyEmailButton from "@/components/CopyEmailButton";
import GlowBorder from "@/components/GlowBorder";
import { BookOpen, PenTool } from "lucide-react";
import { SiX, SiGithub, SiLeetcode, SiCodeforces } from "react-icons/si";
import Image from "next/image";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  const { personal, stats, skills, blogs, publications } = portfolioData;

  return (
    <main className="min-h-screen p-6 pt-32 max-w-5xl mx-auto flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlowBorder
          className="md:col-span-2"
          innerClassName="p-8 flex flex-col justify-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Hi, I'm {personal.name}.
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-lg">
            A {personal.role} focused on scalable architectures, AI/ML
            pipelines, and building business value through code.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="h-10 flex items-center gap-2 px-5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 hover:animate-[pulse-white_1.6s_ease-in-out_infinite] transition-all"
            >
              Hire Me
            </a>
            <CopyEmailButton email={personal.contact.email} variant="outline" />
            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="h-10 flex items-center gap-2 px-5 rounded-full bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-blue-500 hover:animate-[pulse-blue_1.6s_ease-in-out_infinite] transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
              LinkedIn
            </a>
            <a
              href={personal.contact.twitter}
              target="_blank"
              rel="noreferrer"
              className="h-10 flex items-center gap-2 px-5 rounded-full bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-white hover:animate-[pulse-white_1.6s_ease-in-out_infinite] transition-all"
            >
              <SiX className="w-4 h-4 text-white" />X
            </a>
            <a
              href={personal.contact.github}
              target="_blank"
              rel="noreferrer"
              className="h-10 flex items-center gap-2 px-5 rounded-full bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-white hover:animate-[pulse-white_1.6s_ease-in-out_infinite] transition-all"
            >
              <SiGithub className="w-4 h-4 text-white" />
              GitHub
            </a>
            {publications.length > 0 && (
              <Link
                href="/publications"
                className="h-10 flex items-center gap-2 px-5 rounded-full bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-purple-500 hover:animate-[pulse-purple_1.6s_ease-in-out_infinite] transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Publications
              </Link>
            )}
            {blogs.length > 0 && (
              <Link
                href="/blogs"
                className="h-10 flex items-center gap-2 px-5 rounded-full bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-orange-500 hover:animate-[pulse-orange_1.6s_ease-in-out_infinite] transition-all"
              >
                <PenTool className="w-4 h-4" />
                Blogs
              </Link>
            )}
          </div>
        </GlowBorder>
        {/* CP Stats Card */}
        <GlowBorder innerClassName="p-8 flex flex-col justify-between">
          <h3 className="text-zinc-400 font-medium mb-6">Algorithmic Stats</h3>
          <div className="space-y-5">
            <div className="group flex justify-between items-end border-b border-zinc-800 hover:border-amber-500/40 -mx-2 px-2 pb-2 rounded-lg hover:bg-zinc-800/30 transition-colors">
              <p className="flex items-center gap-2 text-sm text-zinc-500">
                <Image
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                  alt="LeetCode"
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                LeetCode
              </p>
              <p className="text-2xl font-bold text-white">
                {stats.leetcodeRating}
              </p>
            </div>
            <div className="group flex justify-between items-end border-b border-zinc-800 hover:border-sky-500/40 -mx-2 px-2 pb-2 rounded-lg hover:bg-zinc-800/30 transition-colors">
              <p className="flex items-center gap-2 text-sm text-zinc-500">
                <Image
                  src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png"
                  alt="Codeforces"
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                Codeforces
              </p>
              <p className="text-2xl font-bold text-white">
                {stats.codeforcesRating}
              </p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-sm text-zinc-500">Problems Solved</p>
              <p className="text-xl font-bold text-white">
                {stats.problemsSolved}
              </p>
            </div>
          </div>
        </GlowBorder>{" "}
      </div>

      {/* Spacer */}
      <div className="h-12 border-l border-zinc-800 ml-8 md:ml-12"></div>

      {/* Section: Technical Skills */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {Object.entries(skills).map(([category, items]) => (
            <GlowBorder
              key={category}
              rounded="rounded-2xl"
              innerClassName="p-6"
            >
              <h3 className="text-zinc-400 font-medium text-sm mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlowBorder>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 border-l border-zinc-800 ml-8 md:ml-12"></div>

      {/* Section:Projects */}
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Featured Engineering
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            View All Projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 items-stretch">
          {portfolioData.projects
            .filter((p) => p.featured)
            .slice(0, 3)
            .map((project, idx) => (
              <GlowBorder
                key={idx}
                rounded="rounded-2xl"
                innerClassName="h-full p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-md whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </GlowBorder>
            ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 border-l border-zinc-800 ml-8 md:ml-12"></div>

      {/* Section: Experience */}
      <section className="flex flex-col gap-6 mb-12">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <Link
            href="/experience"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            View Full Timeline →
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {portfolioData.experience.slice(0, 3).map((exp, idx) => (
            <GlowBorder
              key={idx}
              rounded="rounded-2xl"
              innerClassName="p-6 flex flex-col sm:flex-row justify-between sm:items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-zinc-400 text-sm">{exp.company}</p>
              </div>
              <p className="text-zinc-500 text-sm mt-2 sm:mt-0 font-mono">
                {exp.duration}
              </p>
            </GlowBorder>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-12 border-l border-zinc-800 ml-8 md:ml-12"></div>

      {/* Section: Contact */}
      <section id="contact" className="flex flex-col gap-6 mb-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Have a project in mind or just want to say hi? Drop a message below
            or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/maqrypvr"
            method="POST"
            className="lg:col-span-2 bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-zinc-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-zinc-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me a bit about what you're looking to build..."
                required
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 text-sm resize-none focus:outline-none focus:border-zinc-600 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="self-start bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors"
            >
              Send Message
            </button>
          </form>
          {/* Connect Section */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-4">
            <h3 className="text-zinc-400 font-medium mb-2">Connect</h3>
            <div className="flex flex-col gap-3 w-full">
              <CopyEmailButton email={personal.contact.email} variant="grid" />

              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-blue-500 hover:animate-[pulse-blue_1.6s_ease-in-out_infinite] transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0A66C2] shrink-0" />
                LinkedIn
              </a>
              <a
                href={personal.contact.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-white hover:animate-[pulse-white_1.6s_ease-in-out_infinite] transition-all"
              >
                <SiX className="w-4 h-4 text-white shrink-0" />X
              </a>
              <a
                href={personal.contact.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-white hover:animate-[pulse-white_1.6s_ease-in-out_infinite] transition-all"
              >
                <SiGithub className="w-4 h-4 text-white shrink-0" />
                GitHub
              </a>
              <a
                href={personal.contact.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-orange-500 hover:animate-[pulse-orange_1.6s_ease-in-out_infinite] transition-all"
              >
                <Image
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                  alt="LeetCode"
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                LeetCode
              </a>
              <a
                href={personal.contact.codeforces}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-blue-500 hover:animate-[pulse-blue_1.6s_ease-in-out_infinite] transition-all"
              >
                <Image
                  src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png"
                  alt="Codeforces"
                  width={16}
                  height={16}
                  className="shrink-0"
                />
                Codeforces
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer: The "Vibe" / Hobbies Card */}
      <div className="border-t border-zinc-800 pt-6">
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between transition-all hover:border-zinc-700">
          <p className="text-zinc-500 text-sm md:text-base">
            When the laptop closes:
            {personal.hobbies.map((hobby, index) => (
              <span key={hobby.slug} className="ml-2">
                <Link
                  href={`/hobbies/${hobby.slug}`}
                  className="text-zinc-300 hover:text-white hover:underline hover:[text-shadow:0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200"
                >
                  {hobby.name}
                </Link>
                {index < personal.hobbies.length - 1 ? (
                  <span className="text-zinc-700"> • </span>
                ) : (
                  ""
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </main>
  );
}
