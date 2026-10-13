import { createFileRoute } from '@tanstack/react-router';
import { AboutSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/about')({ head: () => portfolioHead('About & education', 'Learn about Deepak Singh’s Computer Science Engineering journey at JECRC University, Jaipur, and his interest in AI and software development.'), component: About });
function About() { return <main className="inner-page"><div className="page-container"><p className="section-label">The person behind the portfolio</p><h2>Curiosity is my starting point.</h2></div><AboutSection /><ContactSection /></main>; }