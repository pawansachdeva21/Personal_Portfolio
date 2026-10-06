import HeadingBadge from "@/app/components/heading-badge";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-8"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="About Me" icon={<User size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Discover My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">Story</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            A little about who I am, how I got here, and what keeps me excited
            about building software.
          </p>
        </div>
      </div>

      <SpotlightCard
        gradientColor="rgba(34, 197, 94, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        disableScale={true}
        className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 w-full"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Who I Am
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I&apos;m a developer who enjoys the whole journey of a
              product—from the first rough idea to the moment real people start
              using it. I&apos;m just as happy polishing a small UI interaction
              as I am designing the backend and AI pieces that sit behind it.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I care about simple, well-structured code and features that solve
              a real problem instead of just looking impressive in a demo. To
              me, good software should feel effortless to the people using it,
              even when there&apos;s a lot of complexity underneath.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              My Journey
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I got hooked on coding during college, mostly out of curiosity
              about how the apps I used every day actually worked. That
              curiosity turned into a career in 2021, and web development was my
              way in—React quickly became my favourite playground.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              Over time I went from building screens to owning features end to
              end. When Generative AI took off, I didn&apos;t want to just watch
              from the sidelines, so I dived in and learned by building—
              chatbots, agents, and side projects like the assistant on this very
              site. Today, blending solid engineering with AI is what excites me
              most, and I&apos;m still learning something new every week.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Beyond Coding
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              Outside of tech, I enjoy playing and watching cricket, following
              football, and playing chess—all of which keep me sharp and
              inspired. I&apos;m also big on fitness and hit the gym regularly
              to stay energized and focused in both work and life.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
