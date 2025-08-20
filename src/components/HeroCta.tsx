import * as React from 'react'
import { ArrowRight, Mail } from 'lucide-react'

export default function HeroCta() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-cta flex gap-4 flex-wrap justify-center">
      <a 
        href="#work" 
        onClick={(e) => scrollToSection(e, '#work')}
        className="button"
        aria-label="View my work"
      >
        <span>View My Work</span>
        <ArrowRight className="h-5 w-5" />
      </a>
      <a 
        href="#contact" 
        onClick={(e) => scrollToSection(e, '#contact')}
        className="button-secondary"
        aria-label="Get in touch"
      >
        <Mail className="h-5 w-5" />
        <span>Get in Touch</span>
      </a>
    </div>
  )
}
