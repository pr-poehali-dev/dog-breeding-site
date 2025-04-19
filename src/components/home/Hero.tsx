import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1508814437933-f0c7d18a9217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundPosition: "center 30%"
        }}
      />
      
      {/* Hero Content */}
      <div className="container relative z-20 pt-20 pb-28 md:pt-32 md:pb-40 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Спортивный питомник <span className="text-secondary">"Чемпион"</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Разведение и подготовка собак для спортивных соревнований, 
            кинологические туры и активный отдых с четвероногими друзьями
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/tours">Туры с собаками</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/dogs">Наши чемпионы</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;