import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./home.scss";

const Home = () => {
  const { producs, setProducts, categories, setCategories } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main__content">
        <div className="layout">
          <Category categories={categories} />
          <Products producs={producs} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
