import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 left-6 md:bottom-8 md:left-8 bg-primary text-primary-foreground w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-50"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  );
}
