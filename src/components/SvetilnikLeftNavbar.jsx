import React from "react";
import linksSvetilnik from "../json/Links/keySvetilnikLinks.json";
import { Link } from "react-router-dom";

const SvetilnikLeftNavbar = () => {
  return (
    <div className="left">
      {Object.keys(linksSvetilnik).map((link, index) => (
        <div>
          <span className="h3">{linksSvetilnik[link].name}</span>
          {linksSvetilnik[link].items.map((item) => {
            console.log(link);
            return (
              <Link
                className="menu-section-level-3"
                to={`/svetilnik/${link
                  }/${item.link.replace("/", "")}`}
                key={index}
              >
                <p>{item.name}</p>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SvetilnikLeftNavbar;
