import { createFileRoute } from '@tanstack/react-router';
import { SkillsSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/skills')({ head: () => portfolioHead('Skills & interests', 'Explore the programming, web development, AI, and developer tools Deepak Singh is currently learning.'), component: Skills });
function Skills() { return <main><SkillsSection /><ContactSection /></main>; }