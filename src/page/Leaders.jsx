import { Helmet } from 'react-helmet-async';
import styles from '../style';
import { pooja_jangir, ankita_sharma } from '../assets';

export default function Leaders() {
  const founders = [
    {
      name: 'Pooja Jangir',
      role: 'Co-Founder',
      bio: 'With over ten years of professional experience, Pooja has mastered the art of bridging the gap between technical precision and organizational excellence. Her decade-long journey has been defined by a transition from the laboratory to the boardroom, bringing a disciplined, data-driven approach to every stage of business development.',
      image: pooja_jangir,
      linkedin: 'https://www.linkedin.com/in/escose-pooja-jangir',
    },
    {
      name: 'Ankita Sharma',
      role: 'Co-Founder',
      bio: 'With over a decade of experience transforming the education landscape, Ankita is a seasoned entrepreneur who has successfully founded and scaled multiple businesses within the sector. Her deep understanding of talent development and organizational growth has been the cornerstone of her 10-years career.',
      image: ankita_sharma,
      linkedin: 'https://www.linkedin.com/in/ankita-sharma-escose/',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Leaders | Escose Technologies - Meet the Founders</title>
        <meta name="description" content="Meet the visionary leaders behind Escose Technologies. Learn about our founders' expertise, experience, and commitment to delivering exceptional IT staffing and software development solutions." />
        <meta name="keywords" content="escose founders, leadership team, company leaders, IT staffing leaders, software development founders" />
        <link rel="canonical" href="https://escose.com/leaders" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Leaders | Escose Technologies" />
        <meta property="og:description" content="Meet the visionary leaders behind Escose Technologies." />
        <meta property="og:url" content="https://escose.com/leaders" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Leaders | Escose Technologies" />
        <meta name="twitter:description" content="Meet the visionary leaders behind Escose Technologies." />
      </Helmet>
    
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-100 min-h-screen">
        {/* Hero */}
        <section className={`${styles.paddingX} ${styles.flexCenter} pt-32 md:pt-28 pb-12`}>
          <div className={`${styles.boxWidth} text-center`}>
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Leaders</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary founders who are driving Escose Technologies forward with innovation, expertise, and a commitment to excellence.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-12`}>
          <div className={`${styles.boxWidth}`}>
            <div className="grid md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 
                    hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 
                    hover:-translate-y-2 hover:scale-[1.02] 
                    transition-all duration-500 ease-out
                    group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-cyan-400/20 
                      group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/30
                      transition-all duration-500 ease-out">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover 
                          group-hover:scale-110 
                          transition-transform duration-500 ease-out"
                      />
                    </div>
                    <h2 className="text-3xl font-bold mb-2 
                      group-hover:text-cyan-300 
                      transition-colors duration-300">{founder.name}</h2>
                    <p className="text-xl text-cyan-400 mb-4 
                      group-hover:text-cyan-300 
                      transition-colors duration-300">{founder.role}</p>
                    <p className="text-gray-300 leading-relaxed mb-6 
                      group-hover:text-gray-200 
                      transition-colors duration-300">{founder.bio}</p>
                  </div>

                  <div className="flex justify-center pt-6 border-t border-white/10 
                    group-hover:border-cyan-400/30 
                    transition-colors duration-300">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 
                        hover:scale-125 
                        transition-all duration-300 ease-out
                        transform"
                      aria-label={`${founder.name} LinkedIn`}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className={`${styles.paddingX} ${styles.flexCenter} py-12 bg-white/5`}>
          <div className={`${styles.boxWidth}`}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Vision</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Escose Technologies, our founders are committed to bridging the global talent gap by connecting exceptional engineers with innovative companies. We believe in building long-term partnerships, delivering value through pre-vetted talent, and empowering businesses to scale faster and smarter. Our vision is to become the most trusted partner for IT staffing and engineering talent solutions worldwide.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
