import { ArrowRight, Star, Zap } from 'lucide-react';
import TurboIcon from './TurboIcon';
import { useState } from 'react';

function MobileMockSlider() {
  const [position, setPosition] = useState<'before'|'after'>('before');
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-3">
        <span className="text-foreground/70 text-sm">Antes</span>
        <button
          className="btn-secondary text-xs px-3 py-1"
          onClick={() => setPosition(position === 'before' ? 'after' : 'before')}
        >
          Deslizar
        </button>
        <span className="text-foreground/70 text-sm">Depois</span>
      </div>

      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] sm:w-[320px] h-[560px] rounded-[36px] border-2 border-border bg-background shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-xl border-x border-b border-border" />

        {/* Before (left) */}
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${position === 'before' ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="p-4 space-y-4">
            <div className="rounded-xl bg-card border border-border p-4">
              <p className="text-sm font-bold">Carrossel de Produtos</p>
              <p className="text-xs text-foreground/60">Layout padrão</p>
            </div>
            <div className="rounded-xl bg-card border border-border p-4">
              <p className="text-sm font-bold">Barra Informativa</p>
              <p className="text-xs text-foreground/60">Texto simples</p>
            </div>
            <div className="rounded-xl bg-card border border-border p-4">
              <p className="text-sm font-bold">Assinatura por Email</p>
              <p className="text-xs text-foreground/60">Formulário básico</p>
            </div>
          </div>
        </div>

        {/* After (right) */}
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${position === 'after' ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-4 space-y-4">
            <div className="rounded-xl bg-card border-2 border-primary p-4">
              <p className="text-sm font-bold">Carrossel Turbinado</p>
              <p className="text-xs text-foreground/60">Destaques com CTA</p>
            </div>
            <div className="rounded-xl bg-card border-2 border-primary p-4">
              <p className="text-sm font-bold">Barra de Vantagens</p>
              <p className="text-xs text-foreground/60">Ícones + métricas</p>
            </div>
            <div className="rounded-xl bg-card border-2 border-primary p-4">
              <p className="text-sm font-bold">Signup Otimizado</p>
              <p className="text-xs text-foreground/60">Conversão +40%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Helper text */}
      <p className="text-center text-foreground/60 text-xs mt-3">Deslize para comparar antes e depois</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* (removed animated rockets) */}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full border border-primary/20">
                <Zap size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">Novo: FácilZap Turbinado</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 fade-in-up stagger-2">
              <h1 className="heading-xl text-foreground leading-tight">
                Sua Loja FácilZap
                <br />
                <span className="gradient-text">Turbinada ao Máximo</span>
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Widgets profissionais que transformam visitantes em clientes. Aumente conversão em até <span className="font-bold text-primary">+237%</span> em 7 dias.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 fade-in-up stagger-3">
              {[
                { num: '50+', label: 'Lojas Ativas' },
                { num: '+237%', label: 'Conversão' },
                { num: '4.9/5', label: 'Avaliação' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-all duration-300 hover-lift">
                  <div className="font-bold text-lg text-primary">{stat.num}</div>
                  <div className="text-xs text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-4 pt-4">
              <button className="btn-primary flex items-center justify-center gap-2 group text-lg py-4">
                <TurboIcon className="w-5 h-5" />
                Turbinar Agora
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2 text-lg py-4">
                Ver Demo Grátis
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4 fade-in-up stagger-5">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Entrega em 7 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Suporte VIP 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Garantia de Resultado</span>
              </div>
            </div>
          </div>

          {/* Right Section: FácilZap vs FácilZap Turbinado + Mockup Mobile Slider */}
          <div className="relative fade-in-up stagger-1 space-y-6">
            {/* Branding header */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-4 text-center">
                <p className="text-sm text-foreground/70">FácilZap</p>
              </div>
              <div className="rounded-xl border border-primary bg-primary/10 p-4 text-center">
                <p className="text-sm font-bold text-primary">FácilZap Turbinado 🚀</p>
              </div>
            </div>

            {/* Mobile Before/After Slider (no images, mock UI) */}
            <MobileMockSlider />
          </div>
        </div>

        {/* How It Works - Quick Preview */}
        <div className="mt-24 pt-20 border-t border-border fade-in-up stagger-5">
          <h2 className="heading-md text-center mb-12">Como Funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Envie sua URL', desc: 'Compartilhe o link da sua loja FácilZap' },
              { num: '2', title: 'Escolha o Turbo', desc: 'Selecione os widgets que você precisa' },
              { num: '3', title: 'Loja Turbinada!', desc: 'Ativa em 7 dias com suporte total' },
            ].map((step, idx) => (
              <div
                key={idx}
                className="text-center zoom-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-lg">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-foreground/60">{step.desc}</p>
                {idx < 2 && (
                  <div className="hidden md:flex justify-center mt-4">
                    <ArrowRight size={24} className="text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
