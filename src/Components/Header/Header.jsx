import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { TbAlertCircle } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Header.scss";
function Header() {
  return (
    <>
      <div className="container">
        <div className="Title">
          <h1> Best Website builders in the US</h1>
        </div>
        <div className="updated">
          <ul className="left">
            <li>
              <i>
                <IoCheckmarkDoneCircle />
              </i>
              <span>Last updated-february 23,2024</span>
            </li>
            <li>
              <i>
                <TbAlertCircle />
              </i>
              <span> Advertising Disclosure</span>
            </li>
          </ul>
          <ul className="right">
            <span>Top relevant</span>
            <i>
              <RiArrowDropDownLine />
            </i>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
