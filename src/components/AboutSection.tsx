import { Button } from "@/components/ui/button";

const AboutIllustration = () => (
  <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
    {/* Desk surface */}
    <rect x="20" y="310" width="440" height="8" rx="4" className="fill-primary/15" />
    <rect x="40" y="314" width="400" height="3" rx="1.5" className="fill-primary/8" />

    {/* Vase with pampas grass - left */}
    <ellipse cx="72" cy="308" rx="22" ry="8" className="fill-sand" />
    <path d="M58 308 C58 280, 62 250, 72 240 C82 250, 86 280, 86 308Z" className="fill-primary/20 stroke-primary/30" strokeWidth="1.2" />
    {/* Pampas branches */}
    <path d="M72 240 C68 210, 55 180, 50 155" stroke="hsl(var(--olive))" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M72 240 C74 205, 78 175, 80 150" stroke="hsl(var(--olive))" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M72 240 C76 215, 90 190, 100 165" stroke="hsl(var(--olive))" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Pampas plumes */}
    <ellipse cx="50" cy="152" rx="8" ry="14" transform="rotate(-15 50 152)" className="fill-sand/80 stroke-primary/15" strokeWidth="0.8" />
    <ellipse cx="80" cy="147" rx="7" ry="13" transform="rotate(5 80 147)" className="fill-sand/70 stroke-primary/15" strokeWidth="0.8" />
    <ellipse cx="100" cy="162" rx="7" ry="12" transform="rotate(20 100 162)" className="fill-sand/60 stroke-primary/15" strokeWidth="0.8" />

    {/* Laptop body */}
    <rect x="120" y="100" width="240" height="160" rx="10" className="fill-charcoal stroke-charcoal" strokeWidth="2" />
    {/* Screen bezel */}
    <rect x="130" y="108" width="220" height="140" rx="4" className="fill-sand/60" />

    {/* Website preview inside screen */}
    {/* Nav bar */}
    <rect x="134" y="112" width="212" height="14" rx="2" className="fill-primary/10" />
    <circle cx="145" cy="119" r="3" className="fill-primary/25" />
    <rect x="155" y="117" width="28" height="4" rx="2" className="fill-primary/15" />
    <rect x="188" y="117" width="22" height="4" rx="2" className="fill-primary/12" />
    <rect x="215" y="117" width="26" height="4" rx="2" className="fill-primary/12" />

    {/* Hero section - image left, text right */}
    <rect x="138" y="132" width="80" height="60" rx="4" className="fill-olive/15 stroke-olive/20" strokeWidth="0.8" />
    {/* Image placeholder icon */}
    <circle cx="165" cy="152" r="8" className="fill-olive/12" />
    <path d="M142 184 L158 168 L170 176 L186 158 L214 184Z" className="fill-olive/10" />

    {/* Text lines - right column */}
    <rect x="226" y="135" width="116" height="7" rx="2" className="fill-primary/20" />
    <rect x="226" y="148" width="100" height="5" rx="2" className="fill-primary/10" />
    <rect x="226" y="158" width="108" height="5" rx="2" className="fill-primary/10" />
    <rect x="226" y="168" width="88" height="5" rx="2" className="fill-primary/10" />
    {/* CTA button */}
    <rect x="226" y="180" width="56" height="14" rx="4" className="fill-primary/25 stroke-primary/30" strokeWidth="0.8" />
    <rect x="234" y="185" width="40" height="4" rx="2" className="fill-primary/35" />

    {/* Content section below */}
    <rect x="138" y="200" width="204" height="4" rx="2" className="fill-primary/8" />
    <rect x="138" y="208" width="180" height="4" rx="2" className="fill-primary/6" />
    <rect x="138" y="216" width="195" height="4" rx="2" className="fill-primary/6" />

    {/* Three feature cards */}
    <rect x="138" y="226" width="60" height="16" rx="3" className="fill-olive/8 stroke-olive/12" strokeWidth="0.6" />
    <rect x="206" y="226" width="60" height="16" rx="3" className="fill-olive/8 stroke-olive/12" strokeWidth="0.6" />
    <rect x="274" y="226" width="60" height="16" rx="3" className="fill-olive/8 stroke-olive/12" strokeWidth="0.6" />

    {/* Laptop keyboard base */}
    <path d="M110 260 L120 260 Q120 264, 124 266 L356 266 Q360 264, 360 260 L370 260 Q372 270, 360 272 L120 272 Q108 270, 110 260Z" className="fill-charcoal/80 stroke-charcoal" strokeWidth="1" />
    {/* Trackpad hint */}
    <rect x="210" y="262" width="60" height="6" rx="2" className="fill-charcoal/40" />
    {/* Hinge line */}
    <rect x="180" y="260" width="120" height="2" rx="1" className="fill-charcoal/30" />

    {/* Coffee cup - right */}
    <ellipse cx="415" cy="295" rx="28" ry="6" className="fill-primary/8" />
    <path d="M392 295 C392 275, 395 268, 415 268 C435 268, 438 275, 438 295Z" className="fill-sand stroke-primary/20" strokeWidth="1.2" />
    <ellipse cx="415" cy="268" rx="23" ry="5" className="fill-sand/80 stroke-primary/15" strokeWidth="0.8" />
    {/* Cup handle */}
    <path d="M438 278 C448 278, 450 286, 440 290" stroke="hsl(var(--primary))" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.3" />
    {/* Saucer */}
    <ellipse cx="415" cy="298" rx="32" ry="7" className="fill-sand/40 stroke-primary/10" strokeWidth="0.8" />

    {/* Glasses - near laptop */}
    <path d="M380 308 C382 300, 390 296, 398 300 C400 296, 408 296, 410 300 C418 296, 426 300, 428 308" stroke="hsl(var(--primary))" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.25" />
    <line x1="398" y1="300" x2="410" y2="300" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" />
  </svg>
);

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      title: "Rápido",
      description: "Tu web lista en días, no en meses. Para empezar a vivir por fin de tu trabajo.",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Simple",
      description: "Sin jerga técnica. Te lo explico todo claro para que puedas decidir.",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Precio justo",
      description: "Packs cerrados. Sabes lo que pagas desde el principio.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in mb-12">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Así puedo ayudarte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight">
            Tu web profesional,
            <br className="hidden sm:block" />
            <span className="text-primary my-[10px]">sin líos técnicos</span>
          </h2>
        </div>

        {/* Two-column: text + illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-4 animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No necesitas otra herramienta más.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Necesitas una web que te quite peso de encima.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-loose">
              Una web que explique bien lo que haces, sin que tengas que contarlo mil veces. Que transmita tu valor,
              aunque hoy no tengas tiempo ni energía para "venderte".
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-loose">
              Yo me encargo de la parte técnica, del orden y de la estructura para que tú puedas centrarte en ti, en tu
              familia y en seguir acompañando como sabes hacerlo.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Una web sencilla, honesta y profesional sin arruinarte por el camino.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">De manera rápida y sin complicaciones.</strong>
            </p>
          </div>

          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <AboutIllustration />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg bg-card border border-border shadow-soft hover:shadow-card hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => scrollToSection("contacto")} size="sm" className="btn-primary">
            Escríbeme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
