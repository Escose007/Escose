import styles from '../style';
import { escose_logo } from '../assets';
import { footerLinks } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col text-white`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <Link to="/" className="mb-6">
          <img
            src={escose_logo}
            alt="escose"
            className="w-[266px] h-[72.14px] object-contain filter brightness-150 hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
        <p className={`${styles.paragraph} mt-4 max-w-[312px] text-gray-300 leading-relaxed`}>
          Transforming ideas into digital reality with innovative solutions and global talent.
          Your trusted partner for complete digital transformation.
        </p>
        
        {/* Social Links */}
        <div className="flex mt-6 gap-4">
          {[
            { icon: '📧', label: 'Email', link: 'mailto:info@escose.com' },
            { icon: '📱', label: 'Phone', link: 'tel:+917568288997' },
            { icon: '💬', label: 'WhatsApp', link: 'https://wa.me/917568288997' },
            { icon: '💼', label: 'LinkedIn', link: 'https://linkedin.com/company/escose' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50"
              title={social.label}
            >
              <span className="text-lg">{social.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-cyan-300 mb-4">
              {footerlink.title}
            </h4>
            {footerlink.description && (
              <p className="font-poppins font-normal text-[14px] leading-[20px] text-gray-300/90 mb-4">
                {footerlink.description}
              </p>
            )}
            <ul className="list-none">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[24px] text-gray-300/90 hover:text-cyan-300 cursor-pointer transition-colors duration-300 ${
                    index !== footerlink.links.length - 1 ? 'mb-3' : 'mb-0'
                  }`}
                >
                  {link.header && (
                    <div className="font-semibold text-slate-100 mb-1">{link.header}</div>
                  )}
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        {/* Quick Actions */}
        <div className="flex flex-col ss:my-0 my-4 min-w-[200px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-cyan-400 mb-4">
            Quick Actions
          </h4>
          <div className="space-y-3">
            <Link
              to="/outsourcing"
              className="block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm text-center"
            >
              Hire Developers
            </Link>
            <Link
              to="/services"
              className="block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-cyan-400/20">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-slate-400">
        Copyright Ⓒ 2024 Escose Technologies. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 gap-6">
        <p className="font-poppins font-normal text-[14px] leading-[27px] text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors duration-300">
          Privacy Policy
        </p>
        <p className="font-poppins font-normal text-[14px] leading-[27px] text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors duration-300">
          Terms & Conditions
        </p>
        <p className="font-poppins font-normal text-[14px] leading-[27px] text-slate-400 hover:text-cyan-300 cursor-pointer transition-colors duration-300">
          Cookie Policy
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
