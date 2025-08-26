"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { containerVariants, itemVariants } from '@/lib/animations';

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div id="home" className="min-h-screen pt-16" />;
  }

  return (
    <section id="home" className="flex items-center justify-center min-h-screen pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-primary">Gumpala Teja</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
            variants={itemVariants}
          >
            Full Stack AIML Engineer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I build exceptional digital experiences with modern technologies.
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="#contact">
              <Button size="lg" className="px-8">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#projects">
              <Button variant="outline" size="lg" className="px-8">
                View My Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
