import { useState } from 'react';
import styles from '../style';

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "TechVision Inc",
    content: "Escose helped us scale our development team by 300% in just 2 months. The developers they provided are exceptional - they integrated seamlessly and delivered quality code from day one.",
    rating: 5,
    image: null,
  },
  {
    id: 2,
    name: "David Chen",
    role: "VP of Engineering",
    company: "DataStream Solutions",
    content: "We've worked with several IT staffing agencies, but Escose stands out. Their vetting process is thorough, and the React developers we hired are among the best we've ever had on our team.",
    rating: 5,
    image: null,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "CloudNext Platform",
    content: "The GenAI solution Escose built for us transformed our customer support. Response time decreased by 60% while maintaining high quality. Their team's expertise in AI/ML is impressive.",
    rating: 5,
    image: null,
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Founder & CEO",
    company: "StartupHub",
    content: "As a startup, budget is crucial. Escose's staff augmentation model saved us 55% compared to local hiring without compromising on talent quality. Highly recommended!",
    rating: 5,
    image: null,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center mb-12" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by companies worldwide for IT staffing and software development excellence
          </p>
        </div>

        {/* Desktop: Grid View */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
              data-animate
            >
              {/* Quote Icon */}
              <div className="text-cyan-400 text-4xl mb-4">"</div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {testimonial.content}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-100 font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel View */}
        <div className="md:hidden">
          <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6">
            <div className="text-cyan-400 text-4xl mb-4">"</div>
            
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              {testimonialsData[activeIndex].content}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
                {testimonialsData[activeIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="text-slate-100 font-semibold">{testimonialsData[activeIndex].name}</h4>
                <p className="text-gray-400 text-sm">{testimonialsData[activeIndex].role}, {testimonialsData[activeIndex].company}</p>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-cyan-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;


