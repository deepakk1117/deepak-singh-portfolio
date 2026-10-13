export const profile = {
  name: 'Deepak Singh',
  graduation: 2030,
  university: 'JECRC University',
  linkedin: 'https://www.linkedin.com/in/deepak-singh-45b333425/',
  instagram: 'https://www.instagram.com/deepakk_001/',
};

export const skills = [
  { name: 'Programming', description: 'Building a foundation in programming concepts and problem-solving.', icon: 'code' },
  { name: 'Web Development', description: 'Exploring how thoughtful, accessible digital experiences are built.', icon: 'web' },
  { name: 'Artificial Intelligence Tools', description: 'Discovering AI tools and their possibilities in everyday technology.', icon: 'ai' },
  { name: 'Developer Tools', description: 'Getting familiar with the tools that support a developer’s workflow.', icon: 'tools' },
];

export const projects = [
  { title: 'Coming Soon', label: 'The first chapter', description: 'A space for my first hands-on project. Something thoughtful is on the horizon.', icon: 'code' },
  { title: 'Currently Learning', label: 'A work in progress', description: 'Exploring ideas, strengthening the fundamentals, and learning one step at a time.', icon: 'ai' },
  { title: 'Future Projects', label: 'Room to explore', description: 'A home for future experiments in web development, AI, and meaningful technology.', icon: 'web' },
];

export function portfolioHead(title: string, description: string) {
  return { meta: [
    { title: `${title} | Deepak Singh` },
    { name: 'description', content: description },
    { property: 'og:title', content: `${title} | Deepak Singh` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] };
}