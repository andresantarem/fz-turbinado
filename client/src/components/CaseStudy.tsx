import { TrendingUp, Users, Star, Target, ArrowsLeftRight } from 'lucide-react';
import { useState } from 'react';

const metrics = [
  {
    icon: TrendingUp,
    value: '+237%',
    label: 'Aumento na Conversão',
  },
  {
    icon: Target,
    value: '+52%',
    label: 'Ticket Médio',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Lojas Ativas Hoje',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Nota dos Clientes',
  },
];

export default function CaseStudy() {
  const [position, setPosition] = useState<'before'|'after'>('before');
  return (
    <section id="case" className="section-dark py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-lg text-white mb-4">Case de Sucesso</h2>
          <p className="text-white/70 text-lg">
            Loja padrão transformada em referência de mercado
          </p>
        </div>

        {/* Before/After Mobile Mockup Slider (sem imagens, pronto para inserção) */}
        <div className="mb-16 fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-sm text-foreground/70">ANTES</span>
            <button
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold"
              onClick={() => setPosition(position === 'before' ? 'after' : 'before')}
            >
              <ArrowsLeftRight size={14} />
              Deslizar
            </button>
            <span className="text-sm text-foreground/70">DEPOIS</span>
          </div>

          {/* Phone frame */}
          <div className="relative mx-auto w-[280px] sm:w-[320px] h-[560px] rounded-[36px] border-2 border-border bg-background shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-xl border-x border-b border-border" />

            {/* Antes */}
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${position === 'before' ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="p-4 space-y-4">
                <div className="rounded-xl bg-card border border-border p-4">
                  <p className="text-sm font-bold">Página Padrão</p>
                  <p className="text-xs text-foreground/60">Layout simples</p>
                </div>
                <div className="rounded-xl bg-card border border-border p-4">
                  <p className="text-sm font-bold">Cards</p>
                  <p className="text-xs text-foreground/60">Sem CTA forte</p>
                </div>
                <div className="rounded-xl bg-card border border-border p-4">
                  <p className="text-sm font-bold">Barra Informativa</p>
                  <p className="text-xs text-foreground/60">Texto básico</p>
                </div>
              </div>
            </div>

            {/* Depois */}
            <div className={`absolute inset-0 transition-transform duration-500 ease-in-out ${position === 'after' ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="p-4 space-y-4">
                <div className="rounded-xl bg-card border-2 border-primary p-4">
                  <p className="text-sm font-bold">Página Turbinada</p>
                  <p className="text-xs text-foreground/60">Hero otimizada + CTA</p>
                </div>
                <div className="rounded-xl bg-card border-2 border-primary p-4">
                  <p className="text-sm font-bold">Cards com Destaque</p>
                  <p className="text-xs text-foreground/60">Conversão melhorada</p>
                </div>
                <div className="rounded-xl bg-card border-2 border-primary p-4">
                  <p className="text-sm font-bold">Barra de Vantagens</p>
                  <p className="text-xs text-foreground/60">Ícones + métricas</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-foreground/60 text-xs mt-3">Deslize para comparar antes e depois (imagens serão inseridas posteriormente)</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 relative z-10">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-foreground/10 rounded-xl p-6 text-center border border-primary/20 hover:border-primary transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="counter-number mb-2">{metric.value}</div>
                <p className="text-white/70 text-sm">{metric.label}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up">
          <button className="btn-primary hover:shadow-lg transition-all duration-300">
            Ver Loja ao Vivo →
          </button>
        </div>
      </div>
    </section>
  );
}
