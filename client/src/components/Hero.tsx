import { ArrowRight, Star, Zap } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* Left Content */}
          <div className="space-y-8 flex flex-col items-center lg:items-start">
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
              <div className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-4">
                <p>
                  Sua loja na FácilZap ganha velocidade, fluidez e um visual que carrega instantaneamente, como as grandes marcas fazem. A experiência fica mais leve, mais intuitiva e naturalmente mais conversões.
                </p>
                <p>
                  E com widgets exclusivos e personalização sob medida, sua loja deixa de ser comum e passa a operar como um e-commerce realmente profissional.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 fade-in-up stagger-3 text-center">
                {[
                { num: '10+', label: 'Lojas Ativas' },
                  { num: ['Aumento'], label: ['da Conversão'] },
                    { num: '4.9/5', label: 'Avaliação' },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-all duration-300 hover-lift flex flex-col items-center justify-center">
                        {Array.isArray(stat.num) ? (
                          stat.num.map((line, index) => (
                            <div key={index} className={`font-bold text-lg ${index === 0 ? 'text-primary' : 'text-foreground'}`}>
                              {line}
                            </div>
                          ))
                        ) : (
                          <div className="font-bold text-lg text-primary">{stat.num}</div>
                        )}
                        {Array.isArray(stat.label) ? (
                          <div className="text-xs text-foreground/70 leading-tight">
                            {stat.label.map((line, index) => (
                              <span key={index} className="block">
                                {line}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <div className="text-xs text-foreground/70 leading-tight">{stat.label}</div>
                        )}
                    </div>
                  ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-4 pt-4 items-center sm:items-stretch sm:justify-start">
                  <a
                    href="https://wa.me/5562992960658?text=Tenho%20interesse%20nos%20widgets%20da%20Bravatus.%20Por%20favor%20entre%20em%20contato."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 group text-lg py-4 w-full sm:w-auto"
                  >
                    Turbinar Agora
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://metodofz.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center gap-2 text-lg py-4 w-full sm:w-auto"
                  >
                    Ver Demo Grátis
                  </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-4 fade-in-up stagger-5">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Entrega em 7 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Suporte VIP 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative fade-in-up stagger-1 space-y-6 flex flex-col items-center">
            {/* FacilZap Branding Element: logo + "Turbinado 🚀" */}
            <div className="flex items-center justify-center gap-4 p-6 rounded-xl bg-primary/10 border border-primary/30 hover:border-primary transition-all duration-300">
              <img 
                src="/images/logofacilzap.png" 
                alt="FácilZap Integration" 
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base text-foreground font-bold">Turbinado 🚀</span>
              </div>
            </div>

            {/* Animated frame */}
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 max-w-2xl mx-auto" />

              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl hover-lift w-full max-w-2xl aspect-video">
                <video
                  className="w-full h-full object-cover"
                  src="/videos/thiago.mov"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  poster="/images/hero-mockup.png"
                >
                  Seu navegador não suporta reprodução de vídeo.
                </video>
              </div>
            </div>
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
