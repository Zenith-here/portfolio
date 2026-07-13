import Link from "next/link";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col items-center text-center gap-6">
        <span className="text-zinc-600 font-mono text-sm"></span>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Work in Progress
        </h1>
        <p className="text-zinc-400 max-w-md">
          Research papers currently being drafted and peer-reviewed. Check back
          soon.
        </p>
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
