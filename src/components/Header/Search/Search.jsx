import "./search.scss";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/usefetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search__modal">
      <div className="form__field">
        <input
          type="text"
          autoFocus
          placeholder="search for products"
          value={query}
          onChange={handleChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search__result__content">
        <div className="search__results">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search__result__items"
              onClick={() => {
                navigate(`/product/${item.id}`);
                setShowSearch(false);
              }}
            >
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
                <span className="desc">{item.attributes.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
