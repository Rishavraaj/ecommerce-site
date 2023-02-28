import "./singleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetch";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../utils/context";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  if (!data) return;
  const product = data.data[0].attributes;

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity < 1) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="single__product__main-content">
      <div className="layout">
        <div className="singlr__product__page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product?.img?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">{product.price}</span>
            <span className="desc">{product.desc}</span>
            <div className="cart__buttons">
              <div className="quantity__buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add__to__cart"
                onClick={() => {
                  handleAddToCart(data.data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info__item">
              <span className="text__bold">
                Category:{" "}
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text__bold">
                Share:
                <span className="social__icons">
                  <FaFacebookF size={16} />
                  <FaLinkedinIn size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.categories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
