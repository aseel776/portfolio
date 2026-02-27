import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Smartphone, Globe, Database, Wrench, MessageSquare, Users, Lightbulb, Target, Languages, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const technicalSkills = [{
    category: "Programming Languages",
    icon: Code2,
    items: ["Java", "Dart", "JavaScript", "Python"]
  }, {
    category: "Frameworks & Libraries",
    icon: Globe,
    items: ["Flutter", "React.js", "Flask", "Material UI"]
  }, {
    category: "State Management",
    icon: Smartphone,
    items: ["Riverpod", "BLoC", "Cubit", "GetX"]
  }, {
    category: "Other Technologies",
    icon: Database,
    items: ["WebRTC", "GraphQL", "SQL", "Firebase", "Socket.IO", "Three.js"]
  }, {
    category: "Tools & Concepts",
    icon: Wrench,
    items: ["Git & Git Flow", "Jira", "OOP", "Design Patterns", "Systems Analysis"]
  }];

  const softSkills = [{
    name: "Organizing & Planning",
    icon: Target
  }, {
    name: "Problem Solving",
    icon: Lightbulb
  }, {
    name: "Communication",
    icon: MessageSquare
  }, {
    name: "Adaptability",
    icon: Wrench
  }, {
    name: "Teamwork",
    icon: Users
  }, {
    name: "Fluent in English",
    icon: Languages
  }];

  return (
    <section id="skills" className="py-20">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg">
            Technical expertise and soft skills
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 inline-flex items-center gap-2 border-2 border-primary/30 text-primary px-5 py-2 rounded-full bg-primary/5">
              <Code2 className="h-5 w-5" />
              Technical Skills
              <Sparkles className="h-4 w-4 text-accent" />
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map(skill => {
                const Icon = skill.icon;
                return (
                  <Card key={skill.category} className="p-6 shadow-card hover:shadow-lg transition-all hover:scale-105 duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 inline-flex items-center gap-2 border-2 border-accent/30 text-accent px-5 py-2 rounded-full bg-accent/5">
              <Users className="h-5 w-5" />
              Soft Skills
              <Sparkles className="h-4 w-4 text-primary" />
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map(skill => {
                const Icon = skill.icon;
                return (
                  <Card key={skill.name} className="p-4 shadow-card hover:shadow-lg transition-all hover:scale-105 duration-300 flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
