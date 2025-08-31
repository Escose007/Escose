import { Link, useParams } from 'react-router-dom';
import styles from '../style';
import { findPostBySlug } from '../constants/blogs';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = findPostBySlug(slug);

  if (!post) {
    return (
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} pt-40`}>
        <div className={`${styles.boxWidth} py-20 text-center`}>
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-dimBlack mb-6">The blog you are looking for does not exist.</p>
          <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-medium">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`bg-gray-100 pt-32 md:pt-28 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <div className="py-10">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
              <span className="text-gray-500 ml-4">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-ink">{post.title}</h1>
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <article className="prose prose-slate max-w-none bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            {post.sections && post.sections.length > 0 ? (
              post.sections.map((section, sIdx) => (
                <section key={sIdx} className="mb-10">
                  {section.heading && (
                    <h2 className="text-2xl md:text-3xl font-semibold text-ink mb-4">{section.heading}</h2>
                  )}
                  {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-gray-700 leading-8 mb-5">{p}</p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-disc pl-6 text-gray-700 mb-5">
                      {section.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="mb-2">{b}</li>
                      ))}
                    </ul>
                  )}
                  {section.tailParagraphs && section.tailParagraphs.map((tp, tIdx) => (
                    <p key={tIdx} className="text-gray-700 leading-8 mb-5">{tp}</p>
                  ))}
                </section>
              ))
            ) : (
              post.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-8 mb-6">{paragraph}</p>
              ))
            )}

            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link to="/blogs" className="text-blue-600 hover:text-blue-800 font-medium">← Back to Blogs</Link>
                <a
                  href="#share"
                  className="text-dimBlack hover:text-ink"
                  onClick={(e) => {
                    e.preventDefault();
                    if (navigator.share) {
                      navigator.share({ title: post.title, url: window.location.href });
                    } else {
                      window.alert('Link copied to clipboard');
                      try {
                        navigator.clipboard.writeText(window.location.href);
                      } catch (err) {}
                    }
                  }}
                >
                  Share
                </a>
              </div>
            </div>
          </article>
          <div className="h-16" />
        </div>
      </div>
    </>
  );
}


