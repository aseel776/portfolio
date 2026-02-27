import { Card } from "@/components/ui/card";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certificates</h2>
          <p className="text-muted-foreground text-lg">
            Academic background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8 shadow-card hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Science in Informatics Technology
                </h3>
                <p className="text-lg text-primary font-semibold mb-2">
                  Major in Software Engineering
                </p>
                <p className="text-muted-foreground mb-1">Damascus University</p>
                <p className="text-sm text-muted-foreground">August 2024</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Recommendation Certificate
                </h3>
                <p className="text-muted-foreground mb-3">York British Academy</p>
                <p className="text-sm text-muted-foreground mb-4">August 2024</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="group"
                  onClick={() => window.open("#", "_blank")}
                >
                  View Certificate
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
