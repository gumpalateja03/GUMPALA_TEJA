import { projects } from "@/data/projects";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Zap, Search } from 'lucide-react';

const iconComponents = {
  Zap,
  Search
  // Add other icons as needed
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-foreground/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <p className="text-foreground/60 max-w-2xl">
            A collection of my recent work and projects I've contributed to.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = iconComponents[project.icon as keyof typeof iconComponents] || Zap;
            
            return (
              <article 
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border border-border/50 h-full flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-primary/10 ${project.iconColor || 'text-primary'} flex-shrink-0`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-foreground/80 text-sm">{project.subtitle}</p>
                    <div className="text-xs text-foreground/60 mt-1">{project.date}</div>
                  </div>
                </div>

                <p className="text-foreground/80 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="mb-4">
                  <h3 className="font-medium text-sm mb-2">Key Features:</h3>
                  <ul className="space-y-1 text-sm">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-1.5 mt-1">•</span>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <h3 className="font-medium text-sm mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
