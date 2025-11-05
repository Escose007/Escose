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
    id: '#',
    title: 'Our Offering',
    subItems: [
      {
        id: '/outsourcing',
        title: 'IT Staffing',
      },
      {
        id: '/csd',
        title: 'Custom Software Development',
      },
    ],
  },
  {
    id: '/about',
    title: 'About Us',
  },
  {
    id: '/careers',
    title: 'Career',
  },
  {
    id: '/contact',
    title: 'Contact US',
  },
  {
    id: '/blogs',
    title: 'Blogs',
  },
];

export const footerLinks = [
  {
    title: 'Hire Engineers',
    links: [
      {
        name: 'Backend Engineers',
        link: '/outsourcing',
      },
      {
        name: 'Frontend Engineers',
        link: '/services/react-developers',
      },
      {
        name: 'Full Stack Engineers',
        link: '/services/fullstack-developers',
      },
      {
        name: 'DevOps Engineers',
        link: '/services/devops-engineers',
      },
      {
        name: 'QA Engineers',
        link: '/services/qa-engineers',
      },
      {
        name: 'Data Engineers',
        link: '/services/data-engineers',
      },
      {
        name: 'GenAI Engineers',
        link: '/services/genai-engineers',
      },
      {
        name: 'Android Developers',
        link: '/outsourcing',
      },
      {
        name: 'iOS Developers',
        link: '/outsourcing',
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
        name: 'Delhi: +91 7416857052',
      },
      {
        header: 'For Job',
        name: 'Bengalore: +91 7416857052',
      },
    ],
  },
];

export const services = [
  {
    title: 'IT Staffing & Staff Augmentation',
    icon: 'groups',
    description:
      'Hire pre-vetted engineers in 2 weeks. Staff augmentation, dedicated teams, and contract-to-hire models for Backend, Frontend, Full Stack, DevOps, QA, Data Engineering, GenAI, Android, and iOS roles.',
    img: web_development,
    isPrimary: true,
  },
  {
    title: 'Custom Software Development',
    icon: 'code',
    description:
      'End-to-end development services: web, mobile, cloud, and IoT applications. We build scalable, maintainable products using modern tech stacks.',
    img: web_development,
    isPrimary: false,
  },
];

export const customSoftwareServices = [
  {
    title: 'Cutting-edge Technology Development',
    icon: '🤖',
    description: 'Build next-generation AI-powered solutions with GenAI and agentic workflows that transform business operations.',
    features: ['GenAI Solutions', 'Agentic Workflows'],
    img: python, // Using python icon for AI/GenAI
    details: {
      overview: 'We specialize in building cutting-edge AI solutions that leverage Generative AI and agentic workflows to automate processes, enhance decision-making, and create intelligent systems that learn and adapt.',
      capabilities: [
        'GenAI Solutions: RAG systems, LLM integration, prompt engineering, and AI-powered chatbots',
        'Agentic Workflows: Multi-agent systems, tool orchestration, memory management, and autonomous decision-making',
        'AI Integration: Seamless integration of AI capabilities into existing systems and workflows',
        'Model Training & Fine-tuning: Custom model development and optimization for specific use cases',
        'AI Infrastructure: Scalable AI infrastructure setup with proper monitoring and governance',
      ],
      technologies: ['Python', 'LangChain', 'OpenAI/Anthropic APIs', 'Vector Databases', 'LLMOps', 'TensorFlow/PyTorch'],
      benefits: [
        'Automate complex workflows and reduce manual effort',
        'Enhance decision-making with intelligent insights',
        'Improve customer experiences with AI-powered interactions',
        'Scale AI capabilities across your organization',
      ],
    },
  },
  {
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies.',
    features: ['iOS Development', 'Android Development', 'Cross-platform Apps'],
    img: mobile_app_development,
    details: {
      overview: 'We develop high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms. From native apps to cross-platform solutions, we build scalable, secure, and feature-rich mobile applications.',
      capabilities: [
        'Native iOS Development: Swift, SwiftUI, UIKit, and iOS SDK expertise',
        'Native Android Development: Kotlin, Jetpack Compose, and Android SDK',
        'Cross-platform Development: React Native and Flutter applications',
        'Mobile UI/UX Design: Intuitive, responsive, and platform-specific designs',
        'API Integration: Seamless backend integration and third-party services',
        'App Store Deployment: Complete submission and optimization process',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS SDK', 'Android SDK', 'REST APIs', 'GraphQL'],
      benefits: [
        'Faster time-to-market with cross-platform development',
        'Consistent user experience across iOS and Android',
        'Native performance with optimized code',
        'Regular updates and maintenance support',
      ],
    },
  },
  {
    title: 'Web Development',
    icon: '🌐',
    description: 'Modern, responsive web applications and websites built with React, Vue, Angular, and other cutting-edge frameworks.',
    features: ['Frontend Development', 'Backend Development', 'Full Stack Solutions'],
    img: web_development,
    details: {
      overview: 'We build scalable, high-performance web applications using modern frameworks and best practices. From single-page applications to complex enterprise solutions, we deliver robust web platforms that drive business growth.',
      capabilities: [
        'Frontend Development: React, Vue.js, Angular, and modern JavaScript frameworks',
        'Backend Development: Node.js, Python, Java, and microservices architecture',
        'Full Stack Solutions: End-to-end development from design to deployment',
        'Progressive Web Apps (PWA): Mobile-like experiences in web browsers',
        'E-commerce Solutions: Custom online stores and payment integrations',
        'Enterprise Applications: Scalable solutions for large organizations',
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java', 'TypeScript', 'REST/GraphQL', 'Docker', 'AWS'],
      benefits: [
        'Responsive design for all devices and screen sizes',
        'Fast load times and optimized performance',
        'SEO-friendly architecture for better visibility',
        'Scalable infrastructure to grow with your business',
      ],
    },
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
    description: 'User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.',
    features: ['User Interface Design', 'User Experience Design', 'Prototyping'],
    img: uiux,
    details: {
      overview: 'We create beautiful, intuitive user interfaces that enhance user engagement and drive conversions. Our design process focuses on understanding user needs, conducting research, and iterating on designs to deliver exceptional digital experiences.',
      capabilities: [
        'User Research: User interviews, surveys, and persona development',
        'Wireframing & Prototyping: Low and high-fidelity prototypes',
        'Visual Design: Modern, accessible, and brand-aligned interfaces',
        'Interaction Design: Intuitive user flows and micro-interactions',
        'Usability Testing: User testing and iterative design improvements',
        'Design Systems: Comprehensive design systems and style guides',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Prototyping Tools', 'Design Systems'],
      benefits: [
        'Improved user satisfaction and engagement',
        'Reduced development time with clear design specifications',
        'Better conversion rates through optimized user flows',
        'Consistent brand experience across all touchpoints',
      ],
    },
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
    title: 'Android Developers',
    skills: ['Kotlin', 'Java', 'Android SDK', 'Jetpack', 'Room', 'Retrofit', 'MVVM', 'Coroutines'],
    experience: '2-8 years',
    description: 'Expert Android developers who build native mobile applications with modern Android development practices.',
    img: android,
  },
  {
    title: 'iOS Developers',
    skills: ['Swift', 'Objective-C', 'iOS SDK', 'SwiftUI', 'UIKit', 'Core Data', 'Combine', 'RxSwift'],
    experience: '2-8 years',
    description: 'Skilled iOS developers who create native iPhone and iPad applications using Apple\'s latest technologies.',
    img: ios,
  },
  {
    title: 'DevOps Engineers',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform', 'Ansible'],
    experience: '3-12 years',
    description: 'DevOps experts who optimize deployment pipelines and infrastructure management.',
    img: aws,
  },
  {
    title: 'QA Engineers',
    skills: ['Selenium', 'Cypress', 'Jest', 'Test Automation', 'API Testing', 'Performance Testing', 'JIRA', 'TestRail'],
    experience: '2-8 years',
    description: 'Quality assurance engineers who ensure software reliability through comprehensive testing strategies and automation frameworks.',
    img: node,
  },
  {
    title: 'Data Engineers',
    skills: ['Python', 'SQL', 'Spark', 'Airflow', 'Data Pipelines', 'ETL', 'Big Data', 'Data Warehousing', 'Kafka'],
    experience: '3-10 years',
    description: 'Data engineering specialists who build scalable data infrastructure, pipelines, and analytics platforms.',
    img: python,
  },
  {
    title: 'GenAI Engineers',
    skills: ['LLMs', 'RAG', 'LangChain', 'Vector DBs', 'Prompt Engineering', 'OpenAI', 'Anthropic', 'LLMOps'],
    experience: '3-8 years',
    description: 'Generative AI engineers who build production-ready AI applications, RAG systems, and agentic workflows.',
    img: python,
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
  {
    title: 'GenAI',
    img: ['https://cdn.simpleicons.org/openai/22d3ee'],
    description: {
      header:
        'Generative AI solutions that automate workflows, accelerate development, and augment teams across functions while meeting enterprise-grade security and governance.',
      title: 'Solutions we deliver include:',
      list: [
        `AI Coding Co-pilots: Context-aware code generation, refactoring suggestions, and PR summaries to speed up delivery.`,
        `Requirements → Tests: Convert product requirements into test cases, scenarios, and edge checks to improve quality.`,
        `Knowledge Assistants (RAG): Private, secure chat over your docs, wikis, and tickets with source citations.`,
        `Content Automation: Multi-step workflows for marketing assets, blogs, and localization with review loops.`,
        `Data Extraction & Enrichment: Structured outputs from PDFs, emails, forms, and logs for downstream systems.`,
        `Agentic Automation: Tool orchestration with planners and memory for reliable, repeatable business processes.`,
        `Evaluation & Guardrails: Prompt safety filters, hallucination checks, and red-teaming with measurable KPIs.`,
        `LLMOps/MLOps: Prompt versioning, offline/online evaluations, tracing, and analytics dashboards.`,
        `Secure Deployment: Private/VPC hosting, no data retention, role-based access, and audit trails.`,
      ],
    },
  },
  {
    title: 'Agentic Workflow',
    img: ['https://cdn.simpleicons.org/apacheairflow/22d3ee'],
    description: {
      header:
        'Design and deploy reliable agentic systems that combine tools, planners, and memory to automate complex workflows with safety and observability.',
      title: 'Core capabilities include:',
      list: [
        `Act/Observe Loops: Stepwise tool usage with feedback and guarded execution for predictable outcomes.`,
        `Hierarchical Planning: Break down high-level goals into verifiable subtasks with clear success criteria.`,
        `Memory Layers: Short-term scratchpads and long-term vector/structured stores to maintain context.`,
        `Tooling Ecosystem: Deterministic, idempotent tools with timeouts, retries, and circuit breakers.`,
        `Evaluators & Guardrails: Safety, quality, and hallucination checks before actions are committed.`,
        `Tracing & Analytics: Full observability into prompts, tool calls, and decisions for debugging and audit.`,
        `Deployment Patterns: Budget caps, SLAs, and sandboxed environments for production reliability.`,
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
    id: 'message',
    labelText: 'Additional Requirements',
    fieldType: 'textarea',
    placeholder: 'Describe your project and specific requirements',
  },
];

export const openPositions = [
  {
    title: 'Java Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '3–5 years',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Git'],
    summary: 'Build scalable backend services and APIs using Java and Spring. Collaborate with cross-functional teams to deliver high-quality features.',
    jd: {
      responsibilities: [
        'Design, develop, and maintain backend services using Java and Spring Boot',
        'Build RESTful APIs and integrate with databases (MySQL/PostgreSQL)',
        'Write unit/integration tests and participate in code reviews',
        'Collaborate with frontend, QA, and DevOps to ship high-quality features',
      ],
      requirements: [
        '3–5 years professional Java experience',
        'Solid knowledge of Spring Boot, JPA/Hibernate',
        'Experience with SQL databases and performance tuning basics',
        'Familiarity with Git, CI/CD, Docker is a plus',
      ],
      niceToHave: [
        'Experience with microservices and messaging (Kafka/RabbitMQ)',
        'Cloud exposure (AWS/Azure/GCP)'
      ],
    },
  },
  {
    title: 'Python Developer',
    department: 'Engineering',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '3–5 years',
    skills: ['Python', 'Django/Flask', 'REST APIs', 'PostgreSQL', 'Docker'],
    summary: 'Design and implement robust backend services and integrations using Python frameworks. Focus on reliability, performance, and clean code.',
    jd: {
      responsibilities: [
        'Develop backend services and APIs using Django or Flask',
        'Model relational data and optimize queries on PostgreSQL/MySQL',
        'Ensure code quality with tests, reviews, and CI checks',
        'Work closely with product, design, and frontend teams',
      ],
      requirements: [
        '3–5 years professional Python experience',
        'Strong experience in Django/Flask and building REST APIs',
        'Good understanding of relational databases and ORMs',
        'Docker and basic cloud knowledge preferred',
      ],
      niceToHave: [
        'Experience with Celery, Redis, or async frameworks',
        'Exposure to FastAPI and microservices'
      ],
    },
  },
  {
    title: 'AI/ML Developer',
    department: 'AI & Data',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '4–5 years',
    skills: ['Python', 'Machine Learning', 'Scikit-learn', 'TensorFlow/PyTorch', 'SQL'],
    summary: 'Build, train, and deploy ML models for classification, forecasting, and recommendation with production-grade pipelines.',
    jd: {
      responsibilities: [
        'Design and implement ML models from experimentation to production',
        'Build data pipelines and feature stores with robust validation',
        'Evaluate models with clear metrics and iterate for performance',
        'Collaborate with engineering to deploy and monitor models in prod',
      ],
      requirements: [
        '4–5 years in ML engineering or data science with production delivery',
        'Strong Python and SQL; experience with pandas, numpy, scikit-learn',
        'Deep learning exposure using TensorFlow or PyTorch',
        'Basics of MLOps (versioning, tracking, deployments) are preferred',
      ],
      niceToHave: [
        'Experience with Airflow/Prefect, MLflow/Weights & Biases',
        'Cloud services (AWS/GCP/Azure) for training and serving',
      ],
    },
  },
  {
    title: 'GenAI / Agentic Developer',
    department: 'AI & Data',
    location: 'Remote / India',
    type: 'Full-time',
    experience: '4–5 years',
    skills: ['Python/TypeScript', 'LLMs', 'RAG', 'Vector DBs', 'Prompting'],
    summary: 'Build GenAI apps: RAG assistants, evaluators/guardrails, and multi-agent flows with tool orchestration.',
    jd: {
      responsibilities: [
        'Design RAG pipelines: chunking, embeddings, retrieval, and synthesis',
        'Implement evaluators/guardrails and prompt versioning with analytics',
        'Build agentic workflows with tools, memory, and planners',
        'Ship secure deployments with tracing and cost/latency controls',
      ],
      requirements: [
        '4–5 years in software/ML; 1–2 yrs hands-on with LLM apps',
        'Experience with OpenAI/Anthropic and vector DBs (FAISS/PGVector/Weaviate)',
        'Solid backend skills (Python or TypeScript) and API design',
        'Comfort with evaluations, safety, and observability for LLMs',
      ],
      niceToHave: [
        'Experience with LangChain/LlamaIndex, OpenTelemetry, and model tracing',
        'Knowledge of RLHF, fine-tuning, or synthetic data generation',
      ],
    },
  },
];
