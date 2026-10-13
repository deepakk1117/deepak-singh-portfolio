import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Menu, X, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/portfolio';

const navigation = [{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Projects', to: '/projects' }, { label: 'Skills', to: '/skills' }] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="page-container site-header"><Link to="/" className="brand" aria-label="Deepak Singh home"><span className="brand-mark">DS<span className="sr-only"> initials</span></span>Deepak Singh<span className="text-primary">.</span></Link>
    <nav aria-label="Main navigation" className={`desktop-nav ${open ? 'open' : ''}`}>{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} className="nav-link" onClick={() => setOpen(false)}>{item.label}</Link>)}<Button variant="outline" asChild size="sm"><Link to="/contact" onClick={() => setOpen(false)}>Let’s Connect <ArrowUpRight /></Link></Button></nav>
    <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </header>;
}

export function Footer() {
  return <footer className="page-container site-footer"><span>Designed with care by Deepak Singh</span><div className="footer-links"><a href={profile.linkedin} aria-label="Deepak on LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a><a href={profile.instagram} aria-label="Deepak on Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a></div></footer>;
}