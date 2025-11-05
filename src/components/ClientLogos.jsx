import styles from '../style';

const clientCompanies = [
  "Microsoft", "Amazon", "Google", "Meta",
  "Salesforce", "Oracle", "IBM", "Adobe",
  "Netflix", "Spotify", "Uber", "Airbnb"
];

const ClientLogos = () => {
  return (
    <section className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800`}>
      <div className={`${styles.boxWidth}`}>
        <div className="text-center mb-12" data-animate>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Leading Companies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            500+ companies worldwide trust Escose for their IT staffing and development needs
          </p>
        </div>

        {/* Client Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8" data-animate>
          {clientCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex items-center justify-center hover:border-cyan-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {company.substring(0, 2).toUpperCase()}
                </div>
                <div className="text-xs text-gray-400 mt-1">{company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" data-animate>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">150+</div>
            <div className="text-gray-300 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Client Retention</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
            <div className="text-gray-300 text-sm">Countries Served</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientLogos;


