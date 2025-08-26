import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { researchPapers } from '@/data/research';

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/#research" 
            className="inline-flex items-center text-primary hover:underline mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Research Publications</h1>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {researchPapers.map((paper) => (
              <div 
                key={paper.id}
                className="group bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-3 text-foreground">
                    {paper.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {paper.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium">{paper.journal}</span>
                    <span>•</span>
                    <span>{paper.date}</span>
                    {paper.link && (
                      <>
                        <span>•</span>
                        <a
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center"
                        >
                          View Publication
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
