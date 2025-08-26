"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { containerVariants, fadeInUp } from '@/lib/animations';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack AIML Engineer Intern',
    company: 'T-Works,Hyderabad.',
    location: 'Hyderabad, Telangana',
    date: 'Mar 2025 - Present',
    description: [
      'Developing software solutions for innovative projects in collaboration with LAM Research and the Bill & Melinda Gates Foundation, driving advancements in technology and global health initiatives.'
    ]
  },
  {
    title: 'Software Engineer Intern',
    company: 'T-Works,Hyderabad.',
    location: 'Hyderabad, Telangana',
    date: 'Nov 2024 - Jan 2025',
    description: [
      'Internship role involving software engineering tasks at T-Works.'
    ]
  },
  {
    title: 'Machine Learning Engineer Intern',
    company: 'Tata Motors',
    location: 'Jamshedpur, Jharkhand',
    date: 'May 2024 - Dec 2025',
    description: [
      'Worked as a machine learning engineer intern involving hybrid onsite and remote work.'
    ]
  },
  {
    title: 'Junior Software Engineer Trainee',
    company: 'Kephi Innovations Private Limited',
    location: 'Hyderabad, Telangana',
    date: 'Sep 2023 - Jul 2024',
    description: [
      'Started as a trainee and junior software engineer, contributing to company projects and learning software engineering skills.'
    ]
  }
];

export function Experience() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="py-20" id="experience" />;
  }

  return (
    <section id="experience" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the roles that have shaped my career.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 h-4 w-4 rounded-full bg-primary -translate-x-1.5 -translate-y-1 z-10"></div>
                
                {/* Content */}
                <div className={`bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all w-full max-w-[calc(100%-2rem)] md:max-w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full whitespace-nowrap ml-4">
                      {exp.date}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </div>
                  <ul className="space-y-3 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
