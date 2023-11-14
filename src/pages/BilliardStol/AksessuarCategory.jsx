
import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import Info from "../../components/info";

import BilliardStolNavbar from "../../components/BilliardStol/Navbar";
import BilyardCategoryComponent from "../../components/BilliardStol/AksessuarCategory";

function BilyardniyStolCategory() {
  

  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <BilyardCategoryComponent />
        <BilliardStolNavbar />
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

export default BilyardniyStolCategory;
