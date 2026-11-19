export const profile = {
  name: "Sreenidhee Vidya Modugu",
  title: "Software Engineer",
  tagline: "Building backend systems and ML pipelines end to end, from production enterprise applications to Go, Kafka and Redis backends and computer-vision models.",
  location: "Gainesville, FL",
  email: "sreenidheevidya03@gmail.com",
  phone: "+1 352 246 3624",
  linkedin: "https://linkedin.com/in/sreenidhee-vidya-modugu",
  github: "https://github.com/Sreenidhee",
  summary:
    "Software Engineer with ML and computer vision experience: built a YOLOv8 detection pipeline in PyTorch over ~20,000 images at DRDO, raising accuracy ~25% through preprocessing and systematic evaluation, and sped up critical paths ~20% in C++. Brings 2 years of production engineering at Accenture (Java, REST APIs, CI/CD, on-call) plus Go, Kafka, and Redis backends.",
};

export const skills = {
  Languages: ["Java", "Python", "Go", "C++", "C", "JavaScript", "SQL", "Gosu"],
  "Distributed Systems & Backend": ["Microservices", "REST APIs", "Kafka", "Redis Pub/Sub", "WebSockets", "Django", "Guidewire"],
  Frontend: ["React.js", "HTML", "CSS"],
  Databases: ["PostgreSQL", "MySQL", "DynamoDB", "Redis"],
  "Cloud & DevOps": ["AWS (EC2, S3, Lambda, RDS, DynamoDB, IAM, CloudWatch)", "Docker", "Kubernetes", "Linux", "CI/CD", "Git"],
  "ML / Computer Vision": ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "NumPy", "Pandas", "Deep Belief Networks", "CNNs"],
  "LLMs & GenAI": ["RAG", "Embeddings", "Vector Search", "Prompt Engineering"],
  Engineering: [
    "Data Structures & Algorithms",
    "Object-Oriented Design",
    "Unit / Integration / Regression Testing",
    "Profiling",
    "Observability",
    "On-call & Root-Cause Analysis",
    "Agile / SDLC",
  ],
};

export const experience = [
  {
    company: "Accenture",
    role: "Software Engineer — Packaged App Development Associate",
    period: "Aug 2024 – Jul 2026",
    location: "India",
    tech: ["Java", "Gosu", "Guidewire", "SQL", "REST APIs", "CI/CD", "On-call", "Regression Testing"],
    highlights: [
      "Owned features for production Guidewire policy and billing applications in Java and Gosu end to end, from requirements and design through code review, testing, and CI/CD deployment, coordinating releases with QA and business teams.",
      "Built REST API integration workflows connecting application modules, relational databases, and downstream services, enabling consistent, validated data exchange between the policy, billing, and other connected enterprise systems.",
      "Implemented authentication, authorization, validation, and data-processing components in Java and Gosu to enforce access controls and data correctness across production applications; reviewed peers' code for correctness and maintainability.",
      "Served in the on-call production support rotation, troubleshooting issues across business-logic, configuration, and data layers, and used root-cause analysis to ship fixes that reduced repeat defects and manual intervention.",
      "Built an operational metrics dashboard tracking application KPIs, defect patterns, and release health, and authored technical documentation for features and fixes, improving release readiness and visibility for engineering leads and stakeholders.",
    ],
  },
  {
    company: "DRDO — Defence Research & Development Organisation",
    role: "Software Engineer Intern",
    period: "Jan 2024 – Jun 2024",
    location: "India",
    tech: ["Python", "PyTorch", "YOLOv8", "OpenCV", "C++", "C", "Linux", "Profiling"],
    highlights: [
      "Built a YOLOv8 computer vision pipeline in PyTorch over ~20,000 aircraft images, from data prep to evaluation.",
      "Designed preprocessing pipelines for unstructured image data and ran systematic experiments and parameter tuning across model configurations and training runs, improving detection accuracy by approximately 25% over the initial baseline.",
      "Profiled computational bottlenecks and reimplemented performance-critical paths in C++ on Linux, improving performance by approximately 20% over baseline while preserving output correctness, verified with unit and integration tests.",
    ],
  },
];

export const projects = [
  {
    title: "Async Feed Backend (Reddit-style)",
    github: "https://github.com/Sreenidhee/feed-engine",
    description:
      "A distributed feed service: posts and likes flow through Kafka, consumer workers fan out to per-user Redis feeds, and the API serves feeds from Redis sorted sets for low-latency reads.",
    tech: ["Go", "Kafka", "Redis", "PostgreSQL", "Docker"],
    highlights: [
      "Designed fault-tolerant fan-out with idempotent, at-least-once Kafka consumers that commit offsets only after successful processing and retry transient failures with exponential backoff.",
      "Added a transactional-outbox flag so post events are re-published if Kafka is unavailable, and a per-user likes table so repeated likes and replayed events are no-ops.",
      "Partitioned topics so multiple consumer replicas share load; the whole stack runs with one docker compose command.",
    ],
    category: "Distributed Systems",
  },
  {
    title: "Real-Time Chat Service",
    github: "https://github.com/Sreenidhee/Real-Time-Chat-Service",
    description:
      "A one-to-one real-time chat app with a Go WebSocket gateway, Redis-backed message history and contact lists, and a React front end.",
    tech: ["Go", "WebSockets", "Redis", "React"],
    highlights: [
      "Built a Go WebSocket server that persists each message to Redis and pushes it to the sender's and recipient's open connections in real time.",
      "Exposed REST endpoints for registration, login, contact lists sorted by last activity, and chat history.",
      "Built the React + Chakra UI client with login, contact management, and a live chat view.",
    ],
    category: "Backend / Real-Time",
  },
  {
    title: "Deep Learning Architecture for Iris Recognition",
    github: "https://github.com/Sreenidhee/Iris-Recognition",
    description:
      "An end-to-end biometric recognition pipeline combining Gabor-filter feature extraction with a Deep Belief Network to classify iris images.",
    tech: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    highlights: [
      "Built an end-to-end iris recognition pipeline spanning image preprocessing, feature extraction, model training, and evaluation.",
      "Combined Gabor-filter feature extraction (OpenCV, NumPy) with a Deep Belief Network in TensorFlow to classify iris images.",
      "Built an evaluation harness measuring model quality across datasets: 86% accuracy, 82% F1, 87% recall, and 80% precision.",
    ],
    metrics: {
      accuracy: "86%",
      f1: "82%",
      recall: "87%",
      precision: "80%",
    },
    category: "ML / Computer Vision",
  },
  {
    title: "PEGASUS Dialogue Summarizer",
    github: "https://github.com/Sreenidhee/PEGASUS-Summarizer",
    description:
      "Fine-tuned google/pegasus-large on the SAMSum dataset to condense long conversations into concise, abstractive summaries.",
    tech: ["Python", "Hugging Face Transformers", "PyTorch"],
    highlights: [
      "Built the fine-tuning and evaluation pipeline for abstractive dialogue summarization.",
      "Reached ROUGE-1 52.4, ROUGE-L 44.8 and BERTScore F1 89.2 on held-out test data.",
    ],
    category: "ML / NLP",
  },
  {
    title: "Alumni Networking System",
    github: "https://github.com/Sreenidhee/Alumni-Networking-System",
    description:
      "A full-stack alumni platform with admin, alumni and student roles: profile management, event posts, comments, and alumni discovery.",
    tech: ["Django", "React.js", "MySQL", "REST APIs"],
    highlights: [
      "Engineered a normalized MySQL schema with clean separation between the frontend, API, and data layers.",
      "Developed Django backend workflows with role-based authentication and authorization, exposed through REST APIs.",
      "Built React.js interfaces with search and filtering to discover alumni by graduation year, industry, and interests.",
    ],
    category: "Full-Stack",
  },
];

export const education = [
  {
    school: "University of Florida",
    location: "Gainesville, FL",
    degree: "Master of Science",
    field: "Computer and Information Science",
    period: "Aug 2026 – Dec 2027",
    coursework: "Advanced Data Structures, Analysis of Algorithms, Distributed Operating Systems",
    gpa: null,
  },
  {
    school: "Osmania University",
    location: "Hyderabad, India",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    period: "Aug 2020 – Jun 2024",
    coursework: "Data Structures & Algorithms, OOP in Java, Artificial Intelligence, Machine Learning, DBMS, Data Mining, Software Engineering",
    gpa: "8.68 / 10.0",
  },
];
