import { services } from '../constants';
import styles from '../style';

const Service = () => (
  <div
    className={`${styles.flexCenter} flex-col flex-wrap sm:mb-20 mb-6 mt-10`}
  >
    <div className="text-4xl mb-6 blut-text__gradient">OUR SERVICES</div>
    <div
      className={`${styles.flexCenter} text-center text-lg text-dimBlack xl:w-1/2 mb-16`}
    >
      Escose can help you to build applications that automate your business
      processes, improve efficiency, and enhance customer experience. We serve
      numerous domains to transform our client’s Dream into reality.
    </div>
    <ul
      className={`${styles.flexCenter} flex-row justify-between flex-wrap mb-6`}
    >
      {services.map((service) => (
        <li
          className="flex h-60 justify-center flex-col mr-3 w-full sm:w-1/2 md:w-1/3  xl:w-1/5 animate-border md:mb-0 mb-4 md:mb-6 p-6  bg-white border-2 border-dimBlack-200 hover:shadow-xl rounded-lg overflow-hidden "
          key={service.title}
        >
          <div className="w-[60px] h-[60px] hero  mx-auto mb-2">
            <img
              src={service.img}
              alt="service"
              className="object-cover  container"
            />
          </div>
          <div className={`${styles.flexCenter} text-center text-lg `}>
            {service.title}
          </div>
          <div className="text-center text-slate-500">
            {service.description}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Service;
