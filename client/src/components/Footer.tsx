import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo.svg" 
                alt="Bravatus Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm text-foreground">FacilZap</span>
                <span className="text-xs text-primary font-bold">Turbinado</span>
              </div>
            </div>
            <p className="text-foreground/70 text-sm">
              Transforme sua loja FacilZap em máquina de vendas com widgets profissionais e suporte VIP especializado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Produtos</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <button className="hover:text-primary transition-colors">Widgets</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Planos</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Case de Sucesso</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Gestão & Suporte</button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <button className="hover:text-primary transition-colors">Sobre Nós</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Blog</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Política de Privacidade</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Termos de Serviço</button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} />
                <a href="tel:+556299296658">(62) 99296-0658</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} />
                <a href="tel:+556498479549">(64) 98479-0549</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} />
                <a href="mailto:andresantarem@bravatus.com.br">andresantarem@bravatus.com.br</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <MapPin size={16} />
                <span>Goiás, Brasil</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <a href="https://wa.me/5562992960658?text=Tenho%20interesse%20nos%20widgets%20da%20Bravatus.%20Por%20favor%20entre%20em%20contato." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.39 1.242-3.286 2.128-1.797 1.797-2.802 4.194-2.802 6.74 0 1.763.357 3.497 1.061 5.107L2.525 22.3l5.529-1.83c1.563.854 3.35 1.304 5.167 1.304 1.802 0 3.555-.358 5.204-1.062 1.649-.704 3.12-1.723 4.307-2.91 1.188-1.188 2.207-2.66 2.91-4.307.704-1.649 1.062-3.402 1.062-5.204 0-1.802-.358-3.555-1.062-5.204-.704-1.649-1.723-3.12-2.91-4.307-1.188-1.188-2.66-2.207-4.307-2.91-1.649-.704-3.402-1.062-5.204-1.062z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
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

        {/* Urgency Banner */}
        <div className="bg-primary/10 border border-primary rounded-xl p-6 text-center">
          <p className="text-foreground font-bold mb-2">🚨 ÚLTIMAS VAGAS - DEZEMBRO 2025</p>
          <p className="text-foreground/80 text-sm mb-4">
            Apenas 3 slots disponíveis para entrega neste mês. Garanta sua vaga agora!
          </p>
          <button className="btn-primary">
            Garantir Minha Vaga Agora
          </button>
        </div>
      </div>
    </footer>
  );
}
