import "./cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";

const Cart = ({ setShowCart }) => {
  const { cartItem, cartTotal } = useContext(Context);

  return (
    <div className="cart__pannel">
      <div className="opac__layer"></div>
      <div className="cart__content">
        <div className="cart__header">
          <span className="heading">shopping cart</span>
          <span className="close__btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {cartItem.length < 1 && (
          <div className="empty__cart">
            <BsCartX />
            <span>No products in cart</span>
            <button className="return__cta">RETURN TO SHOP</button>
          </div>
        )}
        <>
          <CartItem />
          <div className="cart__footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;{cartTotal}</span>
            </div>
            <div className="button">
              <button className="checkout__cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
