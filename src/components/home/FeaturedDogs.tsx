import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dogs = [
  {
    id: 1,
    name: "Рекс",
    breed: "Немецкая овчарка",
    image: "/placeholder.svg",
    achievements: ["Чемпион России", "2 место в Аджилити 2023"],
    link: "/dogs/1"
  },
  {
    id: 2,
    name: "Белла",
    breed: "Бордер-колли",
    image: "/placeholder.svg",
    achievements: ["Чемпион Европы", "1 место в Обидиенс 2022"],
    link: "/dogs/2"
  },
  {
    id: 3,
    name: "Макс",
    breed: "Австралийская овчарка",
    image: "/placeholder.svg",
    achievements: ["Чемпион России", "3 место в Фрисби 2023"],
    link: "/dogs/3"
  }
];

const FeaturedDogs = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Наши чемпионы</h2>
            <p className="text-muted-foreground">Познакомьтесь с нашими звездными спортсменами</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 gap-2">
            <Link to="/dogs">
              Все собаки <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <Card key={dog.id} className="overflow-hidden transition-all hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={dog.image} 
                  alt={dog.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{dog.name}</CardTitle>
                <p className="text-muted-foreground">{dog.breed}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {dog.achievements.map((achievement, index) => (
                    <Badge key={index} variant="secondary">{achievement}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="gap-2">
                  <Link to={dog.link}>
                    Подробнее <ArrowRight size={16} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDogs;