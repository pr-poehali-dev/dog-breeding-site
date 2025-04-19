import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img 
            src="/logo-b.svg" 
            alt="Логотип питомника" 
            className="h-10 w-auto"
          />
          <h1 className="text-2xl font-bold hidden md:block">Чемпион</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/about">О питомнике</NavLink>
          <DropdownNavLink 
            title="Наши собаки"
            links={[
              { to: "/dogs", label: "Все собаки" },
              { to: "/puppies", label: "Щенки" },
              { to: "/champions", label: "Чемпионы" },
            ]}
          />
          <NavLink to="/services">Услуги</NavLink>
          <NavLink to="/tours">Туры</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
          <Button>Записаться</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary-foreground p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary">
          <nav className="container flex flex-col py-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Главная</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>О питомнике</MobileNavLink>
            <MobileDropdown
              title="Наши собаки"
              links={[
                { to: "/dogs", label: "Все собаки" },
                { to: "/puppies", label: "Щенки" },
                { to: "/champions", label: "Чемпионы" },
              ]}
              onClick={toggleMenu}
            />
            <MobileNavLink to="/services" onClick={toggleMenu}>Услуги</MobileNavLink>
            <MobileNavLink to="/tours" onClick={toggleMenu}>Туры</MobileNavLink>
            <MobileNavLink to="/contacts" onClick={toggleMenu}>Контакты</MobileNavLink>
            <Button className="mt-4">Записаться</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Desktop Nav Link
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-primary-foreground hover:text-secondary font-medium transition-colors"
  >
    {children}
  </Link>
);

// Desktop Dropdown
const DropdownNavLink = ({ 
  title, 
  links 
}: { 
  title: string; 
  links: { to: string; label: string }[] 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center gap-1 text-primary-foreground hover:text-secondary font-medium transition-colors">
        {title}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-white shadow-lg py-2 z-10">
          {links.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile Nav Link
const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link 
    to={to} 
    className="text-primary-foreground hover:text-secondary py-3 border-b border-sidebar-border font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

// Mobile Dropdown
const MobileDropdown = ({ 
  title, 
  links,
  onClick
}: { 
  title: string; 
  links: { to: string; label: string }[];
  onClick: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-sidebar-border">
      <button 
        className="flex items-center justify-between w-full py-3 text-primary-foreground hover:text-secondary font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="pl-4 pb-2">
          {links.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className="block py-2 text-primary-foreground hover:text-secondary"
              onClick={onClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;