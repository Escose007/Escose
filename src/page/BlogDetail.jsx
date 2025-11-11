import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '../style';
import { findPostBySlug, blogPosts } from '../constants/blogs';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = findPostBySlug(slug);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate reading time
  const calculateReadingTime = (post) => {
    let wordCount = 0;
    if (post.sections) {
      post.sections.forEach(section => {
        if (section.paragraphs) {
          section.paragraphs.forEach(p => wordCount += p.split(' ').length);
        }
        if (section.bullets) {
          section.bullets.forEach(b => wordCount += b.split(' ').length);
        }
        if (section.tailParagraphs) {
          section.tailParagraphs.forEach(tp => wordCount += tp.split(' ').length);
        }
      });
    } else if (post.content) {
      post.content.forEach(p => wordCount += p.split(' ').length);
    }
    return Math.max(1, Math.ceil(wordCount / 200));
  };

  // Get related posts (same category, excluding current), sorted by dateFull (newest first)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .sort((a, b) => {
          const dateA = new Date(a.dateFull || a.date);
          const dateB = new Date(b.dateFull || b.date);
          return dateB - dateA; // Descending order (newest first)
        })
        .slice(0, 3)
    : [];

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | Escose Technologies Blog</title>
          <meta name="description" content="The requested blog article could not be found. Browse our other tech insights and IT staffing articles." />
          <link rel="canonical" href="https://escose.com/blogs" />
        </Helmet>
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 min-h-screen flex items-center justify-center">
        <div className={`${styles.paddingX} ${styles.flexCenter} pt-40`}>
          <div className="text-center py-20">
            <div className="text-7xl mb-6">📭</div>
            <h1 className="text-4xl font-bold text-slate-100 mb-4">Article Not Found</h1>
            <p className="text-slate-400 mb-8 text-lg">The blog you are looking for does not exist.</p>
            <Link 
              to="/blogs" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-block"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
      </>
    );
  }

  const handleShare = async (e) => {
    e.preventDefault();
    try {
      if (navigator.share) {
        await navigator.share({ 
          title: post.title, 
          text: post.excerpt,
          url: window.location.href 
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);
      }
    } catch (err) {
      console.log('Share failed:', err);
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Escose Technologies Blog</title>
        <meta name="description" content={post.excerpt || post.description || `Read about ${post.title} on Escose Technologies blog.`} />
        <meta name="keywords" content={`${post.category}, IT staffing, software development, ${post.title}`} />
        <link rel="canonical" href={`https://escose.com/blogs/${post.slug}`} />
        <meta name="author" content={post.author || 'Escose Technologies'} />
        <meta name="publish-date" content={post.date} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || post.description || `Read about ${post.title}`} />
        <meta property="og:url" content={`https://escose.com/blogs/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author || 'Escose Technologies'} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || post.description} />
      </Helmet>
    
    <div className="bg-white min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed top-24 right-8 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow-xl z-50">
          ✓ Link copied to clipboard!
        </div>
      )}

      {/* Spacer for navbar */}
      <div className="h-20 md:h-24"></div>

      {/* Header with Back Button */}
      <div className="border-b border-gray-200 bg-white sticky top-20 md:top-24 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/blogs" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Subtitle/Excerpt */}
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author Info & Meta */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold">
            E
          </div>
          <div>
            <div className="font-semibold text-gray-900">Escose Technologies</div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{calculateReadingTime(post)} min read</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 -mx-6 md:mx-0">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.sections && post.sections.length > 0 ? (
            post.sections.map((section, sIdx) => (
              <section key={sIdx} className="mb-12">
                {section.heading && (
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-gray-700 text-lg leading-relaxed mb-6">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3 mb-6 ml-6">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-gray-700 text-lg leading-relaxed list-disc">
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {section.tailParagraphs && section.tailParagraphs.map((tp, tIdx) => (
                  <p key={tIdx} className="text-gray-700 text-lg leading-relaxed mb-6">
                    {tp}
                  </p>
                ))}
                {section.codeBlocks && section.codeBlocks.map((codeBlock, cbIdx) => (
                  <div key={cbIdx} className="mb-8">
                    {codeBlock.title && (
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {codeBlock.title}
                      </h3>
                    )}
                    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                      <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                        <span className="text-sm text-gray-400 font-mono">
                          {codeBlock.language || 'code'}
                        </span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(codeBlock.code);
                            const btn = document.getElementById(`copy-btn-${sIdx}-${cbIdx}`);
                            if (btn) {
                              btn.textContent = 'Copied!';
                              setTimeout(() => {
                                btn.textContent = 'Copy';
                              }, 2000);
                            }
                          }}
                          id={`copy-btn-${sIdx}-${cbIdx}`}
                          className="text-xs text-gray-400 hover:text-gray-200 transition-colors px-2 py-1 rounded"
                        >
                          Copy
                        </button>
                      </div>
                      <pre className="p-4 overflow-x-auto">
                        <code className="text-sm text-gray-100 font-mono leading-relaxed">
                          {codeBlock.code}
                        </code>
                      </pre>
                    </div>
                  </div>
                ))}
              </section>
            ))
          ) : (
            post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))
          )}
        </div>

        {/* Tags & Share */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              More from Escose Technologies
            </h3>
            <div className="space-y-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blogs/${relatedPost.slug}`}
                  className="block group"
                >
                  <article className="flex gap-6 items-start pb-6 border-b border-gray-200 group-hover:border-gray-300 transition-all">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-base line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                        <span>{calculateReadingTime(relatedPost)} min read</span>
                      </div>
                    </div>
                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                      {relatedPost.image ? (
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center text-4xl bg-gray-100">
                          <span>{relatedPost.emoji}</span>
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}


