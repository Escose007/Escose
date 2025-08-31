import styles from '../style';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/blogs';

const Blogs = () => (
  <>
    <div className={`bg-gray-100 pt-32 md:pt-28 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <div className="text-center py-16">
          <h1 className="text-5xl font-bold blut-text__gradient mb-6">
            Tech Insights & Updates
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Stay updated with the latest trends in technology and development insights from Escose Technologies.
          </p>
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10`}>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blogs/${post.slug}`} className="block group">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group-hover:shadow-2xl transition-all duration-300">
                  <div className="h-48 w-full overflow-hidden bg-gray-50">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-contain" />
                    ) : (
                      <div className="h-full flex items-center justify-center text-4xl text-gray-400">
                        <span className="select-none">{post.emoji}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-ink">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="text-blue-600 group-hover:text-blue-800 font-medium">Read More</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  </>
);

export default Blogs; 