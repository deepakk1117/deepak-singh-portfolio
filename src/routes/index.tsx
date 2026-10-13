import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portrait from '@/assets/deepak-singh.jpeg.asset.json';
import { AboutSection, ProjectsSection, SkillsSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/')({
  head: () => portfolioHead('Student, builder & curious mind', 'Meet Deepak Singh, a B.Tech CSE student at JECRC University exploring programming, artificial intelligence, and meaningful digital experiences.'),
  component: Index,
});

function Index() {
  return <main><section className="page-container hero">
    <img className="hero-photo" src={portrait.url} alt="Deepak Singh wearing a black suit and tie" fetchPriority="high" width={768} height={1024} />
    <div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> Learning. Building. Growing.</p><h1>Hi, I’m<br /><span className="text-primary">Deepak Singh</span><span className="text-primary">.</span></h1>
      <p className="hero-subtitle">B.Tech CSE Student | AI & Technology Enthusiast</p><p className="hero-description">I’m a Computer Science Engineering student passionate about technology, programming, and exploring innovative ideas. I’m continuously learning and building my technical skills to create meaningful digital experiences.</p>
      <div className="hero-actions"><Button asChild><Link to="/projects">Explore My Work <ArrowUpRight /></Link></Button><Button asChild variant="outline"><Link to="/contact">Connect With Me <ArrowRight /></Link></Button></div>
      <p className="hero-location"><MapPin size={13} /> JECRC University · Jaipur, India</p>
    </div>
  </section><AboutSection /><ProjectsSection preview /><SkillsSection /><ContactSection /></main>;
}
