"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Activity,
  ExternalLink,
  Loader2,
  Flame,
  Calendar,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { GITHUB_URL } from "@/app/lib/constants";

interface Day {
  key: string;
  date: Date;
  count: number;
  level: number;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CONTRIBUTION_COLORS: Record<number, string> = {
  0: "bg-gray-200 dark:bg-gray-800",
  1: "bg-[#9be9a8] dark:bg-[#0e4429]",
  2: "bg-[#40c463] dark:bg-[#006d32]",
  3: "bg-[#30a14e] dark:bg-[#26a641]",
  4: "bg-[#216e39] dark:bg-[#39d353]",
};

const getContributionColor = (level: number) =>
  CONTRIBUTION_COLORS[level] || CONTRIBUTION_COLORS[0];

const pad = (n: number) => String(n).padStart(2, "0");

// YYYY-MM-DD in local time
const toKey = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

// Parse YYYY-MM-DD as a local date (new Date("YYYY-MM-DD") would be UTC)
const fromKey = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

function calculateStreaks(days: Day[]) {
  let longest = 0;
  let run = 0;
  for (const day of days) {
    run = day.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }

  const countByKey = new Map(days.map((d) => [d.key, d.count]));
  const cursor = new Date();
  // A streak is still alive if today has no contributions yet
  if (!countByKey.get(toKey(cursor))) cursor.setDate(cursor.getDate() - 1);

  let current = 0;
  while ((countByKey.get(toKey(cursor)) ?? 0) > 0) {
    current++;
    cursor.setDate(cursor.getDate() - 1);
  }

  return { current, longest };
}

// Columns of 7 slots (Sun..Sat); slots outside the year stay empty
function groupByWeek(days: Day[]) {
  const weeks: (Day | undefined)[][] = [];
  let week: (Day | undefined)[] = new Array(7).fill(undefined);

  days.forEach((day, index) => {
    const weekday = day.date.getDay();
    week[weekday] = day;
    if (weekday === 6 || index === days.length - 1) {
      weeks.push(week);
      week = new Array(7).fill(undefined);
    }
  });

  return weeks;
}

export function CombinedActivityTracker() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, i) => currentYear - i);

  const [days, setDays] = useState<Day[]>([]);
  const [selectedYear, setSelectedYear] = useState(currentYear - 1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    fetch(`/api/github/contributions?year=${selectedYear}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub data");
        return res.json();
      })
      .then((data: { date: string; count: number; level: number }[]) => {
        setDays(
          data.map((c) => ({
            key: c.date,
            date: fromKey(c.date),
            count: c.count,
            level: c.level,
          }))
        );
        setIsLoading(false);
      })
      .catch((err) => {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Unknown error");
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [selectedYear]);

  const totalContributions = useMemo(
    () => days.reduce((sum, day) => sum + day.count, 0),
    [days]
  );
  const streaks = useMemo(() => calculateStreaks(days), [days]);
  const weeks = useMemo(() => groupByWeek(days), [days]);

  if (isLoading) {
    return (
      <div className="h-32 flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-emerald-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <p className="text-sm text-red-600 dark:text-red-400">
          Failed to load activities: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Year Selection and Stats */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Activity size={18} className="text-emerald-500" />
            <h4 className="text-lg font-medium text-gray-900 dark:text-white">
              {totalContributions} contributions
            </h4>
          </div>

          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="appearance-none bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-900 dark:text-white hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <Calendar
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          GitHub <ExternalLink size={14} />
        </a>
      </div>

      {/* Streak Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Flame
              size={18}
              className="text-emerald-600 dark:text-emerald-400"
            />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Current Streak
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {streaks.current}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              days
            </span>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border border-orange-200 dark:border-orange-800/50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Flame size={18} className="text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Longest Streak
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              {streaks.longest}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              days
            </span>
          </div>
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="inline-flex flex-col gap-1 p-4 bg-gray-50 dark:bg-gray-900/30 rounded-lg border border-gray-200 dark:border-gray-800 min-w-max">
          <div className="flex gap-1 mb-2">
            <div className="w-8"></div>
            {MONTHS.map((month) => (
              <div
                key={month}
                className="text-xs text-gray-500 dark:text-gray-400 w-full text-center px-4"
              >
                {month}
              </div>
            ))}
          </div>

          <div className="flex gap-1">
            <div className="flex flex-col gap-1 justify-around pr-2">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="text-xs text-gray-500 dark:text-gray-400 h-3 flex items-center"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="flex gap-1">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1">
                  {week.map((day, dayIdx) => (
                    <div
                      key={dayIdx}
                      onClick={
                        day && day.count > 0
                          ? () => setSelectedDay(day)
                          : undefined
                      }
                      className={`w-3 h-3 rounded-xs ${
                        day ? getContributionColor(day.level) : "bg-transparent"
                      } hover:ring-2 hover:ring-emerald-500 transition-all ${
                        day && day.count > 0 ? "cursor-pointer" : ""
                      }`}
                      title={
                        day
                          ? `${day.count} contributions on ${day.date.toDateString()}`
                          : ""
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
            />
          ))}
        </div>
        <span>More</span>
      </div>

      {selectedDay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setSelectedDay(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4 border border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Activity on{" "}
                {selectedDay.date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <button
                onClick={() => setSelectedDay(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-2">
                <FaGithub />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Contributed on GitHub
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {selectedDay.count}{" "}
                {selectedDay.count === 1 ? "contribution" : "contributions"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
