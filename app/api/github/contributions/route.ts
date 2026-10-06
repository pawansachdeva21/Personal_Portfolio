import { NextResponse } from "next/server";
import { GITHUB_USERNAME } from "@/app/lib/constants";

const ONE_HOUR = 60 * 60;
const FIRST_YEAR = 2015;

type Contribution = { date: string; count: number; level: number };

export async function GET(req: Request) {
  const year = Number(new URL(req.url).searchParams.get("year"));
  if (
    !Number.isInteger(year) ||
    year < FIRST_YEAR ||
    year > new Date().getFullYear()
  ) {
    return NextResponse.json({ error: "Invalid year" }, { status: 400 });
  }

  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`,
    { next: { revalidate: ONE_HOUR } }
  );
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 502 }
    );
  }

  const data: { contributions: Contribution[] } = await response.json();
  const contributions = data.contributions.map(({ date, count, level }) => ({
    date,
    count,
    level,
  }));

  return NextResponse.json(contributions, {
    headers: {
      "Cache-Control": `public, s-maxage=${ONE_HOUR}, stale-while-revalidate=86400`,
    },
  });
}
