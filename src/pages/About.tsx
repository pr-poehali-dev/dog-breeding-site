import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">О нашем питомнике</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg mb-4">
                Спортивный питомник "Чемпион" – это место, где любовь к собакам сочетается с профессиональным подходом 
                к их разведению и тренировке. Мы специализируемся на выращивании и подготовке собак для спортивных соревнований 
                различного уровня.
              </p>
              <p className="text-lg mb-4">
                Наш питомник был основан в 2008 году и за это время мы вырастили более 200 собак, 
                многие из которых стали призерами и чемпионами российских и международных соревнований.
              </p>
              <p className="text-lg">
                Мы гордимся тем, что наши четвероногие воспитанники не только побеждают на соревнованиях, 
                но и становятся надежными друзьями для своих владельцев, демонстрируя отличный характер и здоровье.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Территория питомника" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Наши принципы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🧬</div>
                <h3 className="text-xl font-bold mb-2">Генетика и здоровье</h3>
                <p>
                  Мы тщательно отбираем производителей, уделяя особое внимание не только экстерьеру, 
                  но и здоровью, темпераменту и рабочим качествам собак.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-2">Спортивные достижения</h3>
                <p>
                  Подготовка собак к соревнованиям – одно из основных направлений нашей работы. 
                  Мы применяем современные методики тренировки.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold mb-2">Любовь и забота</h3>
                <p>
                  Все собаки в нашем питомнике получают максимум внимания, заботы и любви. 
                  Мы создаем условия, максимально приближенные к домашним.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Наша команда</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Анна Петрова" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Анна Петрова</h3>
              <p className="text-muted-foreground mb-2">Основатель питомника</p>
              <p>Кинолог с 20-летним стажем, судья международной категории</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Игорь Сидоров" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Игорь Сидоров</h3>
              <p className="text-muted-foreground mb-2">Главный тренер</p>
              <p>Многократный чемпион России по аджилити, опытный кинолог-дрессировщик</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Мария Иванова" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Мария Иванова</h3>
              <p className="text-muted-foreground mb-2">Ветеринарный врач</p>
              <p>Специалист по спортивной ветеринарии и реабилитации собак</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;