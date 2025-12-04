import React, { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  id: number | string;
  name: string;
  price: number;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'qty'>, qty?: number) => void;
  removeItem: (id: number | string) => void;
  clear: () => void;
  total: () => number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function addItem(item: Omit<CartItem, 'qty'>, qty = 1) {
    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + qty } : p));
      }
      return [...prev, { ...item, qty }];
    });
  }

  function removeItem(id: number | string) {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  function clear() {
    setItems([]);
  }

  function total() {
    return items.reduce((s, i) => s + i.price * i.qty, 0);
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, total, isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false) }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
