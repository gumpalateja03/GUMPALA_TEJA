export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export const skills: SkillCategory[] = [
  {
    name: 'Programming Languages',
    items: [
      { name: 'Python', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'Java', level: 4 },
      { name: 'C#', level: 3 },
      { name: 'HTML5', level: 5 },
      { name: 'CSS3', level: 5 },
    ],
  },
  {
    name: 'Machine Learning & Data Science',
    items: [
      { name: 'Scikit-learn', level: 5 },
      { name: 'XGBoost', level: 4 },
      { name: 'TensorFlow', level: 4 },
      { name: 'Keras', level: 4 },
      { name: 'Pandas', level: 5 },
      { name: 'NLP', level: 4 },
      { name: 'Data Modeling', level: 4 },
      { name: 'Data Analytics', level: 5 },
    ],
  },
  {
    name: 'Cloud & Oracle Technologies',
    items: [
      { name: 'Oracle Cloud Database Services 2025 Certified', level: 5 },
      { name: 'OCI Data Science Professional', level: 5 },
      { name: 'OCI Data Science', level: 4 },
      { name: 'OCI Object Storage', level: 4 },
      { name: 'OCI Data Flow', level: 4 },
      { name: 'OCI AI Services', level: 4 },
      { name: 'OCI Data Catalog', level: 4 },
      { name: 'OCI Logging', level: 4 },
      { name: 'OCI DevOps', level: 3 },
      { name: 'OCI Vault', level: 3 },
    ],
  },
  {
    name: 'Web Development & APIs',
    items: [
      { name: 'React.js', level: 5 },
      { name: 'Next.js', level: 5 },
      { name: 'Flask', level: 4 },
      { name: 'REST API', level: 5 },
      { name: 'OpenAI API', level: 4 },
      { name: 'Axios', level: 4 },
    ],
  },
  {
    name: 'Big Data & Analytics',
    items: [
      { name: 'Google BigQuery', level: 4 },
      { name: 'Hadoop', level: 3 },
      { name: 'MapReduce', level: 3 },
      { name: 'Apache Pig', level: 3 },
      { name: 'Apache Spark', level: 4 },
      { name: 'Dask', level: 3 },
    ],
  },
  {
    name: 'Databases',
    items: [
      { name: 'MySQL', level: 5 },
      { name: 'Oracle Database', level: 4 },
      { name: 'Exadata', level: 3 },
      { name: 'Heatwave', level: 3 },
      { name: 'NoSQL', level: 4 },
      { name: 'SQL', level: 5 },
      { name: 'DBMS', level: 4 },
    ],
  },
  {
    name: 'Data Visualization',
    items: [
      { name: 'Tableau', level: 4 },
      { name: 'Power BI', level: 4 },
      { name: 'Matplotlib', level: 4 },
      { name: 'Seaborn', level: 4 },
    ],
  },
  {
    name: 'DevOps & Tools',
    items: [
      { name: 'Git', level: 5 },
      { name: 'Docker', level: 4 },
      { name: 'MLFlow', level: 3 },
      { name: 'CI/CD', level: 4 },
      { name: 'Data Scraping', level: 4 },
      { name: 'Data Cleaning', level: 5 },
      { name: 'Data Quality', level: 4 },
    ],
  },
];
