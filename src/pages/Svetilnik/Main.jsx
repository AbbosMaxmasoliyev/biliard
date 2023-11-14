import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import { useEffect } from "react";
import keyLinksJson from "../../json/Links/keySvetilnikLinks.json";
import kiiJson from "../../json/svetilnik.json";
import SvetilnikLeftNavbar from "../../components/SvetilnikLeftNavbar";
import Top from "../../components/Svetilnik/Top";

function SvetilnikMain() {
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
        <SvetilnikLeftNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

      <br />
    </div>
  );
}

export default SvetilnikMain;
