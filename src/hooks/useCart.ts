import { useEffect, useMemo, useState } from "react";
import { db } from "../data/dat";
import { Guitar } from "../interfaces/Guitar";

export const useCart = () => {
  const initialCart = () => {
    const cartLocal = localStorage.getItem("cart");
    return cartLocal ? JSON.parse(cartLocal) : [];
  };
  const [data] = useState(db);
  const [cart, setCart] = useState<Guitar[]>(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item:Guitar) {
    const exist = cart.findIndex((guitar:Guitar) => guitar.id === item.id);
    if (exist >= 0) {
      if (cart[exist].quantity >= MAX_ITEMS) return;
      const updateCart = [...cart];
      updateCart[exist].quantity++;
      setCart(updateCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id:number) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  function increaseQuantity(id:number) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function decreaseQuantity(id:number) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }

    //States derivados
    const isEmpty = useMemo(() => cart.length === 0, [cart]);
    const cartTotal = useMemo(
      () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
      [cart]
    );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  };
};