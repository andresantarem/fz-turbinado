import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Zap, TrendingUp, Gift, Filter, Link2, BarChart3, Clock, Users, Info, Sparkles } from 'lucide-react';
import { useState } from 'react';

const widgets = [
  {
    id: 1,
    name: 'Redesign Visual',
    icon: Zap,
    price: 450,
    description: 'Design profissional e moderno para sua loja',
  },
  {
    id: 2,
    name: 'Carrossel Vitrine',
    icon: ShoppingCart,
    price: 280,
    description: 'Showcase dinâmico de produtos destacados',
  },
  {
    id: 3,
    name: 'Carrossel Institucional',
    icon: Users,
    price: 280,
    description: 'Apresente sua marca com estilo',
  },
  {
    id: 4,
    name: 'Calculadora Lucro B2B',
    icon: TrendingUp,
    price: 380,
    description: 'Simule lucro para revendedores',
  },
  {
    id: 5,
    name: 'Oferta Scarcity',
    icon: Clock,
    price: 310,
    description: 'Timer de urgência com barra de progresso',
  },
  {
    id: 6,
    name: 'Cupom One-Click',
    icon: Gift,
    price: 180,
    description: 'Desconto automático na primeira compra',
  },
  {
    id: 7,
    name: 'Filtro Inteligente',
    icon: Filter,
    price: 190,
    description: 'Filtros avançados para melhor busca',
  },
  {
    id: 8,
    name: 'Central de Links',
    icon: Link2,
    price: 150,
    description: 'Hub centralizado de comunicação',
  },
  {
    id: 9,
    name: 'Barra de Vantagens',
    icon: BarChart3,
    price: 150,
    description: 'Destaque seus diferenciais',
  },
  {
    id: 10,
    name: 'Barra Informativa',
    icon: Info,
    price: 120,
    description: 'Informações importantes em destaque',
  },
];

export default function Widgets() {
  const { addItem, openCart, canAddWidget } = useCart();
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const handleAddWidget = (widget: typeof widgets[0]) => {
    if (!canAddWidget()) {
      showToast('❌ Você já tem um plano no carrinho. Limpe o carrinho para adicionar widgets.');
      return;
    }
    addItem({ id: widget.id, name: widget.name, price: widget.price, type: 'widget' });
    showToast(`✅ ${widget.name} adicionado ao carrinho!`);
  };

  return (
    <section id="widgets" className="section-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-background border border-border rounded-lg px-6 py-3 shadow-lg animate-in slide-in-down">
          {toast}
        </div>
      )}

      <div className="container relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/30 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-semibold text-primary">10 Widgets Turbinados</span>
            <span className="ml-2 turbine-spin text-lg">⚙️</span>
          </div>
          <h2 className="heading-lg text-white mb-4">Potência Máxima de Conversão</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
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
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-2 text-center sm:text-left">{widget.name}</h3>
                <p className="text-white/60 text-sm mb-6 text-center sm:text-left">{widget.description}</p>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-0">
                  <div className="text-center sm:text-left">
                    <p className="text-white/50 text-xs">Avulso</p>
                    <p className="text-white font-bold text-xl">R$ {widget.price}</p>
                  </div>
                  <button
                    onClick={() => handleAddWidget(widget)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm w-full sm:w-auto text-center"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Calculadora Lucro B2B Preview */}
        <div className="relative z-10 fade-in-up" style={{ animationDelay: `${widgets.length * 0.05}s` }}>
          <CalculatorB2BPreview />
        </div>
      </div>
    </section>
  );
}

function CalculatorB2BPreview() {
  const calculatorStyles = `
    .fz-calc-preview {
      position: relative;
      border-radius: 28px;
      overflow: hidden;
      background: linear-gradient(135deg, #020a06, #071b10 60%, #0b2715 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 28px 60px rgba(6, 17, 10, 0.45);
      color: #f1f9f4;
    }

    .fz-calc-preview__inner {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0;
    }

    .fz-calc-preview__info {
      padding: 48px 40px;
      background: rgba(255, 255, 255, 0.92);
      color: #0b0b0b;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
    }

    .fz-calc-preview__badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      border-radius: 999px;
      border: 1px solid rgba(11, 11, 11, 0.16);
      background: #ffffff;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .fz-calc-preview__title {
      font-family: 'Raleway', 'Klein Web', serif;
      font-weight: 800;
      font-size: 2.1rem;
      letter-spacing: 0.02em;
      margin-bottom: 12px;
    }

    .fz-calc-preview__description {
      font-size: 1rem;
      line-height: 1.6;
      color: #3c3c3c;
      max-width: 420px;
      margin-bottom: 32px;
    }

    .fz-calc-preview__price {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 10px;
      margin-bottom: 28px;
    }

    .fz-calc-preview__price-label {
      font-size: 0.82rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #6c6c6c;
      font-weight: 700;
    }

    .fz-calc-preview__price-value {
      font-size: 2rem;
      font-weight: 800;
      color: #0b0b0b;
    }

    .fz-calc-preview__button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border-radius: 999px;
      padding: 14px 28px;
      background: #0f9e55;
      border: none;
      color: #ffffff;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      font-size: 0.95rem;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .fz-calc-preview__button:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 32px rgba(15, 158, 85, 0.35);
    }

    .fz-calc-preview__widget {
      position: relative;
      padding: 48px 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fz-calc-preview__widget::after {
      content: 'FZ B2B';
      position: absolute;
      top: 28px;
      right: -60px;
      font-size: 4.8rem;
      font-weight: 900;
      letter-spacing: 0.22em;
      color: rgba(255, 255, 255, 0.04);
      transform: rotate(-90deg);
      pointer-events: none;
    }

    .fz-calc-card {
      width: 100%;
      max-width: 420px;
      border-radius: 26px;
      background: rgba(3, 11, 6, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.12);
      padding: 32px;
      backdrop-filter: blur(18px);
      position: relative;
    }

    .fz-calc-card__brand {
      display: inline-flex;
      align-items: center;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.35);
      letter-spacing: 0.18em;
      font-size: 0.72rem;
    }

    .fz-calc-card__heading {
      margin: 18px 0 24px;
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .fz-calc-card__field {
      margin-bottom: 20px;
    }

    .fz-calc-card__label {
      display: block;
      font-size: 0.78rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.56);
      margin-bottom: 8px;
    }

    .fz-calc-card__input {
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 18px;
      padding: 12px 16px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: rgba(3, 13, 8, 0.65);
    }

    .fz-calc-card__input span {
      font-weight: 700;
      letter-spacing: 0.08em;
    }

    .fz-calc-card__input strong {
      font-size: 1.1rem;
      letter-spacing: 0.04em;
    }

    .fz-calc-card__slider {
      width: 100%;
      -webkit-appearance: none;
      appearance: none;
      height: 6px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.18);
      outline: none;
    }

    .fz-calc-card__slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #0f9e55;
      border: 2px solid #ffffff;
      box-shadow: 0 0 0 6px rgba(15, 158, 85, 0.18);
    }

    .fz-calc-card__result {
      margin-top: 28px;
      padding: 18px;
      border-radius: 20px;
      border: 1px dashed rgba(255, 255, 255, 0.4);
      text-align: center;
      background: rgba(6, 20, 11, 0.6);
    }

    .fz-calc-card__result span {
      display: block;
      font-size: 0.72rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      opacity: 0.65;
      margin-bottom: 6px;
    }

    .fz-calc-card__result strong {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: 0.06em;
    }

    .fz-calc-card__footer {
      margin-top: 16px;
      font-size: 0.88rem;
      color: rgba(255, 255, 255, 0.78);
    }

    @media (max-width: 1024px) {
      .fz-calc-preview__inner {
        grid-template-columns: 1fr;
      }

      .fz-calc-preview__info,
      .fz-calc-preview__widget {
        padding: 36px 28px;
      }

      .fz-calc-preview__widget::after {
        display: none;
      }

      .fz-calc-preview__info {
        border-bottom: 1px solid rgba(11, 11, 11, 0.08);
      }
    }

    @media (max-width: 640px) {
      .fz-calc-preview {
        border-radius: 22px;
      }

      .fz-calc-preview__info {
        padding: 32px 22px;
      }

      .fz-calc-preview__title {
        font-size: 1.8rem;
      }

      .fz-calc-preview__button {
        width: 100%;
        justify-content: center;
      }

      .fz-calc-card {
        padding: 26px 22px;
      }

      .fz-calc-card__heading {
        font-size: 1.1rem;
        letter-spacing: 0.08em;
      }
    }
  `;

  return (
    <div className="fz-calc-preview">
      <style>{calculatorStyles}</style>
      <div className="fz-calc-preview__inner">
        <div className="fz-calc-preview__info">
          <span className="fz-calc-preview__badge">FácilZap Turbinado</span>
          <h3 className="fz-calc-preview__title">Calculadora de Lucro B2B</h3>
          <p className="fz-calc-preview__description">
            Mostre para seus revendedores o potencial de ganho em segundos. Configure margens, ajuste preços e gere confiança imediata com um simulador elegante e responsivo.
          </p>
          <div className="fz-calc-preview__price">
            <span className="fz-calc-preview__price-label">Investimento único</span>
            <span className="fz-calc-preview__price-value">R$ 380</span>
          </div>
          <button type="button" className="fz-calc-preview__button">
            Adicionar ao Pacote
          </button>
        </div>

        <div className="fz-calc-preview__widget">
          <div className="fz-calc-card">
            <span className="fz-calc-card__brand">FZ TURBINADO</span>
            <h4 className="fz-calc-card__heading">Simule seu lucro</h4>

            <div className="fz-calc-card__field">
              <span className="fz-calc-card__label">Preço de atacado</span>
              <div className="fz-calc-card__input">
                <span>R$</span>
                <strong>35,00</strong>
              </div>
            </div>

            <div className="fz-calc-card__field">
              <span className="fz-calc-card__label">Margem de lucro</span>
              <input className="fz-calc-card__slider" type="range" min="10" max="300" step="10" value="100" readOnly />
            </div>

            <div className="fz-calc-card__result">
              <span>Lucro estimado</span>
              <strong>R$ 35,00</strong>
            </div>
            <p className="fz-calc-card__footer">Preço sugerido de venda: <strong>R$ 70,00</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
