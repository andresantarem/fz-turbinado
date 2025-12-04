import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export default function Cart() {
  const { items, removeItem, clear, total } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Destination WhatsApp number (owner)
  const phoneRaw = '62 99296-0658';
  const digits = phoneRaw.replace(/\D/g, '');
  const waNumber = `55${digits}`; // Brazil country code prefix

  function buildMessage() {
    let msg = 'Olá, vou fazer um pedido/consulta com os seguintes dados:%0A%0A';
    msg += `Nome: ${name}%0A`;
    msg += `Telefone: ${phone}%0A`;
    msg += `Email: ${email}%0A%0A`;
    msg += 'Itens:%0A';
    items.forEach((it) => {
      msg += `- ${it.name} x${it.qty} — R$ ${it.price.toFixed(2)}%0A`;
    });
    msg += `%0ATotal: R$ ${total().toFixed(2)}%0A%0A`;
    msg += 'Por favor, entre em contato para confirmar detalhes. Obrigado!';
    return msg;
  }

  const canSend = name.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && items.length > 0;

  if (!items.length) return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="bg-foreground/6 border border-border rounded-xl p-3 shadow-lg text-sm text-foreground/80">
        Carrinho vazio
      </div>
    </div>
  );

  return (
    <div className="fixed right-6 bottom-6 z-50 w-80 md:w-96">
      <div className="bg-background/95 border border-border rounded-xl p-4 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <strong className="text-foreground">Seu Pedido</strong>
          <div className="text-sm text-foreground/70">{items.length} itens</div>
        </div>

        {/* Customer inputs */}
        <div className="space-y-2 mb-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="w-full bg-foreground/3 border border-border rounded-md px-3 py-2 text-sm text-foreground"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefone (com DDD)"
            className="w-full bg-foreground/3 border border-border rounded-md px-3 py-2 text-sm text-foreground"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="w-full bg-foreground/3 border border-border rounded-md px-3 py-2 text-sm text-foreground"
          />
        </div>

        <div className="space-y-2 max-h-28 overflow-auto mb-3">
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between">
              <div>
                <div className="text-foreground font-medium">{it.name}</div>
                <div className="text-foreground/70 text-sm">{it.qty} x {formatCurrency(it.price)}</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-foreground font-semibold">{formatCurrency(it.price * it.qty)}</div>
                <button className="text-xs text-primary mt-1" onClick={() => removeItem(it.id)}>Remover</button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-foreground/70">Total</div>
          <div className="font-bold text-foreground">{formatCurrency(total())}</div>
        </div>

        <div className="flex gap-2">
          <a
            href={canSend ? `https://wa.me/${waNumber}?text=${buildMessage()}` : '#'}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 px-3 py-2 rounded-lg text-sm text-center font-semibold ${canSend ? 'bg-primary text-primary-foreground' : 'bg-foreground/6 text-foreground/60 cursor-not-allowed'}`}
            onClick={(e) => { if (!canSend) e.preventDefault(); }}
          >
            Enviar por WhatsApp
          </a>
          <button
            onClick={() => clear()}
            className="px-3 py-2 rounded-lg border border-border text-sm text-foreground/80"
          >
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}
