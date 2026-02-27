import profileImage from "@/assets/profile.png";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Card className="p-8 shadow-card hover:shadow-lg transition-shadow">
              <img
                src={profileImage}
                alt="Aseel Dibi"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Full-Stack Software Engineer
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Full-Stack Software Engineer with strong experience in web
                application development and cross-platform solutions. Proven
                ability to design, develop, and deploy scalable applications
                across mobile and web environments.
              </p>
            </div>

            <div>
              <p className="text-foreground/80 leading-relaxed">
                Eager to contribute to a dynamic team while expanding my skills
                in a challenging and growth-oriented environment. I bring a
                passion for clean code, user-centered design, and continuous
                learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <p className="text-foreground/80">Damascus, Syria</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-foreground/80">Damascus University</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <a
                  href="mailto:aseeldibi@gmail.com"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  aseeldibi@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Phone</h4>
                <p className="text-foreground/80">+963 993 433 122</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
