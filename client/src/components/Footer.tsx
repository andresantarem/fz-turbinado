import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo_bravatus.jpeg" 
                alt="Bravatus Logo" 
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm">FacilZap</span>
                <span className="text-xs text-primary font-bold">Turbinado</span>
              </div>
            </div>
            <p className="text-white/60 text-sm">
              Transforme sua loja FacilZap em máquina de vendas com widgets profissionais e suporte VIP especializado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-white/60">
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
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/60">
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
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} />
                <span>(62) 98223-7075</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} />
                <span>contato@bravatus.com</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <MapPin size={16} />
                <span>Goiás, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Bravatus. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-white/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </button>
              <button className="text-white/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </button>
              <button className="text-white/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="bg-primary/20 border border-primary rounded-xl p-6 text-center">
          <p className="text-white font-bold mb-2">🚨 ÚLTIMAS VAGAS - DEZEMBRO 2025</p>
          <p className="text-white/80 text-sm mb-4">
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
