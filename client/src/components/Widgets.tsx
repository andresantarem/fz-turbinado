import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Zap, TrendingUp, Gift, Filter, Link2, BarChart3, Clock, Users, Info, Sparkles } from 'lucide-react';

const widgets = [
  {
    id: 1,
    name: 'Redesign Visual',
    icon: Zap,
    conversion: '+45%',
    price: 450,
    description: 'Design profissional e moderno para sua loja',
  },
  {
    id: 2,
    name: 'Carrossel Vitrine',
    icon: ShoppingCart,
    conversion: '+35%',
    price: 280,
    description: 'Showcase dinâmico de produtos destacados',
  },
  {
    id: 3,
    name: 'Carrossel Institucional',
    icon: Users,
    conversion: '+25%',
    price: 280,
    description: 'Apresente sua marca com estilo',
  },
  {
    id: 4,
    name: 'Calculadora Lucro B2B',
    icon: TrendingUp,
    conversion: '+55%',
    price: 380,
    description: 'Simule lucro para revendedores',
  },
  {
    id: 5,
    name: 'Oferta Scarcity',
    icon: Clock,
    conversion: '+68%',
    price: 310,
    description: 'Timer de urgência com barra de progresso',
  },
  {
    id: 6,
    name: 'Cupom One-Click',
    icon: Gift,
    conversion: '+38%',
    price: 180,
    description: 'Desconto automático na primeira compra',
  },
  {
    id: 7,
    name: 'Filtro Inteligente',
    icon: Filter,
    conversion: '+42%',
    price: 190,
    description: 'Filtros avançados para melhor busca',
  },
  {
    id: 8,
    name: 'Central de Links',
    icon: Link2,
    conversion: '+30%',
    price: 150,
    description: 'Hub centralizado de comunicação',
  },
  {
    id: 9,
    name: 'Barra de Vantagens',
    icon: BarChart3,
    conversion: '+28%',
    price: 150,
    description: 'Destaque seus diferenciais',
  },
  {
    id: 10,
    name: 'Barra Informativa',
    icon: Info,
    conversion: '+15%',
    price: 120,
    description: 'Informações importantes em destaque',
  },
];

export default function Widgets() {
  const { addItem, openCart } = useCart();

  return (
    <section id="widgets" className="section-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">10 Widgets Turbinados</span>
          </div>
          <h2 className="heading-lg text-white mb-4">Potência Máxima de Conversão</h2>
          <p className="text-white/70 text-lg">
            Cada widget foi desenvolvido para aumentar vendas. Monte seu pacote ou leve tudo no Combo Elite
          </p>
        </div>

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative z-10">
          {widgets.map((widget, idx) => {
            const Icon = widget.icon;
            return (
              <div
                key={widget.id}
                className="card-widget bg-foreground/10 border-primary/20 hover:border-primary hover:bg-foreground/5 fade-in-up group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <span className="badge-conversion bg-primary/20 text-primary pulse-subtle">
                    {widget.conversion}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-2">{widget.name}</h3>
                <p className="text-white/60 text-sm mb-6">{widget.description}</p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-xs">Avulso</p>
                    <p className="text-white font-bold text-xl">R$ {widget.price}</p>
                  </div>
                  <button
                    onClick={() => { addItem({ id: widget.id, name: widget.name, price: widget.price }); openCart(); }}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Image */}
        <div className="mt-16 pt-16 border-t border-white/10 relative z-10 fade-in-up">
          <div className="rounded-2xl overflow-hidden hover-lift">
            <img
              src="/images/widgets-showcase.png"
              alt="Showcase de todos os 10 widgets"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
