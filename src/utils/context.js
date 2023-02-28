import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [producs, setProducts] = useState();
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItem.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItem.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartTotal(subTotal);
  }, [cartItem]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItem];
    let idx = items.findIndex((i) => i.id === product.id);
    if (idx !== -1) {
      items[idx].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItem(items);
  };

  const handleRemoveToCart = (product) => {
    let items = [...cartItem];
    items = items.filter((filterd) => filterd.id !== product.id);
    setCartItem(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItem];
    let idx = items.findIndex((i) => i.id === product.id);
    if (type === "inc") {
      items[idx].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[idx].attributes.quantity === 1) return;
      items[idx].attributes.quantity -= 1;
    }
    setCartItem(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        producs,
        setProducts,
        cartItem,
        setCartItem,
        cartCount,
        setCartCount,
        cartTotal,
        setCartTotal,
        handleAddToCart,
        handleRemoveToCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
