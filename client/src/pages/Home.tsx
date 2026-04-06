import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { ArrowRight, Mail, Hammer, Ruler, Zap, Paintbrush } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Carpentry & Furniture Assembly",
      description:
        "Furniture assembly, shelves, custom woodwork, door adjustments and practical finishing details.",
      icon: Hammer,
    },
    {
      title: "Flooring",
      description:
        "Laminate, vinyl and skirting board installation with clean alignment and careful finishing.",
      icon: Ruler,
    },
    {
      title: "Electrical Works",
      description:
        "Lights, sockets, switches and minor electrical work done safely and neatly.",
      icon: Zap,
    },
    {
      title: "Painting",
      description:
        "Walls, ceilings, doors and trim with smooth preparation and clean lines.",
      icon: Paintbrush,
    },
  ];

  const highlights = [
    {
      title: "Clear Communication",
      description: "Direct contact, honest updates and simple quoting.",
    },
    {
      title: "Clean Work",
      description: "Careful finishes and respect for your home and space.",
    },
    {
      title: "Reliable Service",
      description: "Practical solutions, fair pricing and attention to detail.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5f5f0] selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="Danilo Works Logo" className="h-11 w-auto" />
          </div>

          <div className="hidden gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-white">
              Why Danilo Works
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="https://tally.so/r/A7Dexe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-11 rounded-full border border-white/15 bg-white px-6 text-sm font-semibold text-black hover:bg-[#eaeaea]">
              Request a Quote
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#c7a56a]">
              Danilo Works · Handyman Services in the Netherlands
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Clean, reliable work for homes that need quality finishing.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Flooring, carpentry, electrical works and painting with practical
              solutions, careful execution and clear communication from start to finish.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://tally.so/r/A7Dexe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-12 rounded-full border border-white/15 bg-white px-7 text-sm font-semibold text-black hover:bg-[#eaeaea]">
                  Request a Quote
                </Button>
              </a>

              <a
                href="https://wa.me/31685364544?text=Hi%20Dan!%20I%20would%20like%20a%20quote."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="h-12 rounded-full border border-white/20 bg-transparent px-7 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Contact on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-3xl border border-white/10 bg-[#111111] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                Main services
              </p>

              <div className="mt-8 space-y-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="mt-1 rounded-full border border-white/10 bg-white/5 p-3">
                      <service.icon className="h-5 w-5 text-[#c7a56a]" />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-white">{service.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/60">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a56a]">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Practical work, finished properly.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/65">
              A focused selection of handyman services for everyday residential projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-[#111111] p-8 transition-colors hover:border-white/20"
              >
                <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-3">
                  <service.icon className="h-5 w-5 text-[#c7a56a]" />
                </div>

                <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose me */}
      <section id="about" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a56a]">
              Why Danilo Works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Simple, reliable and detail-focused.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-[#111111] p-8"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c7a56a]">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Ready to start your project?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
                Open the quote form with your project details and photos, or contact me directly by WhatsApp or email.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://tally.so/r/A7Dexe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-12 rounded-full border border-white/15 bg-white px-7 text-sm font-semibold text-black hover:bg-[#eaeaea]">
                    Open Quote Form
                  </Button>
                </a>

                <a
                  href="https://wa.me/31685364544?text=Hi%20Dan!%20I%20would%20like%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    className="h-12 rounded-full border border-white/20 bg-transparent px-7 text-sm font-semibold text-white hover:bg-white/5"
                  >
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111111] p-8 md:p-10">
              <div className="space-y-8">
                <a
                  href="https://wa.me/31685364544?text=Hi%20Dan!%20I%20would%20like%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="rounded-full border border-white/10 bg-white/5 p-3">
                    <SiWhatsapp className="h-5 w-5 text-[#25D366]" />
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      WhatsApp
                    </div>
                    <div className="mt-2 text-lg font-medium text-white transition-colors group-hover:text-[#c7a56a]">
                      +31 6 85 36 45 44
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@daniloworks.nl?subject=Quote%20Request%20-%20Danilo%20Works"
                  className="group flex items-start gap-4"
                >
                  <div className="rounded-full border border-white/10 bg-white/5 p-3">
                    <Mail className="h-5 w-5 text-[#c7a56a]" />
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      Email
                    </div>
                    <div className="mt-2 break-all text-lg font-medium text-white transition-colors group-hover:text-[#c7a56a]">
                      info@daniloworks.nl
                    </div>
                  </div>
                </a>

                <div className="border-t border-white/10 pt-8">
                  <a
                    href="https://tally.so/r/A7Dexe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    Open the quote form
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
          <div className="flex items-center gap-3">
            <img src="/logo-footer.png" alt="Danilo Works Logo" className="h-12 w-auto" />
            <span className="text-lg font-medium tracking-tight text-white/90">
              Danilo Works
            </span>
          </div>

          <div className="text-center text-sm text-white/40 md:text-right">
            © {new Date().getFullYear()} Danilo Works · KVK: 99445255 · info@daniloworks.nl
          </div>
        </div>
      </footer>
    </div>
  );
}
