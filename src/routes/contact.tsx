import { createFileRoute } from '@tanstack/react-router';
import { ContactSection } from '@/components/portfolio/sections';
import { portfolioHead } from '@/lib/portfolio';
export const Route = createFileRoute('/contact')({ head: () => portfolioHead('Let’s connect', 'Connect with Deepak Singh on LinkedIn and Instagram for conversations, ideas, and opportunities.'), component: Contact });
function Contact() { return <main className="min-h-[65vh] flex flex-col justify-center"><ContactSection /></main>; }