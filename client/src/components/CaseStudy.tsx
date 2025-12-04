import { TrendingUp, Users, Star, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const beforeRef = useRef<HTMLDivElement | null>(null);
  const handleMove = (clientX: number) => {
    const slider = sliderRef.current;
    const before = beforeRef.current;
    if (!slider || !before) return;
    const rect = slider.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const percent = (x / rect.width) * 100;
    before.style.width = `${percent}%`;
    (slider.querySelector('.comp-slider') as HTMLElement)?.style.setProperty('left', `${percent}%`);
  };
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

        {/* Before/After Comparison Slider */}
        <div className="mb-16 fade-in-up">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
            <span className="text-xs sm:text-sm text-foreground/70 font-semibold">ANTES</span>
            <button
              className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold hover:shadow-lg transition-shadow"
              onClick={() => setPosition(position === 'before' ? 'after' : 'before')}
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

          {/* Comparison Container */}
          <div
            ref={sliderRef}
            className="relative mx-auto w-full max-w-4xl aspect-video rounded-xl border border-border bg-background overflow-hidden cursor-ew-resize shadow-lg"
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => {
              const touch = e.touches?.[0];
              if (touch) handleMove(touch.clientX);
            }}
          >
            {/* Depois - fundo completo */}
            <img
              src="/images/depois_fz_turbinado.png"
              alt="Depois"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Antes - clipe pela largura */}
            <div
              ref={beforeRef}
              className="absolute inset-0 overflow-hidden"
              style={{ width: '50%' }}
            >
              <img
                src="/images/antes_fz_turbinado.png"
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Slider handle */}
            <div className="comp-slider absolute top-0 bottom-0 w-1 bg-primary pointer-events-none" style={{ left: '50%' }}>
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full px-2 sm:px-3 py-1 text-xs font-bold flex items-center gap-1 shadow-lg whitespace-nowrap">
                <ChevronLeft size={14} />
                <span className="hidden sm:inline">Deslize</span>
                <ChevronRight size={14} />
              </div>
            </div>
            {/* Labels */}
            <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs sm:text-sm font-bold bg-black/60 text-white px-2 sm:px-3 py-1 rounded">ANTES</span>
            <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-xs sm:text-sm font-bold bg-black/60 text-white px-2 sm:px-3 py-1 rounded">DEPOIS</span>
          </div>
          <p className="text-center text-foreground/60 text-xs sm:text-sm mt-3">👈 Arraste ou use o botão para comparar os resultados</p>
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
