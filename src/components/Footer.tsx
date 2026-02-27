import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/aseel-d-896485249",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/aseel776",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:aseeldibi@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+963993433122",
      label: "Phone",
    },
  ];

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all hover:scale-110"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              GitLab:{" "}
              <a
                href="https://gitlab.com/aseel776"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                gitlab.com/aseel776
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Aseel Dibi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
