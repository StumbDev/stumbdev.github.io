import { Github, Instagram, Code2, Gamepad } from "lucide-react";
import { useEffect, useState } from "react";

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

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">My Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Web Development", icon: Code2, delay: 100 },
            { title: "Python", icon: Code2, delay: 200 },
            { title: "Rust", icon: Code2, delay: 300 },
          ].map((skill, index) => (
            <div
              key={index}
              className={`glass-card p-6 hover-glow ${
                isLoaded ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${skill.delay}ms` }}
            >
              <skill.icon className="w-8 h-8 mb-4 text-primary mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Gaming-inspired CTA */}
      <section className="text-center mb-20">
        <div className="glass-card max-w-3xl mx-auto p-8 hover-glow">
          <Gamepad className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start a New Quest?
          </h2>
          <p className="text-gray-300 mb-6">
            Let's collaborate and build something amazing together!
          </p>
        </div>
      </section>

      {/* Social Links */}
      <footer className="text-center">
        <div className="flex justify-center gap-6">
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
      </footer>
    </div>
  );
};

export default Index;