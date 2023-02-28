import "./cartitem.scss";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const { handleRemoveToCart, handleCartProductQuantity, cartItem } =
    useContext(Context);
  return (
    <div className="cart__products">
      {cartItem.map((item) => (
        <div key={item.id} className="cart__product">
          <div className="img__container">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item?.attributes?.img?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="prod__details">
            <span className="name">{item.attributes.title}</span>
            <MdClose
              className="close__btn"
              onClick={() => handleRemoveToCart(item)}
            />
            <div className="quantity__buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377;{item.attributes.quantity * item.attributes.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
