import { TrendingUp, Users, Star, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const metrics = [
  {
    icon: TrendingUp,
    value: 'Aumento',
    label: 'Conversão',
  },
  {
    icon: Target,
    value: 'Aumento',
    label: 'Ticket Médio',
  },
  {
    icon: Users,
    value: '10+',
    label: 'Lojas Ativas Hoje',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Nota dos Clientes',
  },
];

export default function CaseStudy() {
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
      event.preventDefault();
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

          {/* Comparison Container */}
          <div
            ref={sliderRef}
            className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-lg aspect-[10/16] sm:aspect-[9/16] lg:aspect-[4/5] lg:max-h-[520px] rounded-2xl border border-border bg-black overflow-hidden cursor-col-resize shadow-xl select-none touch-none"
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
              className="absolute inset-0 w-full h-full object-contain px-6 lg:px-8"
            />

            {/* Depois - clipe pela largura */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${Math.max(0, 100 - sliderPercent)}% 0 0)` }}
            >
              <img
                src="/images/depois_fz_turbinado.png"
                alt="Depois"
                className="absolute inset-0 w-full h-full object-contain px-6 lg:px-8"
              />
            </div>

            {/* Slider handle */}
            <div
              className="comp-slider absolute top-0 bottom-0 w-1 bg-primary pointer-events-none"
              style={{ left: `${sliderPercent}%` }}
            >
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
          <p className="text-center text-foreground/60 text-xs sm:text-sm mt-4 sm:mt-3 max-w-md mx-auto sm:max-w-none">
            👈 Arraste ou use o botão para comparar os resultados
          </p>
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
          <a
            href="https://metodofz.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hover:shadow-lg transition-all duration-300"
          >
            Ver Loja ao Vivo →
          </a>
        </div>
      </div>
    </section>
  );
}
