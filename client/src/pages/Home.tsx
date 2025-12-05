import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { SiWhatsapp } from "react-icons/si";
import { Wrench, Zap, Hammer, Ruler, ArrowRight, CheckCircle2, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    toast({
      title: "Message Sent!",
      description: "Thanks for contacting Dan Works. I'll get back to you soon.",
    });
    console.log(data);
    form.reset();
  }

  const services = [
    {
      title: "Furniture Assembly",
      description: "Professional assembly for IKEA, Jysk, and designer furniture. Fast, clean, and sturdy.",
      icon: Wrench,
      image: "/service-furniture.jpg",
      color: "bg-primary",
    },
    {
      title: "Electrical Works",
      description: "Safe installation of lights, sockets, switches, and minor electrical repairs.",
      icon: Zap,
      image: "/service-electrical.jpg",
      color: "bg-sidebar-primary",
    },
    {
      title: "Carpentry",
      description: "Custom shelving, woodwork repairs, door adjustments, and bespoke solutions.",
      icon: Hammer,
      image: "/service-carpentry.jpg",
      color: "bg-primary",
    },
    {
      title: "Flooring",
      description: "Expert installation of laminate, vinyl, and skirting boards with perfect finish.",
      icon: Ruler,
      image: "/service-flooring.jpg",
      color: "bg-sidebar-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-4 border-foreground">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Dan Works Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="rounded-none border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all bg-primary text-white font-bold uppercase">
            Get a Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-48 md:pb-32 px-4 border-b-4 border-foreground bg-secondary relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block bg-foreground text-white px-4 py-2 font-bold uppercase tracking-widest text-sm transform -rotate-2">
              Available in the Netherlands
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] uppercase">
              Fixing <br/>
              <span className="text-primary">Everything</span> <br />
              You Need.
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium max-w-md leading-relaxed text-muted-foreground">
              Professional handyman services for your home and office. Reliable, skilled, and ready to work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-none border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all bg-primary text-white font-bold uppercase">
                Book Now
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-none border-2 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all bg-white text-foreground font-bold uppercase">
                View Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] border-4 border-foreground shadow-[12px_12px_0px_0px_var(--primary)] bg-white relative z-10 overflow-hidden group">
              <img 
                src="/hero-renovation.jpg" 
                alt="Renovation work" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sidebar-primary border-4 border-foreground z-0"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary border-4 border-foreground z-20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">What I Do</h2>
              <div className="h-2 w-32 bg-primary"></div>
            </div>
            <p className="text-xl max-w-md font-medium text-right md:text-left">
              Comprehensive solutions for your home maintenance needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group border-4 border-foreground bg-white hover:shadow-[8px_8px_0px_0px_var(--primary)] transition-all duration-300">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative h-64 md:h-auto overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-foreground">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className={`absolute top-0 left-0 p-4 ${service.color} border-b-4 border-r-4 border-foreground`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-2xl uppercase mb-4">{service.title}</h3>
                      <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 font-bold uppercase text-sm tracking-wider group-hover:text-primary transition-colors cursor-pointer">
                      See Examples <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-secondary border-t-4 border-foreground">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">Recent Work</h2>
            <div className="h-2 w-32 bg-sidebar-primary"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square border-4 border-foreground overflow-hidden group relative">
              <img src="/service-furniture.jpg" alt="Furniture Assembly" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-white text-xl uppercase">Furniture</span>
              </div>
            </div>
            <div className="aspect-square border-4 border-foreground overflow-hidden group relative md:col-span-2 md:row-span-2">
              <img src="/hero-renovation.jpg" alt="Full Renovation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-sidebar-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-white text-3xl uppercase">Renovation</span>
              </div>
            </div>
            <div className="aspect-square border-4 border-foreground overflow-hidden group relative">
              <img src="/service-electrical.jpg" alt="Electrical Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-white text-xl uppercase">Electrical</span>
              </div>
            </div>
            <div className="aspect-square border-4 border-foreground overflow-hidden group relative">
              <img src="/service-carpentry.jpg" alt="Carpentry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-sidebar-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-white text-xl uppercase">Carpentry</span>
              </div>
            </div>
            <div className="aspect-square border-4 border-foreground overflow-hidden group relative">
              <img src="/service-flooring.jpg" alt="Flooring" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-white text-xl uppercase">Flooring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-foreground text-white border-y-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-6xl font-display text-primary mb-4">100%</div>
              <h3 className="text-2xl font-bold uppercase">Reliable</h3>
              <p className="text-gray-300">Always on time, clear communication, and no hidden costs.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-display text-sidebar-primary mb-4">5+</div>
              <h3 className="text-2xl font-bold uppercase">Years Exp.</h3>
              <p className="text-gray-300">Skilled craftsmanship backed by years of hands-on experience.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-display text-primary mb-4">Top</div>
              <h3 className="text-2xl font-bold uppercase">Quality</h3>
              <p className="text-gray-300">Premium tools and materials for a finish that lasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white border-4 border-foreground shadow-[12px_12px_0px_0px_var(--sidebar-primary)] p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-display text-5xl uppercase mb-6">Let's Work <br/> Together</h2>
                <p className="text-lg font-medium mb-8 text-muted-foreground">
                  Ready to start your project? Fill out the form or contact me directly via WhatsApp.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary border-2 border-foreground flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold uppercase text-sm text-muted-foreground">Call Me</div>
                      <div className="font-display text-xl">+31 06 85 36 45 44</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#25D366] border-2 border-foreground flex items-center justify-center text-white">
                      <SiWhatsapp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold uppercase text-sm text-muted-foreground">WhatsApp</div>
                      <div className="font-display text-xl">Chat Now</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 border-2 border-foreground">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="rounded-none border-2 border-foreground h-12 bg-white focus-visible:ring-0 focus-visible:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} className="rounded-none border-2 border-foreground h-12 bg-white focus-visible:ring-0 focus-visible:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell me about your project..." {...field} className="rounded-none border-2 border-foreground min-h-[120px] bg-white focus-visible:ring-0 focus-visible:border-primary resize-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full h-12 rounded-none border-2 border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all bg-primary text-white font-bold uppercase text-lg">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 border-t-4 border-primary">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex items-center gap-2">
      <img src="/logo-footer.png" alt="Dan Works Logo" className="h-14 w-auto" />
      <span className="font-display text-xl tracking-tighter">DAN WORKS</span>
    </div>
    <div className="text-sm font-medium text-gray-400">
      © {new Date().getFullYear()} Dan Works. All rights reserved.
    </div>
  </div>
</footer>
    </div>
  );
}
