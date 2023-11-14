import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";
import TrenajorCategoryComponent from "../../components/Trenajor/TrenajorCategory";
import TrenajorNavbar from "../../components/Trenajor/Navbar";

function TrenajorCategory() {
  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        <TrenajorCategoryComponent />
        <TrenajorNavbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

      <br />
    </div>
  );
}

export default TrenajorCategory;
