import "./relatedProducts.scss";
import Products from "../../Products/Products";
import useFetch from "../../../hooks/usefetch";

const RelatedProducts = ({ productId, categoryId }) => {
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );

  return (
    <div className="related__product">
      <Products headingText="Related Product" producs={data} />
    </div>
  );
};

export default RelatedProducts;
