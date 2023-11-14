
import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import Info from "../../components/info";

import { useEffect } from "react";
import keyLinksJson from "../../json/Links/keySvetilnikLinks.json";
import kiiJson from "../../json/svetilnik.json";

import Top from "../../components/Aksessuar/Top";
import AksessuarNavbar from "../../components/Aksessuar/Navbar";

function AksessuarMain() {
  useEffect(() => {
    // console.log(keyLinksJson["C удлинителем"]);
    let objectKii = {};
    kiiJson.forEach((item, index) => {
      let keyName = Object.keys(item)[0];
      objectKii[keyName] = item[keyName];
    });
    console.log(objectKii);
    console.log(keyLinksJson);
  }, []);

  return (
    <div id="container1">
      <Header />
      <br />
      <div className="no-index">
        <div className="wrap-content-left">
          <Top />
        </div>
        <AksessuarNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

      <br />
      <Info />
    </div>
  );
}

export default AksessuarMain;
