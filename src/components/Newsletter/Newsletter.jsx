import "./newsletter.scss";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Newsletter = () => {
  return (
    <div className="newletter__section">
      <div className="newsletter__content">
        <span className="small__text">NewsLetter</span>
        <span className="big__text">Sign up for latest updates and offer</span>
        <div className="form">
          <input type="text" placeholder="Email address" />
          <button>subscribe</button>
        </div>
        <div className="text">
          will be use in accordance with or privacy policy
        </div>
        <div className="social__icons">
          <div className="icon">
            <BsFacebook size={14} />
          </div>
          <div className="icon">
            <BsTwitter size={14} />
          </div>
          <div className="icon">
            <AiFillInstagram size={14} />
          </div>
          <div className="icon">
            <AiFillLinkedin size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
