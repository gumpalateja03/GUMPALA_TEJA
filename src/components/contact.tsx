"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, Github } from 'lucide-react'

const contactMethods = [
  {
    name: 'WhatsApp',
    icon: <MessageCircle className="h-6 w-6" />,
    url: 'https://wa.me/917386917465',
    color: 'bg-green-500',
    iconColor: 'text-white',
    label: '+91 7386917465',
    href: 'https://wa.me/917386917465'
  },
  {
    name: 'Email',
    icon: <Mail className="h-6 w-6" />,
    url: 'mailto:tejagumpala@gmail.com',
    color: 'bg-red-500',
    iconColor: 'text-white',
    label: 'tejagumpala@gmail.com',
    href: 'mailto:tejagumpala@gmail.com'
  },
  {
    name: 'Call',
    icon: <Phone className="h-6 w-6" />,
    url: 'tel:+917386917465',
    color: 'bg-blue-500',
    iconColor: 'text-white',
    label: '+91 7386917465',
    href: 'tel:+917386917465'
  },
  {
    name: 'Location',
    icon: <MapPin className="h-6 w-6" />,
    color: 'bg-purple-500',
    iconColor: 'text-white',
    label: 'Hyderabad, India'
  }
]

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    url: 'https://www.linkedin.com/in/gumpala-teja/',
    color: 'hover:bg-blue-600 hover:text-white',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="h-5 w-5" />,
    url: 'https://instagram.com/gumpala_teja',
    color: 'hover:bg-pink-600 hover:text-white',
  },
  {
    name: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    url: 'https://github.com/gumpalateja03',
    color: 'hover:bg-gray-900 hover:text-white',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Feel free to reach out to me through any of these platforms
          </p>
        </motion.div>

        {/* Contact Methods - Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={method.name}
              className="bg-card p-6 rounded-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-full ${method.color} ${method.iconColor} mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{method.name}</h3>
                {method.href ? (
                  <a 
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 break-all"
                  >
                    {method.label}
                  </a>
                ) : (
                  <p className="text-foreground/70">{method.label}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-secondary/50 text-foreground/60 hover:scale-110 transition-all ${social.color}`}
                aria-label={social.name}
                title={social.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
