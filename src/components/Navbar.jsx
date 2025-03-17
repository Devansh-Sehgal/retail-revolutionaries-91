import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-md py-2'
        : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to={getHref('hero')} onClick={(e) => handleNavClick(e, 'hero')} className="text-2xl font-bold text-primary">
          <img src='/Logo.png' className='w-16 h-16' />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            to={getHref('services')}
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            to={getHref('solutions')}
            onClick={(e) => handleNavClick(e, 'solutions')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Solutions
          </Link>
          <Link
            to={getHref('products')}
            onClick={(e) => handleNavClick(e, 'products')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Products
          </Link>
          <Link
            to={getHref('clients')}
            onClick={(e) => handleNavClick(e, 'clients')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Clients
          </Link>
          <Link
            to={getHref('testimonials')}
            onClick={(e) => handleNavClick(e, 'testimonials')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
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
            <Link
              to={getHref('services')}
              onClick={(e) => { handleNavClick(e, 'services'); setIsMenuOpen(false); }}
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </Link>
            <Link
              to={getHref('solutions')}
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => { handleNavClick(e, 'solutions'); setIsMenuOpen(false); }}
            >
              Solutions
            </Link>
            <Link
              to={getHref('products')}
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => { handleNavClick(e, 'products'); setIsMenuOpen(false); }}
            >
              Products
            </Link>
            <Link
              to={getHref('clients')}
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => { handleNavClick(e, 'clients'); setIsMenuOpen(false); }}
            >
              Clients
            </Link>
            <Link
              to={getHref('testimonials')}
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => { handleNavClick(e, 'testimonials'); setIsMenuOpen(false); }}
            >
              Testimonials
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
