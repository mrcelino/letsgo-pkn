import { articles } from "@/components/Materi/articleData";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProgressBar from "@/components/Materi/ProgressBar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 2);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-red-500 selection:text-white">
      <ProgressBar />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/materi" className="inline-flex items-center gap-3 group text-white/80 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <i className="fas fa-arrow-left"></i>
                </div>
                <span className="font-heading font-bold uppercase tracking-widest text-sm">Kembali</span>
            </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gray-900">
             <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#050505] z-10" />
             <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] z-0" />
             {/* We can add a real image here later based on article.image */}
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 border border-red-500/50 rounded-full bg-red-900/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-red-400 text-xs font-bold uppercase tracking-[0.2em]">{article.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight tracking-tight">
                {article.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-serif italic max-w-3xl mx-auto leading-relaxed opacity-90">
                {article.subtitle}
            </p>
        </div>
      </header>

      {/* Content Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pb-32">
        <div className="grid lg:grid-cols-[1fr_350px] gap-12">
            
            {/* Main Content */}
            <article className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl h-fit">
                {/* Meta Data Mobile */}
                <div className="flex lg:hidden items-center justify-between border-b border-white/10 pb-8 mb-10 text-sm text-gray-500 font-mono uppercase tracking-wider">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-heading font-bold">
                            {article.author.charAt(0)}
                        </div>
                        <span>{article.author}</span>
                    </div>
                    <span>{article.readTime}</span>
                </div>

                {/* Body Content */}
                <div 
                    className="prose prose-lg prose-invert max-w-none 
                    prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                    prose-p:leading-loose prose-p:text-gray-300 prose-p:font-light prose-p:text-lg
                    prose-strong:text-white prose-strong:font-semibold
                    prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-red-500 prose-li:text-gray-300
                    prose-img:rounded-2xl prose-img:border prose-img:border-white/10"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
                {/* Author Card */}
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Penulis</h3>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white text-2xl font-heading font-bold shadow-lg shadow-red-500/20">
                            {article.author.charAt(0)}
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">{article.author}</h4>
                            <p className="text-xs text-gray-500">{article.date}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-4 border-t border-white/10">
                        <span className="text-sm text-gray-400">Waktu Baca</span>
                        <span className="text-white font-mono">{article.readTime}</span>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-semibold flex items-center justify-center gap-2">
                            <i className="fas fa-link"></i> Copy
                        </button>
                    </div>
                </div>

                {/* Related Articles */}
                <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Baca Juga</h3>
                    <div className="space-y-4">
                        {relatedArticles.map((related) => (
                            <Link href={`/materi/${related.slug}`} key={related.slug} className="block group">
                                <div className="bg-white/5 border border-white/5 p-4 rounded-xl hover:border-red-500/50 transition-all hover:bg-white/10">
                                    <span className="text-xs text-red-400 font-bold uppercase mb-2 block">{related.category}</span>
                                    <h4 className="text-white font-bold leading-tight group-hover:text-red-500 transition-colors mb-2">
                                        {related.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 line-clamp-2">{related.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>

        </div>
      </div>

    </main>
  );
}
