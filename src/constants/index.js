import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  AISummarizer,
  Digitrecognizer,
  Ewebsite,
  SpeedDetection,
  Restaurant,
  Pedestrian,
  carrent,
  jobit,
  tripguide,
  threejs,
  Python,
  R,
  SQL,
  Java,
  PowerBI,
  Excel,
  Tableau,
  NLP,
  UI,
  DataScience,
  MachineLearning,
  Hackathons,
  DataAnalytics,
  Certificate,
  Internship,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
  { id: "achievements", title: "Achievements" },
];

const services = [
  { title: "Data Science", icon: web },
  { title: "Machine Learning", icon: mobile },
  { title: "Power BI", icon: backend },
  { title: "Data Analytics", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Python", icon: Python },
  { name: "R", icon: R },
  { name: "Java", icon: Java },
  { name: "SQL", icon: SQL },
  { name: "PowerBI", icon: PowerBI },
  { name: "Excel", icon: Excel },
  { name: "MongoDB", icon: mongodb },
  { name: "Tableau", icon: Tableau },
  { name: "NLP", icon: NLP },
  { name: "figma", icon: figma },
  { name: "UI", icon: UI },
];

const experiences = [
  {
    title: "Data Science",
    company_name: "TechnoHacks & Cognifyz Technologies",
    icon: DataScience,
    iconBg: "#383E56",
    date: "May 2024 - September 2024",
    points: [
      "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on real-world datasets.",
      "Implemented Machine Learning models including Regression, Classification, and Clustering.",
      "Worked with Python libraries such as Pandas, NumPy, Matplotlib, and Scikit-learn for data handling and modeling.",
      "Optimized models by tuning hyperparameters to improve accuracy and performance.",
      "Generated insights and visualizations to support data-driven decision-making.",
      "Collaborated with team members to deliver end-to-end Data Science solutions.",
    ],
  },
  {
    title: "Machine Learning",
    company_name: "Academic & Internships",
    icon: MachineLearning,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "🏠 House Price Prediction – Built regression models (Random Forest, Linear Regression, Gradient Boosting) to predict housing prices with improved accuracy.",
      "💬 Twitter Sentiment Analysis – Applied NLP techniques and ML classifiers (Naive Bayes, SVM, Random Forest) for sentiment classification of tweets.",
      "📊 Customer Churn Prediction – Developed predictive models (Logistic Regression, Decision Trees, XGBoost) to detect customers at risk of churn.",
      "🚗 Vehicle Detection System – Implemented YOLOv7 and Computer Vision for real-time vehicle detection and road traffic monitoring.",
      "🛰️ SAR Satellite Change Detection – Designed ML pipeline in Google Earth Engine to identify man-made changes while filtering natural variations.",
      "⚠️ Road Safety & Accident Detection – Created an AI-powered accident prediction and real-time alerting system for enhanced road safety.",
    ],
  },
  {
    title: "National & State Level Hackathons",
    company_name: "Hackathons",
    icon: Hackathons,
    iconBg: "#383E56",
    date: "2022 - 2025",
    points: [
      "⚖️ Smart India Hackathon 2024 – Built an AI-based Judicial Chatbot with NLP, retrieval models, and legal case summarization for judicial research.",
      "⚙️ EDII Hackathon 2024 – Developed a Process Mining solution to optimize workflows and improve business process efficiency.",
      "🚦 Team Unstop Hackathon 2025 – Designed AI-powered road safety solutions including accident detection, emergency response alerts, and wrong-way driving detection.",
      "🤝 Collaborated in diverse teams, applying problem-solving, AI/ML expertise, and innovation under tight deadlines.",
    ],
  },
  {
    title: "Data Science & Analytics",
    company_name: "Academic & Internships",
    icon: DataAnalytics,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "📊 Performed Exploratory Data Analysis (EDA) on structured and unstructured datasets using Python and R.",
      "📈 Designed interactive dashboards in Power BI and Excel for business intelligence and reporting.",
      "🔍 Applied feature engineering and data preprocessing techniques to improve ML model performance.",
      "📉 Built predictive analytics pipelines that converted raw data into actionable insights for decision-making.",
      "🛠️ Leveraged Pandas, NumPy, Matplotlib, and Seaborn for data wrangling and visualization.",
    ],
  },
];

export const achievements = [
  {
    title: "Internships – Data Science",
    company_name: "Techno Hacks Edutech & Cognifyz Technologies",
    icon: Internship,
    iconBg: "#383E56",
    date: "June 2024 – August 2024",
    points: [
      "Worked on House Price Prediction, Social Media Sentiment Analysis, and Telco Customer Churn Prediction at Techno Hacks Edutech.",
      "Developed predictive models using Python and ML libraries at Cognifyz Technologies.",
      "Applied data preprocessing, feature engineering, model evaluation, and visualization techniques across both internships.",
    ],
  },
  {
    title: "Hackathon Experience",
    company_name: "SIH 2024, EDII Hackathon TN, Unstop 2025",
    icon: Hackathons,
    iconBg: "#383E56",
    date: "2024 – 2025",
    points: [
      "SIH Hackathon 2024 – AI-based Judicial Chatbot.",
      "EDII Hackathon TN 2024 – Process Mining Project.",
      "Unstop Road Safety Hackathon 2025 – Road Safety AI Solution.",
    ],
  },
  {
    title: "Certifications",
    company_name: "Global Platforms",
    icon: Certificate,
    iconBg: "#E6DEDD",
    date: "2023 - 2025",
    points: [
      "Google: Gen AI, Machine Learning with TensorFlow",
      "Microsoft: Gen AI & Copilots, Microsoft Fabric & DA",
      "MongoDB: AI & Vector Search",
      "Cisco: Data Science Certificate",
      "Infosys Springboard: ML & AI Foundations",
      "Deloitte: Data Analytics Job Simulation",
      "Udemy: Excel Certification",
      "Nvidia: GenAI Practice",
    ],
  },
];

const projects = [
  {
    name: "Restaurant Reservation System",
    description:
      "A web-based system that allows users to book tables online, manage reservations, and view restaurant availability, improving customer convenience and restaurant efficiency.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "Css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: Restaurant,
    source_code_link: "https://github.com/Harikrishnan2202/Restaurant-Reservation-System",
  },
  {
    name: "Pedastrian Detection",
    description:
      "An AI system for detecting pedestrians in images/video using YOLO/other object detection techniques, aimed at enhancing safety and monitoring applications.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Yolo", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
    ],
    image: Pedestrian,
    source_code_link: "https://github.com/Harikrishnan2202/Pedastrian-Detection",
  },
  {
    name: "Speed Detection",
    description:
      "A vehicle speed tracking system that calculates speed by measuring pixels travelled per second and converting into meters and km/hr using OpenCV and Dlib. It estimates pixel-per-meter manually for different road scenarios.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "dlib", color: "pink-text-gradient" },
    ],
    image: SpeedDetection,
    source_code_link: "https://github.com/Harikrishnan2202/Speed-Detection.git",
  },
  {
    name: "EC Website",
    description:
      "An e-commerce website built with HTML, CSS, and JavaScript, featuring product pages, a shopping cart, responsive design, and basic interactivity for browsing and purchase.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: Ewebsite, 
    source_code_link: "https://github.com/Harikrishnan2202/EC-Website",
  },
  {
    name: "Digit Recogniser",
    description:
      "A machine learning project that recognises handwritten digits using algorithms like scikit-learn and/or TensorFlow, trained on datasets like MNIST, with evaluation of performance metrics and ability to predict new digit inputs.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Tensorflow", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
    ],
    image: Digitrecognizer, // replace with your project screenshot or image asset
    source_code_link: "https://github.com/Harikrishnan2202/Digit-Recogniser",
  },
  {
    name: "AI Summarize",
    description:
      "A tool to automatically summarize content, helping users get key points quickly without having to read through long text or video transcripts.",
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "Summarization", color: "green-text-gradient" },
      { name: "ML", color: "pink-text-gradient" },
    ],
    image: AISummarizer, // replace with your screenshot/image asset
    source_code_link: "https://github.com/Harikrishnan2202/AI-Summarize",
  },
];

export { services, technologies, experiences, projects };
