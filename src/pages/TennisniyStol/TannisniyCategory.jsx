
import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import Info from "../../components/info";

import TennisniyStolNavbar from "../../components/TennisniyStol/Navbar";
import TennisniyStolCategoryComponent from "../../components/TennisniyStol/AksessuarCategory";

function TennisniyStolCategory() {
  

  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <TennisniyStolCategoryComponent />
        <TennisniyStolNavbar />
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

export default TennisniyStolCategory;
