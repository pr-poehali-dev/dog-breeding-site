import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tours = [
  {
    id: 1,
    title: "Поход по Карельским лесам",
    image: "/placeholder.svg",
    location: "Карелия",
    duration: "5 дней",
    groupSize: "до 10 человек с собаками",
    date: "15-19 июля 2024",
    price: "25 000 ₽",
    link: "/tours/1"
  },
  {
    id: 2,
    title: "Каникросс в Подмосковье",
    image: "/placeholder.svg",
    location: "Московская область",
    duration: "2 дня",
    groupSize: "до 15 человек с собаками",
    date: "8-9 августа 2024",
    price: "12 000 ₽",
    link: "/tours/2"
  },
  {
    id: 3,
    title: "Плавание с собаками на Алтае",
    image: "/placeholder.svg",
    location: "Алтайский край",
    duration: "7 дней",
    groupSize: "до 8 человек с собаками",
    date: "10-16 сентября 2024",
    price: "35 000 ₽",
    link: "/tours/3"
  }
];

const Tours = () => {
  return (
    <section className="py-16 bg-accent/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Туристические туры</h2>
            <p className="text-muted-foreground">Активный отдых с вашими четвероногими друзьями</p>
          </div>
          <Button asChild className="mt-4 md:mt-0 gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/tours">
              Все туры <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden transition-all hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                  {tour.price}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{tour.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>{tour.date} • {tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users size={16} />
                  <span>{tour.groupSize}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="gap-2 w-full">
                  <Link to={tour.link}>
                    Забронировать <ArrowRight size={16} />
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

export default Tours;