import "./banner.scss";

const Banner = () => {
  return (
    <div className="hero__container">
      <div className="content">
        <div className="text__content">
          <h1>SALES</h1>
          <p>sale hurry up</p>
          <div className="ctas">
            <div className="banner__cta">Read More</div>
            <div className="banner__cta v2">Shop Now</div>
          </div>
        </div>
        <img
          className="banner__img"
          src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
