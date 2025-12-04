import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items, openCart } = useCart();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background shadow-lg border-b border-border">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="/images/logofacilzap.png" 
              alt="FácilZap Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xs sm:text-sm text-foreground font-bold">Turbinado</span>
              <span className="text-xs text-primary font-bold">🚀</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('widgets')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Widgets
            </button>
            <button
              onClick={() => scrollToSection('planos')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('case')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              Case
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button and Cart Icon */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5562992960658?text=Tenho%20interesse%20nos%20widgets%20da%20Bravatus.%20Por%20favor%20entre%20em%20contato."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-block text-sm"
            >
              Turbinar Agora 🚀
            </a>
            <button
              onClick={() => openCart()}
              className="relative p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
              aria-label="Abrir carrinho"
            >
              <ShoppingCart size={24} />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {items.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-secondary animate-in slide-in-down">
            <nav className="container py-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('widgets')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Widgets
              </button>
              <button
                onClick={() => scrollToSection('planos')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection('case')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Case
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                FAQ
              </button>
              <a
                href="https://wa.me/5562992960658?text=Tenho%20interesse%20nos%20widgets%20da%20Bravatus.%20Por%20favor%20entre%20em%20contato."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-2"
              >
                💬 Turbinar Agora pelo WhatsApp
              </a>
              <button className="btn-primary w-full mt-2">
                Turbinar Agora 🚀
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
