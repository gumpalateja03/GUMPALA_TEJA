import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Toaster } from "@/components/ui/toaster"
import Link from 'next/link'
import Image from 'next/image'
import GTImage from '@/Assests/GT.png'
import { ArrowRight } from 'lucide-react';
import { certifications } from "@/data/certifications";
import { researchPapers } from '@/data/research';
import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

// This is a Server Component
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="space-y-6">
                  <p className="text-lg text-foreground text-justify">
                  I am an Oracle Cloud Infrastructure 2025 Certified Data Science & Database Services Professional with a strong passion for Machine Learning and Data Science. My journey has been shaped by hands-on experience through impactful internships and real-world projects, where I have contributed to building innovative, data-driven solutions that deliver tangible business value.

I have had the privilege of working on cutting-edge projects in collaboration with esteemed organizations such as the Bill & Melinda Gates Foundation and LAM Research. These experiences have deepened my expertise in developing AI-powered solutions that tackle global challenges and advance technology.
                  </p>
                  <p className="text-lg text-foreground text-justify">
                  With a background that blends deep technical expertise in AI/ML and a strategic problem-solving mindset, I excel at transforming complex challenges into intelligent products and solutions. Having worked across both startup environments and enterprise-scale organizations, I bring a unique perspective that balances innovation agility with scalability and robustness.

I am driven by continuous learning and growth, always eager to adapt and collaborate with visionary teams pushing the frontiers of technology. My goal is to harness the power of data science to drive meaningful business transformation and empower organizations to excel in an AI-powered future.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative w-56 h-86 mx-auto md:mx-0 md:ml-auto">
                  <Image
                    src={GTImage}
                    alt="Gumpala Teja"
                    className="w-full h-full object-cover rounded-lg"
                    width={224}
                    height={320}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Experience />
        
        <Skills />
        
        <Projects />

       

        {/* Research Section */}
        <section id="research" className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Research</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              {researchPapers.slice(0, 2).map((paper) => (
                <div 
                  key={paper.id}
                  className="group bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {paper.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {paper.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{paper.journal} · {paper.date}</span>
                      <span className="mx-2">•</span>
                      <Link 
                        href={paper.link} 
                        className="inline-flex items-center text-primary hover:underline group-hover:text-primary/80 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Publication <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {researchPapers.length > 2 && (
              <div className="text-center mt-8">
                <Link 
                  href="/research" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  View All Research Papers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 bg-gradient-to-b from-background/80 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Certifications</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my professional certifications and achievements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {certifications.slice(0, 3).map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-64 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                      <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                      <div className="mt-2 text-sm text-muted-foreground space-y-1">
                        <p>Issued: {cert.date}</p>
                        <p className="font-medium text-foreground">{cert.credential}</p>
                      </div>
                    </div>
                    <a 
                      href={cert.verifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center"
                      aria-label="Verify certificate"
                    >
                      <span className="mr-1 text-sm">Verify</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {certifications.length > 3 && (
              <div className="text-center">
                <Link 
                  href="/certifications" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  View All Certifications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
      
      <Toaster />
    </div>
  )
}
