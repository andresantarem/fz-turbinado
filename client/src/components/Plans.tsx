import { Check, Crown } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const plans = [
  {
    name: 'Iniciante',
    price: 797,
    popular: false,
    description: 'Perfeito para começar',
    features: [
      'Redesign Visual',
      'Filtro Inteligente',
      'Barra Vantagens',
      'Cupom One-Click',
    ],
    cta: 'Escolher Plano',
  },
  {
    name: 'Elite Total',
    price: 1661,
    popular: true,
    description: 'Otimização Completa + Design de Alta Conversão',
    savings: 860,
    installments: '12x no cartão',
    features: [
      '2 Carrosséis (12 Vídeos)',
      '10 Widgets Completos',
      'Entrega em 7 Dias (Agendada)',
      'Suporte VIP Prioritário',
      'Análise de Mercado',
      'Otimização Contínua',
    ],
    cta: 'Escolher Elite',
    badge: '👑 92% Escolhem Este',
  },
  {
    name: 'Personalizado',
    price: 2999,
    popular: false,
    description: 'Projeto sob medida para seu negócio',
    features: [
      'Projeto Sob Medida',
      'Pesquisa de Mercado Profunda',
      'Suporte Ilimitado',
      'Consultoria Estratégica',
      'Integração Customizada',
    ],
    cta: 'Consultar',
  },
];

export default function Plans() {
  const { addItem, openCart, canAddPlan } = useCart();
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const handleAddPlan = (plan: typeof plans[0]) => {
    if (!canAddPlan()) {
      showToast('❌ Você já tem itens no carrinho. Limpe para adicionar um plano.');
      return;
    }
    addItem({ id: plan.name, name: plan.name, price: plan.price, type: 'plan' });
    showToast(`✅ Plano ${plan.name} adicionado!`);
  };
  return (
    <section id="planos" className="section-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-background border border-border rounded-lg px-6 py-3 shadow-lg animate-in slide-in-down">
          {toast}
        </div>
      )}

      <div className="container relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-lg mb-4 text-foreground">Investimento Inteligente</h2>
          <p className="text-foreground/80 text-lg">
            Escolha o plano ideal para o seu momento
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl transition-all duration-300 fade-in-up ${
                plan.popular
                  ? 'md:scale-105 bg-card text-foreground shadow-2xl hover-lift border-2 border-primary'
                  : 'bg-card text-foreground border-2 border-border hover:border-primary hover-lift'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              {plan.popular && (
                <div className="absolute -top-4 right-6 bg-primary text-primary-foreground p-2 rounded-full">
                  <Crown size={24} />
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <h3 className="text-2xl font-bold mb-2 text-foreground text-center md:text-left">
                  {plan.name}
                </h3>
                <p className="text-sm mb-6 text-foreground/80 text-center md:text-left">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center md:items-baseline justify-center md:justify-start gap-2 mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      R$ {plan.price.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  {plan.installments && (
                    <p className="text-sm text-foreground/80">
                      ou {plan.installments}
                    </p>
                  )}
                  {plan.savings && (
                    <p className="text-primary font-semibold text-sm mt-2">
                      💰 Você economiza R$ {plan.savings.toLocaleString('pt-BR')}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleAddPlan(plan)}
                  className={`w-full py-3 rounded-lg font-bold mb-8 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:shadow-lg hover:scale-105'
                      : 'bg-primary text-primary-foreground hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-card rounded-xl p-8 text-center relative z-10 fade-in-up border border-border">
          <h3 className="text-lg font-bold text-foreground mb-2">
            Já tem uma loja e precisa de manutenção?
          </h3>
          <p className="text-foreground/80 mb-4">
            Oferecemos planos de gestão e suporte contínuo para lojas já otimizadas.
          </p>
          <button className="btn-secondary hover:shadow-lg transition-all duration-300">
            Ver Planos de Gestão & Suporte 🔄
          </button>
        </div>
      </div>
    </section>
  );
}
