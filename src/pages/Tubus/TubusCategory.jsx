import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";
import TubusNavbar from "../../components/Tubus/Navbar";
import TubusCategoryComponent from "../../components/Tubus/AksessuarCategory";

function TubusCategory() {
  

  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <TubusCategoryComponent />
        <TubusNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

  
    </div>
  );
}

export default TubusCategory;
