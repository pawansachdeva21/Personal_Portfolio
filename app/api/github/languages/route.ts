import { NextResponse } from "next/server";
import { GITHUB_USERNAME } from "@/app/lib/constants";

const ONE_HOUR = 60 * 60;
const MAX_LANGUAGES = 6;

export async function GET() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: ONE_HOUR },
    }
  );
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 502 }
    );
  }

  const repos: { language: string | null }[] = await response.json();

  const counts = new Map<string, number>();
  for (const { language } of repos) {
    if (language) counts.set(language, (counts.get(language) ?? 0) + 1);
  }

  const totalRepos = [...counts.values()].reduce((sum, n) => sum + n, 0);
  const languages = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_LANGUAGES)
    .map(([name, count]) => ({
      name,
      count,
      percentage: ((count / totalRepos) * 100).toFixed(1),
    }));

  return NextResponse.json(languages, {
    headers: {
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=86400`,
    },
  });
}
