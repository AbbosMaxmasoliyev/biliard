import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import Info from "../../components/info";

import SuknoCategoryComponent from "../../components/Sukno/SuknoCategory";
import SuknoNavbar from "../../components/Sukno/Navbar";

function SuknoCategory() {
  

  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <SuknoCategoryComponent />
        <SuknoNavbar />
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

export default SuknoCategory;
