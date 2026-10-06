import HeadingBadge from "@/app/components/heading-badge";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";
import { User } from "lucide-react";

const story = [
  {
    title: "Who I Am",
    paragraphs: [
      "I'm Pawan. I studied engineering in Ludhiana, started my career in Bengaluru, and now live and work in Gurugram.",
      "I like owning things end to end. Give me a problem and I'll happily work on the UI, the API and whatever sits in between. I'm not a fan of overengineering, so if something can be kept simple, I keep it simple.",
    ],
  },
  {
    title: "My Journey",
    paragraphs: [
      "I wrote my first real programs during my B.Tech, mostly to figure out how the apps I used every day actually worked. After graduating in 2021 I started as a frontend developer, and React has been my go-to ever since.",
      "Over the years I moved more into backend and real-time work. When LLMs started getting good, I got curious and started building with them. That curiosity slowly turned into my day job, and now AI is a big part of what I work on.",
    ],
  },
  {
    title: "Beyond Coding",
    paragraphs: [
      "When I'm away from my laptop, I'm usually watching or playing cricket, following football, or playing a game of chess.",
      "I also try to hit the gym regularly. It's the one hour of the day when I'm not thinking about code.",
    ],
  },
];

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
            A bit about me outside the resume.
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
        <div className="grid gap-8 lg:grid-cols-3">
          {story.map(({ title, paragraphs }) => (
            <div key={title} className="space-y-4">
              <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
                {title}
              </h4>
              {paragraphs.map((text) => (
                <p
                  key={text}
                  className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </SpotlightCard>
    </section>
  );
}
