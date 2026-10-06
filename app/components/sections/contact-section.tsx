import { DownloadCloud, Mail, PhoneCallIcon } from "lucide-react";
import { SectionHeader } from "@/app/components/section-header";
import { SpotlightCard } from "@/app/components/ui/spotlight-card";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/app/lib/constants";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-start justify-start gap-y-10"
    >
      <SectionHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s{" "}
            <span className="text-[#08090a] dark:text-emerald-500">
              Connect
            </span>
          </>
        }
        description={
          <>
            I&apos;m always excited to collaborate on interesting projects or
            just have a great tech conversation!
          </>
        }
      />

      <div className="w-full">
        <SpotlightCard
          gradientColor="rgba(34, 197, 94, 0.1)"
          lightGradientColor="rgba(8, 9, 10, 0.1)"
          spotlightSize={400}
          multiSpotlight={true}
          disableScale={true}
          className="p-8 rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white/70 dark:bg-white/[0.02] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300"
        >
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <h4 className="text-xl font-medium text-[#08090a] dark:text-white">
                Ready to start a conversation?
              </h4>
              <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
                <a className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors">
                  <PhoneCallIcon className="w-4 h-4 mt-1" />
                  +91-8968692484
                </a>
                <a
                  href="mailto:pawansachdeva1998@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-1" />
                  pawansachdeva1998@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaGithub className="relative w-5 h-5" />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaLinkedin className="relative w-5 h-5" />
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-emerald-500 hover:bg-gray-200 dark:hover:bg-emerald-500/10 transition-colors relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-200/50 dark:to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <DownloadCloud className="relative w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="inline-block px-4 py-2 text-sm text-[#737373] dark:text-[#A1A1AA] bg-gray-50 dark:bg-[#141414] rounded-sm">
                💬 I typically respond within 1 hour!
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
