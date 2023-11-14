import "../App.css";
import Header from "../components/heaader";
import Topmenu from "../components/topmenu";

import Info from "../components/info";

import { useEffect } from "react";
import KiyevnitsaNavbar from "../components/kiyevnitsaNavbar";
import KiyevnitsaTop from "../components/KiyevnitsaTop";

function KiyevnitsaMain() {
  useEffect(() => {
    // console.log(keyLinksJson["C удлинителем"]);
    // let objectKii = {};
    // kiiJson.forEach((item, index) => {
    //   let keyName = Object.keys(item)[0];
    //   objectKii[keyName] = item[keyName];
    // });
  }, []);

  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <KiyevnitsaTop/>
        <KiyevnitsaNavbar />
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

export default KiyevnitsaMain;
