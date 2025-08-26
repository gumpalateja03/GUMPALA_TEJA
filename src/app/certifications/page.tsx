import { certifications } from "@/data/certifications";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Link 
              href="/#certifications" 
              className="flex items-center text-primary hover:underline mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold">All Certifications</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all h-full flex flex-col"
              >
                <div className="h-64 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="text-sm text-muted-foreground space-y-1 mt-auto">
                    <p>Issued: {cert.date}</p>
                    <p className="font-medium text-foreground">{cert.credential}</p>
                  </div>
                  <a 
                    href={cert.verifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80 transition-colors self-start"
                    aria-label="Verify certificate"
                  >
                    <span className="mr-1 text-sm">Verify</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
