export const personalInfo = {
  name: "Kishan Patel",
  role: "MERN Stack Developer",
  tagline: "Building responsive, scalable full-stack web applications with clean code & modern UI.",
  location: "Surat, Gujarat, India",
  phone: "+91-9979058639",
  email: "kishanptel07@gmail.com",
  github: "https://github.com/kishanptel",
  githubUsername: "kishanptel",
  summary: "Creative and detail-oriented MERN Stack Developer with hands-on experience building responsive, user-friendly web applications using MongoDB, Express.js, React.js, and Node.js. Seeking an opportunity to apply full stack development skills in a growth-oriented organization.",
  stats: [
    { label: "Core Stack", value: "MERN Stack" },
    { label: "Full Stack Grade", value: "Grade A" },
    { label: "Location", value: "Surat, India" },
    { label: "Status", value: "Available" }
  ]
};

export const strengths = [
  {
    id: "frontend-design",
    title: "Strong Frontend Design",
    description: "Eye for aesthetics and ability to create visually appealing, intuitive user interfaces with modern typography and fluid layouts.",
    icon: "Layout"
  },
  {
    id: "detail-oriented",
    title: "Detail-Oriented",
    description: "Creative thinker who pays attention to every pixel, interaction, responsiveness, and edge-case in user workflows.",
    icon: "Sparkles"
  },
  {
    id: "quick-learner",
    title: "Quick Learner",
    description: "Problem-solving mindset with the ability to adapt and master new technologies, tools, and best engineering practices quickly.",
    icon: "Zap"
  }
];

export const skillsData = [
  {
    category: "Frontend",
    icon: "Code",
    description: "Modern, responsive client application development",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive Design", "UI/UX Design"]
  },
  {
    category: "Backend",
    icon: "Server",
    description: "Server architecture, APIs & database management",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "Database Design", "CRUD Operations", "JWT Auth"]
  },
  {
    category: "Tools & Practices",
    icon: "Wrench",
    description: "Development tools, cloud services & version control",
    skills: ["Git", "GitHub", "VS Code", "npm", "Cloudinary", "Nodemailer", "Vercel Deployment", "Postman", "Problem Solving"]
  }
];

export const projectsData = [
  {
    id: "cnc-cake-shop",
    title: "CNC Cake Shop (Cacao & Crumb)",
    badge: "Full-Stack MERN E-Commerce",
    description: "Built a full-stack MERN e-commerce application with separate customer and admin dashboards and JWT-based secure authentication. Developed RESTful APIs for product, user, and cart management; integrated Cloudinary for image uploads and Nodemailer for email notifications.",
    image: "/images/cacao&crumb_website.png",
    liveUrl: "https://cnc-frontend-sage.vercel.app/",
    adminUrl: "https://cnc-admin-five.vercel.app/",
    github: "https://github.com/kishanptel/cnc-frontend",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Nodemailer", "Vercel"],
    highlights: [
      "Full-stack MERN e-commerce platform with customer storefront and separate admin dashboard",
      "JWT-based secure authentication and role-based authorization controls",
      "RESTful APIs for comprehensive product catalog, user profiles, and cart management",
      "Cloudinary integration for dessert media uploads & Nodemailer automated order email alerts",
      "Responsive shopping cart UI, contact form, and zero-downtime Vercel deployment"
    ]
  },
  {
    id: "theblissco",
    title: "theblissco Flower & Craft Shop",
    badge: "MERN E-Commerce & Custom Builder",
    description: "Built a full-stack MERN e-commerce application for handcrafted pipe cleaner flowers with separate customer storefront and role-based admin dashboard. Developed an interactive DIY Flower Bouquet Builder allowing real-time selection of stems, wrapping paper, ribbon styles, and dynamic price calculations.",
    image: "/images/theblissco_website.png",
    liveUrl: "https://tbc-frontend-rho.vercel.app/",
    adminUrl: "https://tbc-admin-one.vercel.app/",
    github: "https://github.com/kishanptel",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Formik", "Cloudinary", "Nodemailer", "WhatsApp Widget", "Vercel"],
    highlights: [
      "Interactive DIY Flower Bouquet Builder with real-time stem selection, wrapping options, and live price calculation",
      "Separate customer storefront and role-based admin dashboard for inventory management",
      "RESTful APIs for order processing, user management, and automated email notifications using Nodemailer",
      "Cloudinary integration for media storage & floating WhatsApp chat widget for instant customer inquiries",
      "Deployed frontend, admin panel, and backend serverless architecture seamlessly on Vercel"
    ]
  },
  {
    id: "portfolio-portal",
    title: "Kishan Patel Portfolio & Admin Portal",
    badge: "Full-Stack MERN & Management Portal",
    description: "Developed a modern full-stack portfolio with an interactive client interface and a dedicated administrative management dashboard. Integrates MongoDB Atlas for direct cloud storage of contact inquiries, JWT-based secure admin authentication, unread/read message filtering, and serverless backend API deployment on Vercel.",
    image: "/images/portfolio_website.png",
    liveUrl: "https://portfolio-kishan-patel.vercel.app/",
    adminUrl: "https://portfolio-admin-zeta-one.vercel.app/",
    github: "https://github.com/kishanptel",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT Auth", "REST APIs", "Formik", "Vite", "Vercel"],
    highlights: [
      "Full-stack MERN portfolio platform with public client storefront and dedicated admin management dashboard",
      "MongoDB Atlas cloud database integration with zero client-side caching for secure inquiry storage",
      "JWT-authenticated admin portal for real-time message moderation, status updates, and direct email responses",
      "Search, filter tabs, and responsive counter metrics for unread, read, and archived messages",
      "Mobile-first responsive interface with custom theme tokens, micro-animations, and fast SPA routing"
    ]
  }
];

export const experienceData = [
  {
    id: "amazon-supervisor",
    role: "Amazon Supervisor (STWB)",
    company: "Pavan Logistics",
    period: "2024 – 2025",
    type: "Logistics & Operations",
    description: "Supervised daily warehouse operations and team coordination. Managed shipment handling, inventory tracking, and ensured smooth workflow and timely dispatch processes."
  }
];

export const educationData = [
  {
    id: "fullstack-cert",
    degree: "Full Stack Web Development",
    institution: "Easyskill Career Academy, Adajan",
    period: "Completed July 2026",
    grade: "Grade A",
    description: "Comprehensive practical training in MERN stack web development, REST API engineering, frontend state architecture, and MongoDB database management."
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "SDJ College, VNSGU University, Surat",
    period: "2023 – 2025",
    grade: "CGPA: 6.97",
    description: "Core computer science fundamentals, data structures, database management systems, and modern web technologies."
  }
];
