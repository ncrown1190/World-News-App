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
              <Link to="/usGNews">Fetch US GNews</Link>
            </li>
            <li>
              <Link to="/us">Fetch US News</Link>
            </li>
            <li>
              <Link to="/in">Fetch India News</Link>
            </li>
            <li>
              <Link to="/publication">Fetch News By Publication</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
