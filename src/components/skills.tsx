"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from "@/data/skills"

interface SkillCategory {
  name: string;
  items: {
    name: string;
    level: number;
  }[];
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [linePath, setLinePath] = useState<string>('');
  const [skillsBoxPosition, setSkillsBoxPosition] = useState({ x: 0, y: 0 });

  // Calculate positions for perfect circular distribution
  const radius = 160;
  const categoryRadius = 56;
  
  const getCategoryPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * (radius + categoryRadius);
    const y = Math.sin(angle) * (radius + categoryRadius);
    return { x, y, angle };
  };

  const handleCategoryClick = (categoryName: string, index: number) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
      return;
    }
    
    setSelectedCategory(categoryName);
    const angle = (index * (2 * Math.PI)) / skills.length - Math.PI / 2;
    
    // Calculate position with 1.5cm (57px) minimum distance
    const minDistancePx = 57;
    const circleRadius = 56;
    const boxWidth = 256;
    
    // Calculate minimum safe distance from center
    const minSafeDistance = radius + circleRadius + (boxWidth / 2) + minDistancePx;
    
    // Calculate base position
    let distance = Math.max(radius * 1.5, minSafeDistance / Math.cos(Math.PI / skills.length));
    let x = Math.cos(angle) * distance;
    let y = Math.sin(angle) * distance;
    
    // Calculate viewport boundaries
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 768;
    const maxX = (viewportWidth * 0.45) - (boxWidth / 2);
    const maxY = (viewportHeight * 0.45) - 100; // 100px buffer from top/bottom
    
    // Adjust position if it would go outside viewport
    if (Math.abs(x) > maxX) {
      x = Math.sign(x) * maxX;
    }
    if (Math.abs(y) > maxY) {
      y = Math.sign(y) * maxY;
    }
    
    // Apply additional offset to ensure clearance
    const xOffset = (x > 0 ? minDistancePx/2 : -minDistancePx/2) - 58;
    const yOffset = y > 0 ? minDistancePx/2 : -minDistancePx/2;
    
    setSkillsBoxPosition({ 
      x: x + xOffset,
      y: y + yOffset
    });
  };

  // Close skills when clicking the center circle
  const handleCloseSkills = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-12 md:py-20 bg-background">
      <div className="w-full max-w-6xl px-4 mx-auto flex flex-col items-center">
        <motion.div 
          className="text-center mb-12 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {typeof window !== 'undefined' && window.innerWidth >= 768 
              ? 'Click on any category to view related skills' 
             : 'Tap to view skills in each category'}
          </p>
        </motion.div>

        {/* Mobile View - Simple List */}
        <div className="w-full md:hidden grid grid-cols-1 gap-4 px-4">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-card border border-border rounded-lg p-4 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              onClick={() => setSelectedCategory(
                selectedCategory === category.name ? null : category.name
              )}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{category.name}</h3>
                <span>{selectedCategory === category.name ? '−' : '+'}</span>
              </div>
              
              {selectedCategory === category.name && (
                <motion.div 
                  className="mt-3 flex flex-wrap gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {category.items.map((skill) => (
                    <span 
                      key={skill.name}
                      className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop/Tablet View - Circular Diagram */}
        <div className="hidden md:block relative w-full h-[600px] md:h-[700px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Central circle */}
            <motion.div 
              className="absolute w-36 h-36 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center text-center p-4 z-10 cursor-pointer shadow-lg"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
              onClick={handleCloseSkills}
            >
              <span className="text-sm font-medium text-foreground">
                {selectedCategory || 'All Skills'}
              </span>
            </motion.div>

            {/* Animated line */}
            <AnimatePresence>
              {selectedCategory && (
                <motion.svg 
                  className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.path
                    d={linePath}
                    stroke="rgba(59, 130, 246, 0.6)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    exit={{ pathLength: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>

            {/* Category circles - Always visible */}
            <AnimatePresence>
              {skills.map((category, index) => {
                const { x, y } = getCategoryPosition(index, skills.length, radius);
                const isSelected = selectedCategory === category.name;
                
                return (
                  <motion.div
                    key={category.name}
                    className={`absolute w-28 h-28 rounded-full flex items-center justify-center text-center p-2 cursor-pointer ${
                      isSelected 
                        ? 'bg-primary/10 border-2 border-primary/50 shadow-lg' 
                        : 'bg-card border-2 border-primary/20 hover:border-primary/30'
                    }`}
                    style={{
                      left: '50%',
                      top: '50%',
                      x: x,
                      y: y,
                      zIndex: isSelected ? 30 : hoveredSkill === category.name ? 20 : 10,
                    }}
                    initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: isSelected ? 1.1 : 1,
                      x: x,
                      y: y,
                      transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        delay: index * 0.1
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      borderColor: 'rgba(59, 130, 246, 0.5)',
                      boxShadow: '0 0 25px rgba(59, 130, 246, 0.2)'
                    }}
                    onHoverStart={() => setHoveredSkill(category.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    onClick={() => handleCategoryClick(category.name, index)}
                  >
                    <span className="text-xs font-medium text-foreground leading-tight">
                      {category.name.split(' ').map((word, i, arr) => (
                        <div key={i} className={i < arr.length - 1 ? 'mb-1' : ''}>
                          {word}
                        </div>
                      ))}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Skills box for selected category */}
            <AnimatePresence>
              {selectedCategory && (
                <motion.div
                  className="absolute bg-card border-2 border-primary/20 rounded-lg p-4 shadow-lg z-20 w-64"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: skillsBoxPosition.x,
                    y: skillsBoxPosition.y,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    x: skillsBoxPosition.x,
                    y: skillsBoxPosition.y,
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring' }}
                >
                  <div className="flex flex-wrap gap-2">
                    {skills.find(cat => cat.name === selectedCategory)?.items.map((skill) => (
                      <span 
                        key={skill.name}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
