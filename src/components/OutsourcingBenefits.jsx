import { outsourcingBenefits } from '../constants';
import styles from '../style';

const OutsourcingBenefits = () => (
  <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10`}>
    <div className="text-center mb-16">
      <h2 className="text-5xl mb-6 blut-text__gradient font-bold">Why Choose Our Outsourcing Services?</h2>
      <p className={`${styles.paragraph} text-center text-xl text-dimBlack xl:w-2/3 mx-auto`}>
        Transform your business operations with our comprehensive outsourcing solutions. 
        Experience the advantages that have helped hundreds of companies scale efficiently and cost-effectively.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
      {outsourcingBenefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
        >
          {/* Icon Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex justify-center group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-icons text-white text-2xl">{benefit.icon}</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Success Metrics Section */}
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">Proven Results</h3>
        <p className="text-blue-100 text-lg">Real numbers from our client partnerships</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
          <div className="text-white font-medium">Client Satisfaction</div>
          <div className="text-blue-200 text-sm">Based on project completion surveys</div>
        </div>
        
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-4xl font-bold text-yellow-400 mb-2">3x</div>
          <div className="text-white font-medium">Faster Delivery</div>
          <div className="text-blue-200 text-sm">Compared to traditional hiring</div>
        </div>
        
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-4xl font-bold text-yellow-400 mb-2">60%</div>
          <div className="text-white font-medium">Cost Reduction</div>
          <div className="text-blue-200 text-sm">Average savings on operational costs</div>
        </div>
        
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
          <div className="text-white font-medium">Global Support</div>
          <div className="text-blue-200 text-sm">Round-the-clock availability</div>
        </div>
      </div>
    </div>

    {/* Testimonial Section */}
    <div className="w-full bg-gray-50 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-blue-600 font-bold">JD</span>
            </div>
            <div>
              <div className="font-semibold text-gray-800">John Davis</div>
              <div className="text-gray-600 text-sm">CTO, TechStart Inc.</div>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "Escose provided us with a dedicated React team that integrated seamlessly with our existing workforce. 
            The quality of work and communication has been exceptional, helping us launch our product 3 months ahead of schedule."
          </p>
          <div className="flex text-yellow-400 mt-4">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-purple-600 font-bold">SM</span>
            </div>
            <div>
              <div className="font-semibold text-gray-800">Sarah Mitchell</div>
              <div className="text-gray-600 text-sm">Product Manager, InnovateLab</div>
            </div>
          </div>
          <p className="text-gray-600 italic">
            "The flexibility of their engagement models allowed us to scale our development team based on project demands. 
            We've saved over 50% in costs while maintaining high-quality standards."
          </p>
          <div className="flex text-yellow-400 mt-4">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>
    </div>

    {/* Final CTA */}
    <div className="mt-12 text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        Ready to Transform Your Business?
      </h3>
      <p className="text-gray-600 mb-8 text-lg">
        Join hundreds of companies that have accelerated their growth with our outsourcing solutions.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
          Start Your Project
        </button>
        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
          Schedule Consultation
        </button>
      </div>
    </div>
  </div>
);

export default OutsourcingBenefits; 