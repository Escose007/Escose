import styles from '../style';

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
          {/* Featured Article */}
          <div className="w-full mb-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl h-48 flex items-center justify-center text-white text-6xl">
                  📱
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Technology
                  </span>
                  <span className="text-gray-500 ml-4">December 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  The Future of Employee Outsourcing in Tech Industry
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover how companies are leveraging global talent pools to accelerate development 
                  timelines and reduce costs. Learn about the latest trends in remote collaboration.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 h-48 flex items-center justify-center text-white text-4xl">
                ⚛️
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    React
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  React 18 Best Practices for Enterprise Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the latest React 18 features and how to implement them in large-scale applications.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Nov 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-48 flex items-center justify-center text-white text-4xl">
                📊
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                    Analytics
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Data-Driven Development: Metrics That Matter
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover key performance indicators that help teams deliver better software faster.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Oct 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center text-white text-4xl">
                🚀
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                    DevOps
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Scaling DevOps: From Startup to Enterprise
                </h3>
                <p className="text-gray-600 mb-4">
                  How to build and scale DevOps practices as your organization grows.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Sep 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-500 to-green-600 h-48 flex items-center justify-center text-white text-4xl">
                🔒
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-medium">
                    Security
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Cybersecurity in Remote Development Teams
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential security practices for distributed development teams and remote work.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Aug 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
                </div>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 h-48 flex items-center justify-center text-white text-4xl">
                🤖
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
                    AI/ML
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Integrating AI in Modern Web Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Practical approaches to incorporating machine learning into web development.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Jul 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
                </div>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 h-48 flex items-center justify-center text-white text-4xl">
                💡
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                    Innovation
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Building Innovation Culture in Tech Teams
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategies to foster creativity and innovation in development teams.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Jun 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Newsletter */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center w-full">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Subscribe to our newsletter for the latest tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Blogs; 