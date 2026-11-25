export const portfolioData = {
  personal: {
    firstName: "Tushar",
    lastName: "Patel",
    role: "Full-stack Developer",
    tagline: "My goal is to write maintainable, clean and understandable code so development is scalable, efficient, and enjoyable.",
    bio: "I'm a Full Stack (MERN) Developer passionate about building modern, scalable, and user-friendly web applications.",
    location: "Bargarh, Odisha, India",
    postalCode: "768045",
    email: "tusharpatel20050523@gmail.com",
    status: "Available for hire",
    resumeUrl: "assets/pdf/Tushar-cv.pdf",
    portraitImg: "assets/img/tushar-perfil.png",
    aboutImg: "assets/img/tushar-about.png"
  },

  socials: [
    {
      name: "Github",
      label: "Github",
      url: "https://github.com/tusr23",
      icon: "github"
    },
    {
      name: "Linkedin",
      label: "in Linkedin",
      url: "https://www.linkedin.com/in/tusr23/",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      label: "Twitter / X",
      url: "https://x.com/tusr_ptel",
      icon: "twitter"
    },
    {
      name: "WhatsApp",
      label: "WhatsApp",
      url: "https://wa.me/917848092392?text=Hi%20Tushar%2C%20I%20checked%20out%20your%20Portfolio%20and%20wanted%20to%20connect%20with%20you!",
      icon: "whatsapp"
    },
    {
      name: "Instagram",
      label: "Instagram",
      url: "https://www.instagram.com/tusr.ptel",
      icon: "instagram"
    }
  ],

  bentoSkills: {
    frontend: {
      title: "Front-end Development",
      tags: "JavaScript (ES6+) / Kotlin / HTML5 / CSS3 / React.js / Tailwind CSS / Bootstrap / Context API / Responsive Design"
    },
    tools: {
      title: "Developer Tools",
      tags: "Git / GitHub / VS Code / Android Studio / Postman / Vite / npm"
    },
    backend: {
      title: "Back-end Development",
      tags: "Node.js / Express.js / Next.js / RESTful APIs / JSON / MongoDB (NoSQL) / MySQL / SQLite"
    },
    coreComponents: {
      title: "Core Components",
      tags: "Full Stack Web Development / Object-Oriented Programming (OOP) / Data Structures & Algorithms (DSA)"
    },
    note: "Some of my favorite technologies, topics, or tools that I worked with"
  },

  workExperience: [
    {
      id: "college",
      datePrimary: "2023 - 2027",
      dateSecondary: "Pursuing (B.Tech)",
      company: "Centurion University of Technology & Management",
      companyTag: "Bhubaneswar, Odisha",
      role: "Bachelor of Technology (B.Tech)",
      stack: "Computer Science & Engineering",
      link: "https://cutm.ac.in/",
      linkLabel: "University",
      active: true
    },
    {
      id: "plus2",
      datePrimary: "2020 - 2022",
      dateSecondary: "+2 Science",
      company: "Krishna Vikash Higher Secondary School",
      companyTag: "Bargarh, Odisha",
      role: "Higher Secondary Education (12th)",
      stack: "Science, Mathematics & Computing",
      link: "https://krishnavikash.com/",
      linkLabel: "College Website",
      active: false
    },
    {
      id: "schooling",
      datePrimary: "2018 - 2020",
      dateSecondary: "10th Board",
      company: "Panchayat (Govt) High School",
      companyTag: "Kandapala, Bargarh, Odisha",
      role: "Secondary School Examination (10th)",
      stack: "Science, Mathematics & Foundational Studies",
      active: false
    }
  ],

  projects: [
    {
      id: "twinmarket",
      num: "01",
      title: "TwinMarket AI — Market Simulation Platform",
      subtitle: "Web",
      category: "web",
      featured: true,
      badge: "Full-Stack SaaS Platform",
      description: "Advanced business simulation & market intelligence engine featuring real-time KPIs, pricing elasticity simulator, and game-theoretic competitor stress testing.",
      image: "assets/img/p1-pc.png",
      technologies: ["React.js", "Tailwind CSS", "Recharts", "Framer Motion"],
      liveUrl: "https://twin-market.vercel.app",
      githubUrl: "https://github.com/tusr23/TwinMarket",
      caseStudy: {
        tagline: "AI Market Simulation & Microeconomic Decision Engine",
        overview: "TwinMarket AI is a comprehensive business simulation dashboard built for entrepreneurs and market analysts to stress test pricing strategies, simulate customer demand curves, and forecast macroeconomic market shifts in real-time.",
        architecture: "Engineered using React.js and Tailwind CSS with stateful microeconomic formula solvers. Leverages Recharts for responsive SVG elasticity curves and interactive metric heatmaps.",
        keyFeatures: [
          "Interactive Pricing Elasticity Curve & Price-Demand Simulators",
          "Real-Time Revenue, Margin, and Profit KPI Heatmaps",
          "Game-Theoretic Competitor Stress Testing Matrix",
          "Exportable PDF/JSON Market Forecast Summaries"
        ]
      }
    },
    {
      id: "taskflow",
      num: "02",
      title: "TaskFlow — Modern To-Do SaaS App",
      subtitle: "App",
      category: "app",
      featured: true,
      badge: "React & Tailwind SaaS",
      description: "Modern task management dashboard featuring full CRUD operations, status workflows, priority tags, search, filtering, and instant local persistence.",
      image: "assets/img/p2-pc.png",
      technologies: ["React.js", "Tailwind CSS", "Vite", "LocalStorage"],
      liveUrl: "https://to-do-nine-ochre.vercel.app/",
      githubUrl: "https://github.com/tusr23/To-Do",
      caseStudy: {
        tagline: "Productivity & Workflow Acceleration App",
        overview: "TaskFlow solves task paralysis by providing a clean, distraction-free productivity environment with instant local caching, priority sorting, and agile column workflows.",
        architecture: "Built with Vite and React.js, styled using Tailwind CSS utility classes, utilizing optimized custom hooks for state synchronization and zero latency LocalStorage caching.",
        keyFeatures: [
          "Full CRUD task management with priority badges",
          "Real-time category filtering (All, Completed, Pending)",
          "Instant keyword search indexing",
          "Local persistence with zero external server dependencies"
        ]
      }
    },
    {
      id: "analog-clock",
      num: "03",
      title: "Modern Analog Clock & Chronograph",
      subtitle: "Web",
      category: "web",
      featured: true,
      badge: "JavaScript Physics Engine",
      description: "Interactive analog clock with smooth continuous second hand motion, dynamic theme shifts, and custom glassmorphism aesthetics.",
      image: "assets/img/p3-pc.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Animation"],
      liveUrl: "https://analog-clock-delta-vert.vercel.app/",
      githubUrl: "https://github.com/tusr23/analog-clock",
      caseStudy: {
        tagline: "Physics-Based Chronograph & Sweeping Hand Engine",
        overview: "A mathematically synchronized analog clock utilizing requestAnimationFrame to render continuous, non-jitter second hand movement at 60 frames per second.",
        architecture: "Native JavaScript mathematical angle calculations, SVG trigonometry, and GPU-accelerated CSS transforms.",
        keyFeatures: [
          "Ultra-smooth 60fps sweeping second hand motion",
          "Custom dark glassmorphic dial with neon luminescence",
          "Dynamic date, day, and time indicators",
          "Zero CPU throttling with requestAnimationFrame batching"
        ]
      }
    },
    {
      id: "taskmaster",
      num: "04",
      title: "TaskMaster — Smart Task Manager",
      subtitle: "App",
      category: "app",
      featured: false,
      badge: "Productivity App",
      description: "Modern productivity web app featuring category-based filtering, local storage persistence, and sleek task workflows.",
      image: "assets/img/projects-2.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      liveUrl: "https://taskmaster-rust.vercel.app/",
      githubUrl: "https://github.com/tusr23/taskmaster",
      caseStudy: {
        tagline: "Intuitive Daily Planner & Task Organizer",
        overview: "Designed for rapid task entry, completion tracking, and category tags.",
        architecture: "Vanilla ES6 JavaScript modules with event delegation and localized persistent data models.",
        keyFeatures: [
          "Category based task filtering",
          "Inline task status toggles",
          "Persistent local storage",
          "Responsive mobile drawer layout"
        ]
      }
    },
    {
      id: "calculator",
      num: "05",
      title: "Digital Scientific Calculator",
      subtitle: "Web",
      category: "web",
      featured: false,
      badge: "Math Engine",
      description: "Comprehensive scientific calculation engine with complex operations, responsive numeric keypad, and glassmorphic UI.",
      image: "assets/img/projects-3.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Math Engine"],
      liveUrl: "https://digital-calculator-tawny.vercel.app/",
      githubUrl: "https://github.com/tusr23/Digital-Calculator",
      caseStudy: {
        tagline: "Expression Tokenizer & Floating-Point Accurate Math Engine",
        overview: "A scientific calculation engine that parses infix mathematical expressions and computes results while preventing floating-point precision flaws.",
        architecture: "Custom recursive descent parser and sanitized evaluation engine.",
        keyFeatures: [
          "Trigonometric, logarithmic, and power calculations",
          "Parentheses balancing and expression verification",
          "Keyboard input listener and clickable tactile buttons",
          "History stack and memory recall"
        ]
      }
    },
    {
      id: "stopwatch",
      num: "06",
      title: "Precision Stopwatch",
      subtitle: "App",
      category: "app",
      featured: false,
      badge: "Timer Chronograph",
      description: "High-precision chronograph timer with millisecond accuracy, lap recording tracking, and neon digital display.",
      image: "assets/img/projects-4.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Chronograph"],
      liveUrl: "https://stop-watch-drab-nine.vercel.app/",
      githubUrl: "https://github.com/tusr23/Stop-Watch",
      caseStudy: {
        tagline: "Millisecond Accurate Sports Chronograph",
        overview: "Engineered for fitness and lab timing with lap record logging and instant split comparisons.",
        architecture: "Performance timer based on performance.now() delta computation to avoid background drift.",
        keyFeatures: [
          "High accuracy millisecond chronograph",
          "Lap recording table with fastest/slowest lap calculation",
          "Zero timer drift across long sessions",
          "High-contrast neon dark mode display"
        ]
      }
    },
    {
      id: "login-signup",
      num: "07",
      title: "Modern Login & Sign Up Form",
      subtitle: "Web",
      category: "web",
      featured: false,
      badge: "Auth UI",
      description: "Animated authentication interface featuring real-time password strength validation, smooth toggle, and modern styling.",
      image: "assets/img/projects-5.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Validation"],
      liveUrl: "https://login-sign-up-form-mu.vercel.app/",
      githubUrl: "https://github.com/tusr23/Login-Sign-Up-Form",
      caseStudy: {
        tagline: "Interactive Auth Experience with Real-Time Strength Meter",
        overview: "Smooth authentication transitions with client-side regex input sanitization and password entropy scoring.",
        architecture: "CSS 3D perspective transforms with JavaScript regex strength evaluation.",
        keyFeatures: [
          "Dynamic password entropy meter",
          "Smooth 3D flip between Login and Sign Up views",
          "Interactive password visibility toggle",
          "Accessible ARIA form input validation"
        ]
      }
    },
    {
      id: "amazon-clone",
      num: "08",
      title: "Amazon Clone — E-Commerce Store",
      subtitle: "Web",
      category: "web",
      featured: false,
      badge: "E-Commerce",
      description: "Interactive e-commerce shopping experience with product listings, dynamic cart calculation, and responsive layout.",
      image: "assets/img/projects-6.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Cart System"],
      liveUrl: "https://amazon-clone-weld-three-16.vercel.app/",
      githubUrl: "https://github.com/tusr23/Amazon-Clone",
      caseStudy: {
        tagline: "Multi-Item Cart System & Interactive Product Showcase",
        overview: "An e-commerce simulation replicating Amazon's retail browsing and cart checkout flows.",
        architecture: "Product data models, dynamic DOM rendering, and centralized cart calculation store.",
        keyFeatures: [
          "Interactive catalog filtering and category sort",
          "Dynamic cart quantity increments and subtotal tax calculations",
          "Responsive navigation header and search bar",
          "Persistent checkout basket state"
        ]
      }
    },
    {
      id: "spotify-clone",
      num: "09",
      title: "Spotify Web Player Clone",
      subtitle: "Web",
      category: "web",
      featured: false,
      badge: "Web Audio",
      description: "Music streaming web player clone utilizing the Web Audio API, playlist navigation, progress scrubber, and sleek dark UI.",
      image: "assets/img/p2-spotify-pc.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Audio"],
      liveUrl: "https://spotify-clone-gules-tau.vercel.app/",
      githubUrl: "https://github.com/tusr23/Spotify-Clone",
      caseStudy: {
        tagline: "Audio Player & Interactive Stream Simulator",
        overview: "A sleek dark web audio player reproducing Spotify's desktop playback interface and playlist flows.",
        architecture: "HTML5 Audio API, custom scrubber timeline, and event listeners for track switching.",
        keyFeatures: [
          "Interactive audio playback controls (Play, Pause, Skip, Prev)",
          "Draggable track timeline scrubber",
          "Dynamic volume controls with mute toggle",
          "Responsive album art and track metadata rendering"
        ]
      }
    }
  ],

  certificates: [
    {
      id: "nptel-python",
      titleLine1: "Python for Data Science",
      titleLine2: "NPTEL • IIT Madras",
      issuer: "NPTEL • IIT Madras",
      badge: "Elite Score",
      year: "2025",
      description: "Comprehensive data science certification covering NumPy, Pandas, statistical analysis, linear algebra, and data science computation under IIT Madras curriculum.",
      url: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs60/Course/NPTEL25CS60S44160056701209182.pdf"
    },
    {
      id: "neo4j-professional",
      titleLine1: "Neo4j Certified Professional",
      titleLine2: "Neo4j GraphAcademy",
      issuer: "Neo4j GraphAcademy",
      badge: "Professional Certified",
      year: "2025",
      description: "Certified professional in Cypher query language, graph database schema design, indexing, performance tuning, and high-performance graph architecture.",
      url: "https://graphacademy.neo4j.com/c/d5362cc1-2b76-4119-b319-fce7ddc4443c"
    },
    {
      id: "gfg-dsa",
      titleLine1: "Java & Data Structures (DSA)",
      titleLine2: "GeeksforGeeks Training",
      issuer: "GeeksforGeeks",
      badge: "Campus Training",
      year: "2026",
      description: "Mastery of fundamental and advanced data structures, recursion, dynamic programming, tree traversals, sorting algorithms, and system optimization.",
      url: "https://media.geeksforgeeks.org/courses/certificates/bb14ceb06527955853f9324a76ad9ef0.pdf"
    }
  ],

  internshipCertificate: {
    id: "intern-fullstack",
    titleLine1: "Full Stack Developer Intern",
    titleLine2: "MERN Stack Engineering",
    issuer: "Interntrack",
    badge: "Internship Certificate",
    year: "2024 - 2025",
    description: "Completed intensive industrial internship building production-grade web applications. Developed scalable RESTful backend services with Node.js and Express, designed MongoDB database schemas, and built responsive, component-driven user interfaces in React.",
    url: "https://drive.google.com/file/d/1yCsbEYH0jGggocAbzEk6RWWiqxcyTC9D/view"
  }
};
