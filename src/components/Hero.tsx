import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between relative overflow-hidden pt-24"
    >
      {/* Content Wrapper */}
      <div className="flex-1 flex items-center justify-center">
        <div
          ref={ref}
          className={`container mx-auto px-4 text-center mt-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Aseel Dibi
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Software Engineer
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Specializing in Flutter mobile development and React web
              applications. Building elegant solutions from Damascus, Syria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity group"
                onClick={() => scrollToSection("#projects")}
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group"
                onClick={() => window.open("#", "_blank")}
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 flex justify-center animate-bounce">
              <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Waves at Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-48 md:h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  className="[stop-color:hsl(var(--primary))]"
                  stopOpacity="0.6"
                />
                <stop
                  offset="100%"
                  className="[stop-color:hsl(var(--primary))]"
                  stopOpacity="0.2"
                />
              </linearGradient>

              <linearGradient
                id="gradient2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  className="[stop-color:hsl(var(--accent))]"
                  stopOpacity="0.4"
                />
                <stop
                  offset="100%"
                  className="[stop-color:hsl(var(--accent))]"
                  stopOpacity="0.1"
                />
              </linearGradient>
            </defs>

            <path
              d="M0,160 Q360,100 720,160 T1440,160 L1440,320 L0,320 Z"
              fill="url(#gradient1)"
              className="animate-[wave_8s_ease-in-out_infinite]"
              style={{ transformOrigin: "center bottom" }}
            />
            <path
              d="M0,200 Q360,140 720,200 T1440,200 L1440,320 L0,320 Z"
              fill="url(#gradient2)"
              className="animate-[wave_12s_ease-in-out_infinite_reverse]"
              style={{ transformOrigin: "center bottom" }}
            />
            <path
              d="M0,240 Q360,190 720,240 T1440,240 L1440,320 L0,320 Z"
              fill="url(#gradient1)"
              opacity="0.3"
              className="animate-[wave_10s_ease-in-out_infinite]"
              style={{ transformOrigin: "center bottom" }}
            />
          </svg>
        </div>
    </section>
  );
};

export default Hero;
