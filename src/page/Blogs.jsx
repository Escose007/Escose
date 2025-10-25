import { useState } from 'react';
import styles from '../style';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/blogs';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Calculate reading time (rough estimate: 200 words per minute)
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

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 relative overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`${styles.boxWidth} relative z-10 py-16 text-center`}>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Insights & Updates
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends in technology, AI, and development best practices.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className={`${styles.paddingX} ${styles.flexCenter} py-6`}>
        <div className={`${styles.boxWidth}`}>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-800/50 border border-slate-700 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog List - Medium Style */}
      <section className={`${styles.paddingX} ${styles.flexCenter} pb-20`}>
        <div className={`${styles.boxWidth} max-w-5xl mx-auto`}>
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <Link 
                key={post.slug} 
                to={`/blogs/${post.slug}`} 
                className="block group"
              >
                <article className="flex gap-8 items-start pb-8 border-b border-slate-700/50 group-hover:border-cyan-400/30 transition-all duration-300">
                  {/* Content Section */}
                  <div className="flex-1 min-w-0">
                    {/* Author & Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                        E
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="font-medium text-slate-300">Escose Technologies</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-400 text-base mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="bg-slate-800/50 text-slate-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-700">
                        {post.category}
                      </span>
                      <span>{calculateReadingTime(post)} min read</span>
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-40 h-40 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center text-5xl">
                        <span className="select-none">{post.emoji}</span>
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-2xl font-bold text-slate-300 mb-2">No articles found</h3>
              <p className="text-slate-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs; 