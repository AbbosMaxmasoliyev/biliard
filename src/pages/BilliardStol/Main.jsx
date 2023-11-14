
import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import { useEffect } from "react";
import keyLinksJson from "../../json/Links/bilyardniyStolLinks.json";
import kiiJson from "../../json/bilyardniyStol.json";

import Top from "../../components/BilliardStol/Top";
import BilliardStolNavbar from "../../components/BilliardStol/Navbar";

function BilliardStolMain() {
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
        <BilliardStolNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

    </div>
  );
}

export default BilliardStolMain;
