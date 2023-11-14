import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import Info from "../../components/info";

import AksessuarNavbar from "../../components/IgroAksessuar/Navbar";
import AksessuarCategoryComponent from "../../components/IgroAksessuar/AksessuarCategory";


function IgroAksessuarCategory() {
  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <AksessuarCategoryComponent />
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

export default IgroAksessuarCategory;
