import { createFileRoute } from '@tanstack/react-router';
import { ProjectsSection, ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/projects')({ head: () => portfolioHead('Projects & learning', 'Follow Deepak Singh’s learning journey and future projects in programming, web development, and artificial intelligence. Completed projects are coming soon.'), component: Projects });
function Projects() { return <main><ProjectsSection /><ContactSection /></main>; }