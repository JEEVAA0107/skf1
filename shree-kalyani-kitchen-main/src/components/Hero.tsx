import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ingredients.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-warm bg-clip-text text-transparent">
          SHREE KALYANI FOODS
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Authentic South Indian flavors crafted with the freshest ingredients and absolutely no preservatives
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-warm hover:shadow-warm transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full w-full sm:w-auto"
          onClick={() => {
            const productsSection = document.getElementById('products');
            productsSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Our Products
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-spice-gold/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-turmeric/10 rounded-full blur-xl" />
    </section>
  );
};

export default Hero;