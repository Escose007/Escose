import { engagementModels } from '../constants';
import styles from '../style';

const EngagementModels = () => (
  <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10`}>
    <div className="text-center mb-16">
      <h2 className="text-5xl mb-6 blut-text__gradient font-bold">Engagement Models</h2>
      <p className={`${styles.paragraph} text-center text-xl text-dimBlack xl:w-2/3 mx-auto`}>
        Choose the engagement model that best fits your project requirements and business goals. 
        We offer flexible options to ensure maximum value and efficiency for your investments.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
      {engagementModels.map((model, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
            <p className="text-blue-100">{model.description}</p>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">✨</span>
                Key Features
              </h4>
              <ul className="space-y-2">
                {model.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-3 text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Best For */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Best For
              </h4>
              <p className="text-gray-600 bg-gray-50 p-3 rounded-lg italic">
                {model.bestFor}
              </p>
            </div>

            {/* Action Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Choose This Model
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Comparison Section */}
    <div className="mt-16 w-full">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
          <h3 className="text-3xl font-bold text-center">Quick Comparison</h3>
          <p className="text-center text-gray-300 mt-2">Choose the right model for your needs</p>
        </div>
        
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="pb-4 text-gray-800 font-semibold">Model</th>
                  <th className="pb-4 text-gray-800 font-semibold">Duration</th>
                  <th className="pb-4 text-gray-800 font-semibold">Control</th>
                  <th className="pb-4 text-gray-800 font-semibold">Cost</th>
                  <th className="pb-4 text-gray-800 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 font-medium text-blue-600">Dedicated Team</td>
                  <td className="py-4 text-gray-600">Long-term</td>
                  <td className="py-4 text-gray-600">High</td>
                  <td className="py-4 text-gray-600">$$</td>
                  <td className="py-4 text-gray-600">Large projects</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 font-medium text-blue-600">Staff Augmentation</td>
                  <td className="py-4 text-gray-600">Flexible</td>
                  <td className="py-4 text-gray-600">Medium</td>
                  <td className="py-4 text-gray-600">$</td>
                  <td className="py-4 text-gray-600">Skill gaps</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 font-medium text-blue-600">Project-Based</td>
                  <td className="py-4 text-gray-600">Fixed</td>
                  <td className="py-4 text-gray-600">Low</td>
                  <td className="py-4 text-gray-600">$$</td>
                  <td className="py-4 text-gray-600">Defined scope</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 font-medium text-blue-600">Hourly</td>
                  <td className="py-4 text-gray-600">Very flexible</td>
                  <td className="py-4 text-gray-600">High</td>
                  <td className="py-4 text-gray-600">$</td>
                  <td className="py-4 text-gray-600">Consultation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    {/* Contact CTA */}
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Need Help Choosing the Right Model?
      </h3>
      <p className="text-gray-600 mb-6">
        Our experts can help you select the perfect engagement model for your specific requirements.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
        Schedule a Consultation
      </button>
    </div>
  </div>
);

export default EngagementModels; 