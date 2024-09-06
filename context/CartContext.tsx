import { CartItem, StorageKey } from '@/interface';
import { createContext, useEffect, useState } from 'react';
import { getLocalStorageItem, shallowCartCompare } from '@/utils';

const TESTING_CART_ITEMS: CartItem[] = [
  {
    variantId: '1',
    type: { id: '1', name: 'Snap', src: '/Phone1.jpg' },
    finish: { id: '1', name: 'Matte', value: 'matte' },
    model: { id: '1', name: 'iPhone 14', handle: 'iphone14' },
    name: 'Goat Debate',
    price: 34.99,
    quantity: 1,
    src: '/Phone1.jpg',
  },
  {
    variantId: '2',
    type: { id: '2', name: 'Tough', src: '/Phone2.jpg' },
    finish: { id: '2', name: 'Glossy', value: 'glossy' },
    model: { id: '11', name: 'iPhone 12 Pro', handle: 'iphone12-pro' },
    name: 'Blue Gold',
    price: 44.99,
    quantity: 1,
    src: '/Phone2.jpg',
  },
];

interface Cart {
  addCartItem: (product: CartItem) => void;
  cartItems: CartItem[];
  clearCart: () => void;
  decreaseCartItem: (product: CartItem) => void;
  openCart: boolean;
  removeCartItem: (product: CartItem) => void;
  setOpenCart: (open: boolean) => void;
}

const CartContext = createContext<Cart>({
  addCartItem: (_) => {},
  cartItems: [],
  clearCart: () => {},
  decreaseCartItem: (_) => {},
  openCart: false,
  removeCartItem: (_) => {},
  setOpenCart: (_) => {},
});

export const useCartState = (): Cart => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // localStorage doesn't exist for some reason if used during useState default
  useEffect(() => {
    const cartItems = getLocalStorageItem(
      StorageKey.CART,
      TESTING_CART_ITEMS
    ) as CartItem[];

    // TODO: Check if user modify local storage
    if (cartItems) {
      setCartItems(cartItems);
      localStorage.setItem(StorageKey.CART, JSON.stringify(cartItems));
    }
  }, []);

  const addCartItem = (product: CartItem) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) =>
        shallowCartCompare(item, product)
      );
      if (existingItem) {
        const updatedCartItem = currItems.map((item) =>
          shallowCartCompare(item, product)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem(StorageKey.CART, JSON.stringify(updatedCartItem));
        return updatedCartItem;
      }

      const updatedCartItem = [...currItems, product];
      localStorage.setItem(StorageKey.CART, JSON.stringify(updatedCartItem));
      return updatedCartItem;
    });
  };

  const decreaseCartItem = (product: CartItem) => {
    setCartItems((currItems) => {
      const updatedCartItem = currItems.map((item) => {
        if (!shallowCartCompare(item, product)) return item;
        return { ...item, quantity: item.quantity - 1 };
      });

      const filteredItems = updatedCartItem.filter((item) => item.quantity > 0);
      localStorage.setItem(StorageKey.CART, JSON.stringify(filteredItems));
      return filteredItems;
    });
  };

  const removeCartItem = (product: CartItem) => {
    setCartItems((currItems) => {
      const filteredItems = currItems.filter(
        (item) => !shallowCartCompare(item, product)
      );
      localStorage.setItem(StorageKey.CART, JSON.stringify(filteredItems));
      return filteredItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.clear();
  };

  return {
    addCartItem,
    cartItems,
    clearCart,
    decreaseCartItem,
    openCart,
    removeCartItem,
    setOpenCart,
  };
};

export default CartContext;
