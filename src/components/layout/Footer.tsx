import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Информация о питомнике */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo-b.svg" 
                alt="Логотип питомника" 
                className="h-10 w-auto"
              />
              <h2 className="text-xl font-bold">Чемпион</h2>
            </div>
            <p className="mb-4">
              Спортивный питомник собак с многолетним опытом разведения 
              и тренировки чемпионов для спортивных состязаний.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          {/* Ссылки на страницы */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <div className="grid grid-cols-2 gap-2">
              <FooterLink to="/">Главная</FooterLink>
              <FooterLink to="/about">О питомнике</FooterLink>
              <FooterLink to="/dogs">Наши собаки</FooterLink>
              <FooterLink to="/puppies">Щенки</FooterLink>
              <FooterLink to="/champions">Чемпионы</FooterLink>
              <FooterLink to="/services">Услуги</FooterLink>
              <FooterLink to="/tours">Туры</FooterLink>
              <FooterLink to="/contacts">Контакты</FooterLink>
            </div>
          </div>
          
          {/* Контактная информация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <MapPin className="shrink-0 mt-1" size={18} />
                <p>г. Москва, ул. Собаководов, д. 100, стр. 1</p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={18} />
                <a 
                  href="tel:+74951234567" 
                  className="hover:text-secondary transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={18} />
                <a 
                  href="mailto:info@champion-dogs.ru" 
                  className="hover:text-secondary transition-colors"
                >
                  info@champion-dogs.ru
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Копирайт */}
        <div className="border-t border-sidebar-border pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Спортивный питомник "Чемпион". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="hover:text-secondary transition-colors"
  >
    {children}
  </Link>
);

export default Footer;