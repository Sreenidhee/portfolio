export const profile = {
  name: "Sreenidhee Vidya Modugu",
  title: "Software Engineer",
  tagline: "Building performance-sensitive systems, backend applications, and full-stack solutions across defense research and enterprise environments.",
  location: "Gainesville, FL",
  email: "modugus@ufl.edu",
  phone: "+1 352 246 3624",
  linkedin: "https://linkedin.com/in/sreenidhee-vidya-modugu",
  github: "https://github.com/Sreenidhee",
  summary:
    "Software Engineer with experience building performance-sensitive C/C++ software, backend applications, enterprise systems, and full-stack web applications across defense research and enterprise environments. Hands-on with algorithm design, performance optimization, debugging, testing, database systems, and production issue resolution. M.S. Computer Science, University of Florida.",
};

export const skills = {
  Languages: ["C++", "C", "Python", "Java", "JavaScript", "SQL", "Go", "Gosu"],
  Backend: ["Django", "REST APIs", "Guidewire", "Authentication & Authorization", "CRUD"],
  Frontend: ["React.js", "HTML", "CSS", "Bootstrap"],
  Databases: ["MySQL", "PostgreSQL", "NoSQL"],
  "Cloud & Infrastructure": ["AWS", "Docker", "Kubernetes", "Linux"],
  Engineering: [
    "Data Structures & Algorithms",
    "OOP",
    "Algorithm Design",
    "Testing",
    "Debugging",
    "Performance Optimization",
    "Distributed Systems",
    "OS",
  ],
  "ML / Computer Vision": ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "NumPy", "Pandas"],
};

export const experience = [
  {
    company: "Accenture",
    role: "Software Engineer — Packaged App Development Associate",
    period: "Aug 2024 – Jul 2026",
    location: "India",
    tech: ["Guidewire", "Gosu", "Java", "SQL", "REST", "Functional/Regression Testing"],
    highlights: [
      "Developed and customized Guidewire applications using Gosu and configuration frameworks, implementing business logic for enterprise policy and billing workflows across multiple modules; coordinated production releases with consistent, well-structured code.",
      "Built and integrated backend application components and database-driven workflows, translating detailed business requirements into maintainable, production-ready functionality across enterprise modules and downstream services.",
      "Implemented CRUD workflows, validation logic, authentication and authorization, and data-processing components across enterprise application modules, ensuring correctness and consistency throughout core business services.",
      "Debugged complex application issues spanning business logic, configuration, and data layers, performing systematic root-cause analysis and implementing fixes that reduced recurring defects, downtime, and manual intervention.",
      "Delivered application enhancements across multiple enterprise releases, collaborating with developers, business stakeholders, and QA engineers throughout the full SDLC — from design and implementation to deployment.",
      "Developed a metrics dashboard to consolidate application and operational KPIs, giving stakeholders centralized visibility into system performance, workflow trends, defect patterns, and release health across modules.",
    ],
  },
  {
    company: "DRDO — Defence Research & Development Organisation",
    role: "Software Engineer Intern",
    period: "Jan 2024 – Jun 2024",
    location: "India",
    tech: ["C++", "C", "Python", "Linux", "PyTorch", "YOLOv8", "OpenCV", "Profiling"],
    highlights: [
      "Developed performance-sensitive C++ software on Linux, optimizing computationally intensive preprocessing and image-processing workflows for large-scale aircraft imagery datasets used in downstream detection and evaluation tasks.",
      "Profiled application execution to locate computational bottlenecks and reimplemented critical processing paths in C++, improving computational performance by ~20% over the baseline while preserving output correctness.",
      "Developed and evaluated computer-vision algorithms and preprocessing pipelines for aircraft imagery, improving algorithmic accuracy by ~25% through iterative experimentation, parameter tuning, and systematic evaluation.",
      "Built an object-detection pipeline (YOLOv8, PyTorch) over ~20,000 aircraft images spanning dataset preparation, model training, inference, and evaluation; validated end-to-end with unit and integration testing, profiling, and code reviews.",
    ],
  },
];

export const projects = [
  {
    title: "Alumni Networking System",
    description:
      "A full-stack alumni networking platform supporting user registration, profile management, event creation, job postings, and alumni discovery — built over a normalized relational database with clean separation between layers.",
    tech: ["Django", "React.js", "MySQL", "REST APIs"],
    highlights: [
      "Engineered a normalized MySQL schema with clean separation between the frontend, API, and data layers.",
      "Developed backend workflows in Django with role-based authentication and authorization, exposing REST APIs that connect React.js frontend interactions to server-side business logic and persistent relational data.",
      "Built responsive React.js interfaces with search and multi-attribute filtering to discover alumni by graduation year, industry, and related attributes — with paginated CRUD-driven results.",
    ],
    category: "Full-Stack",
  },
  {
    title: "Deep Learning Architecture for Iris Recognition",
    description:
      "A biometric recognition pipeline combining a Deep Belief Network with Gabor-filter feature extraction to capture discriminative iris texture patterns across multiple evaluation datasets.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    highlights: [
      "Combined a Deep Belief Network with Gabor-filter feature extraction (OpenCV, NumPy) to capture discriminative iris texture patterns across multiple evaluation datasets.",
      "Achieved 86% classification accuracy (82% F1, 87% recall, 80% precision) with 100% specificity and 87% sensitivity.",
      "Structured into reproducible preprocessing, feature-extraction, training, and evaluation stages for clean scientific reproducibility.",
    ],
    metrics: {
      accuracy: "86%",
      f1: "82%",
      recall: "87%",
      specificity: "100%",
    },
    category: "ML / Computer Vision",
  },
];

export const education = [
  {
    school: "University of Florida",
    location: "Gainesville, FL",
    degree: "Master of Science",
    field: "Computer and Information Science",
    gpa: null,
  },
  {
    school: "Osmania University",
    location: "Hyderabad, India",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    gpa: "8.68 / 10.0",
  },
];
