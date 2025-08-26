import { Zap, Search, Activity, BarChart4, ShieldCheck } from 'lucide-react';

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  date: string;
  icon: string;
  iconColor?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Health Privacy Data Visualization Platform',
    subtitle: 'Secure Healthcare Analytics with Privacy Preservation',
    description: 'Developed a secure and interactive health data visualization platform designed to balance advanced analytics with strict user privacy and regulatory compliance. The platform enables healthcare providers and researchers to analyze health trends while safeguarding sensitive patient data.',
    features: [
      'Built interactive dashboards for real-time health data exploration with confidentiality',
      'Implemented privacy-preserving measures including data anonymization and encryption',
      'Designed in adherence to HIPAA/GDPR compliance standards',
      'Integrated advanced analytics for health patterns and disease prevalence analysis',
      'Provided customizable reports and trend analysis with privacy safeguards',
      'Enabled secure data sharing for research collaborations'
    ],
    tags: [
      'Python',
      'Flask/Django',
      'Pandas',
      'NumPy',
      'Data Visualization',
      'Plotly',
      'Matplotlib',
      'Data Privacy',
      'Healthcare Analytics',
      'REST API',
      'SQL/NoSQL',
      'GDPR Compliance',
      'HIPAA Compliance'
    ],
    date: '2023',
    icon: 'ShieldCheck',
    iconColor: 'text-blue-500'
  },
  {
    title: 'Big Data Analysis on NIRF Ranking System',
    subtitle: 'Data-driven Institutional Ranking Model',
    description: 'Developed a data-driven ranking model for analyzing and simulating the NIRF (National Institutional Ranking Framework) system, focusing on accuracy, transparency, and actionable insights for higher education institutions.',
    features: [
      'Collected and processed large-scale institutional datasets across multiple categories',
      'Designed and implemented a machine learning model for calculating college rankings using multi-factor weighted criteria',
      'Applied data preprocessing, cleaning, and feature engineering techniques',
      'Generated insightful reports and visualizations highlighting improvement areas',
      'Demonstrated how Big Data and ML can improve ranking transparency and efficiency',
      'Created an extensible framework for larger datasets and alternate ranking systems'
    ],
    tags: [
      'Python',
      'Machine Learning',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'Data Analysis',
      'Data Visualization',
      'Matplotlib',
      'Seaborn',
      'Big Data',
      'Education Technology',
      'Statistical Modeling'
    ],
    date: '2023',
    icon: 'BarChart4',
    iconColor: 'text-indigo-500'
  },
  {
    title: 'Air Quality Monitoring System',
    subtitle: 'Real-time Environmental Parameter Tracking and Analysis',
    description: 'Developed a centralized web-based air quality monitoring system to track and analyze real-time environmental parameters such as AQI, CO₂, CH₄, NH₃, PM₂.₅, temperature, and humidity. The platform provides health advisories, trend analysis, and automated reporting, supporting environmental research and policy decision-making.',
    features: [
      'Backend: Python (Flask) with SQLite and MySQL Connector for scalable data handling',
      'Frontend: Dynamic dashboards with interactive visualizations using HTML5, CSS3, and JavaScript',
      'Data Processing: Integrated Pandas and NumPy for efficient data manipulation and analysis',
      'Visualization: Real-time and historical trend charts using Matplotlib and Plotly',
      'Automated Reporting: Generated formatted reports with python-docx and reportlab',
      'Security: Implemented Flask-Session-based authentication and RESTful API endpoints',
      'Deployment: Configured with Gunicorn production server and dotenv for environment management',
      'Data Management: Supported SQLite and Excel/CSV import-export functionality'
    ],
    tags: [
      'Python',
      'Flask',
      'SQLite',
      'MySQL',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Plotly',
      'HTML5',
      'CSS3',
      'JavaScript',
      'REST API',
      'Data Visualization',
      'Gunicorn',
      'Environmental Monitoring'
    ],
    date: '2023',
    icon: 'Activity',
    iconColor: 'text-green-500'
  },
  {
    title: 'JobSeekerAI',
    subtitle: 'Fully Automated AI Job Application System',
    description: 'Built a complete end-to-end platform that automates every stage of the job hunting process, powered by AI and smart logic.',
    features: [
      'Automatically reads user profile, resume, and skills',
      'Searches for jobs from various platforms based on skill match',
      'Uses AI to analyze job descriptions and tailor resumes & cover letters',
      'Applies to jobs automatically with customized documents',
      'Tracks application status by reading email responses',
      'Shows everything in a dynamic, web-based dashboard',
      'Provides interview preparation tools and skill gap analysis',
      'Continuously optimizes application materials using AI feedback'
    ],
    tags: ['React.js', 'Flask (Python)', 'MySQL', 'OpenAI API', 'NLP', 'REST API', 'Axios', 'HTML5/CSS3'],
    date: 'Feb 2025 - Present',
    icon: 'Zap',
    iconColor: 'text-yellow-500',
    featured: true
  },
  {
    title: 'X-Ray Vision – Automated Component Identification',
    subtitle: 'AI-powered system for identifying components in sealed boxes using X-ray imaging',
    description: 'Developed an AI-powered system for identifying and classifying components inside sealed boxes using X-ray imaging and Computer Vision techniques, aimed at improving accuracy and speed in industrial inspection processes.',
    features: [
      'End-to-end pipeline: X-ray image acquisition → preprocessing → feature extraction → classification',
      'Computer Vision + Deep Learning models (CNN-based) for high-accuracy component detection',
      'Flask-based backend integrated with React.js dashboard for real-time processing',
      'Python-based model training with OpenCV, TensorFlow/PyTorch, and scikit-learn',
      'Database-backed system (MySQL) for secure storage and retrieval of scan records',
      'Significantly improved inspection efficiency by automating manual verification processes'
    ],
    tags: ['Python', 'Flask', 'OpenCV', 'TensorFlow/PyTorch', 'React.js', 'MySQL', 'REST API', 'Computer Vision', 'Deep Learning'],
    date: '2024',
    icon: 'Search',
    iconColor: 'text-blue-500',
    featured: true
  },
  {
    title: 'High-Performance Parallel Computing',
    subtitle: 'Architecture, Algorithm, and Performance Evaluation',
    description: 'Built a fully functional high-performance parallel computing system with a decentralized architecture, enabling academic computer labs to efficiently handle data-intensive workloads using distributed task scheduling and optimized algorithms.',
    features: [
      'Engineered a parallel cluster using multiple interconnected CPUs and Dask for real-time task scheduling and workload distribution',
      'Implemented scalable algorithms optimized for parallel execution, minimizing computation time and ensuring balanced resource utilization',
      'Configured custom network topology and node communication protocols for fault-tolerant and modular scaling',
      'Integrated Hadoop and cloud-based storage environments for handling large-scale data',
      'Conducted performance benchmarking across different workloads (data analysis, matrix computations, ML preprocessing)',
      'Delivered insights into deploying HPC environments in academic and research settings'
    ],
    tags: [
      'Python', 
      'Dask', 
      'Hadoop', 
      'Cloud Computing', 
      'Parallel Processing',
      'Distributed Systems',
      'Performance Optimization',
      'Networking',
      'Algorithm Design'
    ],
    date: '2024',
    icon: 'Zap',
    iconColor: 'text-purple-500'
  }
];