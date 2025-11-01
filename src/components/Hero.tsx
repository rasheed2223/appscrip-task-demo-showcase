import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Discover Premium Quality Products
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Shop our curated collection of electronics, fashion, jewelry, and more. 
            Experience exceptional quality with fast, secure delivery to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              size="lg"
              onClick={scrollToProducts}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
        <div className="h-96 w-96 rounded-full bg-accent blur-3xl" aria-hidden="true"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 opacity-10">
        <div className="h-96 w-96 rounded-full bg-accent blur-3xl" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Hero;
