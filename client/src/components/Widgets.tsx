import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Zap, TrendingUp, Gift, Filter, Link2, BarChart3, Clock, Users, Info, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState, useCallback, useEffect, useRef } from 'react';

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
    name: 'Produto Mais Vendido',
    icon: Users,
    price: 280,
    description: 'Destaque o seu produto mais vendido',
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
  const { addItem, canAddWidget } = useCart();
  const [toast, setToast] = useState<string | null>(null);
  const calculatorWidget = widgets.find((widget) => widget.name === 'Calculadora Lucro B2B');
  const CalculatorIcon = calculatorWidget?.icon;

  const redesignWidget = widgets.find((widget) => widget.name === 'Redesign Visual');
  const RedesignIcon = redesignWidget?.icon;

  const cupomWidget = widgets.find((widget) => widget.name === 'Cupom One-Click');
  const CupomIcon = cupomWidget?.icon;

  const barraVantagensWidget = widgets.find((widget) => widget.name === 'Barra de Vantagens');
  const BarraVantagensIcon = barraVantagensWidget?.icon;

  const centralLinksWidget = widgets.find((widget) => widget.name === 'Central de Links');
  const CentralLinksIcon = centralLinksWidget?.icon;

  const displayWidgets = widgets.filter(
    (widget) =>
      widget.name !== 'Redesign Visual' &&
      widget.name !== 'Produto Mais Vendido' &&
      widget.name !== 'Calculadora Lucro B2B' &&
      widget.name !== 'Cupom One-Click' &&
      widget.name !== 'Barra de Vantagens' &&
      widget.name !== 'Central de Links' &&
      widget.name !== 'Barra Informativa'
  );

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
          {displayWidgets.map((widget, idx) => {
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

        {redesignWidget && (
          <div
            className="relative z-10 fade-in-up mb-8"
            style={{ animationDelay: `${displayWidgets.length * 0.05}s` }}
          >
            <div className="max-w-[70rem] mx-auto w-full">
              <RedesignVisualCard
                widget={redesignWidget}
                icon={RedesignIcon}
                onAdd={() => redesignWidget && handleAddWidget(redesignWidget)}
              />
            </div>
          </div>
        )}

        {widgets.find((w) => w.name === 'Produto Mais Vendido') && (
          <div
            className="relative z-10 fade-in-up mb-8"
            style={{ animationDelay: `${displayWidgets.length * 0.05 + 0.1}s` }}
          >
            <div className="max-w-[70rem] mx-auto w-full">
              <ProdutoMaisVendidoCard
                widget={widgets.find((w) => w.name === 'Produto Mais Vendido')!}
                icon={widgets.find((w) => w.name === 'Produto Mais Vendido')!.icon}
                onAdd={() =>
                  widgets.find((w) => w.name === 'Produto Mais Vendido') &&
                  handleAddWidget(widgets.find((w) => w.name === 'Produto Mais Vendido')!)
                }
              />
            </div>
          </div>
        )}

        {calculatorWidget && (
          <div
            className="relative z-10 fade-in-up"
            style={{ animationDelay: `${displayWidgets.length * 0.05}s` }}
          >
            <div className="max-w-[70rem] mx-auto w-full">
              <CalculatorB2BCard
                widget={calculatorWidget}
                icon={CalculatorIcon}
                onAdd={() => calculatorWidget && handleAddWidget(calculatorWidget)}
              />
            </div>
          </div>
        )}

        {cupomWidget && (
          <div
            className="relative z-10 fade-in-up mt-8"
            style={{ animationDelay: `${displayWidgets.length * 0.05 + 0.1}s` }}
          >
            <div className="max-w-[70rem] mx-auto w-full">
              <CupomOneClickCard
                widget={cupomWidget}
                icon={CupomIcon}
                onAdd={() => cupomWidget && handleAddWidget(cupomWidget)}
              />
            </div>
          </div>
        )}

        {barraVantagensWidget && (
          <div
            className="relative z-10 fade-in-up mt-8"
            style={{ animationDelay: `${displayWidgets.length * 0.05 + 0.2}s` }}
          >
            <div className="max-w-[70rem] mx-auto w-full">
              <BarraDeVantagensCard
                widget={barraVantagensWidget}
                icon={BarraVantagensIcon}
                onAdd={() => barraVantagensWidget && handleAddWidget(barraVantagensWidget)}
              />
            </div>
          </div>
        )}

        {centralLinksWidget && (
          <div
            className="relative z-10 fade-in-up mt-8"
            style={{ animationDelay: `${displayWidgets.length * 0.05 + 0.3}s` }}
          >
            <div className="max-w-[70rem] mx-auto w-full">
              <CentralDeLinksCard
                widget={centralLinksWidget}
                icon={CentralLinksIcon}
                onAdd={() => centralLinksWidget && handleAddWidget(centralLinksWidget)}
              />
            </div>
          </div>
        )}

        {widgets.find((w) => w.name === 'Barra Informativa') && (
          <div
            className="relative z-10 fade-in-up mt-8"
            style={{ animationDelay: `${displayWidgets.length * 0.05 + 0.4}s` }}
          >
            <div className="max-w-[70rem] mx-auto w-full">
              <BarraInformativaCard
                widget={widgets.find((w) => w.name === 'Barra Informativa')!}
                icon={widgets.find((w) => w.name === 'Barra Informativa')!.icon}
                onAdd={() =>
                  widgets.find((w) => w.name === 'Barra Informativa') &&
                  handleAddWidget(widgets.find((w) => w.name === 'Barra Informativa')!)
                }
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

type CalculatorB2BCardProps = {
  widget: typeof widgets[number];
  icon?: typeof widgets[number]['icon'];
  onAdd: () => void;
};

function CalculatorB2BCard({ widget, icon: IconComponent, onAdd }: CalculatorB2BCardProps) {
  return (
    <div className="card-widget bg-foreground/10 border-primary/20 hover:border-primary transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{widget.name}</h3>
          <p className="text-white/60 text-sm">{widget.description}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/5 bg-black/40">
        <CalculatorB2BPreview />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white/50 text-xs">Avulso</p>
          <p className="text-white font-bold text-xl">R$ {widget.price}</p>
        </div>
        <button
          onClick={onAdd}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm w-full sm:w-auto text-center"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
function CalculatorB2BPreview() {
  const [wholesaleValue, setWholesaleValue] = useState('35,00');
  const [margin, setMargin] = useState(100);
  const marginOptions = [50, 100, 150, 200];

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      }),
    []
  );

  const parseMoney = (value: string) => {
    if (!value) return 0;
    const cleaned = value.replace(/[R$\s]/g, '').replace(/\./g, '').replace(',', '.');
    const parsed = Number(cleaned);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const formatMoney = (amount: number) => currencyFormatter.format(amount || 0);

  const formatParts = (amount: number) => {
    const formatted = formatMoney(amount);
    const [currency, ...rest] = formatted.trim().split(/\s+/);
    const numericFallback = rest.join(' ');
    return {
      currency: currency ?? 'R$',
      value: numericFallback && numericFallback.length > 0 ? numericFallback : formatted.replace(currency ?? '', '').trim() || '0,00',
    };
  };

  const atacado = parseMoney(wholesaleValue);
  const lucro = atacado * (margin / 100);
  const venda = atacado + lucro;

  const profitParts = formatParts(lucro);
  const saleFormatted = formatMoney(venda);

  const handleBlurPrice = () => {
    const formatted = formatMoney(parseMoney(wholesaleValue)).replace('R$', '').trim();
    setWholesaleValue(formatted);
  };

  const calculatorStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800;900&display=swap');

    .fz-lucro-widget,
    .fz-lucro-widget * {
      box-sizing: border-box;
      font-family: Fabriga, -apple-system, 'system-ui', 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    }

    .fz-lucro-widget h1,
    .fz-lucro-widget h2,
    .fz-lucro-widget h3,
    .fz-lucro-widget h4 {
      font-family: 'Raleway', 'Klein Web', serif;
      font-weight: 800;
    }

    .fz-lucro-widget .connect-simulator {
      padding: 20px;
      background: #f5f5f5;
    }

    .fz-lucro-widget .connect-sim-inner {
      max-width: 1120px;
      margin: 0 auto;
      background: #000;
      color: #fff;
      border-radius: 26px;
      border: 2px solid #fff;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
      overflow: hidden;
    }

    .fz-lucro-widget .connect-sim-left,
    .fz-lucro-widget .connect-sim-right {
      padding: 32px 36px;
    }

    .fz-lucro-widget .connect-sim-left {
      background: #fff;
      color: #000;
    }

    .fz-lucro-widget .connect-sim-right {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: radial-gradient(circle at top left, #1c3f2b 0, #06160c 55%, #051108 100%);
    }

    .fz-lucro-widget .connect-sim-right::after {
      content: 'FÁCILZAP';
      position: absolute;
      bottom: -20px;
      right: -12px;
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: 0.16em;
      color: rgba(255, 255, 255, 0.05);
      transform: rotate(-90deg);
      pointer-events: none;
    }

    .fz-lucro-widget .connect-sim-header h2 {
      margin: 4px 0 6px;
      font-size: 1.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .fz-lucro-widget .connect-sim-header p {
      margin: 0;
      font-size: 0.95rem;
      color: #444;
    }

    .fz-lucro-widget .connect-sim-brand {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 4px 10px;
      font-size: 0.78rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      border-radius: 999px;
      border: 1px solid #000;
    }

    .fz-lucro-widget .connect-sim-field {
      margin-top: 24px;
    }

    .fz-lucro-widget .connect-sim-field label {
      display: block;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .fz-lucro-widget .connect-sim-input-wrap {
      display: flex;
      align-items: center;
      border-radius: 14px;
      border: 1px solid #e0e0e0;
      padding: 10px 14px;
      background: #fafafa;
    }

    .fz-lucro-widget .connect-sim-input-prefix {
      font-weight: 700;
      margin-right: 4px;
      color: #000;
      font-size: 0.9rem;
    }

    .fz-lucro-widget .connect-sim-input {
      border: none;
      outline: none;
      background: transparent;
      width: 100%;
      font-size: 1rem;
      font-weight: 600;
      color: #111;
    }

    .fz-lucro-widget .connect-sim-input::placeholder {
      color: #aaa;
    }

    .fz-lucro-widget .connect-sim-margin-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 6px;
    }

    .fz-lucro-widget .connect-sim-margin-title {
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #777;
    }

    .fz-lucro-widget .connect-sim-margin-value {
      font-size: 1rem;
      font-weight: 700;
    }

    .fz-lucro-widget .connect-sim-margin-range {
      width: 100%;
      margin: 6px 0 16px;
      -webkit-appearance: none;
      appearance: none;
      height: 6px;
      background: #e3e3e3;
      border-radius: 999px;
      outline: none;
    }

    .fz-lucro-widget .connect-sim-margin-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #0f9e55;
      border: 2px solid #fff;
      cursor: pointer;
      box-shadow: 0 0 0 4px rgba(15, 158, 85, 0.2);
      margin-top: -7px;
    }

    .fz-lucro-widget .connect-sim-margin-range::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #0f9e55;
      border: 2px solid #fff;
      cursor: pointer;
      box-shadow: 0 0 0 4px rgba(15, 158, 85, 0.2);
    }

    .fz-lucro-widget .connect-sim-margin-range::-moz-range-track {
      height: 6px;
      background: #e3e3e3;
      border-radius: 999px;
    }

    .fz-lucro-widget .connect-sim-margin-buttons {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 8px;
      margin-top: 6px;
    }

    .fz-lucro-widget .connect-sim-margin-btn {
      border-radius: 999px;
      border: 1px solid #0f0f0f;
      padding: 8px 4px;
      font-size: 0.86rem;
      font-weight: 600;
      background: #fff;
      color: #000;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .fz-lucro-widget .connect-sim-margin-btn:hover {
      background: #0f0f0f;
      color: #fff;
    }

    .fz-lucro-widget .connect-sim-margin-btn.is-active {
      background: #0f9e55;
      color: #fff;
      border-color: #0f9e55;
      box-shadow: 0 0 0 2px rgba(15, 158, 85, 0.35);
    }

    .fz-lucro-widget .connect-sim-result {
      width: 100%;
      max-width: 420px;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .fz-lucro-widget .connect-sim-result-label {
      text-transform: uppercase;
      letter-spacing: 0.18em;
      font-size: 0.75rem;
      opacity: 0.82;
      display: inline-block;
    }

    .fz-lucro-widget .connect-sim-result-box {
      margin: 18px auto 16px;
      padding: 18px 26px;
      border-radius: 20px;
      border: 2px dashed rgba(255, 255, 255, 0.7);
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      background: rgba(0, 0, 0, 0.35);
      min-width: 260px;
    }

    .fz-lucro-widget .connect-sim-result-currency {
      font-size: 1.4rem;
      font-weight: 700;
    }

    .fz-lucro-widget .connect-sim-profit-value {
      font-size: 2.4rem;
      font-weight: 800;
      letter-spacing: 0.04em;
    }

    .fz-lucro-widget .connect-sim-sale-text {
      margin: 8px 0 20px;
      font-size: 0.95rem;
    }

    .fz-lucro-widget .connect-sim-sale-text strong {
      text-decoration: underline;
    }

    .fz-lucro-widget .connect-sim-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 32px;
      border-radius: 999px;
      border: 1px solid #fff;
      background: #fff;
      color: #000;
      font-weight: 700;
      font-size: 0.93rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .fz-lucro-widget .connect-sim-cta:hover {
      background: transparent;
      color: #fff;
      transform: translateY(-1px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.55);
    }

    .fz-lucro-widget .connect-sim-right::after {
      font-family: 'Raleway', 'Klein Web', serif;
    }

    @media (max-width: 900px) {
      .fz-lucro-widget .connect-sim-inner {
        grid-template-columns: 1fr;
      }

      .fz-lucro-widget .connect-sim-right {
        padding-top: 0;
      }
    }

    @media (max-width: 600px) {
      .fz-lucro-widget .connect-simulator {
        padding: 16px 10px;
      }

      .fz-lucro-widget .connect-sim-inner {
        border-radius: 18px;
      }

      .fz-lucro-widget .connect-sim-left,
      .fz-lucro-widget .connect-sim-right {
        padding: 22px 18px;
      }

      .fz-lucro-widget .connect-sim-result-box {
        min-width: 0;
        width: 100%;
      }

      .fz-lucro-widget .connect-sim-result-currency {
        font-size: 1.2rem;
      }

      .fz-lucro-widget .connect-sim-profit-value {
        font-size: 2rem;
      }

      .fz-lucro-widget .connect-sim-right::after {
        display: none;
      }

      .fz-lucro-widget .connect-sim-cta {
        width: 100%;
      }
    }
  `;

  return (
    <div className="fz-lucro-widget">
      <style>{calculatorStyles}</style>
      <section className="connect-simulator">
        <div className="connect-sim-inner">
          <div className="connect-sim-left">
            <header className="connect-sim-header">
              <span className="connect-sim-brand">FácilZap Turbinado</span>
              <h2>Simule seu lucro</h2>
              <p>
                Veja quanto dinheiro você coloca no bolso revendendo com a{' '}
                <strong>FácilZap Turbinado</strong>.
              </p>
            </header>

            <div className="connect-sim-field">
              <label htmlFor="connect-wholesale">Preço de atacado (R$)</label>
              <div className="connect-sim-input-wrap">
                <span className="connect-sim-input-prefix">R$</span>
                <input
                  id="connect-wholesale"
                  className="connect-sim-input connect-sim-wholesale-input"
                  type="text"
                  inputMode="decimal"
                  value={wholesaleValue}
                  onChange={(event) => setWholesaleValue(event.target.value)}
                  onBlur={handleBlurPrice}
                />
              </div>
            </div>

            <div className="connect-sim-field">
              <label htmlFor="connect-margin">Sua margem de lucro</label>

              <div className="connect-sim-margin-row">
                <span className="connect-sim-margin-title">Margem escolhida:</span>
                <strong className="connect-sim-margin-value">{margin}%</strong>
              </div>

              <input
                id="connect-margin"
                className="connect-sim-margin-range"
                type="range"
                min={10}
                max={300}
                step={10}
                value={margin}
                onChange={(event) => setMargin(Number(event.target.value))}
              />

              <div className="connect-sim-margin-buttons">
                {marginOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`connect-sim-margin-btn${option === margin ? ' is-active' : ''}`}
                    data-margin={option}
                    onClick={() => setMargin(option)}
                  >
                    {option}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="connect-sim-right">
            <div className="connect-sim-result">
              <span className="connect-sim-result-label">Lucro líquido estimado</span>
              <div className="connect-sim-result-box">
                <span className="connect-sim-result-currency">{profitParts.currency}</span>
                <span className="connect-sim-profit-value">{profitParts.value}</span>
              </div>

              <p className="connect-sim-sale-text">
                Preço sugerido de venda: <strong className="connect-sim-sale-value">{saleFormatted}</strong>
              </p>

              <button type="button" className="connect-sim-cta">
                Quero lucrar com a FácilZap
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

type CupomOneClickCardProps = {
  widget: typeof widgets[number];
  icon?: typeof widgets[number]['icon'];
  onAdd: () => void;
};

function CupomOneClickCard({ widget, icon: IconComponent, onAdd }: CupomOneClickCardProps) {
  return (
    <div className="card-widget bg-foreground/10 border-primary/20 hover:border-primary transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{widget.name}</h3>
          <p className="text-white/60 text-sm">{widget.description}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/5 bg-transparent">
        <CupomOneClickPreview />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white/50 text-xs">Avulso</p>
          <p className="text-white font-bold text-xl">R$ {widget.price}</p>
        </div>
        <button
          onClick={onAdd}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm w-full sm:w-auto text-center"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function CupomOneClickPreview() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const cupom = 'PRIMEIRACOMPRA';
    navigator.clipboard.writeText(cupom).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      alert('Cupom: ' + cupom);
    });
  };

  const cupomStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

    #promo-container-cupom,
    #promo-container-cupom * {
        box-sizing: border-box;
    }

    #promo-container-cupom {
        width: 100%;
        background: transparent;
        position: relative;
        z-index: 990;
        font-family: 'Poppins', sans-serif !important;
        display: block;
        margin-bottom: 20px;
    }

    /* --- BANNER --- */
    .banner-promocional {
        background: linear-gradient(135deg, #000 0%, #333 100%);
        border-radius: 20px;
        padding: 30px 40px;
        display: flex;
        flex-wrap: wrap; /* Permite quebra em telas menores que o breakpoint se necessário */
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        margin: 20px 0;
        width: 100%;
        position: relative;
        overflow: hidden;
        gap: 20px; /* Gap padrão para desktop */
    }

    .banner-promocional::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        animation: pulse-promo 4s ease-in-out infinite;
    }

    @keyframes pulse-promo {
        0%, 100% {
            transform: scale(1);
            opacity: 0.4;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.9;
        }
    }

    .conteudo-banner {
        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;
        z-index: 1;
        flex: 1; /* Ocupa o espaço disponível */
        min-width: 280px; /* Largura mínima antes de quebrar */
    }

    .icone-presente {
        width: 70px;
        height: 70px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        border: 3px solid rgba(255, 255, 255, 0.5);
        flex-shrink: 0; /* Não deixa o ícone diminuir */
    }

    .texto-promo {
        flex: 1;
    }

    .texto-promo h2 {
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        margin: 0 0 8px 0;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    .texto-promo p {
        color: #fff;
        font-size: 20px;
        margin: 0;
        font-weight: 400;
        line-height: 1.4;
    }

    .destaque-desconto {
        color: white;
        font-weight: 900;
        font-size: 26px;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
        background: #000;
        padding: 4px 12px;
        border-radius: 8px;
        display: inline-block;
        white-space: nowrap;
    }

    .area-cupom {
        display: flex;
        align-items: center;
        gap: 15px;
        background: rgba(255, 255, 255, 0.95);
        padding: 15px 25px;
        border-radius: 15px;
        border: 3px solid #000;
        position: relative;
        z-index: 1;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        flex-shrink: 0;
    }

    .cupom-codigo {
        color: #000;
        font-size: 24px;
        font-weight: 800;
        letter-spacing: 2px;
        font-family: 'Courier New', monospace;
    }

    .btn-copiar-cupom {
        background: #000;
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 10px;
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
    }

    .btn-copiar-cupom:hover {
        background: #222;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    }

    /* --- RESPONSIVIDADE --- */
    
    /* Tablet e Telas Médias */
    @media (max-width: 992px) {
        .banner-promocional {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
        }

        .conteudo-banner {
            flex-direction: column;
            width: 100%;
        }

        .texto-promo h2 {
            font-size: 20px;
        }

        .area-cupom {
            width: 100%;
            justify-content: center;
            max-width: 500px; /* Limita largura em tablet */
        }
    }

    /* Mobile */
    @media (max-width: 768px) {
        .banner-promocional {
            margin: 10px 0;
            border-radius: 15px;
            padding: 25px 15px;
        }

        .icone-presente {
            width: 60px;
            height: 60px;
            font-size: 28px;
        }

        .texto-promo p {
            font-size: 16px;
        }

        .destaque-desconto {
            font-size: 22px;
            display: block; /* Quebra linha pra destacar */
            margin-top: 8px;
        }

        .area-cupom {
            flex-direction: column;
            padding: 15px;
            width: 100%;
            gap: 12px;
        }

        .cupom-codigo {
            font-size: 22px;
        }

        .btn-copiar-cupom {
            width: 100%;
            justify-content: center;
            padding: 14px;
        }
    }

    /* Telas Pequenas (iPhone SE, etc) */
    @media (max-width: 480px) {
        .banner-promocional {
            padding: 20px 10px;
        }

        .texto-promo h2 {
            font-size: 16px;
        }

        .texto-promo p {
            font-size: 15px;
        }

        .destaque-desconto {
            font-size: 19px;
            padding: 3px 10px;
        }

        .cupom-codigo {
            font-size: 19px;
            letter-spacing: 1px;
        }
        
        .icone-presente {
            width: 50px;
            height: 50px;
            font-size: 24px;
        }
    }

    .fz-html-personalizado {
        margin: 0 !important;
        padding: 0 !important;
    }
  `;

  return (
    <div id="promo-container-cupom">
      <style>{cupomStyles}</style>
      <div className="banner-promocional">
        <div className="conteudo-banner">
          <div className="icone-presente">🎁</div>
          <div className="texto-promo">
            <h2>Presente de Boas-Vindas</h2>
            <p>Faça sua primeira compra e ganhe <span className="destaque-desconto">5% DE DESCONTO</span> agora!</p>
          </div>
        </div>
        <div className="area-cupom">
          <div className="cupom-codigo">PRIMEIRACOMPRA</div>
          <button
            className="btn-copiar-cupom"
            onClick={handleCopy}
            style={copied ? { background: '#4ade80' } : {}}
          >
            {copied ? '✅ COPIADO!' : '📋 COPIAR'}
          </button>
        </div>
      </div>
    </div>
  );
}

type BarraDeVantagensCardProps = {
  widget: typeof widgets[number];
  icon?: typeof widgets[number]['icon'];
  onAdd: () => void;
};

function BarraDeVantagensCard({ widget, icon: IconComponent, onAdd }: BarraDeVantagensCardProps) {
  return (
    <div className="card-widget bg-foreground/10 border-primary/20 hover:border-primary transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{widget.name}</h3>
          <p className="text-white/60 text-sm">{widget.description}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/5 bg-transparent">
        <BarraDeVantagensPreview />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white/50 text-xs">Avulso</p>
          <p className="text-white font-bold text-xl">R$ {widget.price}</p>
        </div>
        <button
          onClick={onAdd}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm w-full sm:w-auto text-center"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function BarraDeVantagensPreview() {
  const barraVantagensStyles = `
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

    #barra-vantagens-container,
    #barra-vantagens-container * {
        box-sizing: border-box;
    }

    #barra-vantagens-container {
        width: 100%;
        background: transparent;
        position: relative;
        z-index: 990;
        font-family: 'Poppins', sans-serif !important;
        display: block;
        margin: 0 !important;
        padding: 0 !important;
    }

    /* --- BARRA DE VANTAGENS --- */
    #barra-vantagens-scroll {
        width: 100%;
        background: linear-gradient(90deg, #000 0%, #333 100%);
        padding: 15px 0;
        margin: 0 !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        align-items: center;
        line-height: 1;
    }

    .vantagens-track {
        display: flex;
        width: max-content;
        animation: scroll-infinite 30s linear infinite;
        margin: 0 !important;
        padding: 0 !important;
    }

    @keyframes scroll-infinite {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-50%);
        }
    }

    .vantagem-item {
        display: flex;
        align-items: center;
        text-align: left;
        color: white !important;
        padding: 0 50px;
        flex-shrink: 0;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        margin: 0 !important;
        line-height: 1;
    }

    .vantagem-text-col {
        display: flex;
        flex-direction: column;
        gap: 2px;
        margin: 0 !important;
        padding: 0 !important;
    }

    .vantagem-icon {
        font-size: 28px;
        margin-right: 15px;
        color: white !important;
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
    }

    .vantagem-titulo {
        font-weight: 800;
        text-transform: uppercase;
        font-size: 15px;
        margin: 0;
        color: white;
        letter-spacing: 0.5px;
        line-height: 1.2;
        display: block;
    }

    .vantagem-subtitulo {
        font-weight: 400;
        font-size: 12px;
        font-style: italic;
        opacity: 0.95;
        white-space: nowrap;
        color: white;
        margin: 0;
        line-height: 1.2;
        display: block;
    }

    /* --- MOBILE --- */
    @media (max-width: 768px) {
        #barra-vantagens-scroll {
            padding: 10px 0;
        }

        .vantagens-track {
            gap: 15px;
        }

        .vantagem-item {
            padding: 0 25px;
        }

        .vantagem-icon {
            font-size: 24px;
            margin-right: 12px;
        }

        .vantagem-titulo {
            font-size: 14px;
        }

        .vantagem-subtitulo {
            font-size: 11px;
        }
    }

    .fz-html-personalizado {
        margin: 0 !important;
        padding: 0 !important;
    }

    /* Força o próximo elemento a não ter margem superior */
    #barra-vantagens-container+* {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }

    /* Força especificamente o slide de imagens a colar na barra */
    .fz-slide-imagens {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }

    /* Força também o swiper interno */
    .fz-slide-imagens .swiper {
        margin-top: 0 !important;
        padding-top: 0 !important;
    }
  `;

  return (
    <div id="html-beneficios-widget">
      <style>{barraVantagensStyles}</style>
      <div id="barra-vantagens-container">
        <div id="barra-vantagens-scroll">
          <div className="vantagens-track">
            {/* Bloco 1 */}
            <div className="vantagem-item">
              <div className="vantagem-icon">🚚</div>
              <div className="vantagem-text-col">
                <span className="vantagem-titulo">Enviamos Para Todo o Brasil</span>
                <span className="vantagem-subtitulo">Envio do pedido em até 72h úteis</span>
              </div>
            </div>

            <div className="vantagem-item">
              <div className="vantagem-icon">🎉</div>
              <div className="vantagem-text-col">
                <span className="vantagem-titulo">Frete Grátis</span>
                <span className="vantagem-subtitulo">em compras acima de R$ 2.000</span>
              </div>
            </div>

            <div className="vantagem-item">
              <div className="vantagem-icon">🛍️</div>
              <div className="vantagem-text-col">
                <span className="vantagem-titulo">Pedido Mínimo</span>
                <span className="vantagem-subtitulo">apenas 5 peças variadas</span>
              </div>
            </div>

            <div className="vantagem-item">
              <div className="vantagem-icon">💳</div>
              <div className="vantagem-text-col">
                <span className="vantagem-titulo">Pagamento Facilitado</span>
                <span className="vantagem-subtitulo">Parcele em até 12x nos cartões</span>
              </div>
            </div>

            {/* DUPLICA PARA LOOP - Repedindo os itens para efeito de scroll infinito */}
            <div className="vantagem-item">
              <div className="vantagem-icon">🚚</div>
              <div className="vantagem-text-col">
                <span className="vantagem-titulo">Enviamos Para Todo o Brasil</span>
                <span className="vantagem-subtitulo">Envio do pedido em até 72h úteis</span>
              </div>
            </div>

            <div className="vantagem-item">
              <div className="vantagem-icon">🎉</div>
              <div className="vantagem-text-col">
                <span className="vantagem-titulo">Frete Grátis</span>
                <span className="vantagem-subtitulo">em compras acima de R$ 2.000</span>
              </div>
            </div>

            <div className="vantagem-item">
              <div className="vantagem-icon">🛍️</div>
              <div className="vantagem-text-col">
                <span className="vantagem-titulo">Pedido Mínimo</span>
                <span className="vantagem-subtitulo">apenas 5 peças variadas</span>
              </div>
            </div>

            <div className="vantagem-item">
              <div className="vantagem-icon">💳</div>
              <div className="vantagem-text-col">
                <span className="vantagem-titulo">Pagamento Facilitado</span>
                <span className="vantagem-subtitulo">Parcele em até 12x nos cartões</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type CentralDeLinksCardProps = {
  widget: typeof widgets[number];
  icon?: typeof widgets[number]['icon'];
  onAdd: () => void;
};

function CentralDeLinksCard({ widget, icon: IconComponent, onAdd }: CentralDeLinksCardProps) {
  return (
    <div className="card-widget bg-foreground/10 border-primary/20 hover:border-primary transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{widget.name}</h3>
          <p className="text-white/60 text-sm">{widget.description}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/5 bg-transparent">
        <CentralDeLinksPreview />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white/50 text-xs">Avulso</p>
          <p className="text-white font-bold text-xl">R$ {widget.price}</p>
        </div>
        <button
          onClick={onAdd}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm w-full sm:w-auto text-center"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function CentralDeLinksPreview() {
  const centralLinksStyles = `
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

    #menu-container,
    #menu-container * {
        box-sizing: border-box;
    }

    #menu-container {
        width: 100%;
        background: transparent;
        position: relative;
        z-index: 990;
        font-family: 'Poppins', sans-serif !important;
        display: block;
    }

    /* --- MENU RÁPIDO --- */
    #menu-acesso-rapido {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background: #fff;
        border-bottom: 1px solid #ddd;
        width: 100%;
        padding: 30px 20px;
        margin: 0;
        gap: 60px;
    }

    .item-acesso {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none !important;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 0;
    }

    .item-acesso:hover {
        transform: translateY(-5px);
    }

    .item-acesso:hover .circulo-icone {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .circulo-icone {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background: linear-gradient(135deg, #000 0%, #333 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 40px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }

    .texto-acesso {
        color: #000;
        font-weight: 700;
        line-height: 1.2;
        margin-top: 12px;
        display: block;
        letter-spacing: 0.3px;
        font-size: 16px;
    }

    /* --- MOBILE --- */
    @media (max-width: 768px) {
        #menu-acesso-rapido {
            flex-direction: row !important; /* Força lado a lado */
            padding: 20px 10px;
            gap: 15px;
            align-items: flex-start !important;
            justify-content: center !important;
            flex-wrap: nowrap;
        }

        .item-acesso {
            width: auto;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center !important;
            justify-content: flex-start !important;
        }

        .circulo-icone {
            width: 60px;
            height: 60px;
            font-size: 28px;
            margin-bottom: 8px;
        }

        .texto-acesso {
            font-size: 11px;
            line-height: 1.2;
            margin-top: 5px;
            max-width: 90px;
        }
    }

    @media (min-width: 769px) {
        #menu-acesso-rapido {
            padding: 40px 20px;
            gap: 80px;
        }

        .circulo-icone {
            width: 110px;
            height: 110px;
            font-size: 48px;
        }
    }

    .fz-html-personalizado {
        margin: 0 !important;
        padding: 0 !important;
    }
  `;

  return (
    <div id="html-links-widget">
      <style>{centralLinksStyles}</style>
      <div id="menu-container">
        <div id="menu-acesso-rapido">
          <a
            href="https://fz-turbinado.vercel.app/"
            className="item-acesso"
            target="_blank"
            rel="noreferrer"
          >
            <div className="circulo-icone">💬</div>
            <span className="texto-acesso">Fale Conosco</span>
          </a>

          <a href="https://fz-turbinado.vercel.app/" className="item-acesso" target="_blank" rel="noreferrer">
            <div className="circulo-icone">👑</div>
            <span className="texto-acesso">Grupo VIP</span>
          </a>

          <a
            href="https://fz-turbinado.vercel.app/"
            className="item-acesso"
            target="_blank"
            rel="noreferrer"
          >
            <div className="circulo-icone">📱</div>
            <span className="texto-acesso">Material de Divulgação</span>
          </a>
        </div>
      </div>
    </div>
  );
}

type BarraInformativaCardProps = {
  widget: typeof widgets[number];
  icon?: typeof widgets[number]['icon'];
  onAdd: () => void;
};

function BarraInformativaCard({ widget, icon: IconComponent, onAdd }: BarraInformativaCardProps) {
  return (
    <div className="card-widget bg-foreground/10 border-primary/20 hover:border-primary transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{widget.name}</h3>
          <p className="text-white/60 text-sm">{widget.description}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/5 bg-transparent">
        <BarraInformativaPreview />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white/50 text-xs">Avulso</p>
          <p className="text-white font-bold text-xl">R$ {widget.price}</p>
        </div>
        <button
          onClick={onAdd}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm w-full sm:w-auto text-center"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function BarraInformativaPreview() {
  const barraInformativaStyles = `
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

    #barra-informativa-container,
    #barra-informativa-container * {
        box-sizing: border-box;
    }

    #barra-informativa-container {
        width: 100%;
        background: transparent;
        position: relative;
        z-index: 990;
        font-family: 'Poppins', sans-serif !important;
        display: block;
        margin: 0 !important;
        padding: 0 !important;
    }

    /* --- BARRA INFORMATIVA --- */
    #barra-informativa-scroll {
        width: 100%;
        background: linear-gradient(90deg, #111 0%, #444 100%);
        padding: 15px 0;
        margin: 0 !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        align-items: center;
        line-height: 1;
    }

    .informativa-track {
        display: flex;
        width: max-content;
        animation: scroll-infinite-info 35s linear infinite;
        margin: 0 !important;
        padding: 0 !important;
    }

    /* PAUSE ON HOVER */
    .informativa-track:hover {
        animation-play-state: paused;
    }

    @keyframes scroll-infinite-info {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-50%);
        }
    }

    .info-item {
        display: flex;
        align-items: center;
        text-align: left;
        color: white !important;
        padding: 0 60px;
        flex-shrink: 0;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        margin: 0 !important;
        line-height: 1;
    }

    .info-text-col {
        display: flex;
        flex-direction: column;
        gap: 3px;
        margin: 0 !important;
        padding: 0 !important;
    }

    .info-icon {
        font-size: 26px;
        margin-right: 15px;
        color: #4ade80 !important; /* Cor de destaque diferente */
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
    }

    .info-titulo {
        font-weight: 800;
        text-transform: uppercase;
        font-size: 14px;
        margin: 0;
        color: white;
        letter-spacing: 0.5px;
        line-height: 1.2;
        display: block;
    }

    .info-subtitulo {
        font-weight: 400;
        font-size: 12px;
        font-style: italic;
        opacity: 0.90;
        white-space: nowrap;
        color: white;
        margin: 0;
        line-height: 1.2;
        display: block;
    }

    /* --- MOBILE --- */
    @media (max-width: 768px) {
        #barra-informativa-scroll {
            padding: 12px 0;
        }

        .informativa-track {
            gap: 15px;
        }

        .info-item {
            padding: 0 30px;
        }

        .info-icon {
            font-size: 22px;
            margin-right: 12px;
        }

        .info-titulo {
            font-size: 13px;
        }

        .info-subtitulo {
            font-size: 11px;
        }
    }
  `;

  return (
    <div id="html-informativa-widget">
      <style>{barraInformativaStyles}</style>
      <div id="barra-informativa-container">
        <div id="barra-informativa-scroll">
          <div className="informativa-track">
            {/* Bloco 1 */}
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-text-col">
                <span className="info-titulo">Horários</span>
                <span className="info-subtitulo">Seg. a Sex: 08:00 às 18:00 | Sáb: 08:00 às 12:00</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text-col">
                <span className="info-titulo">Nossa Loja</span>
                <span className="info-subtitulo">Shopping Galo, Loja 1000, Goiânia - GO</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text-col">
                <span className="info-titulo">Fale Conosco</span>
                <span className="info-subtitulo">(64) 99999-9999 - Atendimento Personalizado</span>
              </div>
            </div>

            {/* DUPLICA PARA LOOP */}
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-text-col">
                <span className="info-titulo">Horários</span>
                <span className="info-subtitulo">Seg. a Sex: 08:00 às 18:00 | Sáb: 08:00 às 12:00</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text-col">
                <span className="info-titulo">Nossa Loja</span>
                <span className="info-subtitulo">Shopping Galo, Loja 1000, Goiânia - GO</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text-col">
                <span className="info-titulo">Fale Conosco</span>
                <span className="info-subtitulo">(64) 99999-9999 - Atendimento Personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type RedesignVisualCardProps = {
  widget: typeof widgets[number];
  icon?: typeof widgets[number]['icon'];
  onAdd: () => void;
};

function RedesignVisualCard({ widget, icon: IconComponent, onAdd }: RedesignVisualCardProps) {
  return (
    <div className="card-widget bg-foreground/10 border-primary/20 hover:border-primary transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{widget.name}</h3>
          <p className="text-white/60 text-sm">{widget.description}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/5 bg-transparent p-4 sm:p-6 lg:p-8">
        <RedesignVisualPreview />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white/50 text-xs">Avulso</p>
          <p className="text-white font-bold text-xl">R$ {widget.price}</p>
        </div>
        <button
          onClick={onAdd}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm w-full sm:w-auto text-center"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function RedesignVisualPreview() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderPercent, setSliderPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const isTouchDrag = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const rect = slider.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const percent = (x / rect.width) * 100;
    setSliderPercent(Number(percent.toFixed(2)));
  }, []);

  useEffect(() => {
    const stopDragging = () => {
      setIsDragging(false);
      isTouchDrag.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging || isTouchDrag.current) return;
      updateSlider(event.clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging) return;
      // Prevent scrolling while dragging the slider
      if (event.cancelable) event.preventDefault();
      const touch = event.touches[0];
      if (touch) {
        updateSlider(touch.clientX);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mouseleave', stopDragging);
    window.addEventListener('touchend', stopDragging);
    window.addEventListener('touchcancel', stopDragging);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('mouseleave', stopDragging);
      window.removeEventListener('touchend', stopDragging);
      window.removeEventListener('touchcancel', stopDragging);
    };
  }, [isDragging, updateSlider]);

  const togglePosition = () => {
    setSliderPercent(prev => (prev <= 50 ? 100 : 0));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 text-center sm:text-left">
        <span className="text-xs sm:text-sm text-foreground/70 font-semibold">ANTES</span>
        <button
          className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold hover:shadow-lg transition-shadow"
          onClick={togglePosition}
        >
          <ChevronLeft size={16} className="hidden sm:block" />
          <ChevronLeft size={12} className="sm:hidden" />
          <span className="hidden sm:inline">Deslizar</span>
          <span className="sm:hidden">Arrastar</span>
          <ChevronRight size={16} className="hidden sm:block" />
          <ChevronRight size={12} className="sm:hidden" />
        </button>
        <span className="text-xs sm:text-sm text-foreground/70 font-semibold">DEPOIS</span>
      </div>

      <div
        ref={sliderRef}
        className="relative mx-auto w-full max-w-[500px] aspect-[9/16] sm:aspect-[4/5] max-h-[600px] rounded-2xl border border-border bg-black overflow-hidden cursor-col-resize shadow-xl select-none touch-none"
        onMouseDown={(event) => {
          event.preventDefault();
          isTouchDrag.current = false;
          setIsDragging(true);
          updateSlider(event.clientX);
        }}
        onTouchStart={(event) => {
          isTouchDrag.current = true;
          setIsDragging(true);
          const touch = event.touches[0];
          if (touch) {
            updateSlider(touch.clientX);
          }
        }}
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onClick={(event) => updateSlider(event.clientX)}
      >
        {/* Antes - fundo completo */}
        <img
          src="/images/antes_fz_turbinado.png"
          alt="Antes"
          className="absolute inset-0 w-full h-full object-contain px-6 py-4"
        />

        {/* Depois - clipe pela largura */}
        <div
          className="absolute inset-0 bg-black"
          style={{ clipPath: `inset(0 ${Math.max(0, 100 - sliderPercent)}% 0 0)` }}
        >
          <img
            src="/images/depois_fz_turbinado.png"
            alt="Depois"
            className="absolute inset-0 w-full h-full object-contain px-6 py-4"
          />
        </div>

        {/* Slider handle */}
        <div
          className="comp-slider absolute top-0 bottom-0 w-1 bg-primary pointer-events-none z-20"
          style={{ left: `${sliderPercent}%` }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full px-2 sm:px-3 py-1 text-xs font-bold flex items-center gap-1 shadow-lg whitespace-nowrap">
            <ChevronLeft size={14} />
            <span className="hidden sm:inline">Deslize</span>
            <ChevronRight size={14} />
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm font-bold bg-black/60 text-white px-2 sm:px-3 py-1 rounded z-10">ANTES</span>
        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xs sm:text-sm font-bold bg-black/60 text-white px-2 sm:px-3 py-1 rounded z-10">DEPOIS</span>
      </div>
      <p className="text-center text-foreground/60 text-xs sm:text-sm mt-4 sm:mt-3 max-w-md mx-auto sm:max-w-none">
        👈 Arraste ou use o botão para comparar os resultados
      </p>
    </div>
  );
}

type ProdutoMaisVendidoCardProps = {
  widget: typeof widgets[number];
  icon?: typeof widgets[number]['icon'];
  onAdd: () => void;
};

function ProdutoMaisVendidoCard({ widget, icon: IconComponent, onAdd }: ProdutoMaisVendidoCardProps) {
  return (
    <div className="card-widget bg-foreground/10 border-primary/20 hover:border-primary transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{widget.name}</h3>
          <p className="text-white/60 text-sm">{widget.description}</p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/5">
        <ProdutoMaisVendidoPreview />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white/50 text-xs">Avulso</p>
          <p className="text-white font-bold text-xl">R$ {widget.price}</p>
        </div>
        <button
          onClick={onAdd}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm w-full sm:w-auto text-center"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

function ProdutoMaisVendidoPreview() {
  const produtoDestaqueStyles = `
    /*=================================================================*/
    /* BRANDING FZ_V1 - SEÇÃO DE VÍDEO DESTAQUE                       */
    /* Tipografia, animações e estilos conforme CSS_FZ_V1             */
    /*=================================================================*/

    /* VARIÁVEIS DE BRANDING */
    #produto-destaque-widget {
      --fz-font-body: 16px;
      --fz-font-heading-lg: 3rem;
      --fz-font-heading-md: 2rem;
      --fz-font-heading-sm: 1.5rem;
      --cor-detalhes-gerais: #1a1a1a;
      font-family: 'Poppins', sans-serif;
    }

    #produto-destaque-widget * {
      box-sizing: border-box;
    }

    /*========== ANIMAÇÕES DO BRANDING ==========*/
    @keyframes fz-pulse-animation {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(26, 26, 26, 0.7);
      }
      70% {
        transform: scale(1.02);
        box-shadow: 0 0 0 10px rgba(26, 26, 26, 0);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(26, 26, 26, 0);
      }
    }

    /*================= SEÇÃO DE VÍDEO DESTAQUE =================*/
    .secao-video-destaque {
      position: relative;
      padding: 0 20px;
      overflow: visible;
      border-radius: 16px !important;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      max-width: 800px;
      margin: 40px auto;
      background: #f5f5f5;
    }

    .container-video {
      position: relative;
      border-radius: 16px;
      overflow: visible;
      display: block;
      padding: 20px 0;
    }

    .video-wrapper {
      position: relative;
      border-radius: 16px;
      overflow: hidden;
      max-height: 600px; /* desktop: maior */
    }

    .video-produto {
      width: 100%;
      height: auto;
      max-height: 600px; /* desktop */
      display: block;
      border-radius: 16px;
      object-fit: cover;
      background: #000;
    }

    /*========== BADGES FIXAS SOBRE O VÍDEO ==========*/
    .badge-destaque {
      position: absolute;
      padding: 10px 18px !important;
      background-color: var(--cor-detalhes-gerais) !important;
      color: #fff !important;
      font-weight: 800 !important;
      font-size: 0.8rem !important;
      border-radius: 50px !important;
      z-index: 5;
      animation: fz-pulse-animation 2.5s infinite !important;
      box-shadow: 0 4px 12px rgba(26, 26, 26, 0.3);
      text-transform: uppercase;
      letter-spacing: 1px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      line-height: 1;
    }

    .badge-top-left {
      top: 20px;
      left: 20px;
    }

    .badge-top-right {
      top: 20px;
      right: 20px;
      background-color: #fff !important;
      color: #1a1a1a !important;
    }

    /*========== CARD CENTRAL COM BRANDING ==========*/
    .card-video-destaque {
      /* Tornar o card independente para layout lado a lado no desktop */
      position: relative;
      background: rgba(255, 255, 255, 0.98);
      color: #1a1a1a;
      padding: 28px 32px;
      border-radius: 14px;
      text-align: left;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
      backdrop-filter: blur(6px);
      max-width: 360px;
      align-self: center;
    }

    .card-video-destaque h2 {
      font-size: 1.25rem !important;
      font-weight: 900 !important;
      margin-bottom: 8px;
      letter-spacing: 0.6px;
      color: #1a1a1a !important;
      line-height: 1.15;
    }

    .card-video-destaque .card-lead {
      font-size: 0.98rem;
      color: #444;
      margin-bottom: 12px;
    }

    .card-features {
      list-style: none;
      padding: 0;
      margin: 0 0 18px 0;
      color: #555;
    }

    .card-features li {
      margin-bottom: 6px;
      font-size: 0.95rem;
    }

    /*========== BOTÃO PRINCIPAL COM BRANDING FZ_V1 ==========*/
    .btn-produto-destaque {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      background-color: var(--cor-detalhes-gerais) !important;
      color: #fff !important;
      font-weight: 800 !important;
      letter-spacing: 1px;
      text-transform: uppercase;
      border-radius: 50px !important;
      padding: 12px 34px !important;
      text-decoration: none;
      font-size: 0.95rem !important;
      transition: all 0.3s ease !important;
      animation: fz-pulse-animation 2s infinite !important;
      border: none;
      cursor: pointer;
      gap: 8px;
      line-height: 1.2;
      box-shadow: 0 4px 15px rgba(26, 26, 26, 0.2);
    }

    .btn-produto-destaque:hover {
      animation: none !important;
      transform: scale(1.05) !important;
      box-shadow: 0 8px 25px rgba(26, 26, 26, 0.4) !important;
      background-color: var(--cor-detalhes-gerais) !important;
    }

    .btn-produto-destaque:focus {
      outline: 2px solid rgba(26, 26, 26, 0.4) !important;
      outline-offset: 2px !important;
      box-shadow: 0 0 0 4px rgba(26, 26, 26, 0.2) !important;
    }

    /*========== RESPONSIVIDADE ==========*/
    @media (min-width: 769px) {
      /* Desktop / tablet large: layout lado a lado */
      .secao-video-destaque {
        margin: 30px auto;
        padding: 0 15px;
        max-width: 1100px;
      }

      .container-video {
        display: grid;
        grid-template-columns: 1fr 360px;
        gap: 26px;
        align-items: center;
      }

      .video-wrapper { max-height: 600px; }
      .video-produto { max-height: 600px; }

      .card-video-destaque { text-align: left; }
    }

    @media (max-width: 768px) {
      /* Tablet / mobile: empilha, vídeo maior que antes */
      .secao-video-destaque {
        margin: 20px auto;
        padding: 0 12px;
        border-radius: 12px !important;
        max-width: 100%;
      }

      .container-video {
        display: block;
      }

      .video-wrapper {
        max-height: 450px;
      }

      .video-produto {
        max-height: 450px;
      }

      /* Fixed Overlap: Stack badges vertically on top-left */
      .badge-destaque { padding: 8px 14px !important; font-size: 0.7rem !important; }
      
      .badge-top-left { 
        top: 12px !important; 
        left: 12px !important; 
      }
      
      .badge-top-right {
        top: 50px !important;    /* Position below the first badge */
        left: 12px !important;   /* Align to the left side */
        right: auto !important;  /* Reset right positioning */
        background-color: #fff !important;
        color: #1a1a1a !important;
      }

      .card-video-destaque {
        margin-top: 18px;
        padding: 20px 20px;
        max-width: 100%;
        text-align: center;
      }

      .card-video-destaque h2 { font-size: 1.2rem !important; }
      .card-video-destaque .card-lead { font-size: 0.95rem; }
      .btn-produto-destaque { padding: 10px 26px !important; }
    }

    @media (max-width: 480px) {
      .secao-video-destaque { margin: 15px auto; padding: 0 10px; }

      .video-wrapper { max-height: 420px; }
      .video-produto { max-height: 420px; }

      .badge-destaque { padding: 6px 12px !important; font-size: 0.65rem !important; }
      
      .badge-top-left { 
        top: 10px !important; 
        left: 10px !important; 
      }
      
      .badge-top-right { 
        top: 45px !important;    /* Position below the first badge with adjusted spacing */
        left: 10px !important; 
        right: auto !important;
      }

      .card-video-destaque { padding: 16px 16px; margin-top: 14px; text-align: center; }
      .card-video-destaque h2 { font-size: 1.05rem !important; }
      .card-video-destaque .card-lead { font-size: 0.95rem; }
      .btn-produto-destaque { padding: 9px 20px !important; font-size: 0.8rem !important; }
    }
  `;

  return (
    <div id="produto-destaque-widget">
      <style>{produtoDestaqueStyles}</style>
      <section className="secao-video-destaque">
        <div className="container-video">
          {/* Layout: dentro teremos .video-wrapper (com badges + video) e .card-video-destaque (info) */}
          <div className="video-wrapper">
            {/* BADGES SOBRE O VÍDEO */}
            <div className="badge-destaque badge-top-left">🔥 O MAIS VENDIDO</div>
            <div className="badge-destaque badge-top-right">✅ Qualidade Premium</div>

            {/* VÍDEO */}
            <video className="video-produto" autoPlay muted loop playsInline>
              <source
                src="https://arquivos.facilzap.app.br/videos_produtos/1763430938_c66a1cf43074d0d4ab98.mp4"
                type="video/mp4"
              />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>

          {/* CARD DE INFORMAÇÃO (separado, para posicionamento responsivo) */}
          <div className="card-video-destaque">
            <h2>Produto Nº1 — Alta Rotatividade</h2>
            <p className="card-lead">Favorito do atacado: qualidade superior, giro rápido e excelente margem.</p>
            <ul className="card-features">
              <li>Entrega rápida</li>
              <li>Alta aceitação no ponto de venda</li>
              <li>Margens acima da média</li>
            </ul>
            <a href="https://metodofz.com.br/c/atacado/produto/3381511/62992960658" className="btn-produto-destaque" target="_blank" rel="noreferrer">
              Comprar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
