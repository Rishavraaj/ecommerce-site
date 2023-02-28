import Product from "./Product/Product";
import "./products.scss";

const Products = ({ innerPage, headingText, producs }) => {
  return (
    <div className="products__container">
      {!innerPage && <div className="section__heading">{headingText}</div>}
      <div className="products">
        {producs?.data?.map((item) => {
          return <Product key={item.id} data={item.attributes} id={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
