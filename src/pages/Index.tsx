import { Github, Instagram, Code2, Gamepad, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Hero Section */}
      <section className={`text-center mb-20 ${isLoaded ? "animate-fade-up" : "opacity-0"}`}>
        <div className="inline-block mb-4 px-4 py-2 glass-card animate-float">
          <span className="text-primary">13 Years Old Developer</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hey, I'm <span className="text-primary">Miguel</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          The youngest full-stack developer, crafting digital experiences with Python, Rust, and Web Technologies.
        </p>
      </section>

      {/* Programming Languages Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Web Development", icon: Code2, description: "HTML, CSS, JavaScript, React" },
            { title: "Python", icon: Code2, description: "FastAPI, Django, Data Science" },
            { title: "Rust", icon: Code2, description: "Systems Programming, WebAssembly" },
          ].map((tech, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover-glow ${isLoaded ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <tech.icon className="w-12 h-12 mb-4 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Game Development",
              description: "Created my first 2D platformer game using Python and Pygame",
              link: "#",
            },
            {
              title: "Web Portfolio",
              description: "Built this responsive portfolio website using React and Tailwind",
              link: "#",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 hover-glow transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <Button variant="secondary" size="sm" className="gap-2">
                View Project <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Code With Me Section */}
      <section className="mb-20">
        <div className="glass-card max-w-3xl mx-auto p-8 hover-glow text-center">
          <Gamepad className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Code Together!
          </h2>
          <p className="text-gray-300 mb-6">
            I'm always excited to collaborate on interesting projects and learn from other developers.
            Whether you're a fellow young coder or an experienced developer, let's create something awesome!
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" className="gap-2">
              <MessageSquare className="w-4 h-4" /> Start Collaboration
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="glass-card max-w-2xl mx-auto p-8">
          <div className="flex flex-col items-center gap-6">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>your.email@example.com</span>
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 hover-glow"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 hover-glow"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;