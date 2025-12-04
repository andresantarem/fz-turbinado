import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container py-16 md:py-24 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <img 
                  src="/images/logo.svg" 
                  alt="Bravatus Logo" 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            <p className="text-foreground/70 text-sm">
              Transforme sua loja FacilZap em máquina de vendas com widgets profissionais e suporte VIP especializado.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-4 text-foreground">Produtos</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <button className="hover:text-primary transition-colors w-full text-center md:w-auto md:text-left">Widgets</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors w-full text-center md:w-auto md:text-left">Planos</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors w-full text-center md:w-auto md:text-left">Case de Sucesso</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors w-full text-center md:w-auto md:text-left">Gestão & Suporte</button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <button className="hover:text-primary transition-colors w-full text-center md:w-auto md:text-left">Sobre Nós</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors w-full text-center md:w-auto md:text-left">Blog</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors w-full text-center md:w-auto md:text-left">Política de Privacidade</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors w-full text-center md:w-auto md:text-left">Termos de Serviço</button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer text-center sm:text-left">
                <Phone size={16} />
                <a href="tel:+556299296658">(62) 99296-0658</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer text-center sm:text-left">
                <Phone size={16} />
                <a href="tel:+556498479549">(64) 98479-0549</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer text-center sm:text-left">
                <Mail size={16} />
                <a href="mailto:andresantarem@bravatus.com.br">andresantarem@bravatus.com.br</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-foreground/70 text-center sm:text-left">
                <MapPin size={16} />
                <span>Goiás, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FacilZap Integration Section */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-foreground/80">Solução integrada para lojas</span>
            <img 
              src="/images/logofacilzap.png" 
              alt="FácilZap" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-foreground/70 text-sm">
              © 2025 Bravatus. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
              </button>
              <button className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
              </button>
              <button className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
