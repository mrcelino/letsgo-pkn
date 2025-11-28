interface ChapterSectionProps {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  align?: 'left' | 'right';
}

export default function ChapterSection({ number, title, subtitle, children, align = 'left' }: ChapterSectionProps) {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-start ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Sticky Header */}
            <div className="md:w-1/3 md:sticky md:top-32">
                <span className="text-8xl font-heading font-bold text-white/5 absolute -top-10 -left-10 select-none pointer-events-none">
                    {number}
                </span>
                <div className="relative z-10">
                    <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">BAB {number}</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">{title}</h2>
                    <p className="text-xl text-gray-400 leading-relaxed border-l-2 border-red-500 pl-6">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3 space-y-8">
                {children}
            </div>
        </div>
      </div>
    </section>
  );
}
