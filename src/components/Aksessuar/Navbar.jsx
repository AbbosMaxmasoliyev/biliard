import React, { useEffect, useState } from "react";
import linksSvetilnik from "../../json/Links/chexolLinks.json";
import { Link, useParams } from "react-router-dom";
import * as Bi from "react-icons/bi";
const AksessuarNavbar = () => {
  const params = useParams();
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (show == true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';

    }

  }, [show])

  return (
    <div className="left">
      <div className="showHide" onClick={() => setShow(prev => prev = !prev)}>
        <button><Bi.BiAlignMiddle color={"#fff"} /></button>
      </div>
      <div className={show ? "show" : ""}>
        <div className="closeBtn" onClick={() => setShow(prev => prev = !prev)}>
          <button><Bi.BiLeftArrowAlt color={"#fff"} /></button>
        </div>
        <span className="h3 menu-section-root-item">Аксессуары для стола</span>
        <div className="linksNavbar">
          {Array.from(Object.keys(linksSvetilnik)).map((name, index) => {
            if (name == params.category) {
              return (
                <div key={index}>
                  <span className="h3">{linksSvetilnik[name].name}</span>
                  {linksSvetilnik[name].links.map((item, index) => (
                    <Link
                      key={index}
                      className="menu-section-level-3"
                      to={`/aksessuar/${name}/${item.link.replace("/", "")}`}
                    >
                      <p>{item.name}</p>
                    </Link>
                  ))}
                </div>
              );
            } else {
              return (
                <span className="h3" key={index}>
                  <Link to={`/aksessuar/${name}`}>{linksSvetilnik[name].name}</Link>
                </span>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default AksessuarNavbar;
