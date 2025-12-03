import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              src="/images/logo.svg" 
              alt="Bravatus Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xs sm:text-sm text-foreground">FácilZap</span>
              <span className="text-xs text-primary font-bold">Turbinado</span>
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

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <button className="btn-primary hidden sm:inline-block text-sm">
              Turbinar Agora 🚀
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
              <button className="btn-primary w-full mt-2">
                Turbinar Agora 🚀
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Floating Contact Button */}
      <a
        href="https://wa.me/5562981230687"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 pulse-glow"
        title="Fale conosco no WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.39 1.242-3.286 2.128-1.797 1.797-2.802 4.194-2.802 6.74 0 1.763.357 3.497 1.061 5.107L2.525 22.3l5.529-1.83c1.563.854 3.35 1.304 5.167 1.304 1.802 0 3.555-.358 5.204-1.062 1.649-.704 3.12-1.723 4.307-2.91 1.188-1.188 2.207-2.66 2.91-4.307.704-1.649 1.062-3.402 1.062-5.204 0-1.802-.358-3.555-1.062-5.204-.704-1.649-1.723-3.12-2.91-4.307-1.188-1.188-2.66-2.207-4.307-2.91-1.649-.704-3.402-1.062-5.204-1.062z" />
        </svg>
      </a>
    </>
  );
}
