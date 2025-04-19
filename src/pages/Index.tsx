import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedDogs from "@/components/home/FeaturedDogs";
import Tours from "@/components/home/Tours";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <FeaturedDogs />
        <Tours />
      </main>
      <Footer />
    </div>
  );
};

export default Index;