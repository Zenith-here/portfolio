import Link from "next/link";

export default async function HobbyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 gap-6 text-center">
      <Link
        href="/"
        className="absolute top-8 left-6 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        ← Back to Home
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h1>
      <p className="text-zinc-400 max-w-md">
        Content for this interest is currently being curated.
      </p>
    </main>
  );
}
