import { SectionHeader } from "@/app/components/section-header";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";
import { Activity, ExternalLink, Github } from "lucide-react";
import { CombinedActivityTracker } from "../activity/combined-activity-tracker";
import { GitHubLanguages } from "../activity/github-languages";
import { GITHUB_URL } from "@/app/lib/constants";

export function ActivitySection() {
  return (
    <section
      id="activity"
      className="w-full flex flex-col items-start justify-start gap-y-8"
    >
      <SectionHeader
        eyebrow="Activity Tracker"
        title={
          <>
            My Coding{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              Journey
            </span>
          </>
        }
        description={
          <>
            Track my GitHub activities, streaks, and programming languages
            usage.
          </>
        }
      />

      <SpotlightCard
        gradientColor="rgba(34, 197, 94, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        disableScale={true}
        className="p-6 rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.02] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 w-full"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Activity
              size={20}
              className="text-gray-900 dark:text-emerald-500"
            />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Activity Tracker
            </h4>
          </div>
          <CombinedActivityTracker />
        </div>
      </SpotlightCard>

      <SpotlightCard
        gradientColor="rgba(34, 197, 94, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        disableScale={true}
        className="p-6 rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.02] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github
                size={20}
                className="text-gray-900 dark:text-emerald-500"
              />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Language Stats
              </h4>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              View <ExternalLink size={14} />
            </a>
          </div>
          <GitHubLanguages />
        </div>
      </SpotlightCard>
    </section>
  );
}
