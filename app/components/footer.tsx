import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GITHUB_URL, LINKEDIN_URL } from "@/app/lib/constants";

export function Footer() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-6xl px-5 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 dark:border-white/[0.08] py-8 text-sm text-[#737373] dark:text-[#A1A1AA] sm:flex-row">
        <p>© {new Date().getFullYear()} Pawan Sachdeva. Built with Next.js.</p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#08090a] dark:hover:text-white transition-colors"
          >
            <FaGithub className="size-5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#08090a] dark:hover:text-white transition-colors"
          >
            <FaLinkedin className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
