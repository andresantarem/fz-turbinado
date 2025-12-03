import { TrendingUp, Users, Star, Target } from 'lucide-react';

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

        {/* Before/After Comparison */}
        <div className="mb-16 fade-in-up">
          <div className="rounded-2xl overflow-hidden hover-lift">
            <img
              src="/images/success-case.png"
              alt="Comparação antes e depois da transformação"
              className="w-full h-auto"
            />
          </div>
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
