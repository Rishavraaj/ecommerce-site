import "./footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="col">
          <div className="title">About</div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c__item">
            <FaLocationArrow />
            <div className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              architecto dolorem ut aliquid mollitia ipsam ex, placeat
              dignissimos minus necessitatibus. Deserunt, ipsa! Eos sapiente
              voluptatum aliquam explicabo, fugit laudantium ipsam.
            </div>
          </div>
          <div className="c__item">
            <FaMobileAlt />
            <div className="text">+01 000 000 00</div>
          </div>
          <div className="c__item">
            <FaEnvelope />
            <div className="text">example@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categiries</div>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
          <span className="text">menu item 1</span>
        </div>
      </div>
      <div className="bottom__bar">
        <div className="bottom__bar-content">
          <div className="text">copyright</div>
          <img src="" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
