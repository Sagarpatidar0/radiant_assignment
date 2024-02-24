import { LiaGreaterThanSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import "./Product.scss";
import ProductCard from "../../Cards/productcard/ProductCard";
import MiniCard from "../../Cards/miniCard/MiniCard";
function Product() {
  return (
    <>
      <div className="product-container">
        <div className="product-list">
          <ul className="list-item">
            <li> Tools</li>
            <li> AWS Builder</li>
            <li> Start Build</li>
            <li> Build Supplies</li>
            <li> Tooling</li>
            <li> BlueHosting</li>
          </ul>
        </div>
        <div className="path">
          <span>Home</span>{" "}
          <i>
            <LiaGreaterThanSolid />
          </i>{" "}
          Hosting for all{" "}
          <i>
            <LiaGreaterThanSolid />
          </i>{" "}
          Hosting{" "}
          <i>
            <LiaGreaterThanSolid />
          </i>{" "}
          Hosting6{" "}
          <i>
            <LiaGreaterThanSolid />
          </i>{" "}
          Hosting5
        </div>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
  
         <div className="Card">
          <div className="image-section">
                
           
            <h3>4</h3>
            <div className="image">
              <img src="./Image/bg.png" />
              <p>CDK</p>
            </div>
          </div>

          <div className="Paragraph">
            <p className="para1">CDK Resposive Builder: An extensive library of widgets and apps, and detailed step-by-step guides
            </p>
            <h3 className="offer">26% OFF</h3>
            <h3>Main highlights</h3>
            <div className="rate-box">
            <ul className="rate-list">
              <li><span>9.9 </span>  Building Responsive</li>
              <li><span>8.9 </span>Cool</li>
              <li><span>8.9 </span>Docs</li>
            </ul>
       </div>
           <div className="feature">
            <p> Why we love it</p>
            <ul className="tick" >
              <li><i><MdOutlineDone/></i>  Documentation</li>
              <li><i><MdOutlineDone/></i>Easy Use </li>
              <li><i><MdOutlineDone/></i>Out of Box</li>
            </ul>
           </div>

            <h4>
              Show more{" "}
              <i>
                <RiArrowDropDownLine />
              </i>
            </h4>
          </div>

          <div className="view-2"> 
           <div className="rate-box">
            <h1>9.8</h1>
            <h4>Exceptional</h4>
            <i><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> </i>
           </div>
            <button className="view">View</button> 
          </div>
        </div>

       
        <div className="mini-card">
          <h2>Related deals you might like for</h2>

          <div className="mini-cards">
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
          </div>

          <div className="signUp">
            <h2>signUp and get exclusive special</h2>
            <button className="sign">Sign up</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Product;
