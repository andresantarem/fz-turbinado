import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'O que é FácilZap Turbinado?',
    answer: 'FácilZap Turbinado é um serviço da Bravatus que adiciona 10 widgets profissionais à sua loja FácilZap padrão, transformando-a em uma máquina de vendas com design moderno e funcionalidades avançadas de conversão.',
  },
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'Sua loja fica pronta em 7 dias úteis. Temos vagas semanais limitadas para garantir qualidade no atendimento e suporte especializado durante todo o processo.',
  },
  {
    question: 'Quais são os 10 widgets?',
    answer: 'Os widgets incluem: Redesign Visual, Carrossel Vitrine, Carrossel Institucional, Calculadora Lucro B2B, Oferta Scarcity, Cupom One-Click, Filtro Inteligente, Central de Links, Barra de Vantagens e Barra Informativa.',
  },
  {
    question: 'Posso escolher apenas alguns widgets?',
    answer: 'Sim! Oferecemos 3 planos: Iniciante (4 widgets por R$ 797), Elite Total (10 widgets por R$ 1.661) e Personalizado (sob medida). Você também pode comprar widgets avulsos.',
  },
  {
    question: 'Há garantia de aumento de conversão?',
    answer: 'Nossas estratégias são baseadas em cases reais. O case CJ Rasteirinhas alcançou +237% de aumento em conversão. Resultados variam conforme seu nicho, mas oferecemos suporte VIP para otimização contínua.',
  },
  {
    question: 'Qual é o suporte oferecido?',
    answer: 'Oferecemos suporte VIP prioritário 24/7, análise de mercado, otimização contínua, treinamento e consultoria estratégica. Você não fica sozinho nessa jornada.',
  },
  {
    question: 'Posso fazer alterações depois de pronto?',
    answer: 'Sim! Oferecemos planos de gestão e suporte contínuo para lojas já otimizadas. Você pode fazer ajustes, adicionar novos widgets ou refazer campanhas conforme necessário.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Aceitamos PIX à vista (com desconto), cartão de crédito (até 12x) e boleto. Você escolhe a forma que melhor se adequa ao seu fluxo de caixa.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-dark">
      <div className="container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-lg mb-4 text-foreground">Perguntas Frequentes</h2>
          <p className="text-foreground/80 text-lg">
            Tudo que você precisa saber sobre FácilZap Turbinado
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full bg-card border-2 border-border hover:border-primary rounded-lg p-6 text-left transition-all duration-300 hover:shadow-lg hover-lift group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-transform duration-300 flex-shrink-0 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {/* Answer */}
                {openIndex === idx && (
                  <div className="mt-4 pt-4 border-t border-border text-foreground/80 leading-relaxed animate-in slide-in-down">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center fade-in-up">
          <p className="text-foreground/80 mb-6">Ainda tem dúvidas?</p>
          <button className="btn-primary">
            Fale com Nosso Especialista 🚀
          </button>
        </div>
      </div>
    </section>
  );
}
