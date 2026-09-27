import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight, Menu, X, Sparkles, Code2, Palette,
  BrainCircuit, Megaphone, Play, Mail, Instagram,
  Github, Linkedin, ChevronDown
} from "lucide-react";
import "./styles.css";

const projects = [
  { title: "FAIZANCRAFT AI", tag: "AI PRODUCT", text: "A futuristic AI experience concept combining conversation, voice, avatars and expressive digital interaction." },
  { title: "SMUN AI", tag: "AI STARTUP", text: "A modern AI product concept focused on a polished, engaging and human-centered digital experience." },
  { title: "SMUNMOTORS", tag: "3D / WEB", text: "A cinematic luxury automotive showroom concept with immersive 3D presentation and motion." },
  { title: "FAIZANSERVICE", tag: "ECOMMERCE", text: "A premium commerce interface concept designed around discovery, product storytelling and conversion." },
  { title: "FAIZAN EDITOR", tag: "CREATIVE TOOL", text: "A visual editor concept for fast, accessible digital content creation with a clean interface." },
  { title: "THE SOCIAL BOND", tag: "WEB / BRAND", text: "A modern organization website concept built around community, clarity and a strong visual identity." }
];

const services = [
  { icon: BrainCircuit, title: "AI & Automation", text: "AI concepts, intelligent interfaces and practical automation workflows." },
  { icon: Palette, title: "Creative Design", text: "Premium visual systems, social graphics, branding and digital experiences." },
  { icon: Code2, title: "Web Experiences", text: "Modern responsive websites with polished interactions and motion." },
  { icon: Megaphone, title: "Digital Marketing", text: "Social media strategy, content direction, campaigns and audience-focused communication." }
];

function App() {
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    document.title = "Faizan Shy — Creative Technology";
  }, []);

  const close = () => setMenu(false);

  return (
    <div className="site">
      <motion.div className="progress" style={{ scaleX }} />

      <header className="nav">
        <a href="#home" className="brand" onClick={close}>
          <span className="brand-dot" />
          FAIZAN<span>SHY</span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["About", "Services", "Projects", "Contact"].map(item => (
            <a key={item} href={"#" + item.toLowerCase()} onClick={close}>{item}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
        <button className="menu-btn" aria-label="Menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid" />
          <motion.div
            className="hero-orb"
            animate={{ y: [0, -22, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <span className="eyebrow"><Sparkles size={14}/> AI • DESIGN • TECHNOLOGY</span>
              <h1>Ideas into<br/><em>digital reality.</em></h1>
              <p className="hero-text">
                I'm <strong>Faizan Shy</strong> — a creative technologist focused on AI,
                digital creativity, design and modern web experiences.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button primary">Explore work <ArrowUpRight size={17}/></a>
                <a href="#about" className="button ghost">Discover more <ChevronDown size={17}/></a>
              </div>
            </motion.div>
          </div>

          <div className="hero-side">
            <div className="vertical-label">CREATIVE TECHNOLOGY / 2026</div>
            <div className="hero-number">01<span>/04</span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 — ABOUT</div>
          <div className="about-content">
            <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              Building at the intersection of <span>creativity</span> and technology.
            </motion.h2>
            <div className="about-bottom">
              <p>I combine creative thinking with technology to build digital concepts that feel modern, useful and memorable. My work spans AI, graphic design, digital marketing, content and web experiences.</p>
              <div className="facts">
                <div><b>AI</b><small>Creative workflows</small></div>
                <div><b>WEB</b><small>Modern experiences</small></div>
                <div><b>DESIGN</b><small>Visual direction</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-label">02 — SERVICES</div>
          <div className="section-heading">
            <h2>What I <span>create.</span></h2>
            <p>Digital work designed to look sharp, communicate clearly and move with purpose.</p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => {
              const Icon = s.icon;
              return <motion.article className="service-card" key={s.title}
                initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}>
                <div className="service-icon"><Icon size={22}/></div>
                <span>0{i+1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ArrowUpRight className="card-arrow" size={19}/>
              </motion.article>
            })}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 — SELECTED WORK</div>
          <div className="section-heading">
            <h2>Selected <span>projects.</span></h2>
            <p>A collection of product ideas, creative experiments and digital experiences.</p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <motion.article className="project" key={p.title}
                initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
                <div className="project-index">0{i+1}</div>
                <div className="project-main">
                  <span>{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p>
                </div>
                <div className="project-action"><ArrowUpRight size={24}/></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="statement section">
          <div className="statement-mark"><Play size={18} fill="currentColor"/></div>
          <h2>Make it <em>simple.</em><br/>Make it <span>matter.</span></h2>
        </section>

        <section id="contact" className="section contact">
          <div className="section-label">04 — CONTACT</div>
          <div className="contact-wrap">
            <div>
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
              <h2>Let's build<br/><em>something.</em></h2>
            </div>
            <div className="contact-side">
              <p>For collaborations, creative projects or digital ideas, connect with me through the links below.</p>
              <div className="contact-links">
                <a href="mailto:hello@faizanshy.com"><Mail size={18}/> Email <ArrowUpRight size={16}/></a>
                <a href="https://www.instagram.com/faizanshy/" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram <ArrowUpRight size={16}/></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={16}/></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={16}/></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">FAIZAN<span>SHY</span></div>
        <p>© 2026 Faizan Shy. Crafted with curiosity.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);