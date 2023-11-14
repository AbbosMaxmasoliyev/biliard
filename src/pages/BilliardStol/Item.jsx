import React, { useEffect, useState } from "react";

import MainComponent from "../../components/mainComponent";

import Topmenu from "../../components/topmenu";
import Header from "../../components/heaader";
import { useParams } from "react-router-dom";
import keyLinksJson from "../../json/Links/bilyardniyStolLinks.json";
import kiiJson from "../../json/bilyardniyStol.json";
import Info from "../../components/info";
import BilliardStolNavbar from "../../components/BilliardStol/Navbar";
import Table from "../../components/table";
import PropertiesBilyardniyStol from "../../components/BilliardStol/Properties";

import TopNameBilyardniyStol from "../../components/BilliardStol/TopName";

const BilyardStolItem = () => {
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
      
    <div className="wrap-content-left">
      <TopNameBilyardniyStol category={keyLinksJson[params.category].name} name={data.name}/>
          {/* {data?.images ? <MainComponent data={data.images} /> : null} */}
          {data?.image ? <MainComponent data={data.image} /> : <MainComponent data={data.images} /> }

{data?.table ? <Table name={data?.name} sizesData={data?.sizes} data={data?.table} parametres={data?.parametres} /> : null}
{/* {data?.parametres ? <TableKii parametres={data?.parametres} /> : null} */}
{data?.description ? (
  <PropertiesBilyardniyStol
    opisaniya={data?.description}
    material={data?.coloursMaterial}
  />
) : null}
    </div>

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
};

export default BilyardStolItem;
