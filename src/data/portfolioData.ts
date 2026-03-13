export const portfolioData = {
  name: "Sreenidhi Vasireddy",
  firstName: "Sreenidhi",
  lastName: "Vasireddy",
  title: "AI Engineer",
  subtitle: "Generative AI, RAG Systems, and Scalable AI Infrastructure",
  location: "Tampa, FL",
  status: "Authorized to Work in the U.S. • Open to Relocate",
  email: "sreenidhi082003@gmail.com",
  phone: "+1 (813) 525-6223",
  phoneHref: "tel:+18135256223",
  summary:
    "AI Engineer and Computer Science graduate student specializing in Generative AI systems, Large Language Models, and scalable AI infrastructure. Microsoft Certified Azure AI Engineer Associate with hands-on experience building production-ready RAG systems using Azure OpenAI and Azure AI Search.",
  about:
    "I'm an AI Engineer specializing in Generative AI, LLMs, and scalable AI infrastructure. Microsoft Certified Azure AI Engineer Associate with hands-on experience building production RAG systems, hybrid search pipelines, and end-to-end AI applications. My work spans distributed backend systems, deep learning research, and real-time AI interfaces - backed by internship experience and a peer-reviewed publication in network security.",
  links: {
    linkedin: "https://www.linkedin.com/in/sreenidhivasireddy/",
    github: "https://github.com/sreenidhivasireddy",
  },
  focusAreas: [
    {
      heading: "BUILD AI SYSTEMS",
      label: "Specialization",
      description:
        "Design production-ready RAG and LLM workflows with document ingestion, hybrid retrieval, structured outputs, streaming responses, and evaluation pipelines for real users.",
      highlights: [
        "Build hybrid retrieval pipelines with vector search, keyword search, and dynamic weighting",
        "Create async ingestion flows for PDF and DOCX documents with chunking, embeddings, and indexing",
        "Measure answer quality with groundedness, relevance, similarity, and regression tracking",
      ],
      deliverables: "RAG systems, evaluators, ingestion pipelines, retrieval orchestration",
      skills: [
        "Python",
        "FastAPI",
        "Azure OpenAI",
        "Azure AI Search",
        "RAG",
        "LLM Evaluation",
        "WebSockets",
        "Redis",
        "Kafka",
        "SQLAlchemy",
      ],
    },
    {
      heading: "ENGINEER PRODUCTS",
      label: "Execution",
      description:
        "Ship full-stack AI applications with scalable APIs, async processing, cloud integrations, and frontend experiences built for real users.",
      highlights: [
        "Develop React interfaces for chat, knowledge base, quiz generation, and evaluation dashboards",
        "Build layered backend services using router, service, repository, and ORM patterns",
        "Integrate Redis, Kafka, MySQL, and Azure services into maintainable product flows",
      ],
      deliverables: "Full-stack AI products, real-time APIs, dashboards, and cloud integrations",
      skills: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "REST APIs",
        "Distributed Systems",
        "Docker Compose",
        "CI/CD",
      ],
    },
  ],
  experience: [
    {
      role: "AI Engineer Intern",
      company: "ScholarshipAuditions.com",
      period: "Jan 2025 - Present",
      summary:
        "Built Python and FastAPI backend services for AI pipelines, created REST integrations for evaluation workflows, and improved PostgreSQL retrieval performance by about 30%.",
    },
    {
      role: "Data Science & AI Intern",
      company: "Data Valley Pvt. Ltd.",
      period: "Jan 2024 - Apr 2024",
      summary:
        "Developed machine learning pipelines for cybersecurity datasets, performed feature engineering, and evaluated classification models with cross-validation metrics.",
    },
    {
      role: "M.S. in Computer Science",
      company: "University of South Florida",
      period: "May 2026",
      summary:
        "Graduate study focused on advanced computer science foundations aligned with AI systems, machine learning, and scalable software engineering.",
    },
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      period: "Earned Mar 2026",
      credentialId: "BAD3CEC83F563CD8",
      certificationNumber: "4Y5764-5C4A22",
      earnedOn: "March 5, 2026",
      validThrough: "March 5, 2027",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/SreenidhiVasireddy/BAD3CEC83F563CD8?sharingId=6A584D129A2ABCDD",
      badge: "associate",
    },
  ],
  publications: [
    {
      title: "Intrusion Detection and Prevention Using CNN-LSTM",
      venue: "International Journal of Science, Engineering and Technology (IJSET)",
      venueLink: "https://www.ijset.in/",
      published: "2024",
      authors:
        "T Sai Harshitha, V. Sreenidhi, Sk. Parveen, P Tejaswini, Asst. Prof. Yerininti Venkata Narayana",
      summary:
        "Introduces a hybrid CNN-LSTM model for real-time network intrusion detection and prevention, targeting DoS, Malware, and Port Scanning attacks. Achieved 98.38% accuracy on the SIMARGL2022 dataset with automated iptables-based response mechanisms.",
      doi: "10.61463/ijset.vol.12.issue2.125",
      issnOnline: "2348-4098",
      issnPrint: "2395-4752",
      volumeIssue: "Vol. 12, Issue 2",
      type: "Open Access | Peer Reviewed",
      stats: ["98.38% Accuracy", "Open Access", "2024"],
      keywords: [
        "Cybersecurity",
        "CNN",
        "LSTM",
        "Deep Learning",
        "DoS",
        "Malware",
        "Port Scanning",
        "Network Security",
        "IDPS",
      ],
      link: "https://www.ijset.in/intrusion-detection-prevention-using-cnn-lstm/",
    },
  ],
  highlights: [
    {
      number: "01",
      name: "RAG-Based Intelligent Study Assistant",
      category: "AI Knowledge System",
      tools:
        "React + TypeScript frontend, FastAPI backend, Azure OpenAI + Azure AI Search retrieval, MySQL/Redis/Kafka data flow, and Docker Compose-powered local infra",
      summary:
        "End-to-end Azure-based RAG study assistant with async document ingestion, hybrid retrieval, grounded chat, quiz generation, synthetic and fixed evaluation, and regression tracking across real uploaded study material.",
      architecture: [
        "React SPA with Chat, Knowledge Base, Quiz, and Evaluation surfaces connected through REST and WebSocket flows",
        "Layered FastAPI backend using Router -> Service -> Repository -> Model patterns for maintainable product logic",
        "Async ingestion pipeline where chunk uploads merge first, then Kafka triggers parsing, chunking, embeddings, indexing, and synthetic QA generation",
        "Hybrid retrieval with Azure OpenAI embeddings, Azure AI Search ranking, deduplication, prompt assembly, and grounded answer generation",
      ],
      stackGroups: [
        {
          title: "Frontend",
          items:
            "React, TypeScript, Vite, Tailwind CSS, React Router, Axios, React Markdown, Lucide React, Recharts, SparkMD5",
        },
        {
          title: "Backend",
          items:
            "Python, FastAPI, Pydantic, SQLAlchemy, Uvicorn, python-dotenv",
        },
        {
          title: "Cloud / AI",
          items:
            "Azure OpenAI, Azure AI Search, Azure Blob Storage, Azure AI Evaluation SDK",
        },
        {
          title: "Data / Messaging",
          items: "MySQL, Redis, Kafka, SQLAlchemy ORM",
        },
        {
          title: "Parsing / NLP",
          items:
            "pypdf, python-docx, NLTK, jieba, NumPy, psutil, websockets, aiohttp",
        },
        {
          title: "Local Infra",
          items:
            "Docker Compose, Elasticsearch, Redis, MinIO, Zookeeper, Kafka",
        },
      ],
      link: "https://github.com/sreenidhivasireddy",
    },
    {
      number: "02",
      name: "Intrusion Detection and Prevention System",
      category: "Deep Learning Security System",
      tools:
        "TensorFlow, Keras, CNN, LSTM, pandas, NumPy, scikit-learn, SelectKBest, StandardScaler, LabelEncoder, OneHotEncoder, SimpleImputer, subprocess, iptables, logging, requests, Python 3, Google Colab, Jupyter",
      summary:
        "CNN-LSTM hybrid model trained on SIMARGL2022 network traffic data to detect and automatically respond to cyber attacks in real time — achieving 98.38% accuracy with automated iptables-based prevention actions.",
      architecture: [
        "Hybrid CNN + LSTM model extracts spatial features via Conv1D then captures sequential patterns through LSTM for accurate traffic classification",
        "SelectKBest with ANOVA F-test reduces feature space to top 10 most discriminative network flow attributes",
        "Automated prevention layer maps predicted attack class to response action — IP blocking for DoS, system quarantine for Malware, port blocking for Port Scanning",
        "Evaluated with confusion matrix metrics: 15,070 TN, 4,914 TP, and only 164 FP/FN each — yielding 98.38% accuracy and 96.77% F1 score",
      ],
      stackGroups: [
        {
          title: "Deep Learning",
          items: "TensorFlow, Keras, CNN, LSTM",
        },
        {
          title: "Data / ML",
          items: "pandas, NumPy, scikit-learn, SelectKBest",
        },
        {
          title: "Preprocessing",
          items:
            "StandardScaler, LabelEncoder, OneHotEncoder, SimpleImputer",
        },
        {
          title: "Response System",
          items: "subprocess, iptables, logging, requests",
        },
        {
          title: "Environment",
          items: "Python 3, Google Colab, Jupyter",
        },
      ],
      link: "https://github.com/sreenidhivasireddy/Intrusion-detection-and-prevention-using-CNN-LSTM",
    },
    {
      number: "03",
      name: "Signature Forgery Detection",
      category: "Computer Vision Security System",
      tools:
        "TensorFlow, Keras, CNN, VGG16, PIL, OpenCV, image resizing, normalization, scikit-learn, NumPy, Matplotlib, Python 3, virtualenv, model export (.h5), JSON metadata, train.py, predict.py, utils.py",
      summary:
        "CNN and VGG16-based binary image classifier that detects forged vs genuine signatures using TensorFlow/Keras - with full image preprocessing, per-person dataset structure, model export, and a standalone prediction script for real-world testing.",
      architecture: [
        "Dual-model approach: custom lightweight CNN as baseline and VGG16 transfer learning for improved generalization on small signature datasets",
        "Writer-agnostic label rule - filenames containing \"forg\" are classified as forged (1), all others as genuine (0), enabling flexible dataset onboarding",
        "Full training pipeline saves model artifact (model.h5), metadata JSON, and accuracy/loss plots to an artifacts/ directory",
        "Standalone predict.py script takes a single image and outputs forgery probability and predicted class for real-world deployment testing",
      ],
      stackGroups: [
        {
          title: "Deep Learning",
          items: "TensorFlow, Keras, CNN, VGG16",
        },
        {
          title: "Image Processing",
          items: "PIL, OpenCV, image resizing, normalization",
        },
        {
          title: "ML Utilities",
          items: "scikit-learn, NumPy, Matplotlib",
        },
        {
          title: "Tooling",
          items: "Python 3, virtualenv, model export (.h5), JSON metadata",
        },
        {
          title: "Scripts",
          items: "train.py, predict.py, utils.py",
        },
      ],
      link: "https://github.com/sreenidhivasireddy/signature-forgery-detection",
    },
  ],
  techStackHeading: "My Tech Stack",
  techStackItems: [
    { label: "Python", short: "Py", color: "#3776ab" },
    { label: "Java", short: "Jv", color: "#f89820" },
    { label: "SQL", short: "SQL", color: "#3b82f6" },
    { label: "JavaScript", short: "JS", color: "#f7df1e" },
    { label: "TypeScript", short: "TS", color: "#3178c6" },
    { label: "Machine Learning", short: "ML", color: "#8b5cf6" },
    { label: "Feature Engineering", short: "FE", color: "#06b6d4" },
    { label: "Model Training", short: "TR", color: "#10b981" },
    { label: "Model Evaluation", short: "EV", color: "#ec4899" },
    { label: "Cross Validation", short: "CV", color: "#f97316" },
    { label: "Supervised Learning", short: "SL", color: "#14b8a6" },
    { label: "Classification", short: "CL", color: "#84cc16" },
    { label: "Regression", short: "RG", color: "#ef4444" },
    { label: "Large Language Models", short: "LLM", color: "#7c3aed" },
    { label: "RAG", short: "RAG", color: "#a855f7" },
    { label: "Prompt Engineering", short: "PE", color: "#f43f5e" },
    { label: "Structured Outputs", short: "SO", color: "#0ea5e9" },
    { label: "LLM Evaluation", short: "LE", color: "#22c55e" },
    { label: "Vector Search", short: "VS", color: "#6366f1" },
    { label: "Hybrid Search", short: "HS", color: "#8b5cf6" },
    { label: "Embeddings", short: "EM", color: "#f59e0b" },
    { label: "Semantic Retrieval", short: "SR", color: "#10b981" },
    { label: "Document Indexing", short: "DI", color: "#06b6d4" },
    { label: "FastAPI", short: "FA", color: "#059669" },
    { label: "REST APIs", short: "API", color: "#3b82f6" },
    { label: "WebSockets", short: "WS", color: "#ef4444" },
    { label: "Distributed Systems", short: "DS", color: "#f97316" },
    { label: "Async Processing", short: "AS", color: "#14b8a6" },
    { label: "React", short: "Re", color: "#61dafb" },
    { label: "Angular", short: "Ng", color: "#dd0031" },
    { label: "Vite", short: "Vi", color: "#646cff" },
    { label: "Tailwind CSS", short: "Tw", color: "#38bdf8" },
    { label: "MySQL", short: "My", color: "#00758f" },
    { label: "Redis", short: "Rd", color: "#dc382d" },
    { label: "Kafka", short: "Kf", color: "#111827" },
    { label: "SQLAlchemy", short: "SA", color: "#d97706" },
    { label: "Microsoft Azure", short: "Az", color: "#007fff" },
    { label: "Azure OpenAI", short: "AO", color: "#2563eb" },
    { label: "Azure AI Search", short: "AS", color: "#1d4ed8" },
    { label: "Azure Blob Storage", short: "AB", color: "#0ea5e9" },
    { label: "Azure AI Evaluation SDK", short: "AE", color: "#0284c7" },
    { label: "NLTK", short: "NL", color: "#65a30d" },
    { label: "NumPy", short: "NP", color: "#4f46e5" },
    { label: "PDF Parsing", short: "PDF", color: "#ef4444" },
    { label: "DOCX Parsing", short: "DOC", color: "#2563eb" },
    { label: "Text Chunking", short: "TC", color: "#06b6d4" },
    { label: "Tokenization", short: "TK", color: "#22c55e" },
    { label: "Docker Compose", short: "Dc", color: "#2496ed" },
    { label: "Git", short: "Git", color: "#f97316" },
    { label: "Linux", short: "Ln", color: "#a3a3a3" },
    { label: "CI/CD", short: "CI", color: "#f43f5e" },
    { label: "Distributed Processing", short: "DP", color: "#8b5cf6" },
  ],
  footerName: "Sreenidhi Vasireddy",
};
