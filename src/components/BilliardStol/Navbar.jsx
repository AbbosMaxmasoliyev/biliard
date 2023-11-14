import React from "react";
import linksSvetilnik from "../../json/Links/bilyardniyStolLinks.json";
import { Link, useParams } from "react-router-dom";

const BilliardStolNavbar = () => {
  const params = useParams();

  return (
    <div className="left">
      <span className="h3 menu-section-root-item">Аксессуары для стола</span>
      {Array.from(Object.keys(linksSvetilnik)).map((name, index) => {
        if (name == params.category) {
          return (
            <div key={index}>
              <span className="h3">{linksSvetilnik[name].name}</span>
              {linksSvetilnik[name].links.map((item, index) => (
                <Link
                key={index}
                  className="menu-section-level-3"
                  to={`/billiardStol/${name}/${item.link.replace("/", "")}`}
                >
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          );
        } else {
          return (
            <span className="h3" key={index}>
              <Link to={`/billiardStol/${name}`}>{linksSvetilnik[name].name}</Link>
            </span>
          );
        }
      })}
    </div>
  );
};

export default BilliardStolNavbar;
