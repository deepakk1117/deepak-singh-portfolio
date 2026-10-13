import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Code2, Globe, Sparkles, Terminal, GraduationCap, MapPin, CalendarDays, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile, skills, projects } from '@/lib/portfolio';

const icons = { code: Code2, web: Globe, ai: Sparkles, tools: Terminal };
function TopicIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons] ?? Code2;
  return <Icon size={21} aria-hidden="true" />;
}

export function AboutSection() {
  return <section className="section section-tinted"><div className="page-container about-layout">
    <div><p className="section-label">A little about me</p><h2>Curious mind.<br />A developer in the making.</h2>
      <p className="section-lead">I’m a Computer Science Engineering student at JECRC University, with a growing interest in software development, artificial intelligence, and emerging technologies.</p>
      <p className="section-lead">I enjoy understanding how things work, solving problems, and turning curiosity into learning. I’m at the beginning of my journey, building a strong foundation for what comes next.</p>
    </div>
    <article className="education"><div className="flex items-center justify-between"><div className="education-icon"><GraduationCap size={23} /></div><span className="eyebrow">Education</span></div>
      <h3>{profile.university}</h3><p>B.Tech in Computer Science and Engineering<br />(CSE Core)</p>
      <div className="education-bottom"><span className="flex items-center gap-1.5"><CalendarDays size={13} /> Expected graduation · {profile.graduation}</span><span className="flex items-center gap-1.5"><MapPin size={13} /> Jaipur, Rajasthan, India</span></div>
    </article>
  </div></section>;
}

export function ProjectsSection({ preview = false }: { preview?: boolean }) {
  return <section className="section"><div className="page-container">
    <div className="section-header"><div><p className="section-label">Learning by building</p><h2>My work, in the making.</h2><p className="section-lead">Every project starts with curiosity. This is where mine will take shape.</p></div>
      {preview && <Button asChild variant="link"><Link to="/projects">View all projects <ArrowUpRight /></Link></Button>}
    </div>
    <div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}>
      <div className="project-visual"><TopicIcon name={project.icon} /></div><div className="project-body"><span className="project-tag">{project.label}</span><h3>{project.title}</h3><p>{project.description}</p></div>
    </article>)}</div>
  </div></section>;
}

export function SkillsSection() {
  return <section className="section section-tinted"><div className="page-container"><p className="section-label">Always a student</p><h2>What I’m exploring.</h2><p className="section-lead">A growing toolkit, shaped by practice and a willingness to learn.</p>
    <div className="skills-grid">{skills.map(skill => <article className="skill-item" key={skill.name}><div className="skill-icon"><TopicIcon name={skill.icon} /></div><h3>{skill.name}</h3><p>{skill.description}</p><span className="learning-label">Currently learning</span></article>)}</div>
  </div></section>;
}

export function SocialButtons() {
  return <div className="social-buttons"><Button asChild><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a></Button><Button asChild variant="outline"><a href={profile.instagram} target="_blank" rel="noopener noreferrer"><Instagram /> Instagram <ArrowUpRight /></a></Button></div>;
}

export function ContactSection() {
  return <section className="contact-band"><div className="page-container"><p className="section-label">Good conversations start here</p><h2>Let’s Connect</h2><p className="section-lead">Have an idea, an opportunity, or just want to say hello?<br />I’d love to hear from you.</p><SocialButtons /></div></section>;
}