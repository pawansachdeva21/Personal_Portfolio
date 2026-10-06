import Image from "next/image";
import { SectionHeader } from "@/app/components/section-header";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";

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
      className="w-full flex flex-col items-start justify-start gap-y-8"
    >
      <SectionHeader
        eyebrow="About Me"
        title={
          <>
            Discover My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">Story</span>
          </>
        }
        description={<>A bit about me outside the resume.</>}
      />

      <div className="grid w-full gap-6 lg:grid-cols-[300px_1fr] lg:items-stretch">
        <figure className="relative mx-auto w-full max-w-md lg:max-w-none lg:h-full">
          <div className="absolute -inset-3 rounded-3xl bg-emerald-500/10 blur-2xl" />
          <div className="relative h-[400px] lg:h-full lg:min-h-[375px] overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[0.08]">
            <Image
              src="/images/profile.jpg"
              alt="Pawan Sachdeva"
              fill
              sizes="(min-width: 1024px) 300px, 448px"
              className="object-cover object-top"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pt-12">
              <p className="text-base font-semibold text-white">
                Pawan Sachdeva
              </p>
              <p className="text-xs text-gray-300">Gurugram, India</p>
            </figcaption>
          </div>
        </figure>

        <SpotlightCard
          gradientColor="rgba(34, 197, 94, 0.1)"
          lightGradientColor="rgba(8, 9, 10, 0.1)"
          spotlightSize={400}
          disableScale={true}
          className="p-6 rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.02] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 w-full"
        >
          <div className="divide-y divide-gray-200 dark:divide-white/[0.06]">
            {story.map(({ title, paragraphs }) => (
              <div key={title} className="space-y-2 py-4 first:pt-0 last:pb-0">
                <h4 className="text-base font-medium text-[#08090a] dark:text-white flex items-center gap-2">
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
      </div>
    </section>
  );
}
