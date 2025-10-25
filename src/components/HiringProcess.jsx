import { hiringProcess } from '../constants';
import styles from '../style';

const HiringProcess = () => {
  // Scratch images for each hiring process step
  const processImages = [
    {
      step: 1,
      image: (
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="text-white text-2xl">📋</div>
        </div>
      )
    },
    {
      step: 2,
      image: (
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="text-white text-2xl">🎯</div>
        </div>
      )
    },
    {
      step: 3,
      image: (
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="text-white text-2xl">👥</div>
        </div>
      )
    },
    {
      step: 4,
      image: (
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="text-white text-2xl">📝</div>
        </div>
      )
    },
    {
      step: 5,
      image: (
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="text-white text-2xl">🚀</div>
        </div>
      )
    }
  ];

  return (
    <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10`}>
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-6 blut-text__gradient font-bold">Our Hiring Process</h2>
        <p className={`${styles.paragraph} text-center text-xl text-dimBlack xl:w-2/3 mx-auto`}>
          Get your perfect team members in just 7-10 days with our streamlined hiring process. 
          We ensure quality, speed, and the right cultural fit for your organization.
        </p>
      </div>

      {/* Process Timeline */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          {hiringProcess.map((step, index) => {
            const stepImage = processImages.find(img => img.step === step.step);
            return (
              <div key={index} className="relative flex items-center mb-12">
                {/* Step Number Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
                  {step.step}
                </div>
                
                {/* Content - Alternating sides */}
                <div className={`flex w-full ${index % 2 === 0 ? 'justify-start pr-12' : 'justify-end pl-12'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      {/* Process Image */}
                      <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                        {stepImage?.image}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {step.timeframe}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Summary */}
      <div className="w-full mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Process Highlights</h3>
          <p className="text-gray-600">What makes our hiring process efficient and reliable</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-semibold text-gray-800 mb-2">Fast Turnaround</h4>
            <p className="text-gray-600 text-sm">Complete hiring process in just 7-10 days</p>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-semibold text-gray-800 mb-2">Perfect Matching</h4>
            <p className="text-gray-600 text-sm">AI-powered candidate matching algorithm</p>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-3">🔍</div>
            <h4 className="font-semibold text-gray-800 mb-2">Thorough Vetting</h4>
            <p className="text-gray-600 text-sm">Technical and cultural fit assessment</p>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-md">
            <div className="text-4xl mb-3">📞</div>
            <h4 className="font-semibold text-gray-800 mb-2">Ongoing Support</h4>
            <p className="text-gray-600 text-sm">24/7 dedicated account management</p>
          </div>
        </div>
      </div>

      {/* Success Guarantee */}
      <div className="w-full mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="text-center">
          <div className="text-5xl mb-4">🛡️</div>
          <h3 className="text-3xl font-bold mb-4">Success Guarantee</h3>
          <p className="text-lg mb-6 text-green-100">
            We're confident in our hiring process. If you're not satisfied with your hire within the first 30 days, 
            we'll provide a replacement at no additional cost.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <div className="font-bold text-lg">30-Day</div>
              <div className="text-sm">Replacement Guarantee</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <div className="font-bold text-lg">No Risk</div>
              <div className="text-sm">Trial Period</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
              <div className="font-bold text-lg">100%</div>
              <div className="text-sm">Money Back</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full mt-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3">How quickly can I get started?</h4>
            <p className="text-gray-600">
              You can get started immediately. Our initial consultation takes 1-2 days, and we typically have candidates ready for interviews within 3-5 days.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3">What if the candidate doesn't work out?</h4>
            <p className="text-gray-600">
              We offer a 30-day replacement guarantee. If you're not satisfied with your hire, we'll provide a replacement candidate at no additional cost.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3">Can I interview the candidates?</h4>
            <p className="text-gray-600">
              Absolutely! You have full control over the interview process. We facilitate technical and cultural fit interviews based on your preferences.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3">What about time zone differences?</h4>
            <p className="text-gray-600">
              We have professionals across different time zones. We ensure overlap hours that work for your team's collaboration and communication needs.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Start Your Hiring Process?
        </h3>
        <p className="text-gray-600 mb-8 text-lg">
          Let's discuss your requirements and get you the perfect team members in just 7-10 days.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
          Start Hiring Process
        </button>
      </div>
    </div>
  );
};

export default HiringProcess; 