import { outsourcingRoles } from '../constants';
import styles from '../style';

const OutsourcingRoles = () => (
  <div className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10`}>
    <div className="text-center mb-16">
      <h2 className="text-5xl mb-6 blut-text__gradient font-bold">Available Roles</h2>
      <p className={`${styles.paragraph} text-center text-xl text-dimBlack xl:w-2/3 mx-auto`}>
        Choose from our pool of experienced professionals across various technologies and domains. 
        Each role comes with pre-vetted candidates ready to contribute to your projects immediately.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {outsourcingRoles.map((role, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
        >
          {/* Image/Icon Section */}
          <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
            <img
              src={role.img}
              alt={role.title}
              className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {role.title}
            </h3>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {role.experience}
              </span>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {role.description}
            </p>

            {/* Skills Section */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                Key Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {role.skills.slice(0, 4).map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
                {role.skills.length > 4 && (
                  <span className="text-xs text-blue-600 font-medium">
                    +{role.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                Hire Now
              </button>
              <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Call to Action */}
    <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 w-full">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        Don't See Your Required Role?
      </h3>
      <p className="text-gray-600 mb-6 text-lg">
        We have access to a vast network of professionals. Let us know your specific requirements and we'll find the perfect match for your project.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
        Request Custom Role
      </button>
    </div>
  </div>
);

export default OutsourcingRoles; 