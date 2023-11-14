import React, { useEffect, useState } from "react";
import AksessuarNavbar from "../../components/Aksessuar/Navbar";
import MainComponent from "../../components/mainComponent";
import TableKii from "../../components/tableKii";
import PropertiesSvetilnik from "../../components/Svetilnik/Properties";
import Topmenu from "../../components/topmenu";
import Header from "../../components/heaader";
import { useParams } from "react-router-dom";
import kiiJson from "../../json/sukno.json";
import Info from "../../components/info";
import SuknoNavbar from "../../components/Sukno/Navbar";

const SuknoItem = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const [coloursMaterial, setColoursMaterial] = useState(null);
  useEffect(() => {
    console.log(params.name);
    console.log(params.category);
    let objectKii = {};
    kiiJson.forEach((item, index) => {
      let keyName = Object.keys(item)[0];
      objectKii[keyName] = item[keyName];
    });
    setData((prev) => (prev = objectKii[params.name]));
    console.log(data?.parametres);
    console.log(data?.table);
  }, []);
  useEffect(() => {
    console.log(params.name);
    console.log(params.category);
    let objectKii = {};
    kiiJson.forEach((item, index) => {
      let keyName = Object.keys(item)[0];
      objectKii[keyName] = item[keyName];
    });

    setData((prev) => (prev = objectKii[params.name]));
  }, [params]);
  console.log(coloursMaterial);
  return (
    <div id="container1">
      <Header />
      
      <br />
      <div className="no-index">
        {data?.image ? <MainComponent data={data.image} /> : null}

        {data?.table ? <TableKii data={data?.table} /> : null}
        {data?.parametres ? <TableKii parametres={data?.parametres} /> : null}
        {data?.description ? (
          <PropertiesSvetilnik
            opisaniya={data?.description}
            material={data?.coloursMaterial}
          />
        ) : null}

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
};

export default SuknoItem;
