import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import SvetilnikLeftNavbar from "../../components/SvetilnikLeftNavbar";
import SvetilnikCategoryComponent from "../../components/Svetilnik/SvetilnikCategoryComponent";

function SvetilnikCategory() {
  

  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <SvetilnikCategoryComponent />
        <SvetilnikLeftNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}


    </div>
  );
}

export default SvetilnikCategory;
