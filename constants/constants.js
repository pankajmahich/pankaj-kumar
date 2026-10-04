/**
 * Centralized Portfolio Data for Pankaj Kumar
 * Synchronized with https://portfolio-1lzi.vercel.app/
 * @type {import('../types/portfolio').PortfolioData}
 */
export const portfolioData = {
  // 1. Settings & Feature Switches
  settings: {
    enableCommandPalette: true,
    enableTestimonials: false, // Set to true whenever you want to display endorsements
    enableServices: true,
    enableStats: true,
    enableExperience: true,
    enable3DHero: true,
  },

  // 2. Personal Profile Information
  personal: {
    name: "Pankaj Kumar",
    role: "Full-Stack Web & AI Automation Developer",
    tagline: "Building scalable full-stack web applications and intelligent AI workflow automations.",
    shortBio: "Computer Science and Engineering student with hands-on experience in MERN stack development and AI workflow automation using n8n. Passionate about building scalable web applications and automated digital pipelines.",
    email: "pankajmahich180@gmail.com",
    phone: "+91 97728 06652",
    location: "Udaipur, Rajasthan, India",
    availability: {
      status: "Available for Web Development & AI Automation Projects",
      isAvailable: true,
    },
    resumeUrl: "https://drive.google.com/file/d/1Msd-5d7U7YTGZqZ1VvX_HPYC7JJwV4cH/view?usp=sharing",
    profileImage: "/images/pankaj.jpg",
    avatarFallback: "PK",
  },

  // 3. Social & Professional Profiles
  socialLinks: {
    github: "https://github.com/pankajmahich",
    linkedin: "https://www.linkedin.com/in/pankaj-kumar-4a51362a4/",
  },

  // 4. Hero Section Configuration
  hero: {
    badge: "Available for Web Development & AI Automation Projects",
    greeting: "Hello, I'm",
    headlinePrefix: "Engineering",
    headlineHighlight: "Modern Web & AI Automation",
    headlineSuffix: "Architectures",
    description: "Computer Science Engineering student crafting robust full-stack web applications and autonomous AI workflow pipelines with n8n and OpenAI APIs.",
    primaryCta: {
      text: "Explore Projects",
      href: "#projects",
    },
    secondaryCta: {
      text: "Get in Touch",
      href: "#contact",
    },
  },

  // 5. About Section
  about: {
    title: "About Me",
    subtitle: "Computer Science and Engineering student passionate about scalable web architecture and workflow automation.",
    paragraphs: [
      "I am Pankaj Kumar, a Computer Science Engineering student based in Udaipur, Rajasthan, India. My journey in development is driven by a curiosity for how data flows and how systems can be interconnected to save time and scale.",
      "From building responsive, real-time user interfaces with React and Tailwind CSS to configuring complex workflows with n8n that leverage Large Language Models, I love working across the entire spectrum of modern development.",
      "My goal is to construct applications that are not only visual masterpieces but also highly automated, resilient, and secure.",
    ],
    highlights: [
      { label: "Education", value: "B.Tech CSE (2022–2026), Pacific University" },
      { label: "Full Stack", value: "React.js, Node.js, Express, MongoDB" },
      { label: "AI Workflows", value: "n8n, OpenAI API, Automation Pipelines" },
      { label: "Real-Time", value: "Socket.io, REST APIs, WebSockets" },
    ],
  },

  // 6. Key Metrics / Stats
  stats: [
    { label: "Completed Projects", value: "10+" },
    { label: "Tech Stack Tools", value: "15+" },
    { label: "Automation Workflows", value: "20+" },
    { label: "Graduation Year", value: "2026" },
  ],

  // 7. Skills & Tech Stack Grouped by Category
  skills: {
    "Frontend Development": [
      { name: "React.js", level: "Expert", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: "Expert", icon: "FileCode" },
      { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "Layout" },
      { name: "Bootstrap", level: "Proficient", icon: "Layers" },
    ],
    "Backend & Database": [
      { name: "Node.js", level: "Expert", icon: "Server" },
      { name: "Express.js", level: "Expert", icon: "Cpu" },
      { name: "MongoDB", level: "Expert", icon: "Database" },
      { name: "MySQL", level: "Proficient", icon: "Database" },
      { name: "Socket.io", level: "Proficient", icon: "Network" },
    ],
    "AI & Automation": [
      { name: "n8n Workflow Automation", level: "Expert", icon: "Workflow" },
      { name: "OpenAI API & LLMs", level: "Expert", icon: "Sparkles" },
      { name: "REST APIs", level: "Expert", icon: "Globe" },
      { name: "WordPress & Webhooks", level: "Proficient", icon: "Zap" },
    ],
    "Languages & Tools": [
      { name: "C / C++", level: "Proficient", icon: "Terminal" },
      { name: "Python", level: "Intermediate", icon: "Code" },
      { name: "Git & GitHub", level: "Expert", icon: "GitBranch" },
      { name: "Docker & VS Code", level: "Proficient", icon: "Container" },
    ],
  },

  // 8. Experience Timeline
  experience: [
    {
      company: "Deqteq AI Technologies",
      role: "AI Automation Intern | n8n Workflow Developer",
      period: "April 2026 — June 2026",
      type: "Internship",
      location: "Udaipur, Rajasthan, India",
      description: "Developed AI-powered automated workflow pipelines, content generators, and customer lead engagement systems using n8n.",
      responsibilities: [
        "Built AI-powered WordPress blog automation workflows using n8n and OpenAI APIs.",
        "Developed automated lead generation pipelines integrating Google Sheets and Gmail APIs.",
        "Created automated social media and Instagram engagement workflows.",
        "Built multi-channel email campaign and automated lead follow-up pipelines.",
      ],
      technologies: ["n8n", "OpenAI API", "WordPress API", "Gmail API", "Google Sheets", "Docker", "Git"],
    },
    {
      company: "CodSoft Virtual Internship",
      role: "Frontend Development Intern",
      period: "May 2025 — June 2025",
      type: "Internship",
      location: "Remote, India",
      description: "Built responsive web applications, interactive landing pages, and component-driven user interfaces.",
      responsibilities: [
        "Developed responsive portfolio websites and high-converting landing pages.",
        "Built fluid UI components using modern HTML, CSS, JavaScript, and Bootstrap.",
        "Implemented interactive clientside features and state handling.",
        "Managed collaborative version control workflows using Git and GitHub.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Git", "GitHub"],
    },
  ],

  // 9. Services / What I Do
  services: [
    {
      title: "MERN Stack Web Development",
      description: "End-to-end development of modern, highly responsive web apps using React, Node.js, Express, MongoDB, and secure authentication.",
      icon: "Code",
      features: [
        "React & Component Architecture",
        "REST API Development",
        "MongoDB Database Modeling",
        "JWT & Security Protocols",
      ],
    },
    {
      title: "n8n & AI Workflow Automation",
      description: "Autonomous business workflows, OpenAI API pipelines, automated lead generation, and multi-app integrations.",
      icon: "Boxes",
      features: [
        "n8n Automation Pipelines",
        "OpenAI API & LLM Workflows",
        "Google Workspace & Gmail Automation",
        "Webhook & API Integrations",
      ],
    },
    {
      title: "Frontend Engineering & UI Clones",
      description: "Pixel-perfect web interfaces, responsive layouts with Tailwind CSS, and interactive state management.",
      icon: "Gauge",
      features: [
        "Responsive Mobile-First Design",
        "Real-Time Socket.io Apps",
        "Clean Component Architecture",
        "Performance Optimization",
      ],
    },
  ],

  // 10. Featured Projects Showcase
  projects: [
    {
      id: "thinkboard-notes",
      title: "ThinkBoard - Notes CRUD App",
      category: "Full Stack",
      featured: true,
      description: "Full-stack note-taking productivity application with real-time updates, secure authentication, and responsive cloud storage.",
      problemSolved: "Engineered real-time note synchronization and JWT security with zero layout latency.",
      image: "/images/projects/thinkboard.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "JWT"],
      liveUrl: "https://thinkboard-notes.vercel.app",
      githubUrl: "https://github.com/pankajmahich",
    },
    {
      id: "realtime-chat-app",
      title: "Real-Time Chat Application",
      category: "Full Stack",
      featured: true,
      description: "Full-stack instant messaging application with online presence tracking, room channels, and global state management.",
      problemSolved: "Delivered sub-millisecond real-time chat with Socket.io, Zustand, and secure auth.",
      image: "/images/projects/chat_app.png",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS", "Zustand", "DaisyUI"],
      liveUrl: "https://pankajchat.vercel.app",
      githubUrl: "https://github.com/pankajmahich",
    },
    {
      id: "sundown-studio-clone",
      title: "Sundown Studio Clone",
      category: "Frontend Clones",
      featured: true,
      description: "Creative agency studio website replica featuring ultra-smooth inertia scrolling, canvas hover effects, and modern motion design.",
      problemSolved: "Recreated award-winning creative studio animations with GSAP and Locomotive Scroll.",
      image: "/images/projects/sundown.png",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger", "Locomotive Scroll"],
      liveUrl: "https://sundown-clone.vercel.app",
      githubUrl: "https://github.com/pankajmahich",
    },
  ],

  // 11. Testimonials
  testimonials: [],

  // 12. Contact Form & Direct Inquiries
  contact: {
    title: "Let's Connect & Collaborate",
    subtitle: "Have an exciting project, an internship opportunity, or a developer role? Feel free to reach out and I will reply promptly.",
    formLabels: {
      name: "Your Name",
      email: "Your Email Address",
      subject: "Subject",
      message: "Your Message",
      submitButton: "Send Message",
      sendingButton: "Transmitting...",
      successMessage: "Thank you! Your message has been dispatched successfully. Pankaj will contact you soon.",
      errorMessage: "Transmission error. Please try again or email me directly.",
    },
  },
};
