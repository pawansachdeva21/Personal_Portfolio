interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
        <span className="h-px w-8 bg-current" />
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#08090a] dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm sm:text-base text-[#737373] dark:text-[#A1A1AA]">
          {description}
        </p>
      )}
    </div>
  );
}
