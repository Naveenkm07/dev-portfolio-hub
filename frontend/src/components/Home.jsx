import React, { useEffect, useState } from 'react';
import { Globe, Github, Linkedin, Camera, MapPin, Code2, Sparkles, Rocket, Zap } from 'lucide-react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('hero');
  const fullText = 'Computer Science Engineering Student | Aspiring Software Developer';

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Track active section for navigation dots
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'links', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`${sectionId}-section`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    scrollToSection('about');
  };

  const skills = [
    { name: 'React', icon: Code2, color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { name: 'Python', icon: Sparkles, color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', icon: Rocket, color: 'from-green-400 to-emerald-500' },
    { name: 'MongoDB', icon: Code2, color: 'from-green-500 to-teal-500' },
    { name: 'UI/UX', icon: Sparkles, color: 'from-purple-400 to-pink-500' }
  ];

  const links = [
    {
      id: 1,
      icon: Globe,
      title: 'My Portfolio',
      url: 'https://myportfolio.com',
      description: 'View my projects & work',
      gradient: 'from-sky-400 to-blue-500'
    },
    {
      id: 2,
      icon: Github,
      title: 'GitHub Projects',
      url: 'https://github.com/Naveenkm07',
      description: 'Check out my code',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      id: 3,
      icon: Linkedin,
      title: 'LinkedIn Profile',
      url: 'https://linkedin.com/in/naveenkm07',
      description: 'Connect with me',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      icon: Camera,
      title: 'About Me & Photos',
      url: '#about-section',
      description: 'Learn more about me',
      isScroll: true,
      gradient: 'from-pink-400 to-rose-500'
    }
  ];

  const navigationDots = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'links', label: 'Links' },
    { id: 'about', label: 'About' }
  ];

  return (
    <div className="bio-page">
      {/* Animated Background Elements */}
      <div className="floating-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Floating Navigation Dots */}
      <nav className="nav-dots">
        {navigationDots.map(dot => (
          <button
            key={dot.id}
            onClick={() => scrollToSection(dot.id)}
            className={`nav-dot ${activeSection === dot.id ? 'active' : ''}`}
            aria-label={dot.label}
            title={dot.label}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="hero-section" className="hero-section">
        <div className="hero-content">
          <div className="profile-photo-wrapper reveal-on-scroll">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NjkzNDE0NDN8MA&ixlib=rb-4.1.0&q=85"
              alt="Naveen Kumar"
              className="profile-photo"
            />
            <div className="profile-glow"></div>
            <div className="orbit-ring"></div>
          </div>
          
          <h1 className="name-title reveal-on-scroll">
            <span className="text-glitch" data-text="Naveen Kumar">Naveen Kumar</span>
          </h1>
          
          <div className="subtitle-wrapper reveal-on-scroll">
            <p className="subtitle typing-text">
              {typedText}<span className="cursor-blink">|</span>
            </p>
          </div>
          
          <div className="location reveal-on-scroll">
            <MapPin size={16} />
            <span>Bengaluru, India</span>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Skills Section - NEW */}
      <section id="skills-section" className="skills-section">
        <div className="skills-container">
          <h2 className="section-title reveal-on-scroll">
            <Sparkles className="title-icon" />
            Tech Stack
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="skill-card reveal-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`skill-icon-wrapper bg-gradient-to-br ${skill.color}`}>
                    <IconComponent size={24} />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-glow"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section id="links-section" className="links-section">
        <div className="links-container">
          <h2 className="section-title reveal-on-scroll">
            <Rocket className="title-icon" />
            Connect With Me
          </h2>
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                onClick={link.isScroll ? scrollToAbout : undefined}
                className="link-card reveal-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="link-card-content">
                  <div className={`icon-wrapper bg-gradient-to-br ${link.gradient}`}>
                    <IconComponent size={28} />
                  </div>
                  <div className="link-text">
                    <h3 className="link-title">{link.title}</h3>
                    <p className="link-description">{link.description}</p>
                  </div>
                </div>
                <div className="card-shine"></div>
                <div className={`card-gradient-glow bg-gradient-to-r ${link.gradient}`}></div>
              </a>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="about-section">
        <div className="about-content">
          <h2 className="section-title reveal-on-scroll">
            <Code2 className="title-icon" />
            About Me
          </h2>
          
          <div className="about-photo-wrapper reveal-on-scroll">
            <div className="photo-frame">
              <img
                src="https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzY5MzQxNDQ4fDA&ixlib=rb-4.1.0&q=85"
                alt="My Workspace"
                className="about-photo"
              />
              <div className="photo-overlay"></div>
            </div>
          </div>
          
          <div className="about-bio reveal-on-scroll">
            <div className="bio-content">
              <p>
                I am a CSE student passionate about <span className="highlight">full-stack development</span>, 
                <span className="highlight"> UI design</span>, and building <span className="highlight">real-world projects</span>. 
                I love exploring new technologies and creating solutions that make a difference.
              </p>
              <div className="bio-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Coding</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bio-footer">
        <div className="footer-content">
          <p>Made with <span className="heart">♥</span> by Naveen</p>
          <div className="footer-sparkle">✨</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;