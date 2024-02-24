import { CiSearch } from "react-icons/ci";
import "./Navbar.scss";
function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <ul className="list">
          <li className="list-item">
            <input type="text" className="search-button" />
            <i className="icon">
              <CiSearch />
            </i>
          </li>
        </ul>
        <ul className="list">
          <li className="list-item">Categories</li>
          <li className="list-item">Website Builders</li>
          <li className="list-item">Today&apos;s deals</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
