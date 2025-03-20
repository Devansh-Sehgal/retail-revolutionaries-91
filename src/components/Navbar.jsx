
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (sectionId) => {
    if (location.pathname !== '/') {
      return `/#${sectionId}`;
    }
    return `#${sectionId}`;
  };

  const handleNavClick = (e, sectionId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const services = [
    { title: 'Inventory Management', href: getHref('services') + '-inventory' },
    { title: 'POS System', href: getHref('services') + '-pos' },
    { title: 'Supply Chain', href: getHref('services') + '-supply' },
    { title: 'Analytics', href: getHref('services') + '-analytics' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/80 backdrop-blur-lg shadow-md py-2'
      : 'bg-transparent py-2'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to={getHref('hero')} onClick={(e) => handleNavClick(e, 'hero')} className="text-2xl font-bold text-primary">
          <img src='/Logo.png' className='w-14 h-14' alt="Logo" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About Us
          </Link>
          
          {/* Services dropdown using NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0 h-auto">
                  <span className="text-foreground hover:text-primary transition-colors">Services</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px]">
                  <ul className="grid gap-1 p-2">
                    {services.map((service, i) => (
                      <li key={i}>
                        <Link
                          to={service.href}
                          onClick={(e) => {
                            handleNavClick(e, 'services');
                            setIsMenuOpen(false);
                          }}
                          className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">{service.title}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link
            to={getHref('blog')}
            onClick={(e) => handleNavClick(e, 'blog')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Services dropdown for mobile */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  const dropdown = e.currentTarget.nextElementSibling;
                  dropdown.classList.toggle('hidden');
                }}
              >
                Services
                <ChevronDown size={16} />
              </button>
              <ul className="pl-4 hidden space-y-2 mt-2">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.href}
                      onClick={(e) => {
                        handleNavClick(e, 'services');
                        setIsMenuOpen(false);
                      }}
                      className="block py-1 text-foreground hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link
              to={getHref('blog')}
              onClick={(e) => {
                handleNavClick(e, 'blog');
                setIsMenuOpen(false);
              }}
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
