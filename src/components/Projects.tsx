import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "York British Academy Mobile Application",
      year: "2024",
      description:
        "Video conferencing platform customized for YBA's training program with certificate management system and blockchain registration.",
      role: "Mobile Application Developer",
      technologies: ["Flutter", "BLoC", "WebRTC", "Socket.IO", "Nest.js", "MySQL"],
      link: "#",
    },
    {
      title: "Dental Clinic Management System",
      year: "2023",
      description:
        "Desktop application for comprehensive patient management, appointments, payments, warehouse and lab management.",
      role: "Full Stack Developer",
      technologies: ["Flutter", "Riverpod", "Nest.js", "GraphQL"],
      link: "#",
    },
    {
      title: "Trip Tips Mobile Application",
      year: "2022",
      description:
        "Vacation planning platform for booking flights, hotels, and restaurants with loyalty program featuring points and rewards.",
      role: "Mobile Developer",
      technologies: ["Flutter", "Riverpod", "Laravel", "MySQL"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">
            Explore my recent work and contributions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 shadow-card hover:shadow-lg transition-all hover:scale-105 duration-300 flex flex-col"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.year}</span>
                </div>
                <a
                  href={project.link}
                  className="text-primary hover:text-accent transition-colors"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
              
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3 flex-grow">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-primary mb-2">{project.role}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
