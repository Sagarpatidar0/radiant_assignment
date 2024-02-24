import { RiArrowDropDownLine } from "react-icons/ri";
import { IoTrophyOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import "./ProductCard.scss";
function ProductCard() {
  return (
    <>
      <div className="Card">
        <div className="image-section">
          <div className="tag">
            <i>
              <IoTrophyOutline />
            </i>
            <span>Best Choice</span>
          </div>
          <h3>1</h3>
          <div className="image">
            <img src="./Image/bg.png" />
            <p>Builder 1</p>
          </div>
        </div>

        <div className="Paragraph">
          <p className="para1">
            <span>WixPro 72-Inch Responsive Website Builder-</span>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores
            &ldquo;(black/blue)
          </p>
          <h3>Main highlights</h3>
          <p className="para2">
            What You Get: Receive the WixPro website builder suite,access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-steps guides.
          </p>

          <h4>
            Show more{" "}
            <i>
              <RiArrowDropDownLine />
            </i>
          </h4>
        </div>

        <div className="view">
          <div className="rate-box">
            <h1>9.8</h1>
            <h4>Exceptional</h4>
            <i>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />{" "}
            </i>
          </div>
          <button className="view">View</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
