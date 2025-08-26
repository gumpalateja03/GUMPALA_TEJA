import OracleDSCert from '@/Assests/CERTIFICATIONS/Oracle Cloud Infrastructure 2025 Certified Data Science Professional.png';
import OracleDBCert from '@/Assests/CERTIFICATIONS/Oracle Cloud Database Services 2025 Certified Professional.png';
import SoftwareEngineerCert from '@/Assests/CERTIFICATIONS/Software Engineer.png';
import DataAnalyticsCert from '@/Assests/CERTIFICATIONS/Data Analytics on Google Cloud.png';
import DataVizPythonCert from '@/Assests/CERTIFICATIONS/Data Visualization with Python - IBM.png';
import HadoopCert from '@/Assests/CERTIFICATIONS/Hadoop - IBM.png';
import MovingDataHadoopCert from '@/Assests/CERTIFICATIONS/Moving Data into Hadoop.png';
import MLPythonCert from '@/Assests/CERTIFICATIONS/Machine Learning with Python - IBM.png';
import SQLDBCert from '@/Assests/CERTIFICATIONS/SQL and Relational Databases 101 - IBM.png';
import PromptEngCert from '@/Assests/CERTIFICATIONS/Foundations of Prompt Engineering.jpg';
import PowerBICert from '@/Assests/CERTIFICATIONS/Power BI - pwc.png';
import AICert from '@/Assests/CERTIFICATIONS/Artificial Intelligence - Cognizant.png';
import DataAnalyticsQuantiumCert from '@/Assests/CERTIFICATIONS/Data Analytics - Quantium.png';
import DataAnalyticsVizAccentureCert from '@/Assests/CERTIFICATIONS/Data Analytics and Visualization - Accenture.png';
import DataVizTataCert from '@/Assests/CERTIFICATIONS/Data Visualisation Effective Insights - TATA.png';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credential: string;
  image: any;
  verifyUrl: string;
}

export const certifications: Certification[] = [
  { 
    id: '1',
    title: "Oracle Cloud Infrastructure Data Science Professional 2025", 
    issuer: "Oracle",
    date: "2025",
    credential: "Oracle Certified Professional",
    image: OracleDSCert,
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=493D7F51146B8DC8E6D869BD5D4F8827F0EBB8E522228A03006F3B63F02B9B1E"
  },
  { 
    id: '2',
    title: "Oracle Cloud Database Services 2025", 
    issuer: "Oracle",
    date: "2025",
    credential: "Oracle Certified Professional",
    image: OracleDBCert,
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=ED820571477470A8EFAF6C6FF65A38A75262BEEFE4C4BD5CDB117CEC122D048E"
  },
  { 
    id: '3',
    title: "Foundations of Prompt Engineering", 
    issuer: "Amazon Web Services (AWS) Training and Certification",
    date: "2024",
    credential: "Course Certificate",
    image: PromptEngCert,
    verifyUrl: "#"  // Update with actual verification URL when available
  },
  { 
    id: '4',
    title: "SQL and Relational Databases 101", 
    issuer: "IBM",
    date: "2024",
    credential: "Professional Certificate",
    image: SQLDBCert,
    verifyUrl: "https://courses.yl-ptech.skillsnetwork.site/certificates/8c0e150bafcc4603b317ac78415deeee"
  },
  { 
    id: '5',
    title: "Machine Learning with Python", 
    issuer: "IBM",
    date: "2024",
    credential: "Professional Certificate",
    image: MLPythonCert,
    verifyUrl: "https://courses.yl-ptech.skillsnetwork.site/certificates/1439418a4b454db7a97780aa2aaee343"
  },
  { 
    id: '6',
    title: "Hadoop", 
    issuer: "IBM",
    date: "2024",
    credential: "Professional Certificate",
    image: HadoopCert,
    verifyUrl: "https://courses.yl-ptech.skillsnetwork.site/certificates/bf246e67f1f2422881c8455c1470973d"
  },
  { 
    id: '7',
    title: "Moving Data into Hadoop", 
    issuer: "IBM",
    date: "2024",
    credential: "Professional Certificate",
    image: MovingDataHadoopCert,
    verifyUrl: "https://courses.yl-ptech.skillsnetwork.site/certificates/3567b455040b4447bf7c50e1c98da1e0"
  },
  { 
    id: '8',
    title: "Data Visualization with Python", 
    issuer: "IBM",
    date: "2024",
    credential: "Professional Certificate",
    image: DataVizPythonCert,
    verifyUrl: "https://courses.yl-ptech.skillsnetwork.site/certificates/38233d4b45954dcf9559e3016eda60c1"
  },
  { 
    id: '9',
    title: "Data Analytics on Google Cloud", 
    issuer: "Google Cloud",
    date: "Feb 2025",
    credential: "Completion Badge",
    image: DataAnalyticsCert,
    verifyUrl: "#"
  },
  { 
    id: '10',
    title: "Software Engineer", 
    issuer: "Coding Ninjas",
    date: "2024",
    credential: "Software Development Certificate",
    image: SoftwareEngineerCert,
    verifyUrl: "https://www.hackerrank.com/certificates/iframe/6a6ddf7091db"
  },
  { 
    id: '11',
    title: "Power BI", 
    issuer: "PwC",
    date: "2024",
    credential: "Course Certificate",
    image: PowerBICert,
    verifyUrl: "#"  // Update with actual verification URL when available
  },
  { 
    id: '12',
    title: "Artificial Intelligence", 
    issuer: "Cognizant",
    date: "2024",
    credential: "Professional Certificate",
    image: AICert,
    verifyUrl: "#"  // Update with actual verification URL when available
  },
  { 
    id: '13',
    title: "Data Analytics", 
    issuer: "Quantium",
    date: "2024",
    credential: "Professional Certificate",
    image: DataAnalyticsQuantiumCert,
    verifyUrl: "#"  // Update with actual verification URL when available
  },
  { 
    id: '14',
    title: "Data Analytics and Visualization", 
    issuer: "Accenture",
    date: "2024",
    credential: "Professional Certificate",
    image: DataAnalyticsVizAccentureCert,
    verifyUrl: "#"  // Update with actual verification URL when available
  },
  { 
    id: '15',
    title: "Data Visualisation: Empowering Business with Effective Insights", 
    issuer: "TATA",
    date: "2024",
    credential: "Professional Certificate",
    image: DataVizTataCert,
    verifyUrl: "#"  // Update with actual verification URL when available
  }
];
