import {
  react,
  vue,
  angular,
  java,
  php,
  python,
  rails,
  android,
  ios,
  flutter,
  jquery,
  ionic,
  wordtress,
  aws,
  azure,
  gcp,
  digitalocean,
  mysql,
  postgresql,
  mongodb,
  sqlite,
  node,
  web_development,
  uiux,
  mobile_app_development,
  iot,
  healthcare,
  education1,
  startup,
  ecommerce,
  hosting,
} from '../assets';

export const navLinks = [
  {
    id: '/',
    title: 'Home',
  },
  {
    id: '/services',
    title: 'Services',
  },
  {
    id: '/blogs',
    title: 'Blogs',
  },
  {
    id: '/aboutus',
    title: 'About Us',
  },
  {
    id: '/outsourcing',
    title: 'Hire Developers',
  },
];

export const footerLinks = [
  {
    title: 'Hire Developers',
    links: [
      {
        name: 'Python Developers',
      },
      {
        name: 'React Developers',
      },
      {
        name: 'Java Developers',
      },
      {
        name: 'Android Developers',
      },
      {
        name: 'Flutter Developers',
      },
      {
        name: 'Full Stack Developers',
      },
      {
        name: 'DevOps Engineers',
      },
    ],
  },
  {
    title: 'Quick links',
    links: [
      {
        name: 'Privacy Policy',
      },
      {
        name: ' Terms & Conditions',
      },
    ],
  },
  {
    title: 'Contact Us',
    description: 'Feel free to drop us a note:',
    links: [
      {
        header: 'For Sales & Business',
        name: 'Delhi: +91 7568288997',
      },
      {
        header: 'For Job',
        name: 'Bengalore: +91 9632071255',
      },
    ],
  },
];

export const services = [
  {
    title: 'UI UX Design',
    icon: 'design_services',
    description:
      "Our goal is to create an interface that integrates the product's  layout, visual appearance and color scheme.",
    img: uiux,
  },
  {
    title: 'Mobile App Development',
    icon: 'developer_mode',
    description:
      'We provide professional Android, IOS, React Native and Flutter development services.',
    img: mobile_app_development,
  },
  {
    title: 'Web Development',
    icon: 'display_settings',
    description:
      'We specialize in creating custom websites that are visually appealing, user-friendly and optimized for search engines.',
    img: web_development,
  },
  {
    title: 'IOT Development',
    icon: 'cloud_download',
    description:
      'We serve in a wide range of industries, including manufacturing, healthcare, transportation, agriculture, smart cities and more.',
    img: iot,
  },
  {
    title: 'Employee Outsourcing',
    icon: 'groups',
    description:
      'Scale your team with our skilled professionals. We provide dedicated developers, designers, and technical experts to accelerate your projects.',
    img: web_development, // Using web_development image as placeholder
  },
];

// Employee Outsourcing Data
export const outsourcingRoles = [
  {
    title: 'Frontend Developers',
    skills: ['React', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass'],
    experience: '2-8 years',
    description: 'Expert frontend developers who create stunning user interfaces and exceptional user experiences.',
    img: react,
  },
  {
    title: 'Backend Developers',
    skills: ['Node.js', 'Python', 'Java', 'PHP', 'C#', 'Ruby', 'Go', 'APIs'],
    experience: '2-10 years',
    description: 'Skilled backend developers who build robust server-side applications and APIs.',
    img: node,
  },
  {
    title: 'Full Stack Developers',
    skills: ['MERN Stack', 'MEAN Stack', 'Django', 'Laravel', 'Spring Boot', 'DevOps'],
    experience: '3-10 years',
    description: 'Versatile full-stack developers who handle both frontend and backend development.',
    img: python,
  },
  {
    title: 'Mobile Developers',
    skills: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Ionic', 'Xamarin'],
    experience: '2-8 years',
    description: 'Mobile app developers who create cross-platform and native mobile applications.',
    img: flutter,
  },
  {
    title: 'DevOps Engineers',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform', 'Ansible'],
    experience: '3-12 years',
    description: 'DevOps experts who optimize deployment pipelines and infrastructure management.',
    img: aws,
  },
  {
    title: 'UI/UX Designers',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing'],
    experience: '2-8 years',
    description: 'Creative designers who craft intuitive user interfaces and delightful user experiences.',
    img: uiux,
  },
];

export const engagementModels = [
  {
    title: 'Dedicated Team',
    description: 'A dedicated team of professionals working exclusively on your project with full commitment.',
    features: ['Full-time commitment', 'Direct communication', 'Flexible team size', 'Long-term partnership'],
    bestFor: 'Large projects, ongoing development, product scaling',
  },
  {
    title: 'Staff Augmentation',
    description: 'Extend your existing team with our skilled professionals to fill specific skill gaps.',
    features: ['Quick integration', 'Skill-specific hiring', 'Flexible duration', 'Cost-effective'],
    bestFor: 'Short-term projects, specific skill requirements, temporary team expansion',
  },
  {
    title: 'Project-Based',
    description: 'Complete project delivery from start to finish with defined scope and timeline.',
    features: ['Fixed scope delivery', 'Milestone-based payments', 'End-to-end responsibility', 'Quality assurance'],
    bestFor: 'Well-defined projects, MVP development, specific deliverables',
  },
  {
    title: 'Hourly Engagement',
    description: 'Flexible hourly engagement for consultation, maintenance, or small development tasks.',
    features: ['Pay per hour', 'Flexible scheduling', 'On-demand availability', 'No long-term commitment'],
    bestFor: 'Consultations, maintenance work, small enhancements, support tasks',
  },
];

export const outsourcingBenefits = [
  {
    title: 'Cost Optimization',
    description: 'Reduce operational costs by up to 60% while maintaining high-quality deliverables.',
    icon: 'savings',
  },
  {
    title: 'Access to Global Talent',
    description: 'Tap into a vast pool of skilled professionals from around the world.',
    icon: 'public',
  },
  {
    title: 'Faster Time-to-Market',
    description: 'Accelerate your development timeline with experienced teams ready to start immediately.',
    icon: 'schedule',
  },
  {
    title: 'Scalability',
    description: 'Scale your team up or down based on project requirements and business needs.',
    icon: 'trending_up',
  },
  {
    title: 'Focus on Core Business',
    description: 'Focus on your core business while we handle the technical development.',
    icon: 'business_center',
  },
  {
    title: 'Risk Mitigation',
    description: 'Reduce project risks with our experienced project management and quality assurance.',
    icon: 'security',
  },
];

export const hiringProcess = [
  {
    step: 1,
    title: 'Requirements Analysis',
    description: 'We analyze your project requirements, technical needs, and team structure.',
    timeframe: '1-2 days',
  },
  {
    step: 2,
    title: 'Talent Matching',
    description: 'Our experts identify and shortlist the best candidates matching your specific requirements.',
    timeframe: '3-5 days',
  },
  {
    step: 3,
    title: 'Interview & Selection',
    description: 'Conduct interviews with shortlisted candidates and select the perfect fit for your team.',
    timeframe: '2-3 days',
  },
  {
    step: 4,
    title: 'Contract & Onboarding',
    description: 'Finalize contracts, NDAs, and onboard your new team members with proper documentation.',
    timeframe: '1-2 days',
  },
  {
    step: 5,
    title: 'Project Kickoff',
    description: 'Start your project with dedicated support, regular communication, and progress tracking.',
    timeframe: '1 day',
  },
];

export const technologies = [
  {
    title: 'frontend',
    tech: [
      { title: 'React', img: react },
      { title: 'Vue', img: vue },
      { title: 'Angular', img: angular },
      { title: 'jquery', img: jquery },
      { title: 'wordtress', img: wordtress },
    ],
  },
  {
    title: 'backend',
    tech: [
      { title: 'Java', img: java },
      { title: 'Rails', img: rails },
      { title: 'Python', img: python },
      { title: 'Php', img: php },
      { title: 'Node', img: node },
    ],
  },
  {
    title: 'mobile',
    tech: [
      { title: 'Android', img: android },
      { title: 'IOS', img: ios },
      { title: 'Flutter', img: flutter },
      { title: 'React Native', img: react },
      { title: 'IONIC', img: ionic },
    ],
  },
  {
    title: 'cloud',
    tech: [
      { title: 'AWS', img: aws },
      { title: 'Azure', img: azure },
      { title: 'Google Cloud', img: gcp },
      { title: 'Digital Ocean', img: digitalocean },
    ],
  },
  {
    title: 'Database',
    tech: [
      { title: 'MySQL', img: mysql },
      { title: 'PostgreSQL', img: postgresql },
      { title: 'mongoDB', img: mongodb },
      { title: 'SQLite', img: sqlite },
    ],
  },
];

export const industries = [
  {
    title: 'Education',
    description: {
      header:
        'An education system app is a software application designed to provide educational content and resources to users through mobile devices such as smartphones and tablets. These apps can be used by students, teachers, and other educational professionals to improve the learning experience and facilitate access to educational materials.',
      title: 'Some features that an education system app may include are:',
      list: [
        `Course Content: The app can provide access to course content such as lectures, assignments, and readings`,
        `Communication: The app can provide a platform for communication between students and teachers, allowing for messaging and discussion forums.`,
        `Progress Tracking: The app can track student progress and provide feedback on their performance.`,
        `Quizzes and Assessments: The app can offer quizzes and assessments to test student understanding and progress.`,
        `Study Materials: The app can provide additional study materials such as flashcards and practice exercises.`,
        `Resource Library: The app can include a resource library of educational materials, including textbooks, videos, and articles.`,
        `Personalization: The app can be personalized to each user's needs and learning style, providing a customized learning experience.`,
        `Overall, an education system app can offer a convenient and accessible way for users to engage with educational content and resources on-the-go, supplementing traditional classroom learning.`,
      ],
    },
    img: [education1],
  },
  {
    title: 'Healthcare',
    description: {
      header: `A healthcare management system is a software solution that is designed to manage various aspects of healthcare operations such as hospitals, clinics, and other healthcare facilities. It is designed to automate administrative tasks and improve the efficiency of the healthcare process.`,
      title: `A healthcare management system typically includes features such as:`,
      list: [
        `Patient Information Management: This module helps in managing patient data such as admissions, medical history, appointments, and personal information.`,
        `Appointment Scheduling: This module helps in scheduling and managing patient appointments, including automated appointment reminders and rescheduling options.`,
        `Electronic Medical Records (EMR): This module helps in managing electronic medical records, including diagnosis, treatment, and medication information.`,
        `Billing and Payment Management: This module helps in managing billing and payment processes, including insurance claims, invoicing, and payment processing.`,
        `Inventory and Supply Chain Management: This module helps in managing inventory and supply chain processes, including stock management, procurement, and distribution.`,
        `Reporting and Analytics: This module provides various reports and analytics on patient satisfaction, operational efficiency, and financial performance.`,
        `Overall, a healthcare management system can help healthcare facilities to streamline their administrative tasks, improve patient care, and enhance operational efficiency. It can also help to reduce errors, increase accuracy, and provide better communication between healthcare providers and patients.`,
      ],
    },
    img: [healthcare],
  },
  {
    title: 'Hosting',
    img: [hosting],
    description: {
      header: `A hosting system is a type of computer system that provides services to allow individuals and organisations to make their websites and web applications accessible via the Internet. Essentially, it is a way to store and serve web content to users who request it.`,
      title: `There are several different types of hosting systems available, including:`,
      list: [
        `Shared Hosting: This is a type of hosting in which multiple websites are hosted on a single server. This is a cost-effective solution for small websites with low traffic.`,
        `Dedicated Hosting: In this type of hosting, the website is hosted on a single server which is dedicated to that website only. It provides a high level of performance and security.`,
        `Virtual Private Server (VPS) Hosting: VPS hosting involves a single physical server being partitioned into multiple virtual servers, each with their own operating system and resources. This provides a balance between the cost-effectiveness of shared hosting and the performance of dedicated hosting.`,

        `Cloud Hosting: This is a type of hosting that uses a network of servers to host websites and web applications. It provides scalability, flexibility and reliability.`,
        `The hosting system is responsible for storing and serving the web content, managing resources, and ensuring that the website or application is accessible to users around the clock. Hosting providers typically offer a range of services, such as server maintenance, security, backup and disaster recovery, and technical support.`,
      ],
    },
  },
  {
    title: 'Startup',
    img: [startup],
    description: {
      header: ` A media system refers to the various channels, platforms, and technologies that are used for the production, distribution, and consumption of media content, such as news, entertainment, and information.`,
      title: `There are several components of a media system, including:`,
      list: [
        `Content production: This involves creating media content, such as news articles, television shows, movies, and podcasts. It can involve a range of professionals, including writers, editors, producers, and actors.`,
        `Content distribution: This involves delivering media content to audiences via various channels, such as television, radio, newspapers, magazines, and the internet. It can also involve various platforms, such as social media, streaming services, and mobile applications.`,
        `Audience reception: This refers to how audiences consume and interact with media content. It can involve reading, watching, listening, sharing, and commenting on content, as well as engaging with other users and communities online.`,
        `Media regulation: This involves the laws, regulations, and policies that govern the production, distribution, and consumption of media content. It can also involve ethical standards and practices, such as journalistic integrity and social responsibility.`,
        `Media systems can have a significant impact on society, as they shape public opinion, influence cultural values, and contribute to political and economic power dynamics. As such, it is important to understand and critically evaluate media systems and their impact on individuals and communities.`,
      ],
    },
  },
  {
    title: 'E-Commerce',
    img: [ecommerce],
    description: {
      header: `An ecommerce system is a type of online platform that allows businesses to conduct commercial transactions over the internet. It typically involves the buying and selling of goods and services, as well as the processing of payments and the management of inventory and shipping. `,
      title: `There are several components of an ecommerce system, including:`,
      list: [
        `Online storefront: This is the front-facing part of the ecommerce system that allows customers to browse products, add items to their cart, and place orders. It typically includes product listings, product descriptions, pricing information, and customer reviews.`,
        `Payment processing: This involves the secure processing of payments from customers, using various payment methods such as credit cards, debit cards, and online payment systems like PayPal or Stripe.`,
        `Order fulfilment: This involves the management of inventory, packaging, and shipping of products to customers. It can involve various fulfilment options, such as dropshipping or self-fulfilment.`,
        `Customer management: This involves managing customer accounts, providing customer support, and collecting feedback from customers to improve the overall ecommerce experience.`,
        `Analytics and reporting: This involves tracking and analysing ecommerce data, such as sales trends, customer behaviour, and website traffic, to make informed business decisions and improve the overall ecommerce strategy.`,
      ],
    },
  },
];

export const contactUsFields = [
  {
    id: 'from_name',
    labelText: 'Name',
    fieldType: 'text',
    isRequired: true,
    placeholder: 'Enter Name',
  },
  {
    id: 'contact_number',
    labelText: 'Contact Number',
    fieldType: 'integer',
    isRequired: true,
    placeholder: 'Enter Contact Number',
  },
  {
    id: 'from_email',
    labelText: 'Email',
    fieldType: 'email',
    isRequired: true,
    placeholder: 'Enter Email',
  },
  {
    id: 'project_type',
    labelText: 'Project Type',
    fieldType: 'text',
    isRequired: false,
    placeholder: 'Enter Project Type',
  },
  {
    id: 'estimated_budget',
    labelText: 'Estimated Budget',
    fieldType: 'text',
    isRequired: false,
    placeholder: 'Enter Estimated Budget',
  },
  {
    id: 'message',
    labelText: 'Message',
    fieldType: 'textarea',
    placeholder: 'Enter Message',
  },
];

export const outsourcingFormFields = [
  {
    id: 'from_name',
    labelText: 'Name',
    fieldType: 'text',
    isRequired: true,
    placeholder: 'Enter Your Name',
  },
  {
    id: 'company_name',
    labelText: 'Company Name',
    fieldType: 'text',
    isRequired: true,
    placeholder: 'Enter Company Name',
  },
  {
    id: 'from_email',
    labelText: 'Email',
    fieldType: 'email',
    isRequired: true,
    placeholder: 'Enter Email',
  },
  {
    id: 'contact_number',
    labelText: 'Contact Number',
    fieldType: 'integer',
    isRequired: true,
    placeholder: 'Enter Contact Number',
  },
  {
    id: 'developer_type',
    labelText: 'Developer Type Needed',
    fieldType: 'text',
    isRequired: true,
    placeholder: 'e.g., Frontend, Backend, Full Stack',
  },
  {
    id: 'team_size',
    labelText: 'Team Size',
    fieldType: 'text',
    isRequired: true,
    placeholder: 'Number of developers needed',
  },
  {
    id: 'project_duration',
    labelText: 'Project Duration',
    fieldType: 'text',
    isRequired: false,
    placeholder: 'Expected project timeline',
  },
  {
    id: 'message',
    labelText: 'Additional Requirements',
    fieldType: 'textarea',
    placeholder: 'Describe your project and specific requirements',
  },
];
