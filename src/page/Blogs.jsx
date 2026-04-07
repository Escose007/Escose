import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '../style';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/blogs';
import { prepare, layout } from '@chenglou/pretext';

// ── Pretext: measure excerpt heights so cards share consistent body height ──
const EXCERPT_FONT = '14px Poppins, sans-serif';
const EXCERPT_LINE_H = 22;
const EXCERPT_WIDTH = 280; // approx card content width in px

function getMeasuredExcerptHeight(text) {
  try {
    const prepared = prepare(text || '', EXCERPT_FONT);
    const result = layout(prepared, EXCERPT_WIDTH, EXCERPT_LINE_H);
    return result.height;
  } catch {
    return EXCERPT_LINE_H * 3;
  }
}

const CATEGORY_COLORS = {
  'AI/ML':                  { bg: 'rgba(139,92,246,0.15)', border: 'rgba(139,92,246,0.4)',  text: '#c4b5fd' },
  'Software Development':   { bg: 'rgba(0,212,255,0.12)',  border: 'rgba(0,212,255,0.4)',   text: '#67e8f9' },
  'DevOps':                 { bg: 'rgba(34,197,94,0.12)',  border: 'rgba(34,197,94,0.4)',   text: '#86efac' },
  'Cloud':                  { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.4)',  text: '#93c5fd' },
  'IT Staffing':            { bg: 'rgba(234,179,8,0.12)',  border: 'rgba(234,179,8,0.4)',   text: '#fde047' },
  default:                  { bg: 'rgba(39,110,241,0.12)', border: 'rgba(39,110,241,0.4)',  text: '#93c5fd' },
};

function getCategoryStyle(cat) {
  return CATEGORY_COLORS[cat] || CATEGORY_COLORS.default;
}

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [excerptHeights, setExcerptHeights] = useState({});
  const [maxExcerptH, setMaxExcerptH] = useState(EXCERPT_LINE_H * 3);

  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.dateFull || a.date);
    const dateB = new Date(b.dateFull || b.date);
    return dateB - dateA;
  });

  const categories = ['All', ...Array.from(new Set(sortedBlogPosts.map(p => p.category)))];

  const filteredPosts = selectedCategory === 'All'
    ? sortedBlogPosts
    : sortedBlogPosts.filter(p => p.category === selectedCategory);

  // Use Pretext to measure excerpt heights once on mount
  useEffect(() => {
    const heights = {};
    sortedBlogPosts.forEach(post => {
      heights[post.slug] = getMeasuredExcerptHeight(post.excerpt || '');
    });
    setExcerptHeights(heights);
    const max = Math.max(...Object.values(heights));
    setMaxExcerptH(Math.min(max, EXCERPT_LINE_H * 4)); // cap at 4 lines
  }, []);

  const calculateReadingTime = (post) => {
    let wc = 0;
    if (post.sections) {
      post.sections.forEach(s => {
        (s.paragraphs || []).forEach(p => wc += p.split(' ').length);
        (s.bullets || []).forEach(b => wc += b.split(' ').length);
        (s.tailParagraphs || []).forEach(tp => wc += tp.split(' ').length);
      });
    } else if (post.content) {
      post.content.forEach(p => wc += p.split(' ').length);
    }
    return Math.max(1, Math.ceil(wc / 200));
  };

  // Featured = newest post
  const featuredPost = filteredPosts[0];
  const restPosts = filteredPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Tech Insights & IT Staffing Blog | Escose Technologies</title>
        <meta name="description" content="Read expert insights on IT staffing, software development, GenAI, and technology trends from Escose Technologies." />
        <meta name="keywords" content="IT staffing blog, software development blog, tech blog, hiring developers guide, IT recruitment tips, GenAI insights, LangChain tutorial, LangGraph guide, AI agent architecture, GenAI engineering blog, agentic AI patterns, LLM development guide, RAG pipeline tutorial, software outsourcing insights, React 18 best practices, DevOps scaling guide, AI web app integration" />
        <link rel="canonical" href="https://escose.com/blogs" />
        <meta property="og:title" content="Tech Insights & IT Staffing Blog | Escose" />
        <meta property="og:description" content="Expert insights on IT staffing, software development, and technology trends." />
        <meta property="og:url" content="https://escose.com/blogs" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Escose Technologies Blog" />
        <meta name="twitter:description" content="Tech insights, IT staffing tips, and industry trends." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://escose.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://escose.com/blogs" },
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "CollectionPage",
          "name": "Tech Insights & IT Staffing Blog",
          "description": "Expert insights on IT staffing, software development, GenAI, and technology trends from Escose Technologies.",
          "url": "https://escose.com/blogs",
          "publisher": { "@type": "Organization", "name": "Escose Technologies", "url": "https://escose.com" },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": sortedBlogPosts.map((post, i) => ({
              "@type": "ListItem", "position": i + 1,
              "url": `https://escose.com/blogs/${post.slug}`, "name": post.title
            }))
          }
        })}</script>
      </Helmet>

      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 60%, #0b1220 100%)' }}>

        {/* ── Hero banner ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 relative overflow-hidden`}>
          <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className={`${styles.boxWidth} relative z-10 py-16 text-center`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-semibold mb-6"
              style={{ background: 'rgba(0,212,255,0.06)' }}>
              ✦ Knowledge Hub
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              <span className="shimmer-text">Tech Insights & Updates</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Stay ahead with expert perspectives on AI, software development, and the future of tech talent.
            </p>
          </div>
        </section>

        {/* ── Category filter ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-6`}>
          <div className={`${styles.boxWidth}`}>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => {
                const cs = getCategoryStyle(cat);
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                    style={isActive
                      ? { background: 'linear-gradient(135deg, #00d4ff, #276ef1)', color: '#fff', boxShadow: '0 4px 16px rgba(0,212,255,0.3)' }
                      : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }
                    }
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.borderColor = cs.border; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Blog grid ── */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pb-24`}>
          <div className={`${styles.boxWidth}`}>

            {filteredPosts.length === 0 && (
              <div className="text-center py-24">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-2xl font-bold text-slate-300 mb-2">No articles found</h3>
                <p className="text-slate-400">Try selecting a different category</p>
              </div>
            )}

            {/* Featured card (newest) */}
            {featuredPost && (
              <Link to={`/blogs/${featuredPost.slug}`} className="block group mb-10">
                <article
                  className="relative overflow-hidden rounded-3xl blog-card-shine transition-all duration-400 group-hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, rgba(0,212,255,0.08), rgba(39,110,241,0.06))',
                    border: '1px solid rgba(0,212,255,0.2)',
                    backdropFilter: 'blur(16px)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,212,255,0.15)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  {/* Top gradient stripe */}
                  <div className="blog-card-top-border" />

                  <div className="flex flex-col md:flex-row gap-0">
                    {/* Thumbnail */}
                    <div className="md:w-2/5 h-56 md:h-auto overflow-hidden rounded-l-3xl" style={{ minHeight: 220 }}>
                      {featuredPost.image ? (
                        <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-8xl"
                          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(39,110,241,0.15))' }}>
                          {featuredPost.emoji}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ background: getCategoryStyle(featuredPost.category).bg, border: `1px solid ${getCategoryStyle(featuredPost.category).border}`, color: getCategoryStyle(featuredPost.category).text }}>
                            {featuredPost.category}
                          </span>
                          <span className="text-xs text-slate-500">FEATURED</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                          {featuredPost.title}
                        </h2>
                        <p className="text-slate-400 text-base leading-relaxed line-clamp-3">{featuredPost.excerpt}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-5 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">E</div>
                          <span className="text-slate-300 font-medium">Escose Technologies</span>
                        </div>
                        <span>•</span>
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{calculateReadingTime(featuredPost)} min read</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* Card grid — Pretext ensures equal excerpt section height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restPosts.map((post, idx) => {
                const cs = getCategoryStyle(post.category);
                const animDir = idx % 3 === 0 ? 'left' : idx % 3 === 2 ? 'right' : 'fade';
                return (
                  <Link key={post.slug} to={`/blogs/${post.slug}`} className="block group" data-animate={animDir}>
                    <article
                      className="relative flex flex-col h-full rounded-2xl overflow-hidden blog-card-shine blog-card-top-border transition-all duration-300 group-hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(12px)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = cs.border; e.currentTarget.style.boxShadow = `0 12px 36px ${cs.bg}`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      {/* Thumbnail */}
                      <div className="h-44 overflow-hidden" style={{ flexShrink: 0 }}>
                        {post.image ? (
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-6xl"
                            style={{ background: `linear-gradient(135deg, ${cs.bg}, rgba(255,255,255,0.03))` }}>
                            {post.emoji}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col flex-1 p-5">
                        {/* Category + meta */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                            style={{ background: cs.bg, border: `1px solid ${cs.border}`, color: cs.text }}>
                            {post.category}
                          </span>
                          <span className="text-[11px] text-slate-500">{post.date}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-base font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2 leading-snug">
                          {post.title}
                        </h2>

                        {/* Excerpt — height locked by Pretext measurement */}
                        <p
                          className="text-slate-400 text-sm leading-relaxed overflow-hidden"
                          style={{ height: maxExcerptH, display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden' }}
                        >
                          {post.excerpt}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 text-xs text-slate-500">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-[10px] font-bold">E</div>
                            <span>Escose</span>
                          </div>
                          <span>{calculateReadingTime(post)} min read →</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
