import React from 'react';
import { Globe, Github, Linkedin, Camera, MapPin } from 'lucide-react';

const Home = () => {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    {
      id: 1,
      icon: Globe,
      title: 'My Portfolio',
      url: 'https://myportfolio.com',
      description: 'View my projects & work'
    },
    {
      id: 2,
      icon: Github,
      title: 'GitHub Projects',
      url: 'https://github.com/Naveenkm07',
      description: 'Check out my code'
    },
    {
      id: 3,
      icon: Linkedin,
      title: 'LinkedIn Profile',
      url: 'https://linkedin.com/in/naveenkm07',
      description: 'Connect with me'
    },
    {
      id: 4,
      icon: Camera,
      title: 'About Me & Photos',
      url: '#about-section',
      description: 'Learn more about me',
      isScroll: true
    }
  ];

  return (
    <div className="bio-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-photo-wrapper">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDV8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NjkzNDE0NDN8MA&ixlib=rb-4.1.0&q=85"
              alt="Naveen Kumar"
              className="profile-photo"
            />
            <div className="profile-glow"></div>
          </div>
          
          <h1 className="name-title">Naveen Kumar</h1>
          
          <p className="subtitle">
            Computer Science Engineering Student | Aspiring Software Developer
          </p>
          
          <div className="location">
            <MapPin size={16} />
            <span>Bengaluru, India</span>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="links-section">
        <div className="links-container">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                onClick={link.isScroll ? scrollToAbout : undefined}
                className="link-card"
              >
                <div className="link-card-content">
                  <div className="icon-wrapper">
                    <IconComponent size={28} />
                  </div>
                  <div className="link-text">
                    <h3 className="link-title">{link.title}</h3>
                    <p className="link-description">{link.description}</p>
                  </div>
                </div>
                <div className="card-glow"></div>
              </a>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="about-section">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          
          <div className="about-photo-wrapper">
            <img
              src="https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzY5MzQxNDQ4fDA&ixlib=rb-4.1.0&q=85"
              alt="My Workspace"
              className="about-photo"
            />
          </div>
          
          <div className="about-bio">
            <p>
              I am a CSE student passionate about full-stack development, UI design, 
              and building real-world projects. I love exploring new technologies and 
              creating solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bio-footer">
        <p>Made by Naveen 🚀</p>
      </footer>
    </div>
  );
};

export default Home;