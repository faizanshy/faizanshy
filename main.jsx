import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Mail, Instagram, ExternalLink, Menu, X, Sparkles,
  Code2, Palette, Megaphone, Bot, Monitor, Layers, ChevronDown
} from "lucide-react";
import "./styles.css";

const socials = {
  instagram: "https://www.instagram.com/faizanshy",
  smun: "https://smundrinks.github.io/smundrinks/",
  email: "mailto:faizanshy7@gmail.com"
};

const projects = [
  {
    number: "01",
    title: "SMUN Drinks",
    category: "Brand / Web",
    text: "A premium digital presence for a modern beverage brand, built around bold visual identity and a clean product-first experience.",
    link: socials.smun
  },
  {
    number: "02",
    title: "FAIZANCRAFT AI",
    category: "AI / Product",
    text: "An AI-focused product concept exploring conversational experiences, creative tools, voice interaction and modern interfaces.",
    link: "#"
  },
  {
    number: "03",
    title: "Faizan Service",
    category: "Digital / Commerce",
    text: "A premium digital-service and ecommerce concept focused on social media, graphics, marketing and technology workflows.",
    link: "#"
  }
];

const skills = [
  ["AI & Creative Tech", "AI workflows, generative tools, automation concepts", Bot],
  ["Digital Marketing", "Social strategy, content planning, audience growth", Megaphone],
  ["Graphic Design", "Brand visuals, social creatives, commercial graphics", Palette],
  ["Web Development", "React, Vite, responsive interfaces, GitHub Pages", Code2],
  ["Content Creation", "Creative direction, visual storytelling, campaigns", Sparkles],
  ["Social Media", "Account management, content systems and branding", Monitor]
];

const services = [
  "Social Media Management",
  "Graphic Design & Brand Visuals",
  "AI Creative Workflows",
  "Digital Marketing",
  "Portfolio & Business Websites",
  "Content & Campaign Design"
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const close = () => setMenu(false);

  return (
    <div className="site">
      <div className="noise" />
      <div className="cursor-glow" />

      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark">FS</span>
          <span>FAIZAN SHY</span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["About", "Skills", "Services", "Projects", "Experience", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>
          ))}
        </nav>

        <a className="nav-cta" href={socials.email}>
          Let's talk <ArrowUpRight size={16} />
        </a>

        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid" />
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> CREATIVE TECHNOLOGY / DIGITAL</p>
            <h1>
              Building ideas<br />
              into <span>digital impact.</span>
            </h1>
            <p className="hero-text">
              I'm <strong>Faizan Shy</strong> — a creative technologist working across AI,
              design, digital marketing, social media and modern web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">Explore work <ArrowUpRight size={18} /></a>
              <a className="button button-outline" href={socials.instagram} target="_blank" rel="noreferrer">Instagram <Instagram size={17} /></a>
            </div>
            <div className="hero-meta">
              <span>Based in Karachi</span>
              <span className="line" />
              <span>Available for digital projects</span>
            </div>
          </div>

          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core"><span>FS</span></div>
            <div className="orbit-label label-one">AI</div>
            <div className="orbit-label label-two">DESIGN</div>
            <div className="orbit-label label-three">DIGITAL</div>
          </div>

          <a className="scroll-cue" href="#about"><ChevronDown size={18} /> SCROLL</a>
        </section>

        <section id="about" className="section split-section">
          <div className="section-label reveal">01 / ABOUT</div>
          <div className="split-content reveal">
            <p className="kicker">THE PERSON BEHIND THE WORK</p>
            <h2>Creative thinking meets <em>technology.</em></h2>
            <p>
              Faizan Shy is a multidisciplinary digital creator focused on turning ideas
              into useful, modern and visually strong digital experiences.
            </p>
            <p>
              From AI-powered concepts and websites to brand graphics, social media and
              digital marketing, the approach is simple: make technology feel creative,
              clear and human.
            </p>
            <div className="stat-row">
              <div><strong>AI</strong><span>Creative workflows</span></div>
              <div><strong>WEB</strong><span>Modern interfaces</span></div>
              <div><strong>MEDIA</strong><span>Digital growth</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-head reveal">
            <div className="section-label">02 / SKILLS</div>
            <h2>What I <em>work with.</em></h2>
          </div>
          <div className="skill-grid">
            {skills.map(([title, text, Icon], i) => (
              <article className="skill-card reveal" style={{"--delay": `${i * 60}ms`}} key={title}>
                <Icon size={24} strokeWidth={1.5} />
                <span className="card-index">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-label reveal">03 / SERVICES</div>
          <div className="service-layout">
            <h2 className="reveal">Ideas deserve<br /><em>good execution.</em></h2>
            <div className="service-list">
              {services.map((service, i) => (
                <div className="service-row reveal" key={service}>
                  <span>0{i + 1}</span>
                  <strong>{service}</strong>
                  <ArrowUpRight size={19} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-head reveal">
            <div className="section-label">04 / PROJECTS</div>
            <h2>Selected <em>work.</em></h2>
          </div>
          <div className="project-list">
            {projects.map(project => (
              <article className="project reveal" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
                <a className="project-link" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={`Open ${project.title}`}>
                  <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-label reveal">05 / EXPERIENCE</div>
          <div className="experience-copy reveal">
            <p className="kicker">A MULTIDISCIPLINARY PATH</p>
            <h2>Design. Technology.<br /><em>Digital growth.</em></h2>
            <p>
              My work sits between creativity and technology — combining visual design,
              AI tools, programming, social media and marketing into practical digital solutions.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item reveal">
              <span>NOW</span>
              <div><h3>Creative Technology & Digital</h3><p>AI workflows · Web · Design · Marketing · Social Media</p></div>
            </div>
            <div className="timeline-item reveal">
              <span>FOCUS</span>
              <div><h3>Building Digital Products</h3><p>Portfolio sites, brand experiences and AI product concepts</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box reveal">
            <p className="eyebrow">06 / CONTACT</p>
            <h2>Have an idea?<br /><em>Let's build it.</em></h2>
            <p>For collaborations, digital projects, design, AI concepts or social media work.</p>
            <a className="contact-email" href={socials.email}>
              <Mail size={19} /> faizanshy7@gmail.com <ArrowUpRight size={18} />
            </a>
            <div className="contact-socials">
              <a href={socials.instagram} target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram</a>
              <a href={socials.smun} target="_blank" rel="noreferrer"><ExternalLink size={18}/> SMUN Drinks</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><span className="brand-mark small">FS</span> © {new Date().getFullYear()} Faizan Shy</div>
        <div>AI · DESIGN · DIGITAL</div>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);