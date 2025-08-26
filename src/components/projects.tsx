"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Zap, Search } from 'lucide-react'
import { projects } from '@/data/projects'

const iconComponents = {
  Zap,
  Search
  // Add other icons as needed
}

export function Projects() {
  // Only show featured projects on the home page
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve real-world problems.
          </p>
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => {
            const IconComponent = iconComponents[project.icon as keyof typeof iconComponents] || Zap;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-8 shadow-lg border border-border/50"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-3 rounded-lg bg-primary/10 ${project.iconColor || 'text-primary'}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-foreground/80 mt-1">{project.subtitle}</p>
                    <div className="text-sm text-foreground/60 mt-2">{project.date}</div>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 text-sm rounded-full bg-secondary/30 text-foreground/60">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
