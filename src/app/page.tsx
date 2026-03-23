"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Icons
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

// Dancing Robots Background
function DancingRobots() {
  return (
    <div className="floating-bots">
      {/* Robot doing moonwalk on the left */}
      <div
        className="bot moonwalk"
        style={{
          bottom: "15%",
          left: "8%",
          fontSize: "3rem",
        }}
      >
        🤖
      </div>

      {/* Robot doing floss dance on the right */}
      <div
        className="bot floss"
        style={{
          bottom: "20%",
          right: "10%",
          fontSize: "2.8rem",
        }}
      >
        🤖
      </div>

      {/* Robot doing orange justice at top */}
      <div
        className="bot orange-justice"
        style={{
          top: "15%",
          right: "12%",
          fontSize: "2.5rem",
        }}
      >
        🤖
      </div>
    </div>
  );
}

// Glowing Orbs Background
function GlowingOrbs() {
  return (
    <>
      <div
        className="orb"
        style={{
          width: "300px",
          height: "300px",
          background: "rgba(212, 163, 115, 0.15)",
          top: "-100px",
          left: "-100px",
          animationDelay: "0s",
        }}
      />
      <div
        className="orb"
        style={{
          width: "250px",
          height: "250px",
          background: "rgba(212, 163, 115, 0.1)",
          top: "30%",
          right: "-80px",
          animationDelay: "3s",
        }}
      />
      <div
        className="orb"
        style={{
          width: "200px",
          height: "200px",
          background: "rgba(212, 163, 115, 0.12)",
          bottom: "10%",
          left: "-50px",
          animationDelay: "6s",
        }}
      />
    </>
  );
}

// Nav
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262626]" : ""
    }`}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold text-accent">MT</a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm text-[#a3a3a3]">
              <a href="#projects" className="link-hover">Projects</a>
              <a href="#experience" className="link-hover">Experience</a>
              <a href="#about" className="link-hover">About</a>
            </div>
            <a href="#contact" className="btn btn-primary text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero - centered layout, left-aligned text
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="grid-bg" />
      <div className="gradient-overlay" />
      <DancingRobots />
      <GlowingOrbs />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-32">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Profile */}
          <div className="relative flex-shrink-0">
            <div className="profile-ring" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-[#0a0a0a]">
              <Image
                src="/profile.png"
                alt="Mo Tabish"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <div className="text-center sm:text-left">
            <div className="status-badge mb-4 inline-flex">
              <span className="status-dot" />
              <span className="text-[#a3a3a3]">Open to opportunities</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] mb-2">
              Mo Tabish
            </h1>

            <p className="text-sm text-[#a3a3a3] mb-3">
              CS Team Lead & AI Builder at{" "}
              <span className="text-accent">Georgia State University</span>
            </p>

            <p className="text-sm text-[#737373] mb-5">
              Building AI agents and full-stack platforms. 4.0 GPA, Honors College.
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a href="#projects" className="btn btn-primary text-sm">View Work</a>
              <a href="https://github.com/mtabish1" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/mtabish1/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects - wider boxes, left-aligned text
function Projects() {
  const projects = [
    {
      title: "Data QA Incident Agent",
      desc: "AI agent monitoring data pipelines. Auto-generates incident summaries and root-cause hypotheses.",
      tech: ["Python", "FastAPI", "Airflow", "OpenAI"],
    },
    {
      title: "RAG Course Planner",
      desc: "AI assistant parsing degree evaluations. Sends SMS alerts when class seats open.",
      tech: ["LangChain", "Chroma", "Twilio", "PostgreSQL"],
    },
    {
      title: "Synthetic Biology Wiki",
      desc: "Full-stack platform for scientific documentation. 35% faster deployments with CI/CD.",
      tech: ["React", "Firebase", "GitLab CI/CD"],
    },
  ];

  return (
    <section id="projects" className="py-20 flex flex-col items-center relative z-10 bg-[#0a0a0a]">
      <div className="w-full max-w-2xl px-6">
        <p className="section-label">Projects</p>
        <h2 className="text-2xl font-bold text-[#e5e5e5] mb-10">Selected Work</h2>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <div key={i} className="card group">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold text-[#e5e5e5] group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ArrowIcon />
              </div>
              <p className="text-[#a3a3a3] text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience - wider boxes, left-aligned text
function Experience() {
  const jobs = [
    {
      role: "CS Team Lead",
      company: "GSU Synthetic Biology Lab",
      date: "Jan 2025 – Present",
      desc: "Leading wiki development with React & Firebase. Reduced deployment latency 35%.",
      current: true,
    },
    {
      role: "Ambassador",
      company: "Fettii",
      date: "Aug 2025 – Present",
      desc: "Acquired 200+ users. Drove 45% increase in social engagement.",
      current: true,
    },
    {
      role: "Team Lead",
      company: "Saxbys",
      date: "Present",
      desc: "Leading team operations and customer experience.",
      current: true,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#0c0c0c] flex flex-col items-center relative z-10">
      <div className="w-full max-w-2xl px-6">
        <p className="section-label">Experience</p>
        <h2 className="text-2xl font-bold text-[#e5e5e5] mb-10">Where I&apos;ve Worked</h2>

        <div className="space-y-5">
          {jobs.map((job, i) => (
            <div key={i} className="card">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-[#e5e5e5] text-sm">{job.role}</h3>
                {job.current && <span className="current-tag">Current</span>}
              </div>
              <p className="text-accent text-sm">{job.company}</p>
              <p className="text-[#525252] text-xs mt-0.5 mb-2">{job.date}</p>
              <p className="text-[#a3a3a3] text-sm">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Leadership - wider boxes, left-aligned text
function Leadership() {
  const roles = [
    {
      role: "VP of Risk Management",
      org: "Alpha Tau Omega",
      date: "Aug 2025 – Present",
      desc: "Safety compliance for 60+ members.",
    },
    {
      role: "Event Planner",
      org: "GSU Book Club",
      date: "Sep 2024 – Jan 2025",
      desc: "60% increase in member participation.",
    },
  ];

  return (
    <section className="py-20 flex flex-col items-center relative z-10 bg-[#0a0a0a]">
      <div className="w-full max-w-2xl px-6">
        <p className="section-label">Leadership</p>
        <h2 className="text-2xl font-bold text-[#e5e5e5] mb-10">Campus Involvement</h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {roles.map((role, i) => (
            <div key={i} className="card">
              <h3 className="font-semibold text-[#e5e5e5] text-sm mb-1">{role.role}</h3>
              <p className="text-accent text-sm">{role.org}</p>
              <p className="text-[#525252] text-xs mt-0.5 mb-2">{role.date}</p>
              <p className="text-[#a3a3a3] text-sm">{role.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills - wider layout, left-aligned text
function Skills() {
  const skills = {
    Languages: ["Python", "SQL", "Java", "JavaScript", "R"],
    Frameworks: ["React", "Firebase", "LangChain", "FastAPI", "pandas"],
    Tools: ["Airflow", "dbt", "Tableau", "BigQuery", "GCP"],
    Concepts: ["RAG", "AI Agents", "ETL", "CI/CD"],
  };

  return (
    <section className="py-20 bg-[#0c0c0c] flex flex-col items-center relative z-10">
      <div className="w-full max-w-2xl px-6">
        <p className="section-label">Skills</p>
        <h2 className="text-2xl font-bold text-[#e5e5e5] mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <div key={i}>
              <h3 className="text-xs font-medium text-[#525252] uppercase tracking-wider mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <span key={j} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About - wider layout, left-aligned text
function About() {
  return (
    <section id="about" className="py-20 flex flex-col items-center">
      <div className="w-full max-w-2xl px-6">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-[#262626] flex-shrink-0">
            <Image src="/profile.png" alt="Mo Tabish" fill className="object-cover" />
          </div>

          <div>
            <p className="section-label">About</p>
            <h2 className="text-2xl font-bold text-[#e5e5e5] mb-5">A bit about me</h2>

            <div className="space-y-3 text-[#a3a3a3] text-sm">
              <p>
                CIS student at Georgia State&apos;s Robinson College of Business.{" "}
                <span className="text-[#e5e5e5]">4.0 GPA</span>, Honors College.
              </p>
              <p>
                Currently leading the CS team at the{" "}
                <span className="text-accent">GSU Synthetic Biology Lab</span>,
                building full-stack platforms and CI/CD pipelines.
              </p>
              <p>
                I build AI agents and RAG systems that solve real problems —
                from data pipeline monitoring to course registration automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Education - wider layout, left-aligned text
function Education() {
  return (
    <section className="py-20 bg-[#0c0c0c] flex flex-col items-center relative z-10">
      <div className="w-full max-w-2xl px-6">
        <p className="section-label">Education</p>
        <h2 className="text-2xl font-bold text-[#e5e5e5] mb-10">Academic Background</h2>

        <div className="card">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-[#e5e5e5]">Georgia State University</h3>
              <p className="text-accent text-sm">J. Mack Robinson College of Business</p>
              <p className="text-[#a3a3a3] text-sm mt-1">BBA in Computer Information Systems</p>
              <p className="text-[#525252] text-xs mt-1">Honors College · Expected May 2027</p>
            </div>
            <div className="sm:text-right">
              <p className="text-2xl font-bold text-accent">4.0</p>
              <p className="text-[#525252] text-xs">GPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact - wider form, left-aligned text
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 flex flex-col items-center relative z-10 bg-[#0a0a0a]">
      <div className="w-full max-w-2xl px-6">
        <p className="section-label">Contact</p>
        <h2 className="text-2xl font-bold text-[#e5e5e5] mb-3">Let&apos;s Connect</h2>
        <p className="text-[#a3a3a3] text-sm mb-8">
          Open to opportunities and interesting projects.
        </p>

        {submitted ? (
          <div className="card py-10">
            <p className="text-xl mb-2">✓</p>
            <p className="text-[#e5e5e5] font-medium">Message sent!</p>
            <p className="text-[#737373] text-sm mt-1">I&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#0c0c0c] border border-[#262626] rounded-xl text-[#e5e5e5] text-sm placeholder-[#525252] focus:border-accent focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#0c0c0c] border border-[#262626] rounded-xl text-[#e5e5e5] text-sm placeholder-[#525252] focus:border-accent focus:outline-none transition-colors"
              />
            </div>
            <textarea
              placeholder="Message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-[#0c0c0c] border border-[#262626] rounded-xl text-[#e5e5e5] text-sm placeholder-[#525252] focus:border-accent focus:outline-none transition-colors resize-none"
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        )}

        <div className="mt-10 pt-8 border-t border-[#1a1a1a]">
          <p className="text-[#525252] text-xs mb-2">Or reach me directly</p>
          <a
            href="mailto:mtabish1@student.gsu.edu"
            className="inline-flex items-center gap-2 text-accent text-sm hover:opacity-80 transition-opacity"
          >
            mtabish1@student.gsu.edu
            <ArrowIcon />
          </a>

          <div className="flex items-center gap-4 mt-4">
            <a href="https://github.com/mtabish1" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-accent transition-colors">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/mtabish1/" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-accent transition-colors">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] py-8 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-6 flex items-center justify-between">
        <p className="text-[#525252] text-xs">© {new Date().getFullYear()} Mo Tabish</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/mtabish1" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#737373] transition-colors">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mtabish1/" target="_blank" rel="noopener noreferrer" className="text-[#525252] hover:text-[#737373] transition-colors">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Main
export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Leadership />
      <Skills />
      <About />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
