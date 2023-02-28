import { useParams } from "react-router-dom";
import useFetch from "../../hooks/usefetch";
import Products from "../Products/Products";
import "./category.scss";

const Category = () => {
  const { id } = useParams();

  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );

  return (
    <div className="category__main-content">
      <div className="layout">
        <div className="category__title">
          {data?.data[0]?.attribute?.categories?.data[0]?.attributes?.title}
        </div>
        <Products innerPage={true} producs={data} />
      </div>
    </div>
  );
};

export default Category;
