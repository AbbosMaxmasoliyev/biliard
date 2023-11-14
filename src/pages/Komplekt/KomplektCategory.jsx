
import "../../App.css";
import Header from "../../components/heaader";
import Topmenu from "../../components/topmenu";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../components/Komplekt/Navbar";
import Plita from "../../components/Komplekt/Plita";
import Luz from "../../components/Komplekt/Luz";
import BortovayaRezina from "../../components/Komplekt/BortovayaRezina";

function KomplektCategory() {
  const params = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    console.log(params.category);
    switch (params.category) {
      case "plita":
        setItem((prev) => (prev = Plita));
        break;
      case "luz":
        setItem((prev) => (prev = Luz));
        break;
      case "bortovayarezina":
        setItem((prev) => (prev = BortovayaRezina));
        break;
    }
  }, [params]);
  useEffect(() => {
    console.log(params.category);
    switch (params.category) {
      case "plita":
        setItem((prev) => (prev = Plita));
        break;
      case "luz":
        setItem((prev) => (prev = Luz));
        break;
      case "bortovayarezina":
        setItem((prev) => (prev = BortovayaRezina));
        break;
    }
  }, []);

  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        {item ? item() : null}
        <Navbar />
      </div>
      {/* <div style={{background:"#f7f0dd"}}>
        <SliderCarousel />
        <BigCarousel />
      </div> */}

      <br />
     
    </div>
  );
}

export default KomplektCategory;
