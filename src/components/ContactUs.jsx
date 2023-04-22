import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from '../style';
import { contactUsFields } from '../constants';
import Input from '../pureComponents/Input';
import Button from '../pureComponents/Button';

const ContactUs = ({ handleSuccessToster }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_z2djj1k',
        'template_key7wtr',
        form.current,
        'user_OQDlxm04mac90RvzQrEsi'
      )
      .then(
        () => {
          form.current.reset();
          handleSuccessToster(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact-us-form"
      className={`${styles.flexCenter} ${styles.paddingY} ${styles.boxWidth} `}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <ul className="flex-[1] flex flex-col justify-start mr-10">
          {[
            { title: 'location', value: 'Bengalore, India' },
            { title: 'phone', value: '+91 7568288997' },
            { title: 'Email', value: 'info@escose.com' },
          ].map((item) => (
            <li key={item.title} className="mb-10">
              <h2 className={`${styles.heading3} capitalize`}>{item.title}</h2>
              <p className={`${styles.paragraph}`}>{item.value}</p>
            </li>
          ))}
        </ul>
        <div className="flex-[2] w-full flex flex-col md:flex-row justify-between flex-wrap md:mt-0 mt-10">
          <form
            className={`flex flex-col w-full`}
            ref={form}
            onSubmit={sendEmail}
          >
            {contactUsFields.map((field) => (
              <Input
                key={field.id}
                labelText={field.labelText}
                labelFor={field.id}
                id={field.id}
                name={field.id}
                type={field.fieldType}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                fieldType={field.fieldType}
              />
            ))}
            <Button text={'Submit'} type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
