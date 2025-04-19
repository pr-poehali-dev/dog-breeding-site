import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const services = [
  {
    id: 1,
    icon: "🏋️‍♂️",
    title: "Спортивная подготовка",
    description: "Профессиональная подготовка собак к соревнованиям различного уровня: аджилити, обидиенс, фрисби",
    link: "/services/sport-training"
  },
  {
    id: 2,
    icon: "🏕️",
    title: "Туристические туры",
    description: "Активный отдых с собаками на природе: походы, каникросс, плавание и другие виды активностей",
    link: "/tours"
  },
  {
    id: 3,
    icon: "🧬",
    title: "Разведение чемпионов",
    description: "Племенное разведение собак с отличными генетическими данными и спортивным потенциалом",
    link: "/services/breeding"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Предлагаем полный спектр услуг для спортивных собак и их владельцев
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild className="gap-2">
                  <Link to={service.link}>
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

export default Services;