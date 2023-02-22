//

import { Link } from "react-router-dom";
import "./MenuLink.css";

export default function MenuLink() {
  return (
    <div className="menu-bar-container">
      <div className="menu-bar">
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              listStyleType: "none",
            }}
          >
            <li>
              <Link to="/">US GNews</Link>
            </li>
            <li>
              <Link to="/inGNews">India GNews</Link>
            </li>
            <li>
              <Link to="/us">US News</Link>
            </li>
            <li>
              <Link to="/in">India News</Link>
            </li>
            <li>
              <Link to="/publication">Publishing House</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
