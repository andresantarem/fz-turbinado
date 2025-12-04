import React, { useState, useMemo } from 'react';
import { useCart } from '@/contexts/CartContext';
import { X } from 'lucide-react';

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatBRPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
}

function extractDigits(v: string) {
  return v.replace(/\D/g, '');
}

function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export default function Cart() {
  const { items, removeItem, clear, total, isOpen, openCart, closeCart } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Destination WhatsApp number (owner)
  const phoneRaw = '62 99296-0658';
  const digits = phoneRaw.replace(/\D/g, '');
  const waNumber = `55${digits}`; // Brazil country code prefix

  const phoneDigits = useMemo(() => extractDigits(phone), [phone]);
  const phoneValid = phoneDigits.length === 10 || phoneDigits.length === 11;
  const emailValid = validateEmail(email);
  const nameValid = name.trim().length > 1;

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

  const canSend = items.length > 0 && nameValid && phoneValid && emailValid;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => closeCart()}
      />

      {/* Drawer */}
      <aside className={`fixed top-0 right-0 h-full z-50 w-80 md:w-96 bg-background shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <strong className="text-foreground">Seu Pedido</strong>
            <button onClick={() => closeCart()} className="p-2 rounded-md hover:bg-foreground/3">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-auto">
            <div className="space-y-3 mb-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="w-full bg-foreground/3 border border-border rounded-md px-3 py-2 text-sm text-foreground"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(formatBRPhone(e.target.value))}
                placeholder="Telefone (com DDD)"
                className="w-full bg-foreground/3 border border-border rounded-md px-3 py-2 text-sm text-foreground"
              />
              {!phoneValid && phone.length > 0 && (
                <div className="text-xs text-red-400">Informe um telefone válido (DD + número).</div>
              )}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full bg-foreground/3 border border-border rounded-md px-3 py-2 text-sm text-foreground"
              />
              {!emailValid && email.length > 0 && (
                <div className="text-xs text-red-400">E-mail inválido.</div>
              )}
            </div>

            <div className="space-y-2">
              {items.length === 0 && (
                <div className="text-foreground/70">Seu carrinho está vazio.</div>
              )}

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
          </div>

          <div className="mt-4">
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
      </aside>
    </>
  );
}
